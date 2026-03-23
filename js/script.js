// ============================================
// CHRIST OR NOTHING - PROFESSIONAL SCRIPT
// Shopping Cart, Product Details, Recommendations
// Clickable Product Images - No View Details Button
// ============================================

// Product Database with Prices and Sizes
const products = {
    tshirts: [
        {
            id: 'tshirt1',
            name: 'Christ or Nothing (Plain)',
            description: '180GSM Crew neck T-shirt\nChrist or nothing (plain)\nPremium quality cotton for everyday wear.',
            price: 350,
            colors: ['white', 'camel', 'black'],
            colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' },
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: {
                white: ['images/tshirts/product1/white.jpg'],
                camel: ['images/tshirts/product1/camel.jpg'],
                black: ['images/tshirts/product1/black.jpg']
            },
            category: 'tshirts'
        },
        {
            id: 'tshirt2',
            name: 'Faith Breaks Protocol',
            description: 'Faith breaks protocol\n220GSM Cotton T-shirt & Oversized T-shirt\nBold statement design with premium print.',
            price: 420,
            colors: ['white', 'camel', 'black'],
            colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' },
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: {
                white: ['images/tshirts/product2/white-front.jpg', 'images/tshirts/product2/white-back.jpg'],
                camel: ['images/tshirts/product2/camel-front.jpg', 'images/tshirts/product2/camel-back.jpg'],
                black: ['images/tshirts/product2/black-front.jpg', 'images/tshirts/product2/black-back.jpg']
            },
            category: 'tshirts'
        },
        {
            id: 'tshirt3',
            name: 'Jesus Died Once For All Time',
            description: 'Jesus died once for all time\n220GSM cotton T-shirt & Oversized T-shirt\nPowerful gospel message on premium fabric.',
            price: 420,
            colors: ['white', 'camel', 'black'],
            colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' },
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: {
                white: ['images/tshirts/product3/white-front.jpg', 'images/tshirts/product3/white-back.jpg'],
                camel: ['images/tshirts/product3/camel-front.jpg', 'images/tshirts/product3/camel-back.jpg'],
                black: ['images/tshirts/product3/black-front.jpg', 'images/tshirts/product3/black-back.jpg']
            },
            category: 'tshirts'
        },
        {
            id: 'tshirt4',
            name: 'Jesus Christ The Perfect Sacrifice',
            description: 'Jesus Christ the perfect sacrifice\n220GSM cotton T-shirt & Oversized T-shirt\nDeclare the ultimate sacrifice.',
            price: 420,
            colors: ['white', 'camel', 'black'],
            colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' },
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: {
                white: ['images/tshirts/product4/white-front.jpg', 'images/tshirts/product4/white-back.jpg'],
                camel: ['images/tshirts/product4/camel-front.jpg', 'images/tshirts/product4/camel-back.jpg'],
                black: ['images/tshirts/product4/black-front.jpg', 'images/tshirts/product4/black-back.jpg']
            },
            category: 'tshirts'
        },
        {
            id: 'tshirt5',
            name: 'Pray Without Ceasing',
            description: 'Pray without ceasing\n220GSM Cotton T-shirt & Oversized T-shirt\nA reminder to stay in constant prayer.',
            price: 420,
            colors: ['white', 'camel', 'black'],
            colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' },
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: {
                white: ['images/tshirts/product5/white-front.jpg', 'images/tshirts/product5/white-back.jpg'],
                camel: ['images/tshirts/product5/camel-front.jpg', 'images/tshirts/product5/camel-back.jpg'],
                black: ['images/tshirts/product5/black-front.jpg', 'images/tshirts/product5/black-back.jpg']
            },
            category: 'tshirts'
        }
    ],
    hoodies: [
        {
            id: 'hoodie1',
            name: 'Faith Breaks Protocol Hoodie',
            description: 'Faith breaks protocol\n430GSM Heavy hoodies & 300GSM Hoodies\nPremium heavyweight hoodie for cold weather.',
            price: 850,
            colors: ['white', 'camel', 'black'],
            colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' },
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: {
                white: ['images/hoodies/product1/white-front.jpg', 'images/hoodies/product1/white-back.jpg'],
                camel: ['images/hoodies/product1/camel-front.jpg', 'images/hoodies/product1/camel-back.jpg'],
                black: ['images/hoodies/product1/black-front.jpg', 'images/hoodies/product1/black-back.jpg']
            },
            category: 'hoodies'
        },
        {
            id: 'hoodie2',
            name: 'Jesus Died Once For All Time Hoodie',
            description: 'Jesus died once for all time\n430GSM Heavy hoodies & 300GSM Hoodies\nWarm, comfortable, and faith-filled.',
            price: 850,
            colors: ['white', 'camel', 'black'],
            colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' },
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: {
                white: ['images/hoodies/product2/white-front.jpg', 'images/hoodies/product2/white-back.jpg'],
                camel: ['images/hoodies/product2/camel-front.jpg', 'images/hoodies/product2/camel-back.jpg'],
                black: ['images/hoodies/product2/black-front.jpg', 'images/hoodies/product2/black-back.jpg']
            },
            category: 'hoodies'
        },
        {
            id: 'hoodie3',
            name: 'Jesus Christ The Perfect Sacrifice Hoodie',
            description: 'Jesus Christ the perfect sacrifice\n430GSM Heavy hoodies & 300GSM Hoodies\nPremium quality with bold statement.',
            price: 850,
            colors: ['white', 'camel', 'black'],
            colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' },
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: {
                white: ['images/hoodies/product3/white-front.jpg', 'images/hoodies/product3/white-back.jpg'],
                camel: ['images/hoodies/product3/camel-front.jpg', 'images/hoodies/product3/camel-back.jpg'],
                black: ['images/hoodies/product3/black-front.jpg', 'images/hoodies/product3/black-back.jpg']
            },
            category: 'hoodies'
        },
        {
            id: 'hoodie4',
            name: 'Pray Without Ceasing Hoodie',
            description: 'Pray without ceasing\n430GSM Heavy hoodies & 300GSM Hoodies\nStay warm while staying in prayer.',
            price: 850,
            colors: ['white', 'camel', 'black'],
            colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' },
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: {
                white: ['images/hoodies/product4/white-front.jpg', 'images/hoodies/product4/white-back.jpg'],
                camel: ['images/hoodies/product4/camel-front.jpg', 'images/hoodies/product4/camel-back.jpg'],
                black: ['images/hoodies/product4/black-front.jpg', 'images/hoodies/product4/black-back.jpg']
            },
            category: 'hoodies'
        }
    ],
    sweaters: [
        {
            id: 'sweater1',
            name: 'Faith Breaks Protocol Sweater',
            description: 'Faith breaks protocol\n240GSM Crew neck sweaters\nComfortable crewneck for everyday wear.',
            price: 550,
            colors: ['white', 'camel', 'black'],
            colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' },
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: {
                white: ['images/sweaters/product1/white-front.jpg', 'images/sweaters/product1/white-back.jpg'],
                camel: ['images/sweaters/product1/camel-front.jpg', 'images/sweaters/product1/camel-back.jpg'],
                black: ['images/sweaters/product1/black-front.jpg', 'images/sweaters/product1/black-back.jpg']
            },
            category: 'sweaters'
        },
        {
            id: 'sweater2',
            name: 'Jesus Died Once For All Time Sweater',
            description: 'Jesus died once for all time\n240GSM Crew neck sweaters\nSoft, warm, and faith-inspired.',
            price: 550,
            colors: ['white', 'camel', 'black'],
            colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' },
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: {
                white: ['images/sweaters/product2/white-front.jpg', 'images/sweaters/product2/white-back.jpg'],
                camel: ['images/sweaters/product2/camel-front.jpg', 'images/sweaters/product2/camel-back.jpg'],
                black: ['images/sweaters/product2/black-front.jpg', 'images/sweaters/product2/black-back.jpg']
            },
            category: 'sweaters'
        },
        {
            id: 'sweater3',
            name: 'Jesus Christ The Perfect Sacrifice Sweater',
            description: 'Jesus Christ the perfect sacrifice\n240GSM Crew neck sweaters\nPremium crewneck with powerful message.',
            price: 550,
            colors: ['white', 'camel', 'black'],
            colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' },
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: {
                white: ['images/sweaters/product3/white-front.jpg', 'images/sweaters/product3/white-back.jpg'],
                camel: ['images/sweaters/product3/camel-front.jpg', 'images/sweaters/product3/camel-back.jpg'],
                black: ['images/sweaters/product3/black-front.jpg', 'images/sweaters/product3/black-back.jpg']
            },
            category: 'sweaters'
        },
        {
            id: 'sweater4',
            name: 'Pray Without Ceasing Sweater',
            description: 'Pray without ceasing\n240GSM Crew neck sweaters\nComfort meets faith in this classic piece.',
            price: 550,
            colors: ['white', 'camel', 'black'],
            colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' },
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: {
                white: ['images/sweaters/product4/white-front.jpg', 'images/sweaters/product4/white-back.jpg'],
                camel: ['images/sweaters/product4/camel-front.jpg', 'images/sweaters/product4/camel-back.jpg'],
                black: ['images/sweaters/product4/black-front.jpg', 'images/sweaters/product4/black-back.jpg']
            },
            category: 'sweaters'
        }
    ],
    headwear: [
        {
            id: 'cap',
            name: 'Christ or Nothing CAP',
            description: 'Christ or nothing CAPS\nPremium quality cap with embroidered logo\nAdjustable strap for perfect fit.',
            price: 280,
            colors: ['white', 'camel', 'black'],
            colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' },
            sizes: ['OSFA'],
            images: {
                white: ['images/headwear/caps/white.jpg'],
                camel: ['images/headwear/caps/camel.jpg'],
                black: ['images/headwear/caps/black.jpg']
            },
            category: 'headwear'
        },
        {
            id: 'bucket-hat',
            name: 'Christ or Nothing Bucket Hat',
            description: 'Christ or nothing Bucket hats\nStreet style bucket hat with faith message\nOne size fits most.',
            price: 320,
            colors: ['white', 'camel', 'black'],
            colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' },
            sizes: ['OSFA'],
            images: {
                white: ['images/headwear/bucket-hats/white.jpg'],
                camel: ['images/headwear/bucket-hats/camel.jpg'],
                black: ['images/headwear/bucket-hats/black.jpg']
            },
            category: 'headwear'
        }
    ]
};

