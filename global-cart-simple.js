// Simple Global Cart System
console.log('Simple global cart system loaded');

// Global variables
let cart = [];
let cartCount = 0;

// Product data
const products = {
    1: { name: "Áo sơ mi nam cao cấp", price: 2500000, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop", category: "clothing" },
    101: { name: "Giày sneaker cao cấp", price: 3500000, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop", category: "footwear" },
    201: { name: "Nước hoa nam cao cấp", price: 1800000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" }
};

// Initialize cart
function initCart() {
    console.log('Initializing cart...');
    try {
        const savedCart = localStorage.getItem('h2wear_cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            console.log('Cart loaded from localStorage:', cart);
        } else {
            cart = [];
            console.log('New cart created');
        }
        updateCartCount();
    } catch (error) {
        console.error('Error initializing cart:', error);
        cart = [];
    }
}

// Save cart to localStorage
function saveCart() {
    try {
        localStorage.setItem('h2wear_cart', JSON.stringify(cart));
        console.log('Cart saved to localStorage');
    } catch (error) {
        console.error('Error saving cart:', error);
    }
}

// Update cart count
function updateCartCount() {
    cartCount = cart.length;
    console.log('Cart count updated:', cartCount);
    
    // Update cart count display
    const cartCountElements = document.querySelectorAll('#cart-count, .cart-count, [id*="cart-count"]');
    cartCountElements.forEach(element => {
        element.textContent = cartCount;
    });
}

// Add to cart
function addToCart(productId) {
    console.log('Adding product to cart:', productId);
    
    const product = products[productId];
    if (!product) {
        console.error('Product not found:', productId);
        alert('Sản phẩm không tồn tại!');
        return;
    }
    
    // Check if product already exists in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
        console.log('Product quantity increased:', existingItem);
    } else {
        const newItem = {
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: 1
        };
        cart.push(newItem);
        console.log('New product added to cart:', newItem);
    }
    
    saveCart();
    updateCartCount();
    showNotification('Đã thêm sản phẩm vào giỏ hàng!');
    
    console.log('Cart after adding:', cart);
}

// Get cart summary
function getCartSummary() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    return {
        totalItems: totalItems,
        totalPrice: totalPrice,
        items: cart
    };
}

// Show notification
function showNotification(message) {
    console.log('Notification:', message);
    // Simple alert for now
    alert(message);
}

// Open cart modal
function openCart() {
    console.log('Opening cart modal...');
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.classList.remove('hidden');
        updateCartDisplay();
    } else {
        console.error('Cart modal not found');
    }
}

// Close cart modal
function closeCart() {
    console.log('Closing cart modal...');
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Update cart display
function updateCartDisplay() {
    console.log('Updating cart display...');
    
    const emptyCart = document.getElementById('empty-cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (!emptyCart || !cartItems || !cartTotal) {
        console.error('Cart display elements not found');
        return;
    }
    
    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartItems.style.display = 'none';
        cartTotal.textContent = '0₫';
    } else {
        emptyCart.style.display = 'none';
        cartItems.style.display = 'block';
        
        // Clear existing items
        cartItems.innerHTML = '';
        
        // Add cart items
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'flex items-center space-x-4 p-2 border-b';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                <div class="flex-1">
                    <h3 class="font-semibold">${item.name}</h3>
                    <p class="text-gray-600">Số lượng: ${item.quantity}</p>
                    <p class="text-luxury-gold font-bold">${(item.price * item.quantity).toLocaleString()}₫</p>
                </div>
            `;
            cartItems.appendChild(itemElement);
        });
        
        // Update total
        const summary = getCartSummary();
        cartTotal.textContent = summary.totalPrice.toLocaleString() + '₫';
    }
}

// Clear cart
function clearCart() {
    console.log('Clearing cart...');
    cart = [];
    saveCart();
    updateCartCount();
    updateCartDisplay();
    showNotification('Đã xóa giỏ hàng!');
}

// Open Messenger with cart
function openMessengerWithCart() {
    console.log('Opening Messenger with cart...');
    const summary = getCartSummary();
    if (summary.totalItems === 0) {
        alert('Giỏ hàng trống!');
        return;
    }
    
    let message = 'Xin chào! Tôi muốn đặt hàng:\n\n';
    cart.forEach(item => {
        message += `- ${item.name} x${item.quantity}: ${(item.price * item.quantity).toLocaleString()}₫\n`;
    });
    message += `\nTổng cộng: ${summary.totalPrice.toLocaleString()}₫`;
    
    const encodedMessage = encodeURIComponent(message);
    const messengerUrl = `https://www.facebook.com/share/1AWfz2bQXY/?mibextid=wwXIfr`;
    window.open(messengerUrl, '_blank');
}

// Make functions global
window.addToCart = addToCart;
window.openCart = openCart;
window.closeCart = closeCart;
window.clearCart = clearCart;
window.getCartSummary = getCartSummary;
window.showNotification = showNotification;
window.updateCartDisplay = updateCartDisplay;
window.openMessengerWithCart = openMessengerWithCart;

// Initialize cart
console.log('Initializing simple cart...');
initCart();

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ready, initializing simple cart...');
    initCart();
    updateCartDisplay();
});

// Update when page loads
window.addEventListener('load', function() {
    console.log('Page loaded, updating simple cart...');
    initCart();
    updateCartDisplay();
});
