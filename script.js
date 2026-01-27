// ============================================
// PLU2O'S CLOSET - JavaScript Functionality
// ============================================

// Product Data - 15 Retro Jordans
const products = [
    {
        id: 1,
        name: "Air Jordan 1 Retro High OG",
        colorway: "Chicago / Lost and Found",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-1-high-og-lost-found.png",
        category: ["mens", "retro", "new"],
        badge: "new",
        description: "The Air Jordan 1 Retro High OG 'Lost and Found' brings back the iconic Chicago colorway with vintage details including cracked leather and aged accents for an authentic retro look."
    },
    {
        id: 2,
        name: "Air Jordan 4 Retro",
        colorway: "Bred Reimagined",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-4-bred-reimagined.jpg",
        category: ["mens", "retro", "new"],
        badge: "new",
        description: "The Air Jordan 4 Retro 'Bred Reimagined' features a black nubuck upper with Fire Red accents, delivering the classic Bred look with premium quality."
    },
    {
        id: 3,
        name: "Air Jordan 11 Retro",
        colorway: "Cherry",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-11-cherry.png",
        category: ["mens", "womens", "retro"],
        badge: "popular",
        description: "The Air Jordan 11 Retro 'Cherry' features a white leather and mesh upper with Varsity Red accents and the signature patent leather mudguard."
    },
    {
        id: 4,
        name: "Air Jordan 3 Retro",
        colorway: "White Cement Reimagined",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-3-white-cement-reimagined.jpeg",
        category: ["mens", "retro", "popular"],
        badge: "popular",
        description: "The Air Jordan 3 Retro 'White Cement Reimagined' brings back Tinker Hatfield's legendary design with premium materials and the iconic elephant print."
    },
    {
        id: 5,
        name: "Air Jordan 5 Retro",
        colorway: "Fire Red",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-5-fire-red-2020.png",
        category: ["mens", "retro"],
        badge: "",
        description: "The Air Jordan 5 Retro 'Fire Red' features a white leather upper with Fire Red accents, reflective tongue, and the iconic shark-tooth midsole."
    },
    {
        id: 6,
        name: "Air Jordan 6 Retro",
        colorway: "Black Infrared",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-6-black-infrared-og-2019.png",
        category: ["mens", "retro", "popular"],
        badge: "popular",
        description: "The Air Jordan 6 Retro 'Black Infrared' showcases the championship silhouette with black nubuck and signature Infrared accents."
    },
    {
        id: 7,
        name: "Air Jordan 12 Retro",
        colorway: "Playoffs",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-12-playoffs-2022.png",
        category: ["mens", "retro"],
        badge: "",
        description: "The Air Jordan 12 Retro 'Playoffs' returns with its premium leather construction, quilted overlay, and iconic red and white accents."
    },
    {
        id: 8,
        name: "Air Jordan 13 Retro",
        colorway: "Bred",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-13-bred-2017.png",
        category: ["mens", "retro"],
        badge: "",
        description: "The Air Jordan 13 Retro 'Bred' features the sleek panther-inspired design in classic black and red colorway with holographic eye detail."
    },
    {
        id: 9,
        name: "Air Jordan 1 Low",
        colorway: "Bred Toe",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-1-low-bred-toe.jpeg",
        category: ["mens", "womens"],
        badge: "",
        description: "The Air Jordan 1 Low 'Bred Toe' brings the iconic colorway to a low-top silhouette with premium leather construction."
    },
    {
        id: 10,
        name: "Air Jordan 4 Retro",
        colorway: "Red Thunder",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-4-red-thunder.png",
        category: ["mens", "retro"],
        badge: "",
        description: "The Air Jordan 4 Retro 'Red Thunder' flips the script with a black nubuck base and bold Crimson Red accents throughout."
    },
    {
        id: 11,
        name: "Air Jordan 1 Retro High",
        colorway: "Satin Bred",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-1-high-og-wmns-satin-bred.jpg",
        category: ["womens", "retro", "new"],
        badge: "new",
        description: "The Women's Air Jordan 1 Retro High 'Satin Bred' elevates the classic with luxurious satin material and premium leather."
    },
    {
        id: 12,
        name: "Air Jordan 11 Retro Low",
        colorway: "Gym Red",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-11-low-gym-red.png",
        category: ["mens", "womens", "retro"],
        badge: "",
        description: "The Air Jordan 11 Retro Low 'Gym Red' combines classic styling with patent leather and premium construction."
    },
    {
        id: 13,
        name: "Air Jordan 1 Mid",
        colorway: "Gym Red Black White",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-1-mid-gym-red.jpeg",
        category: ["kids", "mens"],
        badge: "",
        description: "The Air Jordan 1 Mid 'Gym Red' delivers classic Jordan style with a versatile mid-top cut and bold red colorway."
    },
    {
        id: 14,
        name: "Air Jordan 4 Retro (GS)",
        colorway: "Bred",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-4-og-bred-2019.png",
        category: ["kids", "retro"],
        badge: "",
        description: "The Grade School Air Jordan 4 Retro 'Bred' brings the iconic black and red colorway to younger fans with authentic details."
    },
    {
        id: 15,
        name: "Air Jordan 1 Retro High OG",
        colorway: "Patent Bred",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-1-high-og-bred-patent.png",
        category: ["kids", "retro", "new"],
        badge: "new",
        description: "The Air Jordan 1 Retro High OG 'Patent Bred' features glossy patent leather for a premium take on the classic."
    },
    {
        id: 16,
        name: "Air Jordan 11 Retro",
        colorway: "Gamma Blue",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-11-gamma-blue.jpg",
        category: ["mens", "retro", "popular"],
        badge: "popular",
        description: "The Air Jordan 11 Retro 'Gamma Blue' features a sleek black upper with Gamma Blue accents and the iconic patent leather mudguard for a premium look."
    },
    {
        id: 17,
        name: "Air Jordan 5 Retro",
        colorway: "Wolf Grey",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-5-wolf-grey.jpg",
        category: ["mens", "retro"],
        badge: "",
        description: "The Air Jordan 5 Retro 'Wolf Grey' delivers a clean monochromatic look with premium suede construction and reflective tongue."
    },
    {
        id: 18,
        name: "Gucci Ace",
        colorway: "Black Leather with Web",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_gucci-ace-with-web-black-leather-s.png",
        category: ["mens", "womens", "designer", "new"],
        badge: "new",
        description: "The iconic Gucci Ace sneakers featuring the signature green and red Web stripe on smooth black leather. Italian luxury craftsmanship since 2016."
    },
    {
        id: 19,
        name: "Louis Vuitton LV Trainer",
        colorway: "White",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_louis-vuitton-lv-trainer-white.png",
        category: ["mens", "designer", "popular"],
        badge: "popular",
        description: "Designed by Virgil Abloh, the LV Trainer combines retro basketball aesthetics with luxury craftsmanship. Each pair takes 7 hours to stitch. Made in Italy."
    },
    {
        id: 20,
        name: "Balenciaga Triple S",
        colorway: "Black",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_balenciaga-triple-s-black.png",
        category: ["mens", "womens", "designer"],
        badge: "",
        description: "The shoe that started the chunky sneaker trend. Features a triple-stacked sole combining running, basketball, and track shoe elements. Designed by Demna Gvasalia."
    },
    {
        id: 21,
        name: "Gucci Ace Studded",
        colorway: "White Leather with Studs",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_gucci-ace-studded-with-web-white-leather.png",
        category: ["mens", "womens", "designer", "popular"],
        badge: "popular",
        description: "A sophisticated take on the classic Gucci Ace with distinctive gold-tone studded detailing. Features the iconic Web stripe on premium white leather."
    },
    {
        id: 22,
        name: "Dior B23 High-Top",
        colorway: "White/Black Oblique",
        price: 200,
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_dior-b23-high-white-black-oblique-canvas.png",
        category: ["mens", "womens", "designer", "new"],
        badge: "new",
        description: "The Dior B23 high-top sneaker features the iconic Dior Oblique motif. Designed under Kim Jones, crafted in Italy with semi-transparent mesh overlays."
    }
];