// Flatten products array for recommendations
let allProducts = [];
for (const category in products) {
    allProducts = allProducts.concat(products[category]);
}

// Global variables
let cart = [];
const WHATSAPP_NUMBER = '27671664440';
let selectedColors = {};
let selectedSizes = {};

// Helper Functions
function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function showNotification(message) {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = '<i class="fas fa-check-circle"></i> ' + message;
    document.body.appendChild(notification);
    
    setTimeout(function() {
        if (notification && notification.remove) {
            notification.remove();
        }
    }, 3000);
}

function findProductById(id) {
    return allProducts.find(function(p) { return p.id === id; });
}

function formatPrice(price) {
    return 'R ' + price.toLocaleString();
}

// Theme Toggle
function initThemeToggle() {
    const themeBtn = document.getElementById('themeSwitch');
    const body = document.body;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
    }
    
    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// About Modal
function initAboutModal() {
    const modal = document.getElementById('aboutModal');
    const aboutLinks = document.querySelectorAll('#aboutLink, #aboutLinkHero');
    const closeBtn = document.querySelector('.about-close');
    
    if (aboutLinks.length > 0) {
        aboutLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                if (modal) modal.classList.add('show');
            });
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            if (modal) modal.classList.remove('show');
        });
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }
}

// Carousel Functions
function initializeSingleCarousel(carouselElement, totalImages) {
    const imgContainer = carouselElement.querySelector('.carousel-images');
    const prevBtn = carouselElement.querySelector('.prev');
    const nextBtn = carouselElement.querySelector('.next');
    
    if (!imgContainer) return;
    if (totalImages <= 1) return;
    
    let currentIndex = 0;
    
    function updateCarousel() {
        imgContainer.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    }
    
    if (prevBtn) {
        const newPrev = prevBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrev, prevBtn);
        newPrev.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateCarousel();
        });
    }
    
    if (nextBtn) {
        const newNext = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNext, nextBtn);
        newNext.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        });
    }
}

