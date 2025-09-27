// Clean script.js without cart functionality
// This file contains only UI and navigation functions

// Language switching functionality
function changeLanguage(lang) {
    const translations = {
        vi: {
            'shipping-text': 'Miễn phí vận chuyển cho đơn hàng từ 500.000₫',
            'support-text': 'Hỗ trợ',
            'support-header-title': 'Liên hệ hỗ trợ',
            'support-hotline': 'Hotline',
            'support-facebook': 'Facebook',
            'support-zalo': 'Zalo',
            'support-hours': 'Thời gian: 8:00 - 22:00',
            'support-status': 'Online',
            'nav-sale': 'SALE'
        },
        en: {
            'shipping-text': 'Free shipping for orders from $25',
            'support-text': 'Support',
            'support-header-title': 'Contact Support',
            'support-hotline': 'Hotline',
            'support-facebook': 'Facebook',
            'support-zalo': 'Zalo',
            'support-hours': 'Hours: 8:00 - 22:00',
            'support-status': 'Online',
            'nav-sale': 'SALE'
        }
    };

    const elements = translations[lang];
    if (!elements) return;

    Object.keys(elements).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = elements[id];
        }
    });
}

// Product detail modal functionality
function showProductDetail(productId) {
    // This function can be implemented if needed
    console.log('Show product detail for ID:', productId);
}

// Load more products functionality
function loadMoreProducts() {
    const hiddenProducts = document.querySelectorAll('.product-card.hidden');
    const productsToShow = Math.min(4, hiddenProducts.length);
    
    for (let i = 0; i < productsToShow; i++) {
        if (hiddenProducts[i]) {
            hiddenProducts[i].classList.remove('hidden');
            hiddenProducts[i].style.opacity = '0';
            hiddenProducts[i].style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                hiddenProducts[i].style.transition = 'all 0.6s ease-out';
                hiddenProducts[i].style.opacity = '1';
                hiddenProducts[i].style.transform = 'translateY(0)';
            }, i * 100);
        }
    }
    
    if (hiddenProducts.length <= 4) {
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.style.display = 'none';
        }
    }
}

// Sale modal functionality
function openSaleModal() {
    const saleModal = document.getElementById('saleModal');
    if (saleModal) {
        saleModal.classList.remove('hidden');
        const content = document.getElementById('saleModalContent');
        if (content) {
            setTimeout(() => {
                content.classList.remove('scale-95', 'opacity-0');
                content.classList.add('scale-100', 'opacity-100');
            }, 10);
        }
    }
}

function closeSaleModal() {
    const saleModal = document.getElementById('saleModal');
    if (saleModal) {
        const content = document.getElementById('saleModalContent');
        if (content) {
            content.classList.add('scale-95', 'opacity-0');
            content.classList.remove('scale-100', 'opacity-100');
        }
        setTimeout(() => {
            saleModal.classList.add('hidden');
        }, 300);
    }
}

function viewFeaturedProducts() {
    closeSaleModal();
    window.location.href = 'index.html';
}

// Typing effect functionality
function typeWriter() {
    const text = "Khám phá bộ sưu tập thời trang cao cấp với thiết kế hiện đại và chất liệu sang trọng";
    const typingElement = document.getElementById('typing-text');
    const cursorElement = document.getElementById('typing-cursor');
    
    if (!typingElement || !cursorElement) return;
    
    let i = 0;
    const speed = 15;
    
    function type() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                cursorElement.style.display = 'none';
            }, 1000);
        }
    }
    
    setTimeout(type, 1000);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize typing effect
    typeWriter();
    
    // Initialize other UI elements
    console.log('Clean script loaded successfully');
});