// Available sizes
const sizes = {
    mens: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '13', '14'],
    womens: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '11', '12'],
    kids: ['3.5Y', '4Y', '4.5Y', '5Y', '5.5Y', '6Y', '6.5Y', '7Y']
};

// Cart state
let cart = [];
let selectedProduct = null;
let selectedSize = null;

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const quickViewModal = document.getElementById('quickViewModal');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    setupEventListeners();
});

// Render products to grid
function renderProducts(filter = 'all') {
    let filteredProducts = products;

    if (filter !== 'all') {
        filteredProducts = products.filter(product => product.category.includes(filter));
    }

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-id="${product.id}">
            ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge.toUpperCase()}</span>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x300/1a1a1a/e31837?text=Jordan'">
                <div class="product-actions">
                    <button class="action-btn quick-view-btn" data-id="${product.id}">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn add-cart-btn" data-id="${product.id}">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                    <button class="action-btn wishlist-btn">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="colorway">${product.colorway}</p>
                <p class="price">$${product.price}</p>
            </div>
        </div>
    `).join('');

    // Re-attach event listeners to new elements
    attachProductListeners();
}

// Setup main event listeners
function setupEventListeners() {
    // Navigation category links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const category = link.dataset.category;
            renderProducts(category);

            // Scroll to products section
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });

            // Update section title based on category
            const sectionTitle = document.querySelector('.section-header h2');
            const titles = {
                'all': 'ALL SHOES',
                'new': 'NEW RELEASES',
                'mens': "MEN'S COLLECTION",
                'womens': "WOMEN'S COLLECTION",
                'kids': "KIDS COLLECTION",
                'retro': 'RETRO JORDANS',
                'designer': 'DESIGNER COLLECTION'
            };
            sectionTitle.textContent = titles[category] || 'RETRO JORDANS';
        });
    });

    // Filter buttons (All, New, Popular below the title)
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;

            // Reset nav links
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelector('.nav-link[data-category="all"]').classList.add('active');

            if (filter === 'all') {
                renderProducts('all');
                document.querySelector('.section-header h2').textContent = 'ALL SHOES';
            } else if (filter === 'new') {
                renderProducts('new');
                document.querySelector('.section-header h2').textContent = 'NEW RELEASES';
            } else if (filter === 'popular') {
                const popularProducts = products.filter(p => p.category.includes('popular') || p.badge === 'popular');
                productsGrid.innerHTML = '';
                popularProducts.forEach(product => {
                    productsGrid.innerHTML += createProductCard(product);
                });
                attachProductListeners();
                document.querySelector('.section-header h2').textContent = 'POPULAR KICKS';
            }
        });
    });

    // Category cards (Men's, Women's, Kids image boxes)
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            renderProducts(category);

            // Update nav link active state
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            const matchingNav = document.querySelector(`.nav-link[data-category="${category}"]`);
            if (matchingNav) matchingNav.classList.add('active');

            // Update section title
            const titles = {
                'mens': "MEN'S COLLECTION",
                'womens': "WOMEN'S COLLECTION",
                'kids': "KIDS COLLECTION",
                'designer': 'DESIGNER COLLECTION'
            };
            document.querySelector('.section-header h2').textContent = titles[category] || 'RETRO JORDANS';

            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Cart icon
    document.querySelector('.cart-icon').addEventListener('click', (e) => {
        e.preventDefault();
        openCart();
    });

    // Close cart
    document.querySelector('.close-cart').addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Close modal
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    quickViewModal.addEventListener('click', (e) => {
        if (e.target === quickViewModal) closeModal();
    });

    // Add to cart from modal
    document.getElementById('addToCartBtn').addEventListener('click', () => {
        if (selectedProduct && selectedSize) {
            addToCart(selectedProduct, selectedSize);
            closeModal();
            openCart();
        } else {
            alert('Please select a size');
        }
    });

    // Mobile menu
    document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
        document.querySelector('.main-nav').classList.toggle('active');
    });

    // Newsletter form
    document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thanks for subscribing! You\'ll receive exclusive drops and early access.');
        e.target.reset();
    });
}

// Attach listeners to product cards
function attachProductListeners() {
    // Quick view buttons
    document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            openQuickView(productId);
        });
    });

    // Add to cart buttons
    document.querySelectorAll('.add-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            openQuickView(productId);
        });
    });

    // Wishlist buttons on product cards
    document.querySelectorAll('.product-card .wishlist-btn').forEach(btn => {
        const productCard = btn.closest('.product-card');
        if (productCard) {
            const productId = parseInt(productCard.dataset.id);

            // Check if already in wishlist and update button appearance
            if (currentUserData?.wishlist?.includes(productId)) {
                btn.innerHTML = '<i class="fas fa-heart" style="color: var(--primary-red);"></i>';
            }

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToWishlist(productId);
            });
        }
    });

    // Product card click
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const productId = parseInt(card.dataset.id);
            openQuickView(productId);
        });
    });
}

// Create product card HTML
function createProductCard(product) {
    return `
        <div class="product-card" data-id="${product.id}">
            ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge.toUpperCase()}</span>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x300/1a1a1a/e31837?text=Jordan'">
                <div class="product-actions">
                    <button class="action-btn quick-view-btn" data-id="${product.id}">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn add-cart-btn" data-id="${product.id}">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                    <button class="action-btn wishlist-btn">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="colorway">${product.colorway}</p>
                <p class="price">$${product.price}</p>
            </div>
        </div>
    `;
}

// Open quick view modal
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    selectedProduct = product;
    selectedSize = null;

    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalImage').alt = product.name;
    document.getElementById('modalTitle').textContent = `${product.name} "${product.colorway}"`;
    document.getElementById('modalPrice').textContent = `$${product.price}`;
    document.getElementById('modalDesc').textContent = product.description;

    // Determine sizes based on category
    let availableSizes = sizes.mens;
    if (product.category.includes('womens') && !product.category.includes('mens')) {
        availableSizes = sizes.womens;
    } else if (product.category.includes('kids') && !product.category.includes('mens')) {
        availableSizes = sizes.kids;
    }

    const sizesContainer = document.getElementById('modalSizes');
    sizesContainer.innerHTML = availableSizes.map(size => `
        <button class="size-btn" data-size="${size}">${size}</button>
    `).join('');

    // Size selection
    sizesContainer.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            sizesContainer.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedSize = btn.dataset.size;
        });
    });

    quickViewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    quickViewModal.classList.remove('active');
    document.body.style.overflow = '';
    selectedProduct = null;
    selectedSize = null;
}

// Add to cart
function addToCart(product, size) {
    const existingItem = cart.find(item => item.id === product.id && item.size === size);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            colorway: product.colorway,
            price: product.price,
            image: product.image,
            size: size,
            quantity: 1
        });
    }

    updateCart();
}

// Remove from cart
function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    updateCart();
}

// Update cart display
function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCount.textContent = totalItems;
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p>Your bag is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80x80/1a1a1a/e31837?text=J'">
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.colorway} | Size: ${item.size}</p>
                    <p>Qty: ${item.quantity}</p>
                    <span class="item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <span class="remove-item" data-id="${item.id}" data-size="${item.size}">
                    <i class="fas fa-times"></i>
                </span>
            </div>
        `).join('');

        // Remove item listeners
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                const size = btn.dataset.size;
                removeFromCart(id, size);
            });
        });
    }
}

