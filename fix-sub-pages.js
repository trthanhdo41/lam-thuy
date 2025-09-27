// Script to fix all sub-category pages for global cart integration
const fs = require('fs');
const path = require('path');

// List of sub-category pages that need fixing
const subPages = [
    'tshirt.html',
    'trousers.html', 
    'boots.html',
    'dress-shoes.html',
    'dress.html',
    'heels.html',
    'jacket.html',
    'sandals.html',
    'sneakers.html',
    'sports-shoes.html',
    'perfume-luxury.html',
    'perfume-men.html',
    'perfume-natural.html',
    'perfume-summer.html',
    'perfume-unisex.html',
    'perfume-women.html'
];

// Function to fix cart icon in header
function fixCartIcon(content) {
    // Replace cart icon without onclick and cart-count class
    const cartIconRegex = /<button class="relative p-2 text-gray-800 hover:text-luxury-gold transition-colors">\s*<i class="fas fa-shopping-bag text-xl"><\/i>\s*<span class="absolute -top-1 -right-1 bg-luxury-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0<\/span>\s*<\/button>/g;
    
    const fixedCartIcon = '<button onclick="openCart()" class="relative p-2 text-gray-800 hover:text-luxury-gold transition-colors">\n                        <i class="fas fa-shopping-bag text-xl"></i>\n                        <span class="cart-count absolute -top-1 -right-1 bg-luxury-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>\n                    </button>';
    
    return content.replace(cartIconRegex, fixedCartIcon);
}

// Function to add global-cart.js script
function addGlobalCartScript(content) {
    // Check if global-cart.js is already included
    if (content.includes('global-cart.js')) {
        return content;
    }
    
    // Add global-cart.js before closing head tag
    const headCloseRegex = /<\/head>/;
    const globalCartScript = '    <script src="global-cart.js"></script>\n';
    
    return content.replace(headCloseRegex, globalCartScript + '</head>');
}

// Function to add force update cart script
function addForceUpdateScript(content) {
    // Check if force update script already exists
    if (content.includes('forceUpdateCart')) {
        return content;
    }
    
    // Add script before closing body tag
    const bodyCloseRegex = /<\/body>/;
    const forceUpdateScript = `    <script>
        // Force update cart when page loads
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Sub-page DOMContentLoaded - checking cart sync...');
            setTimeout(() => {
                if (typeof forceUpdateCart === 'function') {
                    console.log('Calling forceUpdateCart from sub-page...');
                    forceUpdateCart();
                } else {
                    console.error('forceUpdateCart function not found!');
                }
            }, 200);
        });
        
        // Update cart when page becomes visible
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden) {
                setTimeout(() => {
                    if (typeof forceUpdateCart === 'function') {
                        forceUpdateCart();
                    }
                }, 100);
            }
        });
    </script>
`;
    
    return content.replace(bodyCloseRegex, forceUpdateScript + '</body>');
}

// Process each sub-page
subPages.forEach(pageName => {
    const filePath = path.join(__dirname, pageName);
    
    if (fs.existsSync(filePath)) {
        console.log(`Processing ${pageName}...`);
        
        try {
            let content = fs.readFileSync(filePath, 'utf8');
            
            // Apply fixes
            content = fixCartIcon(content);
            content = addGlobalCartScript(content);
            content = addForceUpdateScript(content);
            
            // Write back to file
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Fixed ${pageName}`);
            
        } catch (error) {
            console.error(`❌ Error processing ${pageName}:`, error.message);
        }
    } else {
        console.log(`⚠️  File not found: ${pageName}`);
    }
});

console.log('\n🎉 All sub-pages have been processed!');
