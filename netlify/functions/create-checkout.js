const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { items, customerEmail } = JSON.parse(event.body);

        // Create line items for Stripe
        const lineItems = items.map(item => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                    description: `${item.colorway} | Size: ${item.size}`,
                    images: [item.image],
                },
                unit_amount: item.price * 100, // Stripe uses cents
            },
            quantity: item.quantity,
        }));

        // Calculate if free shipping applies (over $300)
        const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shippingCost = subtotal >= 300 ? 0 : 1500; // $15 shipping in cents

        // Create Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${process.env.URL || 'https://www.plu2oscloset.com'}?success=true&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.URL || 'https://www.plu2oscloset.com'}?canceled=true`,
            customer_email: customerEmail || undefined,
            shipping_address_collection: {
                allowed_countries: ['US'],
            },
            shipping_options: [
                {
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: {
                            amount: shippingCost,
                            currency: 'usd',
                        },
                        display_name: shippingCost === 0 ? 'Free Shipping' : 'Standard Shipping',
                        delivery_estimate: {
                            minimum: { unit: 'business_day', value: 5 },
                            maximum: { unit: 'business_day', value: 7 },
                        },
                    },
                },
            ],
            metadata: {
                order_items: JSON.stringify(items.map(i => `${i.name} (${i.size}) x${i.quantity}`)),
            },
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ sessionId: session.id, url: session.url }),
        };
    } catch (error) {
        console.error('Stripe error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