function initializeCarousels() {
    const carousels = document.querySelectorAll('.carousel[data-carousel]');
    for (let i = 0; i < carousels.length; i++) {
        const carousel = carousels[i];
        const images = carousel.querySelectorAll('.carousel-img');
        if (images.length > 1) {
            initializeSingleCarousel(carousel, images.length);
        }
    }
}

function createCarousel(images, productId) {
    if (!images || images.length === 0) {
        return '<div class="carousel" data-product-id="' + productId + '">' +
            '<div class="carousel-images">' +
            '<img src="https://placehold.co/800x600/111111/FFFFFF?text=No+Image" class="carousel-img" alt="Product">' +
            '</div>' +
            '</div>';
    }
    
    let imagesHTML = '';
    for (let i = 0; i < images.length; i++) {
        imagesHTML += '<img src="' + images[i] + '" class="carousel-img" alt="Product image" onerror="this.src=\'https://placehold.co/800x600/111111/FFFFFF?text=Image+Error\'">';
    }
    
    if (images.length === 1) {
        return '<div class="carousel" data-product-id="' + productId + '">' +
            '<div class="carousel-images">' +
            imagesHTML +
            '</div>' +
            '</div>';
    }
    
    return '<div class="carousel" data-carousel data-product-id="' + productId + '">' +
        '<div class="carousel-images">' +
        imagesHTML +
        '</div>' +
        '<button class="carousel-btn prev">‹</button>' +
        '<button class="carousel-btn next">›</button>' +
        '</div>';
}

