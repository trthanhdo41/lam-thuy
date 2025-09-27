// Script to add cart functionality to all pages
// This script will be run to add cart button and modal to pages that don't have them

const fs = require('fs');
const path = require('path');

// List of pages to update
const pages = [
    'sneakers.html',
    'boots.html', 
    'heels.html',
    'sandals.html',
    'dress-shoes.html',
    'sports-shoes.html',
    'perfume-men.html',
    'perfume-women.html',
    'perfume-unisex.html',
    'perfume-summer.html',
    'perfume-natural.html',
    'perfume-luxury.html',
    'quan-ao.html'
];

// Cart button HTML
const cartButton = `
                <!-- Cart Button -->
                <div class="flex items-center space-x-4">
                    <button onclick="openCart()" class="relative p-2 text-gray-800 hover:text-luxury-gold transition-colors">
                        <i class="fas fa-shopping-bag text-xl"></i>
                        <span class="cart-count absolute -top-1 -right-1 bg-luxury-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                    </button>
                </div>`;

// Cart modal HTML
const cartModal = `
    <!-- Cart Modal -->
    <div id="cart-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden">
            <!-- Header -->
            <div class="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 class="text-2xl font-bold text-luxury-black">Giỏ hàng của bạn</h2>
                <button onclick="closeCart()" class="text-gray-400 hover:text-luxury-black transition-colors">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <!-- Cart Content -->
            <div class="p-6 overflow-y-auto max-h-96">
                <div id="empty-cart" class="text-center py-12">
                    <i class="fas fa-shopping-bag text-6xl text-gray-300 mb-4"></i>
                    <h3 class="text-xl font-semibold text-gray-600 mb-2">Giỏ hàng trống</h3>
                    <p class="text-gray-500">Hãy thêm sản phẩm vào giỏ hàng của bạn</p>
                </div>
                <div id="cart-items" class="space-y-4">
                    <!-- Cart items will be populated here -->
                </div>
            </div>
            
            <!-- Footer -->
            <div class="border-t border-gray-200 p-6">
                <div class="flex items-center justify-between mb-4">
                    <span class="text-lg font-semibold text-luxury-black">Tổng cộng:</span>
                    <span id="cart-total" class="text-2xl font-bold text-luxury-gold">0₫</span>
                </div>
                <div class="flex space-x-4">
                    <button onclick="closeCart()" class="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                        Tiếp tục mua sắm
                    </button>
                    <button onclick="openMessengerWithCart()" class="flex-1 bg-luxury-gold text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors">
                        <i class="fas fa-shopping-cart mr-2"></i>
                        Thanh toán
                    </button>
                </div>
            </div>
        </div>
    </div>`;

// Function to add cart to a page
function addCartToPage(pagePath) {
    try {
        let content = fs.readFileSync(pagePath, 'utf8');
        
        // Check if cart button already exists
        if (content.includes('cart-count')) {
            console.log(`Cart already exists in ${pagePath}`);
            return;
        }
        
        // Find the header section and add cart button
        // Look for navigation or header section
        const headerPattern = /(<div class="[^"]*flex[^"]*justify-between[^"]*items-center[^"]*py-4[^"]*">)/;
        const headerMatch = content.match(headerPattern);
        
        if (headerMatch) {
            // Add cart button before closing the header div
            content = content.replace(
                headerMatch[0],
                headerMatch[0] + cartButton
            );
        }
        
        // Add cart modal before closing body tag
        content = content.replace(
            '</body>',
            cartModal + '\n</body>'
        );
        
        // Write back to file
        fs.writeFileSync(pagePath, content, 'utf8');
        console.log(`Added cart to ${pagePath}`);
        
    } catch (error) {
        console.error(`Error processing ${pagePath}:`, error.message);
    }
}

// Process all pages
pages.forEach(page => {
    if (fs.existsSync(page)) {
        addCartToPage(page);
    } else {
        console.log(`File not found: ${page}`);
    }
});

