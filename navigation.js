// Navigation Helper Script
document.addEventListener('DOMContentLoaded', function() {
    // Get current page name
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    
    // Category mapping
    const categories = {
        'shirt': 'Áo Sơ Mi',
        'tshirt': 'Áo Thun', 
        'jeans': 'Quần Jean',
        'trousers': 'Quần Tây',
        'dress': 'Váy Đầm',
        'jacket': 'Áo Khoác'
    };
    
    // Update category navigation
    const categoryNav = document.querySelector('.category-nav');
    if (categoryNav) {
        Object.keys(categories).forEach(category => {
            const link = categoryNav.querySelector(`a[href="${category}.html"]`);
            if (link) {
                if (category === currentPage) {
                    link.className = 'px-4 py-2 bg-luxury-gold text-white rounded-full font-medium';
                } else {
                    link.className = 'px-4 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors';
                }
            }
        });
    }
    
    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation for page transitions
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // Add loading state
            const body = document.body;
            body.style.opacity = '0.8';
            body.style.transition = 'opacity 0.3s ease';
            
            // Reset after navigation
            setTimeout(() => {
                body.style.opacity = '1';
            }, 100);
        });
    });
});

// Add breadcrumb navigation helper
function updateBreadcrumb(currentCategory) {
    const breadcrumb = document.querySelector('.breadcrumb-nav');
    if (breadcrumb) {
        const categoryName = {
            'shirt': 'Áo Sơ Mi',
            'tshirt': 'Áo Thun',
            'jeans': 'Quần Jean', 
            'trousers': 'Quần Tây',
            'dress': 'Váy Đầm',
            'jacket': 'Áo Khoác'
        }[currentCategory];
        
        if (categoryName) {
            const currentSpan = breadcrumb.querySelector('.current-category');
            if (currentSpan) {
                currentSpan.textContent = categoryName;
            }
        }
    }
}

// Add back to top functionality
function addBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'fixed bottom-6 right-6 bg-luxury-gold text-white w-12 h-12 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110 z-50';
    backToTop.style.display = 'none';
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    document.body.appendChild(backToTop);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addBackToTop();
});
