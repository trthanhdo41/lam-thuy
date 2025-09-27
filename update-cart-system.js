// Script to update all HTML pages to use global cart system
const fs = require('fs');
const path = require('path');

// List of HTML files to update
const htmlFiles = [
    'boots.html',
    'dress-shoes.html', 
    'dress.html',
    'giay-dep.html',
    'heels.html',
    'jacket.html',
    'jeans.html',
    'nuoc-hoa.html',
    'perfume-luxury.html',
    'perfume-men.html',
    'perfume-natural.html',
    'perfume-summer.html',
    'perfume-unisex.html',
    'perfume-women.html',
    'quan-ao.html',
    'sandals.html',
    'shirt.html',
    'sneakers.html',
    'sports-shoes.html',
    'trousers.html',
    'tshirt.html'
];

// Function to add global cart system to HTML file
function updateHtmlFile(filename) {
    try {
        const filePath = path.join(__dirname, filename);
        
        if (!fs.existsSync(filePath)) {
            console.log(`File ${filename} not found, skipping...`);
            return;
        }
        
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if global-cart.js is already included
        if (content.includes('global-cart.js')) {
            console.log(`${filename} already has global-cart.js, skipping...`);
            return;
        }
        
        // Add global-cart.js before closing body tag
        const bodyCloseIndex = content.lastIndexOf('</body>');
        if (bodyCloseIndex !== -1) {
            const beforeBodyClose = content.substring(0, bodyCloseIndex);
            const afterBodyClose = content.substring(bodyCloseIndex);
            
            const cartScript = `
    <script src="global-cart.js"></script>
    <script>
        // Force update cart when page loads
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => {
                if (typeof syncCartAcrossPages === 'function') {
                    syncCartAcrossPages();
                }
            }, 200);
        });
        
        // Update cart when page becomes visible
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden) {
                setTimeout(() => {
                    if (typeof syncCartAcrossPages === 'function') {
                        syncCartAcrossPages();
                    }
                }, 100);
            }
        });
    </script>`;
            
            content = beforeBodyClose + cartScript + afterBodyClose;
            
            // Write updated content back to file
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${filename} with global cart system`);
        } else {
            console.log(`Could not find </body> tag in ${filename}, skipping...`);
        }
        
    } catch (error) {
        console.error(`Error updating ${filename}:`, error.message);
    }
}

// Update all HTML files
console.log('Starting to update HTML files with global cart system...');
htmlFiles.forEach(updateHtmlFile);
console.log('Update completed!');
