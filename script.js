// Cart functionality
let cart = [];
let cartCount = 0;

// Product data
const products = {
    1: { name: "Áo sơ mi nam cao cấp", price: 2500000, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    2: { name: "Váy dạ hội sang trọng", price: 3200000, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    3: { name: "Nước hoa cao cấp", price: 1800000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    4: { name: "Đồng hồ Swiss", price: 15000000, image: "https://images.unsplash.com/photo-1523170335258-f5c6c6bd6eaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    5: { name: "Giày thể thao cao cấp", price: 3500000, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    6: { name: "Túi xách sang trọng", price: 4500000, image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    7: { name: "Áo khoác da cao cấp", price: 6800000, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    8: { name: "Sneaker Limited Edition", price: 4200000, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    9: { name: "Quần jean cao cấp", price: 1800000, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    10: { name: "Áo thun polo cao cấp", price: 1200000, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    11: { name: "Ví da nam cao cấp", price: 2800000, image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    12: { name: "Nước hoa nam quyến rũ", price: 2500000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    13: { name: "Đồng hồ nữ sang trọng", price: 8500000, image: "https://images.unsplash.com/photo-1523170335258-f5c6c6bd6eaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    14: { name: "Giày boot da cao cấp", price: 5200000, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    15: { name: "Váy dạ hội quyến rũ", price: 4800000, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    16: { name: "Áo sơ mi nữ thanh lịch", price: 2200000, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    17: { name: "Nước hoa nữ quyến rũ", price: 3200000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    18: { name: "Đồng hồ nam cao cấp", price: 12000000, image: "https://images.unsplash.com/photo-1523170335258-f5c6c6bd6eaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    19: { name: "Sneaker nữ cao cấp", price: 2800000, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    20: { name: "Túi xách nữ sang trọng", price: 3800000, image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    21: { name: "Quần short nam cao cấp", price: 1200000, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    22: { name: "Áo hoodie cao cấp", price: 2800000, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    23: { name: "Nước hoa unisex cao cấp", price: 3500000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    24: { name: "Đồng hồ thông minh", price: 5500000, image: "https://images.unsplash.com/photo-1523170335258-f5c6c6bd6eaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    25: { name: "Sandal nữ cao cấp", price: 1800000, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    26: { name: "Váy dạ hội thanh lịch", price: 6200000, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    27: { name: "Áo sơ mi nữ công sở", price: 2100000, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    28: { name: "Nước hoa nam cao cấp", price: 4200000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    29: { name: "Đồng hồ nữ sang trọng", price: 9800000, image: "https://images.unsplash.com/photo-1523170335258-f5c6c6bd6eaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    30: { name: "Sneaker thể thao cao cấp", price: 3600000, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    31: { name: "Túi xách nam công sở", price: 4500000, image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    32: { name: "Váy dạ hội quyến rũ", price: 7500000, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    33: { name: "Áo thun nam cao cấp", price: 1500000, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    34: { name: "Nước hoa nữ quyến rũ", price: 3800000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    35: { name: "Đồng hồ nam cổ điển", price: 11500000, image: "https://images.unsplash.com/photo-1523170335258-f5c6c6bd6eaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    36: { name: "Boot nữ cao cấp", price: 4800000, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    37: { name: "Túi xách nữ thanh lịch", price: 5200000, image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    38: { name: "Váy dạ hội sang trọng", price: 12000000, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    39: { name: "Áo khoác nữ thanh lịch", price: 5800000, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    40: { name: "Set nước hoa cao cấp", price: 8500000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    
    // Giày dép (ID 101-120)
    101: { name: "Giày sneaker cao cấp", price: 3500000, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    102: { name: "Giày boot nam sang trọng", price: 4200000, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    103: { name: "Sandals mùa hè", price: 1800000, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    104: { name: "Giày cao gót nữ", price: 2800000, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    105: { name: "Giày thể thao nữ", price: 3200000, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    106: { name: "Giày lười nam", price: 2200000, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    107: { name: "Giày oxford nam", price: 3800000, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    108: { name: "Giày cao gót party", price: 2500000, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    109: { name: "Giày sneaker unisex", price: 2900000, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    110: { name: "Giày boot nữ", price: 3600000, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    111: { name: "Giày cao gót thoải mái", price: 2400000, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    112: { name: "Giày sneaker casual", price: 2700000, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    113: { name: "Giày thể thao nam", price: 3300000, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    114: { name: "Giày lười nữ", price: 2000000, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    115: { name: "Giày oxford nữ", price: 3500000, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    116: { name: "Giày boot cao cấp", price: 4500000, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    117: { name: "Giày sneaker limited", price: 4000000, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    118: { name: "Giày cao gót sang trọng", price: 3200000, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    119: { name: "Giày thể thao nữ cao cấp", price: 3800000, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    120: { name: "Giày boot nam cao cấp", price: 4200000, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    
    // Nước hoa (ID 201-220)
    201: { name: "Nước hoa nam cao cấp", price: 1800000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    202: { name: "Nước hoa nữ sang trọng", price: 2200000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    203: { name: "Nước hoa unisex", price: 1600000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    204: { name: "Nước hoa mùa hè", price: 1400000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    205: { name: "Nước hoa mùa đông", price: 2000000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    206: { name: "Nước hoa tự nhiên", price: 1200000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    207: { name: "Nước hoa luxury", price: 3500000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    208: { name: "Nước hoa party", price: 1900000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    209: { name: "Nước hoa office", price: 1700000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    210: { name: "Nước hoa romantic", price: 2100000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    211: { name: "Nước hoa fresh", price: 1500000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    212: { name: "Nước hoa woody", price: 2300000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    213: { name: "Nước hoa floral", price: 1800000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    214: { name: "Nước hoa citrus", price: 1600000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    215: { name: "Nước hoa oriental", price: 2400000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    216: { name: "Nước hoa gourmand", price: 2000000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    217: { name: "Nước hoa aquatic", price: 1700000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    218: { name: "Nước hoa spicy", price: 1900000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    219: { name: "Nước hoa musky", price: 2200000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    220: { name: "Nước hoa premium", price: 3000000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
};

// Add to cart function - now shows size/color selection modal
function addToCart(productId, selectedSize = null, selectedColor = null) {
    try {
        console.log('=== ADD TO CART START ===');
        console.log('Product ID:', productId);
        console.log('Selected Size:', selectedSize);
        console.log('Selected Color:', selectedColor);
        console.log('Product exists:', !!products[productId]);
        
        const product = products[productId];
        if (!product) {
            console.error('Product not found:', productId);
            alert('Sản phẩm không tồn tại!');
            return;
        }
        
        console.log('Product found:', product);
        
        // If size and color are already selected, add directly to cart
        if (selectedSize && selectedColor) {
            addToCartWithSelection(productId, selectedSize, selectedColor);
            return;
        }
        
        // Otherwise, show size/color selection modal
        showSizeColorModal(productId, product);
        
        console.log('=== ADD TO CART END ===');
    } catch (error) {
        console.error('Error in addToCart:', error);
        alert('Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng!');
    }
}

// Add to cart with selected options
function addToCartWithSelection(productId, selectedSize, selectedColor) {
    try {
        console.log('=== ADD TO CART WITH SELECTION START ===');
        console.log('Product ID:', productId);
        console.log('Selected Size:', selectedSize);
        console.log('Selected Color:', selectedColor);
        
        const product = products[productId];
        if (!product) {
            console.error('Product not found:', productId);
            alert('Sản phẩm không tồn tại!');
            return;
        }
        
        console.log('Product found:', product);
        
        // Create cart item with size and color
        const cartItem = {
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            size: selectedSize || 'S',
            color: selectedColor || 'Đen'
        };
        
        // Check if item with same size and color exists
        const existingItem = cart.find(item => 
            item.id == productId && 
            item.size === cartItem.size && 
            item.color === cartItem.color
        );
        
        if (existingItem) {
            existingItem.quantity += 1;
            console.log('Updated quantity for existing item with same size/color');
        } else {
            cart.push(cartItem);
            console.log('Added new item to cart with size/color');
        }
        
        console.log('Cart after add:', cart);
        
        // Update cart count, display and show notification
        updateCartCount();
        updateCartDisplay();
        const sizeText = selectedSize ? ` (Size: ${selectedSize})` : '';
        const colorText = selectedColor ? ` (Màu: ${selectedColor})` : '';
        showNotification(`${product.name}${sizeText}${colorText} đã được thêm vào giỏ hàng!`);
        
        // Auto open cart after adding product
        setTimeout(() => {
            const cartModal = document.getElementById('cart-modal');
            if (cartModal) {
                openCart();
            }
        }, 1000);
        
        console.log('=== ADD TO CART WITH SELECTION END ===');
    } catch (error) {
        console.error('Error in addToCartWithSelection:', error);
        alert('Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng!');
    }
}

// Update cart count
function updateCartCount() {
    try {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
            console.log('Cart count updated to:', cartCount);
        } else {
            console.log('Cart count element not found - this is normal on some pages');
        }
    } catch (error) {
        console.error('Error updating cart count:', error);
    }
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 z-50 transform translate-x-full transition-all duration-300 ease-out';
    notification.innerHTML = `
        <div class="bg-luxury-black border border-luxury-gold shadow-xl rounded-lg max-w-xs overflow-hidden">
            <div class="flex items-center p-3">
                <div class="w-6 h-6 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-check text-luxury-black text-xs font-bold"></i>
                </div>
                <div class="ml-3 flex-1 min-w-0">
                    <p class="text-sm text-white font-medium truncate">${message}</p>
                </div>
                <button onclick="const cartModal = document.getElementById('cart-modal'); if (cartModal) { openCart(); } else { window.location.href = 'index.html'; } this.closest('.fixed').remove();" 
                        class="ml-2 bg-luxury-gold hover:bg-yellow-600 text-luxury-black px-3 py-1.5 rounded text-xs font-semibold transition-all duration-200 transform hover:scale-105">
                    Xem giỏ
                </button>
                <button onclick="this.closest('.fixed').remove()" class="ml-1 text-luxury-gold hover:text-yellow-400 transition-colors">
                    <i class="fas fa-times text-xs"></i>
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
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
    }, 2000);
}

// Open cart modal
function openCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.classList.remove('hidden');
        updateCartDisplay();
    } else {
        console.log('Cart modal not found - redirecting to index page');
        // Redirect to index page where cart modal exists
        window.location.href = 'index.html';
    }
}

// Close cart modal
function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.classList.add('hidden');
    }
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartTotal = document.getElementById('cart-total');
    
    // Check if cart modal elements exist
    if (!cartItems || !emptyCart || !cartTotal) {
        console.log('Cart modal elements not found - this is normal on some pages');
        return;
    }
    
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
                    <div class="flex items-center space-x-4 text-sm text-gray-600">
                        <span>Size: <span class="font-medium text-luxury-black">${item.size || 'S'}</span></span>
                        <span>Màu: <span class="font-medium text-luxury-black">${item.color || 'Đen'}</span></span>
                    </div>
                    <p class="text-gray-600 font-semibold">${(item.price * item.quantity).toLocaleString()}₫</p>
                </div>
                <div class="flex items-center space-x-2">
                    <button onclick="updateQuantity(${item.id}, -1, '${item.size || 'S'}', '${item.color || 'Đen'}')" class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                        <i class="fas fa-minus text-sm"></i>
                    </button>
                    <span class="w-8 text-center font-semibold">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1, '${item.size || 'S'}', '${item.color || 'Đen'}')" class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                        <i class="fas fa-plus text-sm"></i>
                    </button>
                    <button onclick="removeFromCart(${item.id}, '${item.size || 'S'}', '${item.color || 'Đen'}')" class="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center hover:bg-red-200 ml-2">
                        <i class="fas fa-trash text-sm"></i>
                    </button>
                </div>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toLocaleString() + '₫';
    }
}

// Update quantity
function updateQuantity(productId, change, size, color) {
    const numericProductId = parseInt(productId);
    const item = cart.find(item => 
        item.id == numericProductId && 
        item.size === size && 
        item.color === color
    );
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId, size, color);
        } else {
            updateCartCount();
            updateCartDisplay();
            showNotification(`Đã cập nhật số lượng ${item.name}! (Size: ${size}, Màu: ${color}) - ${item.quantity} sản phẩm`);
        }
    }
}

// Remove from cart - ULTRA SIMPLE VERSION
function removeFromCart(productId, size, color) {
    console.log('=== REMOVE FROM CART START (script.js) ===');
    console.log('Input params:', { productId, size, color });
    console.log('Current cart length:', cart.length);
    
    // Show all items in cart
    console.log('All items in cart:');
    cart.forEach((item, index) => {
        console.log(`Item ${index}:`, {
            id: item.id,
            name: item.name,
            size: item.size,
            color: item.color,
            quantity: item.quantity
        });
    });
    
    // Try to find and remove the item
    let removed = false;
    let removedItem = null;
    
    for (let i = cart.length - 1; i >= 0; i--) {
        const item = cart[i];
        
        // Check if this is the item we want to remove
        const idMatch = String(item.id) === String(productId);
        const sizeMatch = String(item.size || 'S') === String(size || 'S');
        const colorMatch = String(item.color || 'Đen') === String(color || 'Đen');
        
        console.log(`Checking item ${i}:`, {
            itemId: item.id, itemSize: item.size, itemColor: item.color,
            searchId: productId, searchSize: size, searchColor: color,
            idMatch, sizeMatch, colorMatch
        });
        
        if (idMatch && sizeMatch && colorMatch) {
            removedItem = cart.splice(i, 1)[0];
            removed = true;
            console.log('Item removed:', removedItem);
            break;
        }
    }
    
    if (removed) {
        console.log('Item removed successfully!');
        console.log('Cart after removal:', cart);
        
        updateCartCount();
        updateCartDisplay();
        showNotification(`Đã xóa ${removedItem.name} khỏi giỏ hàng! (Size: ${size}, Màu: ${color})`);
    } else {
        console.error('Item not found in cart!');
        console.log('Available items for comparison:');
        cart.forEach((item, index) => {
            console.log(`Item ${index}:`, {
                id: String(item.id),
                size: String(item.size || 'S'),
                color: String(item.color || 'Đen'),
                name: item.name
            });
        });
        showNotification('Sản phẩm không tồn tại trong giỏ hàng!');
    }
    
    console.log('=== REMOVE FROM CART END (script.js) ===');
}

// Open Messenger with cart
function openMessengerWithCart() {
    if (cart.length === 0) {
        showNotification('Giỏ hàng trống!');
        return;
    }
    
    let message = "◆ *ĐƠN HÀNG TỪ Lâm Thúy* ◆\n\n";
    message += "◆ Xin chào! Tôi muốn đặt hàng:\n\n";
    message += "◆ *CHI TIẾT ĐƠN HÀNG:*\n";
    message += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    
    cart.forEach((item, index) => {
        // Convert price to number if it's a string
        const price = typeof item.price === 'string' ? parseInt(item.price.replace(/[^\d]/g, '')) : item.price;
        const itemTotal = price * item.quantity;
        message += `◆ *${index + 1}. ${item.name}*\n`;
        message += `◆ Size: ${item.size || 'S'}\n`;
        message += `◆ Màu: ${item.color || 'Đen'}\n`;
        message += `◆ Số lượng: ${item.quantity}\n`;
        message += `◆ Đơn giá: ${price.toLocaleString('vi-VN')}₫\n`;
        message += `◆ Thành tiền: ${itemTotal.toLocaleString('vi-VN')}₫\n\n`;
    });
    
    const total = cart.reduce((sum, item) => {
        const price = typeof item.price === 'string' ? parseInt(item.price.replace(/[^\d]/g, '')) : item.price;
        return sum + (price * item.quantity);
    }, 0);
    message += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    message += `◆ *TỔNG CỘNG: ${total.toLocaleString('vi-VN')}₫*\n\n`;
    message += "◆ *THÔNG TIN KHÁCH HÀNG:*\n";
    message += "◆ Họ tên: [Vui lòng điền họ tên]\n";
    message += "◆ SĐT: [Vui lòng điền số điện thoại]\n";
    message += "◆ Địa chỉ: [Vui lòng điền địa chỉ nhận hàng]\n\n";
    message += "◆ Vui lòng xác nhận đơn hàng và hướng dẫn thanh toán. Cảm ơn!";
    
    const encodedMessage = encodeURIComponent(message);
    // Thay đổi link Messenger tại đây
    // Link Facebook share - kết nối với page mới
    const messengerUrl = `https://www.facebook.com/share/1AWfz2bQXY/?mibextid=wwXIfr`;
    
    window.open(messengerUrl, '_blank');
    closeCart();
    
    // Show success notification
    showNotification('Đang chuyển đến Messenger...');
}

// Simple and reliable counter animation
function animateCounters() {
    console.log('=== ANIMATE COUNTERS CALLED ===');
    
    // Find all counter elements
    const counter1 = document.getElementById('counter1');
    const counter2 = document.getElementById('counter2');
    const counter3 = document.getElementById('counter3');
    
    console.log('Counter elements:', {counter1, counter2, counter3});
    
    if (!counter1 || !counter2 || !counter3) {
        console.log('ERROR: Counter elements not found!');
        return;
    }
    
    console.log('✓ Found all counter elements, starting animation...');
    
    // Clear any existing intervals
    if (window.counterInterval1) clearInterval(window.counterInterval1);
    if (window.counterInterval2) clearInterval(window.counterInterval2);
    if (window.counterInterval3) clearInterval(window.counterInterval3);
    
    // Reset to 0
    counter1.textContent = '0';
    counter2.textContent = '0';
    counter3.textContent = '0';
    
    // Animate counter 1 (500) - 1.5 seconds
    let current1 = 0;
    const target1 = 500;
    console.log('Starting counter1 animation to', target1);
    window.counterInterval1 = setInterval(() => {
        current1 += 5;
        if (current1 >= target1) {
            current1 = target1;
            clearInterval(window.counterInterval1);
            console.log('Counter1 animation completed:', current1);
        }
        counter1.textContent = current1;
    }, 15);
    
    // Animate counter 2 (1200) - 1.5 seconds
    let current2 = 0;
    const target2 = 1200;
    window.counterInterval2 = setInterval(() => {
        current2 += 12;
        if (current2 >= target2) {
            current2 = target2;
            clearInterval(window.counterInterval2);
        }
        counter2.textContent = current2;
    }, 15);
    
    // Animate counter 3 (800) - 1.5 seconds
    let current3 = 0;
    const target3 = 800;
    window.counterInterval3 = setInterval(() => {
        current3 += 8;
        if (current3 >= target3) {
            current3 = target3;
            clearInterval(window.counterInterval3);
        }
        counter3.textContent = current3;
    }, 15);
    
    console.log('Animation started!');
}

// Track if animation has already run
let animationHasRun = false;

// Change language function
function changeLanguage(lang) {
    if (lang === 'vi') {
        // Switch to Vietnamese
        document.title = 'Lâm Thúy - Thời trang cao cấp';
        
        // Translate texts
        document.getElementById('shipping-text').textContent = 'Miễn phí vận chuyển cho đơn hàng từ 500.000₫';
        document.getElementById('support-text').innerHTML = '<i class="fas fa-headset text-sm"></i><span class="font-medium text-sm">Hỗ trợ</span><i class="fas fa-chevron-down text-xs group-hover:rotate-180 transition-transform duration-300"></i>';
        document.getElementById('search-placeholder').placeholder = 'Q Tìm kiếm...';
        document.getElementById('nav-all').textContent = 'ALL';
        document.getElementById('nav-clothing').textContent = 'QUẦN ÁO';
        document.getElementById('nav-footwear').textContent = 'GIÀY DÉP';
        document.getElementById('nav-perfume').textContent = 'NƯỚC HOA';
        document.getElementById('hero-title').innerHTML = 'Thời trang <span class="text-luxury-gold">Lâm Thúy</span>';
        document.getElementById('hero-subtitle').textContent = 'Khám phá thế giới thời trang cao cấp với những thiết kế độc quyền và chất liệu sang trọng nhất';
        document.getElementById('btn-buy-now').textContent = 'MUA NGAY';
        document.getElementById('btn-see-more').textContent = 'TÌM HIỂU THÊM';
        document.getElementById('service1').textContent = 'Miễn phí vận chuyển';
        document.getElementById('service2').textContent = 'Lỗi bao đổi trả';
        document.getElementById('service3').textContent = 'Đảm bảo chất lượng';
        document.getElementById('achievements-title').textContent = 'Thành Tựu Của Chúng Tôi';
        document.getElementById('achievements-subtitle').textContent = 'Những con số biết nói về chất lượng dịch vụ';
        document.getElementById('counter1-title').textContent = 'Sản phẩm đã bán';
        document.getElementById('counter1-desc').textContent = 'Chất lượng được khẳng định';
        document.getElementById('counter2-title').textContent = 'Khách hàng tin tưởng';
        document.getElementById('counter2-desc').textContent = 'Sự hài lòng là ưu tiên';
        document.getElementById('counter3-title').textContent = 'Đơn hàng thành công';
        document.getElementById('counter3-desc').textContent = 'Giao hàng đúng hẹn 100%';
        document.getElementById('support-header-title').textContent = 'Liên hệ hỗ trợ';
        document.getElementById('support-hotline').textContent = 'Hotline';
        document.getElementById('support-facebook').textContent = 'Facebook';
        document.getElementById('support-zalo').textContent = 'Zalo';
        document.getElementById('support-hours').textContent = 'Thời gian: 8:00 - 22:00';
        document.getElementById('support-status').textContent = 'Online';
        
        showNotification('Đã chuyển sang Tiếng Việt');
    } else if (lang === 'en') {
        // Switch to English
        document.title = 'Lâm Thúy - Luxury Fashion';
        
        // Translate texts
        document.getElementById('shipping-text').textContent = 'Free shipping for orders from 500,000₫';
        document.getElementById('support-text').innerHTML = '<i class="fas fa-headset text-sm"></i><span class="font-medium text-sm">Support</span><i class="fas fa-chevron-down text-xs group-hover:rotate-180 transition-transform duration-300"></i>';
        document.getElementById('search-placeholder').placeholder = 'Search...';
        document.getElementById('nav-all').textContent = 'ALL';
        document.getElementById('nav-clothing').textContent = 'CLOTHING';
        document.getElementById('nav-footwear').textContent = 'FOOTWEAR';
        document.getElementById('nav-perfume').textContent = 'PERFUME';
        document.getElementById('hero-title').innerHTML = 'Luxury <span class="text-luxury-gold">Lâm Thúy</span>';
        document.getElementById('hero-subtitle').textContent = 'Elegant style for modern women and men';
        document.getElementById('btn-buy-now').textContent = 'SHOP NOW';
        document.getElementById('btn-see-more').textContent = 'LEARN MORE';
        document.getElementById('service1').textContent = 'Free Shipping';
        document.getElementById('service2').textContent = 'Easy Returns';
        document.getElementById('service3').textContent = 'Quality Guarantee';
        document.getElementById('achievements-title').textContent = 'Our Achievements';
        document.getElementById('achievements-subtitle').textContent = 'Numbers that speak about service quality';
        document.getElementById('counter1-title').textContent = 'Products Sold';
        document.getElementById('counter1-desc').textContent = 'Quality is affirmed';
        document.getElementById('counter2-title').textContent = 'Trusted Customers';
        document.getElementById('counter2-desc').textContent = 'Satisfaction is a priority';
        document.getElementById('counter3-title').textContent = 'Successful Orders';
        document.getElementById('counter3-desc').textContent = '100% on-time delivery';
        document.getElementById('support-header-title').textContent = 'Contact Support';
        document.getElementById('support-hotline').textContent = 'Hotline';
        document.getElementById('support-facebook').textContent = 'Facebook';
        document.getElementById('support-zalo').textContent = 'Zalo';
        document.getElementById('support-hours').textContent = 'Hours: 8:00 - 22:00';
        document.getElementById('support-status').textContent = 'Online';
        
        showNotification('Switched to English');
    }
    
    // Save language preference
    localStorage.setItem('selectedLanguage', lang);
}

// Function to check if achievements section is visible
function isAchievementsSectionVisible() {
    const achievementsSection = document.querySelector('.bg-gradient-to-br.from-luxury-black');
    if (!achievementsSection) return false;
    
    const rect = achievementsSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Check if section is visible (at least 30% in viewport)
    return rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3;
}

// Scroll event listener
window.addEventListener('scroll', function() {
    if (!animationHasRun && isAchievementsSectionVisible()) {
        console.log('Achievements section is visible, starting animation...');
        animationHasRun = true;
        animateCounters();
    }
});

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ready, scroll animation initialized');
});

// Mobile Menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    
    if (mobileMenuBtn && mobileMenu && mobileMenuClose) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('-translate-x-full');
            document.body.style.overflow = 'hidden';
        });
        
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.add('-translate-x-full');
            document.body.style.overflow = 'auto';
        });
        
        // Close menu when clicking outside
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                mobileMenu.classList.add('-translate-x-full');
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Initialize mobile menu when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ready, scroll animation initialized');
    initMobileMenu();
    initNavigationScroll();
});

// Initialize navigation scroll functionality
function initNavigationScroll() {
    // Desktop navigation
    const allLink = document.getElementById('nav-all');
    if (allLink) {
        allLink.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToFeaturedProducts();
        });
    }
    
    
    // Mobile navigation
    const mobileAllLink = document.querySelector('#mobile-menu a[href="#"]');
    if (mobileAllLink) {
        mobileAllLink.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToFeaturedProducts();
            // Close mobile menu after clicking
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.add('-translate-x-full');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
}

// Function to scroll to featured products section
function scrollToFeaturedProducts() {
    const featuredSection = document.querySelector('.bg-luxury-gray');
    if (featuredSection) {
        // Smooth scroll to the featured products section
        featuredSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Show notification
        showNotification('Đang chuyển đến sản phẩm nổi bật...');
    }
}


// Sale Modal Functions
function openSaleModal() {
    const modal = document.getElementById('saleModal');
    const modalContent = document.getElementById('saleModalContent');
    
    if (modal && modalContent) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Animate modal appearance
        setTimeout(() => {
            modalContent.classList.remove('scale-95', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
        }, 100);
    }
}

function closeSaleModal() {
    const modal = document.getElementById('saleModal');
    const modalContent = document.getElementById('saleModalContent');
    
    if (modal && modalContent) {
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');
        
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

function viewFeaturedProducts() {
    closeSaleModal();
    setTimeout(() => {
        scrollToFeaturedProducts();
    }, 300);
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('saleModal');
    if (modal && !modal.classList.contains('hidden')) {
        if (e.target === modal) {
            closeSaleModal();
        }
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeSaleModal();
    }
});

// Show all products modal
function showAllProducts() {
    const modal = document.getElementById('allProductsModal');
    const grid = document.getElementById('allProductsGrid');
    
    // Clear existing content
    grid.innerHTML = '';
    
    // Generate all products
    Object.keys(products).forEach(productId => {
        const product = products[productId];
        const productCard = createProductCard(productId, product);
        grid.appendChild(productCard);
    });
    
    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close all products modal
function closeAllProducts() {
    const modal = document.getElementById('allProductsModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Create product card for modal
function createProductCard(productId, product) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer';
    
    card.innerHTML = `
        <div class="relative" onclick="showProductDetail(${productId})">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">Hot</div>
        </div>
        <div class="p-4">
            <h3 class="text-lg font-semibold text-luxury-black mb-2">${product.name}</h3>
            <p class="text-gray-600 mb-3 text-sm">Chất lượng cao cấp</p>
            <div class="flex items-center justify-between mb-4">
                <span class="text-xl font-bold text-luxury-gold">${product.price.toLocaleString('vi-VN')}đ</span>
                <div class="flex items-center space-x-1 text-yellow-400">
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                    <span class="text-gray-600 ml-1 text-sm">(5)</span>
                </div>
            </div>
            <button onclick="addToCart(${productId})" class="w-full bg-luxury-gold text-luxury-black py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center justify-center space-x-2 text-sm">
                <i class="fas fa-shopping-bag"></i><span>Thêm vào giỏ</span>
            </button>
        </div>
    `;
    
    return card;
}

// Close all products modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('allProductsModal');
    if (modal && !modal.classList.contains('hidden')) {
        if (event.target === modal) {
            closeAllProducts();
        }
    }
});

// Close all products modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAllProducts();
    }
});

// Close modals when clicking outside
document.addEventListener('click', function(event) {
    const sizeColorModal = document.getElementById('sizeColorModal');
    if (sizeColorModal && !sizeColorModal.classList.contains('hidden')) {
        if (event.target === sizeColorModal) {
            closeSizeColorModal();
        }
    }
    
    const sizeGuideModal = document.getElementById('sizeGuideModal');
    if (sizeGuideModal && !sizeGuideModal.classList.contains('hidden')) {
        if (event.target === sizeGuideModal) {
            closeSizeGuide();
        }
    }
});

// Close modals with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const sizeColorModal = document.getElementById('sizeColorModal');
        if (sizeColorModal && !sizeColorModal.classList.contains('hidden')) {
            closeSizeColorModal();
        }
        
        const sizeGuideModal = document.getElementById('sizeGuideModal');
        if (sizeGuideModal && !sizeGuideModal.classList.contains('hidden')) {
            closeSizeGuide();
        }
    }
});

// Show size and color selection modal
function showSizeColorModal(productId, product) {
    // Create modal if not exists
    let modal = document.getElementById('sizeColorModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'sizeColorModal';
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4';
        document.body.appendChild(modal);
    }
    
    // Size and color options
    const sizes = ['S', 'L', 'XL'];
    const colors = [
        { name: 'Đen', code: '#000000' },
        { name: 'Trắng', code: '#FFFFFF' },
        { name: 'Xám', code: '#808080' }
    ];
    
    // Size guide data
    const sizeGuide = {
        'S': { chest: '89-92cm', waist: '74-77cm', hip: '94-97cm' },
        'L': { chest: '95-98cm', waist: '80-83cm', hip: '100-103cm' },
        'XL': { chest: '98-101cm', waist: '83-86cm', hip: '103-106cm' }
    };
    
    modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-md w-full max-h-[85vh] overflow-y-auto">
            <div class="p-4">
                <!-- Header -->
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg font-bold text-luxury-black">Chọn size và màu sắc</h2>
                    <button onclick="closeSizeColorModal()" class="text-gray-400 hover:text-luxury-black text-xl">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <!-- Product Info -->
                <div class="flex items-center space-x-3 mb-4 p-3 bg-gray-50 rounded-lg">
                    <img src="${product.image}" alt="${product.name}" class="w-16 h-16 object-cover rounded-lg">
                    <div>
                        <h3 class="text-sm font-semibold text-luxury-black">${product.name}</h3>
                        <p class="text-lg font-bold text-luxury-gold">${product.price.toLocaleString('vi-VN')}₫</p>
                    </div>
                </div>
                
                <!-- Selected Options Display -->
                <div id="selectedOptions" class="mb-4 p-3 bg-luxury-gold bg-opacity-10 rounded-lg hidden">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4 text-xs">
                            <div id="selectedSizeDisplay" class="flex items-center">
                                <span class="text-gray-600">Size:</span>
                                <span class="ml-1 font-semibold text-luxury-black" id="selectedSizeText">S</span>
                            </div>
                            <div id="selectedColorDisplay" class="flex items-center">
                                <span class="text-gray-600">Màu:</span>
                                <span class="ml-1 font-semibold text-luxury-black" id="selectedColorText">Đen</span>
                            </div>
                        </div>
                        <button onclick="addToCartWithSelection(${productId})" 
                                class="bg-luxury-gold text-luxury-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center space-x-1 text-sm">
                            <i class="fas fa-shopping-bag text-xs"></i>
                            <span>Thêm vào giỏ</span>
                        </button>
                    </div>
                </div>
                
                <!-- Colors -->
                <div class="mb-4">
                    <h3 class="text-sm font-semibold text-luxury-black mb-2">Màu sắc</h3>
                    <div class="flex space-x-3">
                        ${colors.map((color, index) => `
                            <button onclick="selectColor('${color.name}', '${color.code}')" 
                                    class="relative w-12 h-12 rounded-full border-2 border-gray-300 hover:border-luxury-gold transition-all duration-200 hover:scale-110 color-option" 
                                    style="background-color: ${color.code}" 
                                    title="${color.name}"
                                    data-color="${color.name}"
                                    data-color-code="${color.code}">
                                <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-luxury-gold rounded-full flex items-center justify-center hidden selected-indicator">
                                    <i class="fas fa-check text-white text-xs"></i>
                                </div>
                                <div class="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600">${color.name}</div>
                            </button>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Sizes -->
                <div class="mb-4">
                    <h3 class="text-sm font-semibold text-luxury-black mb-2">Kích thước</h3>
                    <div class="flex space-x-2">
                        ${sizes.map(size => `
                            <button onclick="selectSize('${size}')" 
                                    class="px-6 py-3 border border-gray-300 rounded-lg hover:border-luxury-gold hover:bg-luxury-gold hover:text-white transition-all duration-200 text-center font-medium text-sm hover:scale-105 size-option"
                                    data-size="${size}">
                                ${size}
                            </button>
                        `).join('')}
                    </div>
                    <div class="mt-2 flex items-center justify-between">
                        <button onclick="showSizeGuide()" class="text-xs text-luxury-gold hover:underline flex items-center">
                            <i class="fas fa-ruler mr-1"></i>
                            Hướng dẫn chọn size
                        </button>
                        <span class="text-xs text-gray-500">Chọn size phù hợp</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Initialize with default selections
    selectSize('S');
    selectColor('Đen', '#000000');
}

// Close size color modal
function closeSizeColorModal() {
    const modal = document.getElementById('sizeColorModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Show size guide modal
function showSizeGuide() {
    let sizeModal = document.getElementById('sizeGuideModal');
    if (!sizeModal) {
        sizeModal = document.createElement('div');
        sizeModal.id = 'sizeGuideModal';
        sizeModal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4';
        document.body.appendChild(sizeModal);
    }
    
    const sizeGuide = {
        'S': { chest: '89-92cm', waist: '74-77cm', hip: '94-97cm' },
        'L': { chest: '95-98cm', waist: '80-83cm', hip: '100-103cm' },
        'XL': { chest: '98-101cm', waist: '83-86cm', hip: '103-106cm' }
    };
    
    sizeModal.innerHTML = `
        <div class="bg-white rounded-xl max-w-lg w-full max-h-[75vh] overflow-y-auto">
            <div class="p-4">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg font-bold text-luxury-black">Hướng dẫn chọn size</h2>
                    <button onclick="closeSizeGuide()" class="text-gray-400 hover:text-luxury-black text-xl">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="mb-4">
                    <h3 class="text-sm font-semibold text-luxury-black mb-3">Bảng size chuẩn (cm)</h3>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border border-gray-300 text-xs">
                            <thead>
                                <tr class="bg-luxury-gold text-white">
                                    <th class="border border-gray-300 px-3 py-2 text-left">Size</th>
                                    <th class="border border-gray-300 px-3 py-2 text-center">Ngực</th>
                                    <th class="border border-gray-300 px-3 py-2 text-center">Eo</th>
                                    <th class="border border-gray-300 px-3 py-2 text-center">Hông</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${Object.entries(sizeGuide).map(([size, measurements]) => `
                                    <tr class="hover:bg-gray-50">
                                        <td class="border border-gray-300 px-3 py-2 font-semibold text-luxury-black">${size}</td>
                                        <td class="border border-gray-300 px-3 py-2 text-center">${measurements.chest}</td>
                                        <td class="border border-gray-300 px-3 py-2 text-center">${measurements.waist}</td>
                                        <td class="border border-gray-300 px-3 py-2 text-center">${measurements.hip}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div class="bg-gray-50 p-3 rounded-lg">
                    <h4 class="font-semibold text-luxury-black mb-2 text-sm">Cách đo size:</h4>
                    <ul class="text-xs text-gray-600 space-y-1">
                        <li>• <strong>Ngực:</strong> Đo vòng ngực tại điểm rộng nhất</li>
                        <li>• <strong>Eo:</strong> Đo vòng eo tại điểm nhỏ nhất</li>
                        <li>• <strong>Hông:</strong> Đo vòng hông tại điểm rộng nhất</li>
                    </ul>
                </div>
                
                <div class="mt-4 text-center">
                    <button onclick="closeSizeGuide()" class="bg-luxury-gold text-luxury-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-sm">
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    `;
    
    sizeModal.classList.remove('hidden');
}

// Close size guide modal
function closeSizeGuide() {
    const modal = document.getElementById('sizeGuideModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Global variables for selected options
let selectedSize = 'S';
let selectedColor = 'Đen';

// Select size function
function selectSize(size) {
    selectedSize = size;
    
    // Update UI
    document.querySelectorAll('.size-option').forEach(btn => {
        btn.classList.remove('bg-luxury-gold', 'text-white', 'border-luxury-gold');
        btn.classList.add('border-gray-300');
    });
    
    const selectedBtn = document.querySelector(`[data-size="${size}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('bg-luxury-gold', 'text-white', 'border-luxury-gold');
        selectedBtn.classList.remove('border-gray-300');
    }
    
    // Update display
    document.getElementById('selectedSizeText').textContent = size;
    updateSelectedOptionsDisplay();
}

// Select color function
function selectColor(colorName, colorCode) {
    selectedColor = colorName;
    
    // Update UI
    document.querySelectorAll('.color-option').forEach(btn => {
        btn.classList.remove('border-luxury-gold');
        btn.classList.add('border-gray-300');
        btn.querySelector('.selected-indicator').classList.add('hidden');
    });
    
    const selectedBtn = document.querySelector(`[data-color="${colorName}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('border-luxury-gold');
        selectedBtn.classList.remove('border-gray-300');
        selectedBtn.querySelector('.selected-indicator').classList.remove('hidden');
    }
    
    // Update display
    document.getElementById('selectedColorText').textContent = colorName;
    updateSelectedOptionsDisplay();
}

// Update selected options display
function updateSelectedOptionsDisplay() {
    const selectedOptions = document.getElementById('selectedOptions');
    selectedOptions.classList.remove('hidden');
}

// Show product detail modal
function showProductDetail(productId) {
    const product = products[productId];
    if (!product) return;
    
    // Create modal if not exists
    let modal = document.getElementById('productDetailModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'productDetailModal';
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4';
        document.body.appendChild(modal);
    }
    
    // Product details with sizes and colors
    const sizes = ['S', 'L', 'XL', 'XXL'];
    const colors = [
        { name: 'Đen', code: '#000000', available: true },
        { name: 'Trắng', code: '#FFFFFF', available: true },
        { name: 'Xám', code: '#808080', available: true }
    ];
    
    // Size guide data
    const sizeGuide = {
        'S': { chest: '89-92cm', waist: '74-77cm', hip: '94-97cm' },
        'L': { chest: '95-98cm', waist: '80-83cm', hip: '100-103cm' },
        'XL': { chest: '98-101cm', waist: '83-86cm', hip: '103-106cm' },
        'XXL': { chest: '101-104cm', waist: '86-89cm', hip: '106-109cm' }
    };
    
    modal.innerHTML = `
        <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div class="flex flex-col lg:flex-row">
                <!-- Product Image -->
                <div class="lg:w-1/2 p-6">
                    <div class="relative">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-96 object-cover rounded-xl">
                        <div class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Hot</div>
                    </div>
                </div>
                
                <!-- Product Info -->
                <div class="lg:w-1/2 p-6">
                    <div class="flex justify-between items-start mb-4">
                        <h2 class="text-2xl font-bold text-luxury-black">${product.name}</h2>
                        <button onclick="closeProductDetail()" class="text-gray-400 hover:text-luxury-black text-2xl">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <!-- Selected Options Display -->
                    <div id="selectedOptions" class="mb-4 p-3 bg-gray-50 rounded-lg hidden">
                        <div class="flex items-center space-x-4 text-sm">
                            <div id="selectedSizeDisplay" class="flex items-center">
                                <span class="text-gray-600">Size:</span>
                                <span class="ml-1 font-semibold text-luxury-black" id="selectedSizeText">S</span>
                            </div>
                            <div id="selectedColorDisplay" class="flex items-center">
                                <span class="text-gray-600">Màu:</span>
                                <span class="ml-1 font-semibold text-luxury-black" id="selectedColorText">Đen</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Price -->
                    <div class="mb-6">
                        <span class="text-3xl font-bold text-luxury-gold">${product.price.toLocaleString('vi-VN')}₫</span>
                        <span class="text-gray-500 line-through ml-2">${(product.price * 1.2).toLocaleString('vi-VN')}₫</span>
                    </div>
                    
                    <!-- Rating -->
                    <div class="flex items-center mb-6">
                        <div class="flex items-center space-x-1 text-yellow-400">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </div>
                        <span class="text-gray-600 ml-2">(4.9) • 128 đánh giá</span>
                    </div>
                    
                    <!-- Colors -->
                    <div class="mb-6">
                        <h3 class="text-lg font-semibold text-luxury-black mb-3">Màu sắc</h3>
                        <div class="flex space-x-4">
                            ${colors.map((color, index) => `
                                <button onclick="selectColor('${color.name}', '${color.code}')" 
                                        class="relative w-12 h-12 rounded-full border-2 border-gray-300 hover:border-luxury-gold transition-all duration-200 hover:scale-110 color-option" 
                                        style="background-color: ${color.code}" 
                                        title="${color.name}"
                                        data-color="${color.name}"
                                        data-color-code="${color.code}">
                                    <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-luxury-gold rounded-full flex items-center justify-center hidden selected-indicator">
                                        <i class="fas fa-check text-white text-xs"></i>
                                    </div>
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Sizes -->
                    <div class="mb-6">
                        <h3 class="text-lg font-semibold text-luxury-black mb-3">Kích thước</h3>
                        <div class="flex space-x-3">
                            ${sizes.map(size => `
                                <button onclick="selectSize('${size}')" 
                                        class="px-6 py-3 border border-gray-300 rounded-lg hover:border-luxury-gold hover:bg-luxury-gold hover:text-white transition-all duration-200 text-center font-medium text-sm hover:scale-105 size-option"
                                        data-size="${size}">
                                    ${size}
                                </button>
                            `).join('')}
                        </div>
                        <div class="mt-3 flex items-center justify-between">
                            <button onclick="showSizeGuide()" class="text-sm text-luxury-gold hover:underline flex items-center">
                                <i class="fas fa-ruler mr-1"></i>
                                Hướng dẫn chọn size
                            </button>
                            <span class="text-xs text-gray-500">Chọn size phù hợp</span>
                        </div>
                    </div>
                    
                    
                    <!-- Action Buttons -->
                    <div class="flex space-x-3">
                        <button onclick="addToCartWithSelection(${productId})" 
                                class="flex-1 bg-luxury-gold text-luxury-black py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center justify-center space-x-2">
                            <i class="fas fa-shopping-bag"></i>
                            <span>Thêm vào giỏ</span>
                        </button>
                        <button class="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            <i class="fas fa-heart text-gray-600"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close product detail modal
function closeProductDetail() {
    const modal = document.getElementById('productDetailModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Show size guide modal
function showSizeGuide() {
    let sizeModal = document.getElementById('sizeGuideModal');
    if (!sizeModal) {
        sizeModal = document.createElement('div');
        sizeModal.id = 'sizeGuideModal';
        sizeModal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4';
        document.body.appendChild(sizeModal);
    }
    
    const sizeGuide = {
        'S': { chest: '89-92cm', waist: '74-77cm', hip: '94-97cm' },
        'L': { chest: '95-98cm', waist: '80-83cm', hip: '100-103cm' },
        'XL': { chest: '98-101cm', waist: '83-86cm', hip: '103-106cm' },
        'XXL': { chest: '101-104cm', waist: '86-89cm', hip: '106-109cm' }
    };
    
    sizeModal.innerHTML = `
        <div class="bg-white rounded-xl max-w-lg w-full max-h-[75vh] overflow-y-auto">
            <div class="p-4">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg font-bold text-luxury-black">Hướng dẫn chọn size</h2>
                    <button onclick="closeSizeGuide()" class="text-gray-400 hover:text-luxury-black text-xl">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="mb-4">
                    <h3 class="text-sm font-semibold text-luxury-black mb-3">Bảng size chuẩn (cm)</h3>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border border-gray-300 text-xs">
                            <thead>
                                <tr class="bg-luxury-gold text-white">
                                    <th class="border border-gray-300 px-3 py-2 text-left">Size</th>
                                    <th class="border border-gray-300 px-3 py-2 text-center">Ngực</th>
                                    <th class="border border-gray-300 px-3 py-2 text-center">Eo</th>
                                    <th class="border border-gray-300 px-3 py-2 text-center">Hông</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${Object.entries(sizeGuide).map(([size, measurements]) => `
                                    <tr class="hover:bg-gray-50">
                                        <td class="border border-gray-300 px-3 py-2 font-semibold text-luxury-black">${size}</td>
                                        <td class="border border-gray-300 px-3 py-2 text-center">${measurements.chest}</td>
                                        <td class="border border-gray-300 px-3 py-2 text-center">${measurements.waist}</td>
                                        <td class="border border-gray-300 px-3 py-2 text-center">${measurements.hip}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div class="bg-gray-50 p-3 rounded-lg">
                    <h4 class="font-semibold text-luxury-black mb-2 text-sm">Cách đo size:</h4>
                    <ul class="text-xs text-gray-600 space-y-1">
                        <li>• <strong>Ngực:</strong> Đo vòng ngực tại điểm rộng nhất</li>
                        <li>• <strong>Eo:</strong> Đo vòng eo tại điểm nhỏ nhất</li>
                        <li>• <strong>Hông:</strong> Đo vòng hông tại điểm rộng nhất</li>
                    </ul>
                </div>
                
                <div class="mt-4 text-center">
                    <button onclick="closeSizeGuide()" class="bg-luxury-gold text-luxury-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-sm">
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    `;
    
    sizeModal.classList.remove('hidden');
}

// Close size guide modal
function closeSizeGuide() {
    const modal = document.getElementById('sizeGuideModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Global variables for selected options
let selectedSize = 'S';
let selectedColor = 'Đen';

// Select size function
function selectSize(size) {
    selectedSize = size;
    
    // Update UI
    document.querySelectorAll('.size-option').forEach(btn => {
        btn.classList.remove('bg-luxury-gold', 'text-white', 'border-luxury-gold');
        btn.classList.add('border-gray-300');
    });
    
    const selectedBtn = document.querySelector(`[data-size="${size}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('bg-luxury-gold', 'text-white', 'border-luxury-gold');
        selectedBtn.classList.remove('border-gray-300');
    }
    
    // Update display
    document.getElementById('selectedSizeText').textContent = size;
    updateSelectedOptionsDisplay();
}

// Select color function
function selectColor(colorName, colorCode) {
    selectedColor = colorName;
    
    // Update UI
    document.querySelectorAll('.color-option').forEach(btn => {
        btn.classList.remove('border-luxury-gold');
        btn.classList.add('border-gray-300');
        btn.querySelector('.selected-indicator').classList.add('hidden');
    });
    
    const selectedBtn = document.querySelector(`[data-color="${colorName}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('border-luxury-gold');
        selectedBtn.classList.remove('border-gray-300');
        selectedBtn.querySelector('.selected-indicator').classList.remove('hidden');
    }
    
    // Update display
    document.getElementById('selectedColorText').textContent = colorName;
    updateSelectedOptionsDisplay();
}

// Update selected options display
function updateSelectedOptionsDisplay() {
    const selectedOptions = document.getElementById('selectedOptions');
    selectedOptions.classList.remove('hidden');
}

// Add to cart with selected options
function addToCartWithSelection(productId) {
    addToCart(productId, selectedSize, selectedColor);
    closeProductDetail();
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('productDetailModal');
    if (modal && !modal.classList.contains('hidden')) {
        if (event.target === modal) {
            closeProductDetail();
        }
    }
    
    const sizeModal = document.getElementById('sizeGuideModal');
    if (sizeModal && !sizeModal.classList.contains('hidden')) {
        if (event.target === sizeModal) {
            closeSizeGuide();
        }
    }
});

// Test function for manual animation trigger
window.testCountersImmediately = function() {
    console.log('=== MANUAL TEST TRIGGERED ===');
    
    // Reset counters to 0 immediately
    const counter1 = document.getElementById('counter1');
    const counter2 = document.getElementById('counter2');
    const counter3 = document.getElementById('counter3');
    
    console.log('Counter elements found:', {counter1, counter2, counter3});
    
    if (counter1) {
        counter1.textContent = '0';
        console.log('Reset counter1 to 0');
    }
    if (counter2) {
        counter2.textContent = '0';
        console.log('Reset counter2 to 0');
    }
    if (counter3) {
        counter3.textContent = '0';
        console.log('Reset counter3 to 0');
    }
    
    // Start animation immediately
    console.log('Calling animateCounters...');
    animateCounters();
};

// Auto-start counter animation when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for page to fully load, then start animation
    setTimeout(() => {
        console.log('Auto-starting counter animation...');
        animateCounters();
    }, 1000);
});

console.log('Script loaded successfully!');