// Open cart sidebar
function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close cart sidebar
function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Checkout button - opens checkout modal
document.querySelector('.checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your bag is empty!');
        return;
    }
    openCheckoutModal();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ============================================
// SEARCH FUNCTIONALITY
// ============================================
const searchOverlay = document.getElementById('searchOverlay');
const searchToggle = document.getElementById('searchToggle');
const closeSearchBtn = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const clearSearchBtn = document.getElementById('clearSearch');

// Open search overlay
searchToggle.addEventListener('click', (e) => {
    e.preventDefault();
    openSearch();
});

// Close search overlay
closeSearchBtn.addEventListener('click', closeSearch);

// Close on overlay click
searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
        closeSearch();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
        closeSearch();
    }
});

// Clear search
clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearSearchBtn.classList.remove('visible');
    searchResults.innerHTML = '<p class="search-hint">Start typing to search...</p>';
    searchInput.focus();
});

// Search input handler
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();

    // Show/hide clear button
    if (query.length > 0) {
        clearSearchBtn.classList.add('visible');
    } else {
        clearSearchBtn.classList.remove('visible');
    }

    // Perform search - now works with 1 character
    if (query.length >= 1) {
        performSearch(query);
    } else {
        searchResults.innerHTML = '<p class="search-hint">Start typing to search...</p>';
    }
});

function openSearch() {
    searchOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 100);
}

function closeSearch() {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
    searchInput.value = '';
    clearSearchBtn.classList.remove('visible');
    searchResults.innerHTML = '<p class="search-hint">Start typing to search...</p>';
}

