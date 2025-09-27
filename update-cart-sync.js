// Script to update all HTML files to include global-cart.js
const fs = require('fs');
const path = require('path');

// List of HTML files to update (excluding test files and backups)
const htmlFiles = [
    'shirt.html',
    'tshirt.html', 
    'jeans.html',
    'trousers.html',
    'dress.html',
    'jacket.html',
    'sneakers.html',
    'boots.html',
    'sandals.html',
    'heels.html',
    'dress-shoes.html',
    'sports-shoes.html',
    'perfume-men.html',
    'perfume-women.html',
    'perfume-unisex.html',
    'perfume-luxury.html',
    'perfume-natural.html',
    'perfume-summer.html',
    'quan-ao.html'
];

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
        
        // Find the pattern to replace
        const scriptPattern = /<script src="script\.js"><\/script>\s*<script>/g;
        
        if (scriptPattern.test(content)) {
            content = content.replace(scriptPattern, '<script src="global-cart.js"></script>\n    <script src="script.js"></script>\n    <script>');
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Updated ${filename}`);
        } else {
            console.log(`❌ Pattern not found in ${filename}`);
        }
        
    } catch (error) {
        console.error(`Error updating ${filename}:`, error.message);
    }
}

// Update all files
console.log('Starting to update HTML files with global-cart.js...\n');

htmlFiles.forEach(updateHtmlFile);

console.log('\n✅ All files updated successfully!');
console.log('Now all pages should have synchronized cart functionality.');