// Color and Size Change Functions
function changeProductColor(productId, color) {
    selectedColors[productId] = color;
    const product = findProductById(productId);
    if (!product) return;
    
    const newImages = product.images[color];
    const carouselContainer = document.querySelector('.carousel[data-product-id="' + productId + '"]');
    
    if (carouselContainer) {
        const imgContainer = carouselContainer.querySelector('.carousel-images');
        if (imgContainer) {
            let newImagesHTML = '';
            for (let i = 0; i < newImages.length; i++) {
                newImagesHTML += '<img src="' + newImages[i] + '" class="carousel-img" alt="Product image" onerror="this.src=\'https://placehold.co/800x600/111111/FFFFFF?text=Image+Error\'">';
            }
            imgContainer.innerHTML = newImagesHTML;
            imgContainer.style.transform = 'translateX(0)';
            
            if (newImages.length > 1) {
                const carouselAttr = carouselContainer.getAttribute('data-carousel');
                if (!carouselAttr) {
                    carouselContainer.setAttribute('data-carousel', '');
                }
                initializeSingleCarousel(carouselContainer, newImages.length);
            }
        }
    }
    
    const colorBtns = document.querySelectorAll('.color-btn[data-product-id="' + productId + '"]');
    for (let i = 0; i < colorBtns.length; i++) {
        const btn = colorBtns[i];
        if (btn.getAttribute('data-color') === color) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    }
}

function changeProductSize(productId, size) {
    selectedSizes[productId] = size;
    
    const sizeBtns = document.querySelectorAll('.size-btn[data-product-id="' + productId + '"]');
    for (let i = 0; i < sizeBtns.length; i++) {
        const btn = sizeBtns[i];
        if (btn.getAttribute('data-size') === size) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    }
}

// Cart Functions
function addToCart(item) {
    cart.push({
        id: item.id,
        name: item.name,
        description: item.description,
        color: item.color,
        colorName: item.colorName,
        size: item.size,
        price: item.price,
        addedAt: new Date().toLocaleString()
    });
    updateCartUI();
    showNotification(item.name + ' (' + item.colorName + ', ' + item.size + ') added to cart');
}

function removeFromCart(index) {
    const removedItem = cart[index];
    cart.splice(index, 1);
    updateCartUI();
    showNotification(removedItem.name + ' removed from cart');
}

function clearCart() {
    if (cart.length > 0) {
        cart = [];
        updateCartUI();
        showNotification('Cart cleared');
    }
}

function getCartTotal() {
    return cart.reduce(function(total, item) {
        return total + item.price;
    }, 0);
}

