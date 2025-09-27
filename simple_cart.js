// Simple Cart Test
console.log('Simple cart script loaded');

// Cart variables
let cart = [];
let cartCount = 0;

// Product data
const products = {
    1: { name: "Áo sơ mi nam cao cấp", price: 2500000, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    2: { name: "Váy dạ hội sang trọng", price: 3200000, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    3: { name: "Nước hoa cao cấp", price: 1800000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
};

// Add to cart function
function addToCart(productId) {
    console.log('=== ADD TO CART START ===');
    console.log('Product ID:', productId);
    console.log('Product exists:', !!products[productId]);
    
    const product = products[productId];
    if (!product) {
        console.error('Product not found:', productId);
        alert('Sản phẩm không tồn tại!');
        return;
    }
    
    console.log('Product found:', product);
    
    // Add to cart
    const existingItem = cart.find(item => item.id == productId);
    if (existingItem) {
        existingItem.quantity += 1;
        console.log('Updated quantity for existing item');
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
        console.log('Added new item to cart');
    }
    
    console.log('Cart after add:', cart);
    
    // Update cart count and show notification
    updateCartCount();
    showNotification(`${product.name} đã được thêm vào giỏ hàng!`);
    
    console.log('=== ADD TO CART END ===');
}

// Update cart count
function updateCartCount() {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
        console.log('Cart count updated to:', cartCount);
    } else {
        console.error('Cart count element not found');
    }
}

// Show notification
function showNotification(message) {
    console.log('Showing notification:', message);
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-white text-luxury-black px-4 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-all duration-500 border-l-4 border-luxury-gold max-w-xs';
    notification.innerHTML = `
        <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-check text-white text-sm font-bold"></i>
            </div>
            <div class="flex-1 min-w-0">
                <div class="font-semibold text-sm text-luxury-black">Thành công!</div>
                <div class="text-xs text-gray-600 truncate">${message}</div>
                        <button onclick="const cartModal = document.getElementById('cart-modal'); if (cartModal) { openCart(); } else { window.location.href = 'index.html'; } this.parentElement.parentElement.parentElement.remove();" class="text-xs text-luxury-gold hover:text-yellow-600 transition-colors mt-1 underline">
                            Xem giỏ hàng
                        </button>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" class="text-gray-400 hover:text-luxury-black transition-colors flex-shrink-0">
                <i class="fas fa-times text-xs"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification smoothly
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 50);
    
    // Hide notification
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 2500);
}

// Open cart modal
function openCart() {
    console.log('Opening cart...');
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.classList.remove('hidden');
        updateCartDisplay();
    }
}

// Close cart modal
function closeCart() {
    console.log('Closing cart...');
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.classList.add('hidden');
    }
}

// Update cart display
function updateCartDisplay() {
    console.log('Updating cart display...');
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartTotal = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '';
        emptyCart.classList.remove('hidden');
        cartTotal.textContent = '0₫';
    } else {
        emptyCart.classList.add('hidden');
        cartItems.innerHTML = cart.map(item => `
            <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
                <div class="flex-1">
                    <h4 class="font-semibold text-luxury-black">${item.name}</h4>
                    <p class="text-gray-600">${item.price.toLocaleString()}₫</p>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="w-8 text-center font-semibold">${item.quantity}</span>
                </div>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toLocaleString() + '₫';
    }
}

console.log('Simple cart script loaded successfully');