function performSearch(query) {
    const results = products.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(query);
        const colorwayMatch = product.colorway.toLowerCase().includes(query);
        const descMatch = product.description.toLowerCase().includes(query);
        return nameMatch || colorwayMatch || descMatch;
    });

    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No results found for "${query}"</p>
            </div>
        `;
    } else {
        searchResults.innerHTML = results.map(product => `
            <div class="search-result-item" data-id="${product.id}">
                <div class="search-result-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/80x80/1a1a1a/e31837?text=J'">
                </div>
                <div class="search-result-info">
                    <h4>${highlightMatch(product.name, query)}</h4>
                    <p>${highlightMatch(product.colorway, query)}</p>
                    <span class="result-price">$${product.price}</span>
                </div>
                <i class="fas fa-chevron-right" style="color: var(--primary-red);"></i>
            </div>
        `).join('');

        // Add click listeners to results
        document.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const productId = parseInt(item.dataset.id);
                closeSearch();
                openQuickView(productId);
            });
        });
    }
}

// Highlight matching text
function highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span style="color: var(--primary-red); font-weight: 600;">$1</span>');
}

// ============================================
// FIREBASE AUTHENTICATION
// ============================================

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDObFOJO6SrTq1-7JZjBFGvX0BfZFuu3kY",
    authDomain: "plu2oscloset.firebaseapp.com",
    projectId: "plu2oscloset",
    storageBucket: "plu2oscloset.firebasestorage.app",
    messagingSenderId: "52440952147",
    appId: "1:52440952147:web:a3f13a5528691ad6d705a6",
    measurementId: "G-V80HGKDHXG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// DOM Elements
const accountToggle = document.getElementById('accountToggle');
const accountDropdown = document.getElementById('accountDropdown');
const loggedInIndicator = document.getElementById('loggedInIndicator');
const authModal = document.getElementById('authModal');
const closeAuthBtn = document.getElementById('closeAuth');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignupLink = document.getElementById('showSignup');
const showLoginLink = document.getElementById('showLogin');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginError = document.getElementById('loginError');
const signupError = document.getElementById('signupError');

// Current user data
let currentUserData = null;

// Toggle account dropdown
accountToggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    accountDropdown.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!accountDropdown.contains(e.target) && !accountToggle.contains(e.target)) {
        accountDropdown.classList.remove('active');
    }
});

// Close auth modal
closeAuthBtn.addEventListener('click', closeAuthModal);
authModal.addEventListener('click', (e) => {
    if (e.target === authModal) closeAuthModal();
});

// Switch between login and signup forms
showSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    clearAuthErrors();
});

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    clearAuthErrors();
});

// Login handler
loginBtn.addEventListener('click', async () => {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        loginError.textContent = 'Please fill in all fields';
        return;
    }

    loginBtn.disabled = true;
    loginBtn.textContent = 'SIGNING IN...';
    loginError.textContent = '';

    try {
        await auth.signInWithEmailAndPassword(email, password);
        closeAuthModal();
    } catch (error) {
        loginError.textContent = getErrorMessage(error.code);
    } finally {
        loginBtn.disabled = false;
        loginBtn.textContent = 'SIGN IN';
    }
});

// Signup handler
signupBtn.addEventListener('click', async () => {
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;

    if (!name || !email || !password) {
        signupError.textContent = 'Please fill in all fields';
        return;
    }

    if (password.length < 6) {
        signupError.textContent = 'Password must be at least 6 characters';
        return;
    }

    signupBtn.disabled = true;
    signupBtn.textContent = 'CREATING ACCOUNT...';
    signupError.textContent = '';

    try {
        // Create user account
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // Store user data in Firestore
        await db.collection('users').doc(user.uid).set({
            name: name,
            email: email,
            memberSince: firebase.firestore.FieldValue.serverTimestamp(),
            orders: [],
            wishlist: []
        });

        // Update profile display name
        await user.updateProfile({ displayName: name });

        closeAuthModal();
    } catch (error) {
        signupError.textContent = getErrorMessage(error.code);
    } finally {
        signupBtn.disabled = false;
        signupBtn.textContent = 'CREATE ACCOUNT';
    }
});

// Auth state listener
auth.onAuthStateChanged(async (user) => {
    if (user) {
        // User is signed in
        loggedInIndicator.classList.add('active');

        // Get user data from Firestore
        try {
            const userDoc = await db.collection('users').doc(user.uid).get();
            if (userDoc.exists) {
                currentUserData = userDoc.data();
                currentUserData.uid = user.uid;
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }

        updateDropdownLoggedIn(user);
    } else {
        // User is signed out
        loggedInIndicator.classList.remove('active');
        currentUserData = null;
        updateDropdownLoggedOut();
    }
});

// Update dropdown for logged in user
function updateDropdownLoggedIn(user) {
    const memberSince = currentUserData?.memberSince?.toDate();
    const memberDays = memberSince ? Math.floor((new Date() - memberSince) / (1000 * 60 * 60 * 24)) : 0;

    // Determine member badge
    let badgeHTML = '<span class="member-badge">NEW MEMBER</span>';
    if (memberDays >= 365) {
        badgeHTML = '<span class="member-badge gold">VIP MEMBER</span>';
    } else if (memberDays >= 90) {
        badgeHTML = '<span class="member-badge gold">GOLD MEMBER</span>';
    } else if (memberDays >= 30) {
        badgeHTML = '<span class="member-badge">LOYAL MEMBER</span>';
    }

    const memberSinceStr = memberSince ? memberSince.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Just now';

    accountDropdown.innerHTML = `
        <div class="dropdown-header">
            <h4>${currentUserData?.name || user.displayName || 'Member'}</h4>
            <p>${user.email}</p>
            ${badgeHTML}
            <p class="member-since">Member since ${memberSinceStr}</p>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-item" id="myOrdersBtn">
                <i class="fas fa-box"></i>
                <span>My Orders</span>
            </div>
            <div class="dropdown-item" id="wishlistBtn">
                <i class="fas fa-heart"></i>
                <span>Wishlist</span>
            </div>
            <div class="dropdown-item" id="accountSettingsBtn">
                <i class="fas fa-cog"></i>
                <span>Account Settings</span>
            </div>
            <div class="dropdown-item logout" id="logoutBtn">
                <i class="fas fa-sign-out-alt"></i>
                <span>Sign Out</span>
            </div>
        </div>
    `;

    // Add logout handler
    document.getElementById('logoutBtn').addEventListener('click', () => {
        auth.signOut();
        accountDropdown.classList.remove('active');
    });

    // Account Settings handler
    document.getElementById('accountSettingsBtn').addEventListener('click', () => {
        accountDropdown.classList.remove('active');
        openSettingsModal();
    });

    // My Orders handler
    document.getElementById('myOrdersBtn').addEventListener('click', () => {
        accountDropdown.classList.remove('active');
        openOrdersModal();
    });

    // Wishlist handler
    document.getElementById('wishlistBtn').addEventListener('click', () => {
        accountDropdown.classList.remove('active');
        openWishlistModal();
    });
}

// Update dropdown for logged out user
function updateDropdownLoggedOut() {
    accountDropdown.innerHTML = `
        <div class="dropdown-guest">
            <p>Sign in to track orders and earn rewards</p>
            <button class="auth-btn-small" id="dropdownLoginBtn">SIGN IN</button>
            <button class="auth-btn-small outline" id="dropdownSignupBtn">CREATE ACCOUNT</button>
        </div>
    `;

    // Add click handlers
    document.getElementById('dropdownLoginBtn').addEventListener('click', () => {
        accountDropdown.classList.remove('active');
        openAuthModal('login');
    });

    document.getElementById('dropdownSignupBtn').addEventListener('click', () => {
        accountDropdown.classList.remove('active');
        openAuthModal('signup');
    });
}

// Open auth modal
function openAuthModal(type = 'login') {
    authModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (type === 'signup') {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    } else {
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    }

    clearAuthErrors();
    clearAuthInputs();
}

// Close auth modal
function closeAuthModal() {
    authModal.classList.remove('active');
    document.body.style.overflow = '';
    clearAuthErrors();
    clearAuthInputs();
}

// Clear auth errors
function clearAuthErrors() {
    loginError.textContent = '';
    signupError.textContent = '';
}

// Clear auth inputs
function clearAuthInputs() {
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('signupName').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';
}

// Get friendly error message
function getErrorMessage(errorCode) {
    const messages = {
        'auth/email-already-in-use': 'This email is already registered',
        'auth/invalid-email': 'Please enter a valid email address',
        'auth/weak-password': 'Password must be at least 6 characters',
        'auth/user-not-found': 'No account found with this email',
        'auth/wrong-password': 'Incorrect password',
        'auth/too-many-requests': 'Too many attempts. Please try again later',
        'auth/invalid-credential': 'Invalid email or password'
    };
    return messages[errorCode] || 'An error occurred. Please try again';
}

// Allow Enter key to submit forms
document.getElementById('loginPassword').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') loginBtn.click();
});

document.getElementById('signupPassword').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') signupBtn.click();
});

// ============================================
// ACCOUNT SETTINGS
// ============================================
const settingsModal = document.getElementById('settingsModal');
const closeSettingsBtn = document.getElementById('closeSettings');
const updateProfileBtn = document.getElementById('updateProfileBtn');
const updatePasswordBtn = document.getElementById('updatePasswordBtn');
const deleteAccountBtn = document.getElementById('deleteAccountBtn');

// Open settings modal
function openSettingsModal() {
    settingsModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Pre-fill current user data
    const user = auth.currentUser;
    if (user) {
        document.getElementById('settingsName').value = currentUserData?.name || user.displayName || '';
        document.getElementById('settingsEmail').value = user.email || '';
    }
}

// Close settings modal
closeSettingsBtn.addEventListener('click', () => {
    settingsModal.classList.remove('active');
    document.body.style.overflow = '';
    clearSettingsMessages();
});

settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
        settingsModal.classList.remove('active');
        document.body.style.overflow = '';
        clearSettingsMessages();
    }
});

function clearSettingsMessages() {
    document.getElementById('profileMessage').textContent = '';
    document.getElementById('profileMessage').className = 'settings-message';
    document.getElementById('passwordMessage').textContent = '';
    document.getElementById('passwordMessage').className = 'settings-message';
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
}

// Update Profile
updateProfileBtn.addEventListener('click', async () => {
    const newName = document.getElementById('settingsName').value.trim();
    const profileMessage = document.getElementById('profileMessage');

    if (!newName) {
        profileMessage.textContent = 'Please enter your name';
        profileMessage.className = 'settings-message error';
        return;
    }

    updateProfileBtn.disabled = true;
    updateProfileBtn.textContent = 'UPDATING...';

    try {
        const user = auth.currentUser;

        // Update display name in Firebase Auth
        await user.updateProfile({ displayName: newName });

        // Update name in Firestore
        await db.collection('users').doc(user.uid).update({
            name: newName
        });

        // Update local data
        if (currentUserData) {
            currentUserData.name = newName;
        }

        profileMessage.textContent = 'Profile updated successfully!';
        profileMessage.className = 'settings-message success';

        // Update dropdown
        updateDropdownLoggedIn(user);
    } catch (error) {
        profileMessage.textContent = 'Error updating profile. Please try again.';
        profileMessage.className = 'settings-message error';
        console.error(error);
    } finally {
        updateProfileBtn.disabled = false;
        updateProfileBtn.textContent = 'UPDATE PROFILE';
    }
});

// Update Password
updatePasswordBtn.addEventListener('click', async () => {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordMessage = document.getElementById('passwordMessage');

    if (!currentPassword || !newPassword || !confirmPassword) {
        passwordMessage.textContent = 'Please fill in all password fields';
        passwordMessage.className = 'settings-message error';
        return;
    }

    if (newPassword.length < 6) {
        passwordMessage.textContent = 'New password must be at least 6 characters';
        passwordMessage.className = 'settings-message error';
        return;
    }

    if (newPassword !== confirmPassword) {
        passwordMessage.textContent = 'New passwords do not match';
        passwordMessage.className = 'settings-message error';
        return;
    }

    updatePasswordBtn.disabled = true;
    updatePasswordBtn.textContent = 'UPDATING...';

    try {
        const user = auth.currentUser;
        const credential = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);

        // Re-authenticate user
        await user.reauthenticateWithCredential(credential);

        // Update password
        await user.updatePassword(newPassword);

        passwordMessage.textContent = 'Password changed successfully!';
        passwordMessage.className = 'settings-message success';

        // Clear password fields
        document.getElementById('currentPassword').value = '';
        document.getElementById('newPassword').value = '';
        document.getElementById('confirmPassword').value = '';
    } catch (error) {
        if (error.code === 'auth/wrong-password') {
            passwordMessage.textContent = 'Current password is incorrect';
        } else {
            passwordMessage.textContent = 'Error changing password. Please try again.';
        }
        passwordMessage.className = 'settings-message error';
        console.error(error);
    } finally {
        updatePasswordBtn.disabled = false;
        updatePasswordBtn.textContent = 'CHANGE PASSWORD';
    }
});

// Delete Account
deleteAccountBtn.addEventListener('click', async () => {
    const confirmed = confirm('Are you sure you want to delete your account? This action cannot be undone.');

    if (!confirmed) return;

    const password = prompt('Please enter your password to confirm:');
    if (!password) return;

    deleteAccountBtn.disabled = true;
    deleteAccountBtn.textContent = 'DELETING...';

    try {
        const user = auth.currentUser;
        const credential = firebase.auth.EmailAuthProvider.credential(user.email, password);

        // Re-authenticate user
        await user.reauthenticateWithCredential(credential);

        // Delete user data from Firestore
        await db.collection('users').doc(user.uid).delete();

        // Delete user account
        await user.delete();

        settingsModal.classList.remove('active');
        document.body.style.overflow = '';
        alert('Your account has been deleted.');
    } catch (error) {
        if (error.code === 'auth/wrong-password') {
            alert('Incorrect password. Account not deleted.');
        } else {
            alert('Error deleting account. Please try again.');
        }
        console.error(error);
    } finally {
        deleteAccountBtn.disabled = false;
        deleteAccountBtn.textContent = 'DELETE ACCOUNT';
    }
});

// ============================================
// CHECKOUT & ORDER SYSTEM
// ============================================

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = 'KRrEhEDbdKrYiIeS4';
const EMAILJS_SERVICE_ID = 'service_z5rsgz9';
const EMAILJS_TEMPLATE_ID = 'template_zr78ffa';
const OWNER_EMAILS = ['jamarkisjenkins9@gmail.com', 'prestenjenkins21@gmail.com']; // Both get notified

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

const checkoutModal = document.getElementById('checkoutModal');
const closeCheckoutBtn = document.getElementById('closeCheckout');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const checkoutError = document.getElementById('checkoutError');
const checkoutBody = document.getElementById('checkoutBody');

// Open checkout modal
function openCheckoutModal() {
    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    closeCart();

    // Pre-fill email if logged in
    const user = auth.currentUser;
    if (user) {
        document.getElementById('checkoutEmail').value = user.email;
        if (currentUserData?.name) {
            const nameParts = currentUserData.name.split(' ');
            document.getElementById('checkoutFirstName').value = nameParts[0] || '';
            document.getElementById('checkoutLastName').value = nameParts.slice(1).join(' ') || '';
        }
    }

    // Populate order summary
    updateCheckoutSummary();
}

// Close checkout modal
closeCheckoutBtn.addEventListener('click', closeCheckoutModal);
checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) closeCheckoutModal();
});

function closeCheckoutModal() {
    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
    checkoutError.textContent = '';
}

// Update checkout summary
function updateCheckoutSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 300 ? 0 : 15;
    const total = subtotal + shipping;

    let itemsHTML = cart.map(item => `
        <div class="checkout-summary-item">
            <span>${item.name} (${item.size}) x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');

    document.getElementById('checkoutSummary').innerHTML = `
        ${itemsHTML}
        <div class="checkout-summary-item">
            <span>Subtotal</span>
            <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="checkout-summary-item">
            <span>Shipping</span>
            <span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span>
        </div>
        <div class="checkout-summary-item total">
            <span>Total</span>
            <span>$${total.toFixed(2)}</span>
        </div>
    `;
}