console.log('Cart addition completed!');

// This script will be run to add cart button and modal to pages that don't have them

const fs = require('fs');
const path = require('path');

// List of pages to update
const pages = [
    'sneakers.html',
    'boots.html', 
    'heels.html',
    'sandals.html',
    'dress-shoes.html',
    'sports-shoes.html',
    'perfume-men.html',
    'perfume-women.html',
    'perfume-unisex.html',
    'perfume-summer.html',
    'perfume-natural.html',
    'perfume-luxury.html',
    'quan-ao.html'
];

// Cart button HTML
const cartButton = `
                <!-- Cart Button -->
                <div class="flex items-center space-x-4">
                    <button onclick="openCart()" class="relative p-2 text-gray-800 hover:text-luxury-gold transition-colors">
                        <i class="fas fa-shopping-bag text-xl"></i>
                        <span class="cart-count absolute -top-1 -right-1 bg-luxury-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                    </button>
                </div>`;

// Cart modal HTML
const cartModal = `
    <!-- Cart Modal -->
    <div id="cart-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden">
            <!-- Header -->
            <div class="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 class="text-2xl font-bold text-luxury-black">Giỏ hàng của bạn</h2>
                <button onclick="closeCart()" class="text-gray-400 hover:text-luxury-black transition-colors">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <!-- Cart Content -->
            <div class="p-6 overflow-y-auto max-h-96">
                <div id="empty-cart" class="text-center py-12">
                    <i class="fas fa-shopping-bag text-6xl text-gray-300 mb-4"></i>
                    <h3 class="text-xl font-semibold text-gray-600 mb-2">Giỏ hàng trống</h3>
                    <p class="text-gray-500">Hãy thêm sản phẩm vào giỏ hàng của bạn</p>
                </div>
                <div id="cart-items" class="space-y-4">
                    <!-- Cart items will be populated here -->
                </div>
            </div>
            
            <!-- Footer -->
            <div class="border-t border-gray-200 p-6">
                <div class="flex items-center justify-between mb-4">
                    <span class="text-lg font-semibold text-luxury-black">Tổng cộng:</span>
                    <span id="cart-total" class="text-2xl font-bold text-luxury-gold">0₫</span>
                </div>
                <div class="flex space-x-4">
                    <button onclick="closeCart()" class="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                        Tiếp tục mua sắm
                    </button>
                    <button onclick="openMessengerWithCart()" class="flex-1 bg-luxury-gold text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors">
                        <i class="fas fa-shopping-cart mr-2"></i>
                        Thanh toán
                    </button>
                </div>
            </div>
        </div>
    </div>`;

// Function to add cart to a page
function addCartToPage(pagePath) {
    try {
        let content = fs.readFileSync(pagePath, 'utf8');
        
        // Check if cart button already exists
        if (content.includes('cart-count')) {
            console.log(`Cart already exists in ${pagePath}`);
            return;
        }
        
        // Find the header section and add cart button
        // Look for navigation or header section
        const headerPattern = /(<div class="[^"]*flex[^"]*justify-between[^"]*items-center[^"]*py-4[^"]*">)/;
        const headerMatch = content.match(headerPattern);
        
        if (headerMatch) {
            // Add cart button before closing the header div
            content = content.replace(
                headerMatch[0],
                headerMatch[0] + cartButton
            );
        }
        
        // Add cart modal before closing body tag
        content = content.replace(
            '</body>',
            cartModal + '\n</body>'
        );
        
        // Write back to file
        fs.writeFileSync(pagePath, content, 'utf8');
        console.log(`Added cart to ${pagePath}`);
        
    } catch (error) {
        console.error(`Error processing ${pagePath}:`, error.message);
    }
}

// Process all pages
pages.forEach(page => {
    if (fs.existsSync(page)) {
        addCartToPage(page);
    } else {
        console.log(`File not found: ${page}`);
    }
});

console.log('Cart addition completed!');