function renderCartModal() {
    const cartItemsContainer = document.getElementById('cartItemsList');
    const cartTotalSpan = document.getElementById('cartTotalPrice');
    const cartTotalAmount = document.getElementById('cartTotalAmount');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        if (cartTotalSpan) cartTotalSpan.textContent = 'Total Items: 0';
        if (cartTotalAmount) cartTotalAmount.textContent = 'Total: R 0';
        return;
    }
    
    let itemsHTML = '';
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        
        itemsHTML += '<div class="cart-item">' +
            '<div class="cart-item-info">' +
            '<div class="cart-item-title">' + escapeHTML(item.name) + '</div>' +
            '<div class="cart-item-details">Color: ' + escapeHTML(item.colorName) + ' | Size: ' + escapeHTML(item.size) + '</div>' +
            '<div class="cart-item-details">' + formatPrice(item.price) + '</div>' +
            '</div>' +
            '<button class="remove-item" data-index="' + i + '">Remove</button>' +
            '</div>';
    }
    
    cartItemsContainer.innerHTML = itemsHTML;
    if (cartTotalSpan) cartTotalSpan.textContent = 'Total Items: ' + cart.length;
    if (cartTotalAmount) cartTotalAmount.textContent = 'Total: ' + formatPrice(getCartTotal());
    
    const removeBtns = document.querySelectorAll('.remove-item');
    for (let i = 0; i < removeBtns.length; i++) {
        const btn = removeBtns[i];
        btn.addEventListener('click', function(e) {
            const index = parseInt(btn.getAttribute('data-index'));
            removeFromCart(index);
        });
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.length;
        cartCount.style.animation = 'none';
        setTimeout(function() {
            cartCount.style.animation = 'bounce 0.5s ease';
        }, 10);
    }
    renderCartModal();
}

function generateWhatsAppMessage() {
    if (cart.length === 0) {
        return "Hello, I would like to request a quotation for Christ or Nothing products.";
    }
    
    let message = "*CHRIST OR NOTHING - QUOTATION REQUEST*%0A%0A";
    message += "ORDER SUMMARY%0A";
    message += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━%0A%0A";
    
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        message += (i + 1) + ". " + item.name + "%0A";
        message += "   Color: " + item.colorName + "%0A";
        message += "   Size: " + item.size + "%0A";
        message += "   Price: " + formatPrice(item.price) + "%0A%0A";
    }
    
    message += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━%0A";
    message += "Total Items: " + cart.length + "%0A";
    message += "Total Amount: " + formatPrice(getCartTotal()) + "%0A%0A";
    message += "Please provide final pricing and availability. Thank you!";
    
    return message;
}

function sendWhatsAppQuote() {
    if (cart.length === 0) {
        showNotification('Your cart is empty. Add items before requesting a quotation.');
        return;
    }
    const message = generateWhatsAppMessage();
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + message, '_blank');
    showNotification('Opening WhatsApp...');
}

// Render Products on Homepage - Clickable Cards (No View Details Button)
function renderProductGrid(category, productsArray) {
    const container = document.getElementById(category + 'Grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let p = 0; p < productsArray.length; p++) {
        const product = productsArray[p];
        
        if (!selectedColors[product.id]) {
            selectedColors[product.id] = product.colors[0];
        }
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-product-id', product.id);
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-duration', '600');
        
        const currentImages = product.images[selectedColors[product.id]];
        const carouselHTML = createCarousel(currentImages, product.id);
        
        let colorButtonsHTML = '';
        for (let c = 0; c < product.colors.length; c++) {
            const color = product.colors[c];
            const activeClass = (selectedColors[product.id] === color) ? 'active' : '';
            colorButtonsHTML += '<button class="color-btn ' + activeClass + '" data-product-id="' + product.id + '" data-color="' + color + '">' + product.colorNames[color] + '</button>';
        }
        
        const escapedName = escapeHTML(product.name);
        const escapedDesc = escapeHTML(product.description).replace(/\n/g, '<br>');
        
        card.innerHTML = carouselHTML +
            '<div class="product-info">' +
            '<h3 class="product-name">' + escapedName + '</h3>' +
            '<div class="product-price">' + formatPrice(product.price) + '</div>' +
            '<div class="product-desc">' + escapedDesc.substring(0, 80) + (escapedDesc.length > 80 ? '...' : '') + '</div>' +
            '<div class="color-options">' + colorButtonsHTML + '</div>' +
            '</div>';
        
        container.appendChild(card);
    }
    
    attachHomepageEvents();
}

function attachHomepageEvents() {
    // Color button listeners (prevent card click)
    const colorBtns = document.querySelectorAll('.color-btn');
    for (let i = 0; i < colorBtns.length; i++) {
        const btn = colorBtns[i];
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = btn.getAttribute('data-product-id');
            const color = btn.getAttribute('data-color');
            changeProductColor(productId, color);
        });
    }
    
    // Product card click listeners - navigate to product detail
    const productCards = document.querySelectorAll('.product-card');
    for (let i = 0; i < productCards.length; i++) {
        const card = productCards[i];
        const productId = card.getAttribute('data-product-id');
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking on color buttons
            if (!e.target.classList.contains('color-btn') && 
                !e.target.classList.contains('carousel-btn') &&
                !e.target.closest('.carousel-btn')) {
                window.location.href = 'product.html?id=' + productId;
            }
        });
    }
    
    initializeCarousels();
}