// Place Order
placeOrderBtn.addEventListener('click', async () => {
    // Validate form
    const firstName = document.getElementById('checkoutFirstName').value.trim();
    const lastName = document.getElementById('checkoutLastName').value.trim();
    const email = document.getElementById('checkoutEmail').value.trim();
    const phone = document.getElementById('checkoutPhone').value.trim();
    const address = document.getElementById('checkoutAddress').value.trim();
    const city = document.getElementById('checkoutCity').value.trim();
    const state = document.getElementById('checkoutState').value.trim();
    const zip = document.getElementById('checkoutZip').value.trim();

    if (!firstName || !lastName || !email || !phone || !address || !city || !state || !zip) {
        checkoutError.textContent = 'Please fill in all fields';
        return;
    }

    placeOrderBtn.disabled = true;
    placeOrderBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> PROCESSING...';
    checkoutError.textContent = '';

    try {
        // Generate order number
        const orderNumber = 'PLU-' + Date.now().toString(36).toUpperCase();

        // Calculate totals
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal >= 300 ? 0 : 15;
        const total = subtotal + shipping;

        // Create order object
        const order = {
            orderNumber: orderNumber,
            customer: {
                firstName,
                lastName,
                email,
                phone,
                address,
                city,
                state,
                zip,
                country: 'US'
            },
            items: cart.map(item => ({
                name: item.name,
                colorway: item.colorway,
                size: item.size,
                quantity: item.quantity,
                price: item.price
            })),
            subtotal,
            shipping,
            total,
            status: 'pending',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };

        // Save order to Firestore
        await db.collection('orders').doc(orderNumber).set(order);

        // If user is logged in, add order to their account
        const user = auth.currentUser;
        if (user) {
            await db.collection('users').doc(user.uid).update({
                orders: firebase.firestore.FieldValue.arrayUnion(orderNumber)
            });
        }

        // Send email notification to owners
        const itemsList = cart.map(item =>
            `- ${item.name} "${item.colorway}" | Size: ${item.size} | Qty: ${item.quantity} | $${item.price}`
        ).join('\n');

        // Send to both owner emails
        for (const ownerEmail of OWNER_EMAILS) {
            try {
                await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                    to_email: ownerEmail,
                    order_number: orderNumber,
                    customer_name: `${firstName} ${lastName}`,
                    customer_email: email,
                    customer_phone: phone,
                    shipping_address: `${address}, ${city}, ${state} ${zip}`,
                    order_items: itemsList,
                    order_total: `$${total.toFixed(2)}`,
                    order_date: new Date().toLocaleString()
                });
            } catch (emailError) {
                console.error('Email notification failed for ' + ownerEmail + ':', emailError);
                // Continue anyway - order is saved
            }
        }

        // Show success
        checkoutBody.innerHTML = `
            <div class="order-success">
                <i class="fas fa-check-circle"></i>
                <h3>ORDER PLACED!</h3>
                <p>Thank you for your order. We'll send a confirmation email shortly.</p>
                <div class="order-number">${orderNumber}</div>
                <button class="settings-btn" onclick="location.reload()">CONTINUE SHOPPING</button>
            </div>
        `;

        // Clear cart
        cart = [];
        updateCart();

    } catch (error) {
        console.error('Order error:', error);
        checkoutError.textContent = 'Error placing order. Please try again.';
        placeOrderBtn.disabled = false;
        placeOrderBtn.innerHTML = '<i class="fas fa-lock"></i> PLACE ORDER';
    }
});

