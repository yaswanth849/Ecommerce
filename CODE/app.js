window.onload = function () {
    console.log("DOM fully loaded and scripts executing...");

    const viewItemsBtn = document.getElementById('viewItemsBtn');
    const productsSection = document.getElementById('productsSection');
    const productGrid = document.getElementById('productGrid');

    if (!productGrid) {
        console.error("Error: 'productGrid' element not found in the DOM.");
        return;
    }

    if (viewItemsBtn && productsSection) {
        viewItemsBtn.addEventListener('click', function () {
            const isHidden = productsSection.style.display === 'none';
            productsSection.style.display = isHidden ? 'block' : 'none';
            viewItemsBtn.textContent = isHidden ? 'Hide Items' : 'View Items';
        });
    } else {
        console.warn("Warning: 'viewItemsBtn' or 'productsSection' not found.");
    }

    displayProducts();
};

function displayProducts() {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) {
        console.error("Error: 'productGrid' element not found.");
        return;
    }

    // Sample product data (replace with real data)
    const products = [
        { id: 1, name: "Product 1", description: "High-quality product.", price: 29.99, image: "product1.jpg" },
        { id: 2, name: "Product 2", description: "Another great item.", price: 39.99, image: "product2.jpg" },
        { id: 3, name: "Product 3", description: "Limited edition.", price: 49.99, image: "product3.jpg" }
    ];

    if (!Array.isArray(products) || products.length === 0) {
        console.warn("Warning: No products available.");
        productGrid.innerHTML = '<p>No products available.</p>';
        return;
    }

    productGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const productImg = document.createElement('img');
        productImg.src = product.image;
        productImg.alt = product.name;
        productImg.onerror = function () {
            this.src = 'placeholder.jpg'; // Fallback image
        };

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        const productPrice = document.createElement('p');
        productPrice.className = 'price';
        productPrice.textContent = `$${product.price.toFixed(2)}`;

        const addToCartBtn = document.createElement('button');
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.addEventListener('click', function () {
            addToCart(product.id);
        });

        productCard.append(productImg, productName, productDescription, productPrice, addToCartBtn);
        productGrid.appendChild(productCard);
    });

    console.log("Products loaded successfully.");
}

function addToCart(productId) {
    console.log(`Added product with ID ${productId} to cart.`);
}