// Product Detail Page Functions
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function renderProductDetail() {
    const productId = getUrlParameter('id');
    if (!productId) {
        window.location.href = 'index.html';
        return;
    }
    
    const product = findProductById(productId);
    if (!product) {
        document.getElementById('productDetail').innerHTML = '<div class="error">Product not found. <a href="index.html">Return to shop</a></div>';
        return;
    }
    
    if (!selectedColors[product.id]) {
        selectedColors[product.id] = product.colors[0];
    }
    if (!selectedSizes[product.id]) {
        selectedSizes[product.id] = product.sizes[0];
    }
    
    const currentImages = product.images[selectedColors[product.id]];
    
    let thumbnailsHTML = '';
    for (let i = 0; i < currentImages.length; i++) {
        thumbnailsHTML += '<img src="' + currentImages[i] + '" class="thumbnail" data-index="' + i + '" alt="Thumbnail">';
    }
    
    let colorButtonsHTML = '';
    for (let c = 0; c < product.colors.length; c++) {
        const color = product.colors[c];
        const activeClass = (selectedColors[product.id] === color) ? 'active' : '';
        colorButtonsHTML += '<button class="color-btn ' + activeClass + '" data-product-id="' + product.id + '" data-color="' + color + '">' + product.colorNames[color] + '</button>';
    }
    
    let sizeButtonsHTML = '';
    for (let s = 0; s < product.sizes.length; s++) {
        const size = product.sizes[s];
        const activeClass = (selectedSizes[product.id] === size) ? 'active' : '';
        sizeButtonsHTML += '<button class="size-btn ' + activeClass + '" data-product-id="' + product.id + '" data-size="' + size + '">' + size + '</button>';
    }
    
    const detailHTML = `
        <div class="product-detail-grid">
            <div class="product-detail-images">
                <img src="${currentImages[0]}" class="product-detail-main-image" id="mainImage" alt="${product.name}">
                <div class="product-detail-thumbnails">
                    ${thumbnailsHTML}
                </div>
            </div>
            <div class="product-detail-info">
                <h1>${escapeHTML(product.name)}</h1>
                <div class="product-detail-price">${formatPrice(product.price)}</div>
                <div class="product-detail-description">${escapeHTML(product.description).replace(/\n/g, '<br>')}</div>
                <div class="color-options">
                    <strong>Color:</strong>
                    ${colorButtonsHTML}
                </div>
                <div class="size-options">
                    <strong>Size:</strong>
                    ${sizeButtonsHTML}
                </div>
                <button class="add-to-cart-detail" id="addToCartDetail">
                    <i class="fas fa-plus"></i> Add to Cart
                </button>
                <div class="back-to-shop">
                    <a href="index.html" class="back-link"><i class="fas fa-arrow-left"></i> Back to Shop</a>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('productDetail').innerHTML = detailHTML;
    
    // Thumbnail click handler
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', function() {
            mainImage.src = this.src;
            for (let j = 0; j < thumbnails.length; j++) {
                thumbnails[j].classList.remove('active');
            }
            this.classList.add('active');
        });
    }
    if (thumbnails.length > 0) thumbnails[0].classList.add('active');
    
    // Color change handler
    const colorBtns = document.querySelectorAll('.color-btn');
    for (let i = 0; i < colorBtns.length; i++) {
        const btn = colorBtns[i];
        btn.addEventListener('click', function() {
            const productId = btn.getAttribute('data-product-id');
            const color = btn.getAttribute('data-color');
            changeProductColorDetail(productId, color);
        });
    }
    
    // Size change handler
    const sizeBtns = document.querySelectorAll('.size-btn');
    for (let i = 0; i < sizeBtns.length; i++) {
        const btn = sizeBtns[i];
        btn.addEventListener('click', function() {
            const productId = btn.getAttribute('data-product-id');
            const size = btn.getAttribute('data-size');
            changeProductSize(productId, size);
        });
    }
    
    // Add to cart handler
    const addToCartBtn = document.getElementById('addToCartDetail');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            addToCart({
                id: product.id,
                name: product.name,
                description: product.description,
                color: selectedColors[product.id],
                colorName: product.colorNames[selectedColors[product.id]],
                size: selectedSizes[product.id],
                price: product.price
            });
        });
    }
    
    // Render recommendations
    renderRecommendations(product);
}

function changeProductColorDetail(productId, color) {
    selectedColors[productId] = color;
    const product = findProductById(productId);
    if (!product) return;
    
    const newImages = product.images[color];
    const mainImage = document.getElementById('mainImage');
    if (mainImage && newImages.length > 0) {
        mainImage.src = newImages[0];
    }
    
    const thumbnailsContainer = document.querySelector('.product-detail-thumbnails');
    if (thumbnailsContainer) {
        let newThumbnailsHTML = '';
        for (let i = 0; i < newImages.length; i++) {
            newThumbnailsHTML += '<img src="' + newImages[i] + '" class="thumbnail" data-index="' + i + '" alt="Thumbnail">';
        }
        thumbnailsContainer.innerHTML = newThumbnailsHTML;
        
        const newThumbnails = document.querySelectorAll('.thumbnail');
        for (let i = 0; i < newThumbnails.length; i++) {
            newThumbnails[i].addEventListener('click', function() {
                mainImage.src = this.src;
                for (let j = 0; j < newThumbnails.length; j++) {
                    newThumbnails[j].classList.remove('active');
                }
                this.classList.add('active');
            });
        }
        if (newThumbnails.length > 0) newThumbnails[0].classList.add('active');
    }
    
    const colorBtns = document.querySelectorAll('.color-btn[data-product-id="' + productId + '"]');
    for (let i = 0; i < colorBtns.length; i++) {
        const btn = colorBtns[i];
        if (btn.getAttribute('data-color') === color) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    }
}

function renderRecommendations(currentProduct) {
    const recommendations = allProducts
        .filter(function(p) { return p.id !== currentProduct.id && p.category === currentProduct.category; })
        .slice(0, 4);
    
    const container = document.getElementById('recommendationsGrid');
    if (!container) return;
    
    if (recommendations.length === 0) {
        container.innerHTML = '<p>No recommendations available.</p>';
        return;
    }
    
    let recHTML = '';
    for (let i = 0; i < recommendations.length; i++) {
        const rec = recommendations[i];
        const defaultColor = rec.colors[0];
        const defaultImage = rec.images[defaultColor][0];
        
        recHTML += `
            <div class="recommendation-card" data-id="${rec.id}" data-aos="fade-up" data-aos-delay="${i * 100}">
                <img src="${defaultImage}" alt="${rec.name}">
                <h4>${escapeHTML(rec.name)}</h4>
                <p>${formatPrice(rec.price)}</p>
            </div>
        `;
    }
    
    container.innerHTML = recHTML;
    
    const recCards = document.querySelectorAll('.recommendation-card');
    for (let i = 0; i < recCards.length; i++) {
        recCards[i].addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            window.location.href = 'product.html?id=' + id;
        });
    }
}

// Modal Functions
function initModal() {
    const modal = document.getElementById('cartModal');
    const cartIcon = document.getElementById('cartIcon');
    const closeBtn = document.getElementById('closeCartBtn');
    const whatsappBtn = document.getElementById('whatsappOrderBtn');
    const clearCartBtn = document.getElementById('clearCartBtn');
    
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            renderCartModal();
            if (modal) modal.classList.add('open');
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            if (modal) modal.classList.remove('open');
        });
    }
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            sendWhatsAppQuote();
        });
    }
    
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function() {
            clearCart();
        });
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('open');
            }
        });
    }
}

// Smooth Scroll
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-menu a[href*="#"]');
    for (let i = 0; i < navLinks.length; i++) {
        const anchor = navLinks[i];
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#' && href.includes('#')) {
                e.preventDefault();
                const targetId = href.split('#')[1];
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }
}

// Initialize AOS animations
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }
}

// Initialize based on page
document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
    initAboutModal();
    initModal();
    initSmoothScroll();
    initAOS();
    
    if (window.location.pathname.includes('product.html')) {
        renderProductDetail();
    } else {
        renderProductGrid('tshirts', products.tshirts);
        renderProductGrid('hoodies', products.hoodies);
        renderProductGrid('sweaters', products.sweaters);
        renderProductGrid('headwear', products.headwear);
    }
});