// ============================================
// MY ORDERS
// ============================================
const ordersModal = document.getElementById('ordersModal');
const closeOrdersBtn = document.getElementById('closeOrders');
const ordersBody = document.getElementById('ordersBody');

// Open orders modal
async function openOrdersModal() {
    ordersModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    ordersBody.innerHTML = '<p style="text-align: center; padding: 40px; color: var(--text-light);"><i class="fas fa-spinner fa-spin"></i> Loading orders...</p>';

    const user = auth.currentUser;
    if (!user || !currentUserData?.orders || currentUserData.orders.length === 0) {
        ordersBody.innerHTML = `
            <div class="empty-orders">
                <i class="fas fa-box-open"></i>
                <h3>NO ORDERS YET</h3>
                <p>When you place an order, it will appear here.</p>
                <button class="shop-now-btn" onclick="closeOrdersModal(); document.getElementById('products').scrollIntoView({behavior: 'smooth'});">START SHOPPING</button>
            </div>
        `;
        return;
    }

    try {
        // Fetch all orders
        const orderPromises = currentUserData.orders.map(orderId =>
            db.collection('orders').doc(orderId).get()
        );
        const orderDocs = await Promise.all(orderPromises);

        const orders = orderDocs
            .filter(doc => doc.exists)
            .map(doc => ({ id: doc.id, ...doc.data() }))
            .sort((a, b) => (b.createdAt?.toDate() || 0) - (a.createdAt?.toDate() || 0));

        if (orders.length === 0) {
            ordersBody.innerHTML = `
                <div class="empty-orders">
                    <i class="fas fa-box-open"></i>
                    <h3>NO ORDERS YET</h3>
                    <p>When you place an order, it will appear here.</p>
                    <button class="shop-now-btn" onclick="closeOrdersModal(); document.getElementById('products').scrollIntoView({behavior: 'smooth'});">START SHOPPING</button>
                </div>
            `;
            return;
        }

        ordersBody.innerHTML = orders.map(order => {
            const orderDate = order.createdAt?.toDate().toLocaleDateString('en-US', {
                year: 'numeric', month: 'short', day: 'numeric'
            }) || 'N/A';

            const itemsHTML = order.items?.map(item => `
                <div class="order-item">
                    <div class="order-item-image">
                        <img src="${getProductImage(item.name)}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/60x60/1a1a1a/e31837?text=J'">
                    </div>
                    <div class="order-item-info">
                        <h5>${item.name}</h5>
                        <p>${item.colorway} | Size: ${item.size} | Qty: ${item.quantity}</p>
                    </div>
                    <div class="order-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                </div>
            `).join('') || '';

            return `
                <div class="order-card">
                    <div class="order-card-header" onclick="toggleOrderDetails('${order.id}')">
                        <div class="order-card-info">
                            <h4>${order.orderNumber || order.id}</h4>
                            <p>${orderDate} • ${order.items?.length || 0} item(s)</p>
                        </div>
                        <span class="order-status ${order.status || 'pending'}">${order.status || 'pending'}</span>
                    </div>
                    <div class="order-card-details" id="order-${order.id}">
                        <div class="order-items-list">
                            ${itemsHTML}
                        </div>
                        <div class="order-shipping-info">
                            <h5>Shipping Address</h5>
                            <p>${order.customer?.firstName} ${order.customer?.lastName}<br>
                            ${order.customer?.address}<br>
                            ${order.customer?.city}, ${order.customer?.state} ${order.customer?.zip}</p>
                        </div>
                        <div class="order-total-row">
                            <span>Total</span>
                            <span>$${order.total?.toFixed(2) || '0.00'}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

    } catch (error) {
        console.error('Error loading orders:', error);
        ordersBody.innerHTML = '<p style="text-align: center; padding: 40px; color: #ff4444;">Error loading orders. Please try again.</p>';
    }
}

// Toggle order details
function toggleOrderDetails(orderId) {
    const details = document.getElementById('order-' + orderId);
    if (details) {
        details.classList.toggle('active');
    }
}

// Get product image by name
function getProductImage(productName) {
    const product = products.find(p => p.name === productName);
    return product?.image || 'https://via.placeholder.com/60x60/1a1a1a/e31837?text=J';
}

// Close orders modal
function closeOrdersModal() {
    ordersModal.classList.remove('active');
    document.body.style.overflow = '';
}

closeOrdersBtn.addEventListener('click', closeOrdersModal);
ordersModal.addEventListener('click', (e) => {
    if (e.target === ordersModal) closeOrdersModal();
});

// ============================================
// WISHLIST
// ============================================
const wishlistModal = document.getElementById('wishlistModal');
const closeWishlistBtn = document.getElementById('closeWishlist');
const wishlistBody = document.getElementById('wishlistBody');

// Open wishlist modal
async function openWishlistModal() {
    wishlistModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    await loadWishlist();
}

// Load wishlist items
async function loadWishlist() {
    const user = auth.currentUser;

    if (!user) {
        wishlistBody.innerHTML = `
            <div class="empty-wishlist">
                <i class="fas fa-heart"></i>
                <h3>SIGN IN TO VIEW WISHLIST</h3>
                <p>Create an account to save your favorite items.</p>
                <button class="shop-now-btn" onclick="closeWishlistModal(); openAuthModal('signup');">CREATE ACCOUNT</button>
            </div>
        `;
        return;
    }

    wishlistBody.innerHTML = '<p style="text-align: center; padding: 40px; color: var(--text-light);"><i class="fas fa-spinner fa-spin"></i> Loading wishlist...</p>';

    try {
        const userDoc = await db.collection('users').doc(user.uid).get();
        const wishlist = userDoc.data()?.wishlist || [];

        if (wishlist.length === 0) {
            wishlistBody.innerHTML = `
                <div class="empty-wishlist">
                    <i class="fas fa-heart"></i>
                    <h3>YOUR WISHLIST IS EMPTY</h3>
                    <p>Save items you love by clicking the heart icon.</p>
                    <button class="shop-now-btn" onclick="closeWishlistModal(); document.getElementById('products').scrollIntoView({behavior: 'smooth'});">BROWSE SHOES</button>
                </div>
            `;
            return;
        }

        // Get product details for wishlist items
        const wishlistItems = wishlist.map(productId => products.find(p => p.id === productId)).filter(Boolean);

        wishlistBody.innerHTML = wishlistItems.map(item => `
            <div class="wishlist-item" data-id="${item.id}">
                <div class="wishlist-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/100x100/1a1a1a/e31837?text=J'">
                </div>
                <div class="wishlist-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.colorway}</p>
                    <span class="wishlist-price">$${item.price}</span>
                </div>
                <div class="wishlist-item-actions">
                    <button class="wishlist-btn add-to-cart" onclick="addWishlistToCart(${item.id})">ADD TO BAG</button>
                    <button class="wishlist-btn remove" onclick="removeFromWishlist(${item.id})">REMOVE</button>
                </div>
            </div>
        `).join('');

    } catch (error) {
        console.error('Error loading wishlist:', error);
        wishlistBody.innerHTML = '<p style="text-align: center; padding: 40px; color: #ff4444;">Error loading wishlist. Please try again.</p>';
    }
}

// Add to wishlist
async function addToWishlist(productId) {
    const user = auth.currentUser;
    if (!user) {
        alert('Please sign in to add items to your wishlist');
        openAuthModal('login');
        return;
    }

    try {
        await db.collection('users').doc(user.uid).update({
            wishlist: firebase.firestore.FieldValue.arrayUnion(productId)
        });

        // Update local data
        if (currentUserData) {
            if (!currentUserData.wishlist) currentUserData.wishlist = [];
            if (!currentUserData.wishlist.includes(productId)) {
                currentUserData.wishlist.push(productId);
            }
        }

        // Visual feedback
        const btn = document.querySelector(`.wishlist-btn[data-id="${productId}"]`);
        if (btn) {
            btn.classList.add('active');
            btn.innerHTML = '<i class="fas fa-heart"></i>';
        }

        alert('Added to wishlist!');
    } catch (error) {
        console.error('Error adding to wishlist:', error);
        alert('Error adding to wishlist. Please try again.');
    }
}

// Remove from wishlist
async function removeFromWishlist(productId) {
    const user = auth.currentUser;
    if (!user) return;

    try {
        await db.collection('users').doc(user.uid).update({
            wishlist: firebase.firestore.FieldValue.arrayRemove(productId)
        });

        // Update local data
        if (currentUserData?.wishlist) {
            currentUserData.wishlist = currentUserData.wishlist.filter(id => id !== productId);
        }

        // Reload wishlist
        await loadWishlist();
    } catch (error) {
        console.error('Error removing from wishlist:', error);
        alert('Error removing from wishlist. Please try again.');
    }
}

// Add wishlist item to cart
function addWishlistToCart(productId) {
    closeWishlistModal();
    openQuickView(productId);
}

// Close wishlist modal
function closeWishlistModal() {
    wishlistModal.classList.remove('active');
    document.body.style.overflow = '';
}

closeWishlistBtn.addEventListener('click', closeWishlistModal);
wishlistModal.addEventListener('click', (e) => {
    if (e.target === wishlistModal) closeWishlistModal();
});

// Update wishlist buttons in product cards to work
function updateWishlistButtons() {
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const productCard = btn.closest('.product-card');
        if (productCard) {
            const productId = parseInt(productCard.dataset.id);
            btn.dataset.id = productId;

            // Check if already in wishlist
            if (currentUserData?.wishlist?.includes(productId)) {
                btn.classList.add('active');
                btn.innerHTML = '<i class="fas fa-heart"></i>';
                btn.style.background = 'var(--primary-red)';
            }

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToWishlist(productId);
            });
        }
    });
}

// ============================================
// POLICY MODALS
// ============================================

const policies = {
    return: {
        title: 'RETURN POLICY',
        content: `
            <h3>30-Day Return Policy</h3>
            <p>At PLU2O'S CLOSET, we want you to be completely satisfied with your purchase. If you're not happy with your order, we offer a hassle-free return policy.</p>

            <h4>Return Eligibility</h4>
            <ul>
                <li>Items must be returned within <strong>30 days</strong> of delivery</li>
                <li>Items must be <strong>unworn and in original condition</strong></li>
                <li>Original packaging and tags must be intact</li>
                <li>Proof of purchase is required</li>
            </ul>

            <h4>How to Return</h4>
            <ol>
                <li>Contact us at <strong>plu2oscloset@gmail.com</strong> or call <strong>(205) 499-0800</strong></li>
                <li>Include your order number and reason for return</li>
                <li>We'll provide return instructions and shipping label</li>
                <li>Ship the item back in its original packaging</li>
            </ol>

            <h4>Refunds</h4>
            <p>Once we receive and inspect your return, we'll process your refund within <strong>5-7 business days</strong>. Refunds will be issued to the original payment method.</p>

            <h4>Exchanges</h4>
            <p>Want a different size? Contact us and we'll help you exchange for the right fit, subject to availability.</p>

            <h4>Non-Returnable Items</h4>
            <ul>
                <li>Items worn or showing signs of use</li>
                <li>Items without original packaging</li>
                <li>Custom or special order items</li>
            </ul>

            <p class="policy-contact">Questions? Email us at <strong>plu2oscloset@gmail.com</strong></p>
        `
    },
    terms: {
        title: 'TERMS OF SERVICE',
        content: `
            <h3>Terms of Service</h3>
            <p><em>Last updated: January 2026</em></p>

            <h4>1. Agreement to Terms</h4>
            <p>By accessing or using PLU2O'S CLOSET website (www.plu2oscloset.com), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

            <h4>2. Products and Pricing</h4>
            <ul>
                <li>All products are subject to availability</li>
                <li>Prices are listed in USD and may change without notice</li>
                <li>We reserve the right to limit quantities</li>
                <li>Product images are for illustration; actual items may vary slightly</li>
            </ul>

            <h4>3. Orders and Payment</h4>
            <ul>
                <li>By placing an order, you agree to provide accurate information</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Payment is required at time of purchase</li>
                <li>You are responsible for any applicable taxes</li>
            </ul>

            <h4>4. Authenticity Guarantee</h4>
            <p>All products sold by PLU2O'S CLOSET are <strong>100% authentic</strong>. We source directly from authorized retailers and verified suppliers.</p>

            <h4>5. User Accounts</h4>
            <ul>
                <li>You are responsible for maintaining account security</li>
                <li>You must provide accurate account information</li>
                <li>We may suspend accounts that violate these terms</li>
            </ul>

            <h4>6. Intellectual Property</h4>
            <p>All content on this site (logos, images, text) is owned by PLU2O'S CLOSET or its licensors and is protected by copyright laws.</p>

            <h4>7. Limitation of Liability</h4>
            <p>PLU2O'S CLOSET shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.</p>

            <h4>8. Contact</h4>
            <p>For questions about these terms, contact us at <strong>plu2oscloset@gmail.com</strong></p>
        `
    },
    privacy: {
        title: 'PRIVACY POLICY',
        content: `
            <h3>Privacy Policy</h3>
            <p><em>Last updated: January 2026</em></p>

            <h4>Information We Collect</h4>
            <p>When you use PLU2O'S CLOSET, we may collect:</p>
            <ul>
                <li><strong>Personal Information:</strong> Name, email, phone number, shipping address</li>
                <li><strong>Payment Information:</strong> Processed securely through our payment providers</li>
                <li><strong>Account Information:</strong> Login credentials, order history, wishlist</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent, browser type</li>
            </ul>

            <h4>How We Use Your Information</h4>
            <ul>
                <li>Process and fulfill your orders</li>
                <li>Send order confirmations and shipping updates</li>
                <li>Respond to customer service inquiries</li>
                <li>Send promotional emails (with your consent)</li>
                <li>Improve our website and services</li>
            </ul>

            <h4>Information Sharing</h4>
            <p>We do <strong>NOT</strong> sell your personal information. We may share data with:</p>
            <ul>
                <li>Shipping carriers to deliver your orders</li>
                <li>Payment processors to complete transactions</li>
                <li>Service providers who help operate our business</li>
            </ul>

            <h4>Data Security</h4>
            <p>We use industry-standard security measures including SSL encryption to protect your information.</p>

            <h4>Your Rights</h4>
            <p>You have the right to:</p>
            <ul>
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
            </ul>

            <h4>Cookies</h4>
            <p>We use cookies to improve your browsing experience and analyze site traffic.</p>

            <h4>Contact Us</h4>
            <p>For privacy concerns, email us at <strong>plu2oscloset@gmail.com</strong></p>
        `
    },
    shipping: {
        title: 'SHIPPING INFO',
        content: `
            <h3>Shipping Information</h3>

            <h4>Processing Time</h4>
            <p>Orders are processed within <strong>1-3 business days</strong>. You'll receive a confirmation email with tracking info once your order ships.</p>

            <h4>Shipping Rates</h4>
            <table class="shipping-table">
                <tr>
                    <td><strong>Standard Shipping</strong></td>
                    <td>$15.00</td>
                    <td>5-7 business days</td>
                </tr>
                <tr>
                    <td><strong>Orders over $300</strong></td>
                    <td>FREE</td>
                    <td>5-7 business days</td>
                </tr>
            </table>

            <h4>Shipping Areas</h4>
            <p>We currently ship to all 50 US states. International shipping coming soon!</p>

            <h4>Order Tracking</h4>
            <p>Once your order ships, you'll receive an email with tracking information. You can also view order status in your account under "My Orders".</p>

            <h4>Delivery Issues</h4>
            <p>If your package is lost, damaged, or delayed, please contact us immediately at:</p>
            <ul>
                <li>Email: <strong>plu2oscloset@gmail.com</strong></li>
                <li>Phone: <strong>(205) 499-0800</strong></li>
                <li>Instagram: <strong>@plu2ocloset</strong></li>
            </ul>

            <h4>Local Pickup</h4>
            <p>Located in Tuscaloosa, AL? Contact us to arrange local pickup and save on shipping!</p>
        `
    }
};

function openPolicyModal(policyType) {
    const policy = policies[policyType];
    if (!policy) return;

    document.getElementById('policyTitle').textContent = policy.title;
    document.getElementById('policyBody').innerHTML = policy.content;
    document.getElementById('policyModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePolicyModal() {
    document.getElementById('policyModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Close on background click
document.getElementById('policyModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'policyModal') closePolicyModal();
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('policyModal')?.classList.contains('active')) {
        closePolicyModal();
    }
});
