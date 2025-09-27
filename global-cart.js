// Simple Global Cart System
console.log('Simple global cart system loaded');

// Global variables
let cart = [];
let cartCount = 0; // This will store total quantity, not number of items

// Product data
const products = {
    1: { name: "Áo sơ mi nam cao cấp", price: 2500000, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop", category: "clothing" },
    2: { name: "Váy dạ hội sang trọng", price: 3200000, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop", category: "clothing" },
    3: { name: "Áo thun cao cấp", price: 850000, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop", category: "clothing" },
    4: { name: "Quần jean slim fit", price: 1200000, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop", category: "clothing" },
    5: { name: "Áo khoác nữ thanh lịch", price: 4500000, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop", category: "clothing" },
    6: { name: "Quần tây nam cao cấp", price: 1800000, image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=300&fit=crop", category: "clothing" },
    7: { name: "Váy maxi nữ đẹp", price: 2200000, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop", category: "clothing" },
    8: { name: "Áo hoodie nam trẻ trung", price: 1500000, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop", category: "clothing" },
    9: { name: "Quần short nữ mùa hè", price: 650000, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop", category: "clothing" },
    10: { name: "Áo sơ mi nữ công sở", price: 1900000, image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=300&fit=crop", category: "clothing" },
    11: { name: "Quần jogger nam thể thao", price: 1100000, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop", category: "clothing" },
    12: { name: "Váy đầm nữ dự tiệc", price: 5500000, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop", category: "clothing" },
    13: { name: "Áo len nam ấm áp", price: 2800000, image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=300&fit=crop", category: "clothing" },
    14: { name: "Quần legging nữ tập gym", price: 750000, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop", category: "clothing" },
    15: { name: "Áo blazer nữ công sở", price: 3200000, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop", category: "clothing" },
    16: { name: "Quần short nam thể thao", price: 450000, image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=300&fit=crop", category: "clothing" },
    17: { name: "Váy midi nữ thanh lịch", price: 1650000, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop", category: "clothing" },
    18: { name: "Áo cardigan nữ ấm áp", price: 1350000, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop", category: "clothing" },
    19: { name: "Quần chinos nam casual", price: 1400000, image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=300&fit=crop", category: "clothing" },
    20: { name: "Set đồ nữ công sở", price: 4200000, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop", category: "clothing" },

    // Giày dép (ID 101-120)
    101: { name: "Giày sneaker cao cấp", price: 3500000, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop", category: "footwear" },
    102: { name: "Giày boot nam sang trọng", price: 4200000, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop", category: "footwear" },
    103: { name: "Sandals mùa hè", price: 1800000, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop", category: "footwear" },
    104: { name: "Giày cao gót nữ", price: 2800000, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop", category: "footwear" },
    105: { name: "Giày thể thao nữ", price: 3200000, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop", category: "footwear" },
    106: { name: "Giày lười nam", price: 2200000, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop", category: "footwear" },
    107: { name: "Giày oxford nam", price: 3800000, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop", category: "footwear" },
    108: { name: "Giày cao gót party", price: 2500000, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop", category: "footwear" },
    109: { name: "Giày sneaker unisex", price: 2900000, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop", category: "footwear" },
    110: { name: "Giày boot nữ", price: 3600000, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop", category: "footwear" },
    111: { name: "Giày thể thao nam", price: 3100000, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop", category: "footwear" },
    112: { name: "Giày cao gót sang trọng", price: 4000000, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop", category: "footwear" },
    113: { name: "Giày lười nữ", price: 1800000, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop", category: "footwear" },
    114: { name: "Giày sneaker trẻ em", price: 1500000, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop", category: "footwear" },
    115: { name: "Giày boot cao cổ", price: 4500000, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop", category: "footwear" },
    116: { name: "Giày sandal nữ", price: 1200000, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop", category: "footwear" },
    117: { name: "Giày thể thao chạy bộ", price: 2800000, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop", category: "footwear" },
    118: { name: "Giày cao gót đế bệt", price: 2000000, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop", category: "footwear" },
    119: { name: "Giày sneaker retro", price: 2600000, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop", category: "footwear" },
    120: { name: "Giày boot da cao cấp", price: 4800000, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop", category: "footwear" },

    // Nước hoa (ID 201-220)
    201: { name: "Nước hoa nam cao cấp", price: 1800000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" },
    202: { name: "Nước hoa nữ sang trọng", price: 2200000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" },
    203: { name: "Nước hoa unisex", price: 2500000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" },
    204: { name: "Nước hoa nam quyến rũ", price: 3200000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" },
    205: { name: "Nước hoa nữ thanh lịch", price: 2800000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" },
    206: { name: "Nước hoa nam thể thao", price: 1500000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" },
    207: { name: "Nước hoa nữ dự tiệc", price: 3500000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" },
    208: { name: "Nước hoa nam công sở", price: 2000000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" },
    209: { name: "Nước hoa nữ công sở", price: 2400000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" },
    210: { name: "Nước hoa nam mùa hè", price: 1600000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" },
    211: { name: "Nước hoa nữ mùa hè", price: 1900000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" },
    212: { name: "Nước hoa nam mùa đông", price: 3000000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" },
    213: { name: "Nước hoa nữ mùa đông", price: 3300000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" },
    214: { name: "Nước hoa nam cổ điển", price: 4000000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" },
    215: { name: "Nước hoa nữ cổ điển", price: 4200000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" },
    216: { name: "Nước hoa nam hiện đại", price: 2600000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" },
    217: { name: "Nước hoa nữ hiện đại", price: 2900000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" },
    218: { name: "Nước hoa nam premium", price: 4500000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" },
    219: { name: "Nước hoa nữ premium", price: 4800000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" },
    220: { name: "Set nước hoa cao cấp", price: 8500000, image: "https://images.unsplash.com/photo-1541643600914-f87e34085b2c?w=400&h=300&fit=crop", category: "perfume" }
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
    // Count total quantity instead of number of items
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    console.log('Cart count updated (total quantity):', cartCount);
    
    // Update cart count display
    const cartCountElements = document.querySelectorAll('#cart-count, .cart-count, [id*="cart-count"]');
    cartCountElements.forEach(element => {
        element.textContent = cartCount;
    });
}

// Add to cart - now shows size/color selection modal
function addToCart(productId) {
    console.log('Adding product to cart:', productId);
    
    const product = products[productId];
    if (!product) {
        console.error('Product not found:', productId);
        showNotification('Sản phẩm không tồn tại!', 'error');
        return;
    }
    
    // Show size and color selection modal
    showSizeColorModal(productId, product);
}

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

// Add to cart with selected options
function addToCartWithSelection(productId) {
    const product = products[productId];
    if (!product) {
        console.error('Product not found:', productId);
        showNotification('Sản phẩm không tồn tại!', 'error');
        return;
    }
    
    // Add loading state
    const addButton = document.querySelector(`[onclick="addToCartWithSelection(${productId})"]`);
    if (addButton) {
        const originalText = addButton.innerHTML;
        addButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang thêm...';
        addButton.disabled = true;
        
        setTimeout(() => {
            addButton.innerHTML = originalText;
            addButton.disabled = false;
        }, 1000);
    }
    
    // Check if product already exists in cart with same size and color
    console.log('Current cart before adding:', cart);
    console.log('Looking for product ID:', productId, 'Size:', selectedSize, 'Color:', selectedColor);
    
    // Convert productId to number for comparison
    const numericProductId = parseInt(productId);
    console.log('Numeric product ID:', numericProductId);
    
    const existingItem = cart.find(item => 
        item.id === numericProductId && 
        item.size === selectedSize && 
        item.color === selectedColor
    );
    console.log('Existing item found:', existingItem);
    
    if (existingItem) {
        existingItem.quantity += 1;
        console.log('Product quantity increased to:', existingItem.quantity);
        console.log('Updated cart after increase:', cart);
        showNotification(`Đã tăng số lượng ${product.name}! (Size: ${selectedSize}, Màu: ${selectedColor}) - ${existingItem.quantity} sản phẩm`, 'success');
    } else {
        const newItem = {
            id: numericProductId,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: 1,
            size: selectedSize,
            color: selectedColor
        };
        cart.push(newItem);
        console.log('New product added to cart:', newItem);
        console.log('Updated cart after adding new:', cart);
        showNotification(`Đã thêm ${product.name} vào giỏ hàng! (Size: ${selectedSize}, Màu: ${selectedColor})`, 'success');
    }
    
    saveCart();
    updateCartCount();
    
    // Add cart animation
    animateCartIcon();
    
    // Close modal
    closeSizeColorModal();
    
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
function showNotification(message, type = 'success') {
    console.log('Notification:', message);
    
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.cart-notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `cart-notification fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.style.transform = 'translateX(100%)';
    notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Animate cart icon
function animateCartIcon() {
    const cartIcon = document.querySelector('#cart-icon, .cart-icon, [id*="cart-icon"]');
    if (cartIcon) {
        cartIcon.style.transform = 'scale(1.2)';
        cartIcon.style.transition = 'transform 0.2s ease-in-out';
        
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 200);
    }
}

// Open cart modal
function openCart() {
    console.log('Opening cart modal...');
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.opacity = '0';
        modal.style.transform = 'translateY(-20px)';
        modal.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';
        
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.style.transform = 'translateY(0)';
        }, 10);
        
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
        modal.style.opacity = '0';
        modal.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.style.opacity = '';
            modal.style.transform = '';
        }, 300);
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
        
        // Add cart items with smooth animation
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'flex items-center space-x-4 p-4 border-b border-gray-200 hover:bg-gray-50 transition-all duration-200 ease-out cart-item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg shadow-md">
                <div class="flex-1">
                    <h3 class="font-semibold text-gray-800 text-lg">${item.name}</h3>
                    <p class="text-gray-600 text-sm">Size: <span class="font-semibold text-luxury-black">${item.size || 'S'}</span></p>
                    <p class="text-gray-600 text-sm">Màu: <span class="font-semibold text-luxury-black">${item.color || 'Đen'}</span></p>
                    <p class="text-luxury-gold font-bold text-xl">${(item.price * item.quantity).toLocaleString()}₫</p>
                </div>
                <div class="flex items-center space-x-3">
                    <div class="flex items-center space-x-2">
                        <button onclick="decreaseQuantity(${item.id}, '${item.size || 'S'}', '${item.color || 'Đen'}')" class="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-150">
                            <i class="fas fa-minus text-sm"></i>
                        </button>
                        <span class="w-8 text-center font-semibold">${item.quantity}</span>
                        <button onclick="increaseQuantity(${item.id}, '${item.size || 'S'}', '${item.color || 'Đen'}')" class="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-150">
                            <i class="fas fa-plus text-sm"></i>
                        </button>
                    </div>
                    <button onclick="removeFromCart(${item.id}, '${item.size || 'S'}', '${item.color || 'Đen'}')" class="w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-150">
                        <i class="fas fa-trash text-white text-sm"></i>
                    </button>
                </div>
            `;
            cartItems.appendChild(itemElement);
        });
        
        // Update total
        const summary = getCartSummary();
        cartTotal.textContent = summary.totalPrice.toLocaleString() + '₫';
    }
}

// Increase quantity
function increaseQuantity(productId, size, color) {
    console.log('Increasing quantity for product:', productId, 'Size:', size, 'Color:', color);
    
    const numericProductId = parseInt(productId);
    const item = cart.find(item => 
        item.id == numericProductId && 
        item.size === size && 
        item.color === color
    );
    if (item) {
        item.quantity += 1;
        console.log('Product quantity increased:', item);
        
        saveCart();
        updateCartCount();
        updateCartDisplay();
        showNotification(`Đã tăng số lượng ${item.name}! (Size: ${size}, Màu: ${color}) - ${item.quantity} sản phẩm`, 'success');
    } else {
        console.error('Product not found in cart:', productId);
        showNotification('Sản phẩm không tồn tại trong giỏ hàng!', 'error');
    }
}

// Decrease quantity
function decreaseQuantity(productId, size, color) {
    console.log('Decreasing quantity for product:', productId, 'Size:', size, 'Color:', color);
    
    const numericProductId = parseInt(productId);
    const itemIndex = cart.findIndex(item => 
        item.id == numericProductId && 
        item.size === size && 
        item.color === color
    );
    if (itemIndex !== -1) {
        const item = cart[itemIndex];
        if (item.quantity > 1) {
            item.quantity -= 1;
            console.log('Product quantity decreased:', item);
            showNotification(`Đã giảm số lượng ${item.name}! (Size: ${size}, Màu: ${color}) - ${item.quantity} sản phẩm`, 'success');
        } else {
            cart.splice(itemIndex, 1);
            console.log('Product removed from cart:', item);
            showNotification(`Đã xóa ${item.name} khỏi giỏ hàng! (Size: ${size}, Màu: ${color})`, 'success');
        }
        
        saveCart();
        updateCartCount();
        updateCartDisplay();
    } else {
        console.error('Product not found in cart:', productId);
        showNotification('Sản phẩm không tồn tại trong giỏ hàng!', 'error');
    }
}

// Remove item from cart - ULTRA SIMPLE VERSION
function removeFromCart(productId, size, color) {
    console.log('=== REMOVE FROM CART START ===');
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
        
        // Update everything
        saveCart();
        updateCartCount();
        updateCartDisplay();
        showNotification(`Đã xóa ${removedItem.name} khỏi giỏ hàng! (Size: ${size}, Màu: ${color})`, 'success');
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
        showNotification('Sản phẩm không tồn tại trong giỏ hàng!', 'error');
    }
    
    console.log('=== REMOVE FROM CART END ===');
}

// Clear cart
function clearCart() {
    console.log('Clearing cart...');
    
    if (cart.length === 0) {
        showNotification('Giỏ hàng đã trống!', 'info');
        return;
    }
    
    if (confirm('Bạn có chắc chắn muốn xóa tất cả sản phẩm trong giỏ hàng?')) {
        cart = [];
        saveCart();
        updateCartCount();
        updateCartDisplay();
        showNotification('Đã xóa tất cả sản phẩm trong giỏ hàng!', 'success');
    }
}

// Open Messenger with cart
function openMessengerWithCart() {
    console.log('Opening Messenger with cart...');
    const summary = getCartSummary();
    if (summary.totalItems === 0) {
        showNotification('Giỏ hàng trống! Vui lòng thêm sản phẩm trước khi đặt hàng.', 'info');
        return;
    }
    
    let message = '🛍️ **ĐẶT HÀNG Lâm Thúy**\n\n';
    message += 'Xin chào! Tôi muốn đặt hàng:\n\n';
    cart.forEach((item, index) => {
        message += `• ${item.name}\n`;
        message += `  - Size: ${item.size || 'S'}\n`;
        message += `  - Màu: ${item.color || 'Đen'}\n`;
        message += `  - Số lượng: ${item.quantity}\n`;
        message += `  - Giá: ${(item.price * item.quantity).toLocaleString()}₫\n\n`;
    });
    message += `💰 **Tổng cộng: ${summary.totalPrice.toLocaleString()}₫**\n\n`;
    message += 'Vui lòng liên hệ để xác nhận đơn hàng. Cảm ơn!';
    
    const encodedMessage = encodeURIComponent(message);
    const messengerUrl = `https://www.facebook.com/share/1AWfz2bQXY/?mibextid=wwXIfr`;
    window.open(messengerUrl, '_blank');
    
    showNotification('Đang mở Messenger để đặt hàng...', 'success');
}

// Debug function to check cart contents
function debugCart() {
    console.log('=== CART DEBUG ===');
    console.log('Cart length:', cart.length);
    console.log('Cart contents:', cart);
    console.log('Cart items details:');
    cart.forEach((item, index) => {
        console.log(`Item ${index}:`, {
            id: item.id,
            name: item.name,
            size: item.size,
            color: item.color,
            quantity: item.quantity,
            idType: typeof item.id,
            sizeType: typeof item.size,
            colorType: typeof item.color
        });
    });
    console.log('=== END CART DEBUG ===');
}

// Test function to manually remove an item
function testRemoveItem(productId, size, color) {
    console.log('=== TEST REMOVE ITEM ===');
    console.log('Testing removal with:', { productId, size, color });
    
    // First show current cart
    debugCart();
    
    // Try to remove
    removeFromCart(productId, size, color);
    
    // Show cart after removal
    console.log('Cart after removal attempt:');
    debugCart();
    
    console.log('=== END TEST REMOVE ITEM ===');
}

// Force remove first item (for testing)
function forceRemoveFirst() {
    if (cart.length > 0) {
        const firstItem = cart[0];
        console.log('Force removing first item:', firstItem);
        cart.splice(0, 1);
        saveCart();
        updateCartCount();
        updateCartDisplay();
        showNotification(`Đã xóa ${firstItem.name} khỏi giỏ hàng!`, 'success');
    } else {
        showNotification('Giỏ hàng trống!', 'error');
    }
}

// Make functions global
window.addToCart = addToCart;
window.openCart = openCart;
window.closeCart = closeCart;
window.clearCart = clearCart;
window.removeFromCart = removeFromCart;
window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.getCartSummary = getCartSummary;
window.showNotification = showNotification;
window.updateCartDisplay = updateCartDisplay;
window.updateCartCount = updateCartCount;
window.forceUpdateCart = forceUpdateCart;
window.openMessengerWithCart = openMessengerWithCart;
window.showSizeColorModal = showSizeColorModal;
window.closeSizeColorModal = closeSizeColorModal;
window.showSizeGuide = showSizeGuide;
window.closeSizeGuide = closeSizeGuide;
window.selectSize = selectSize;
window.selectColor = selectColor;
window.addToCartWithSelection = addToCartWithSelection;
window.debugCart = debugCart;
window.testRemoveItem = testRemoveItem;
window.forceRemoveFirst = forceRemoveFirst;

// Initialize cart
console.log('Initializing simple cart...');
initCart();

// Force update cart function
function forceUpdateCart() {
    console.log('Force updating cart...');
    initCart();
    updateCartDisplay();
    updateCartCount();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ready, initializing simple cart...');
    forceUpdateCart();
});

// Update when page loads
window.addEventListener('load', function() {
    console.log('Page loaded, updating simple cart...');
    forceUpdateCart();
});

// Update when page becomes visible
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        console.log('Page visible, updating cart...');
        forceUpdateCart();
    }
});

// Listen for storage changes
window.addEventListener('storage', function(e) {
    if (e.key === 'h2wear_cart') {
        console.log('Cart updated in another tab, syncing...');
        forceUpdateCart();
    }
});

// Update cart every 5 seconds to ensure sync (reduced frequency to prevent jitter)
setInterval(function() {
    if (typeof updateCartDisplay === 'function' && typeof updateCartCount === 'function') {
        // Only update if cart modal is not open to prevent jitter
        const cartModal = document.getElementById('cart-modal');
        if (!cartModal || cartModal.classList.contains('hidden')) {
            updateCartDisplay();
            updateCartCount();
        }
    }
}, 5000);

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

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

// Add loading states for better UX
function addLoadingState(element, text = 'Đang xử lý...') {
    if (element) {
        element.disabled = true;
        element.style.opacity = '0.7';
        const originalText = element.innerHTML;
        element.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${text}`;
        
        return () => {
            element.disabled = false;
            element.style.opacity = '1';
            element.innerHTML = originalText;
        };
    }
    return () => {};
}