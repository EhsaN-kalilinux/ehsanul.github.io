// Example of JavaScript functionality for interactive features

// Smooth scroll for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example of a function to filter products (simple version)
function filterProducts(category) {
    const allProducts = document.querySelectorAll('.product');
    allProducts.forEach(product => {
        if (product.classList.contains(category)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Add event listeners to filter buttons (if you have any)
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        filterProducts(this.dataset.category);
    });
});