var allImages = [
    [
    {
        "image": "https://images.unsplash.com/photo-1716951988375-37d5793385d0?q=80&w=490&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "Shirts",
        "price": "45.5"
    },
    {
        "image": "https://images.pexels.com/photos/7479825/pexels-photo-7479825.jpeg",
        "name": "Hoodie",
        "price": "50.0"
    },
    {
        "image": "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "Sneakers",
        "price": "25.5"
    },
    {
        "image": "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "Colored Shirts",
        "price": "30.0"
    },
    {
        "image":"https://images.pexels.com/photos/30710089/pexels-photo-30710089.jpeg",
        "name": "Shorts",
        "price": "50.0"
    },
    {
        "image": "https://images.pexels.com/photos/32644171/pexels-photo-32644171.jpeg",
        "name": "Shoes",
        "price": "45.5"
    },
    {
        "image":"https://images.unsplash.com/photo-1713880453396-aa0493e308ec?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "Blue Jeans",
        "price": "50.0"
    },
    {
        "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
        "name": "White Sneakers",
        "price": "25.5"
    },
    {
        "image": "https://images.pexels.com/photos/12555806/pexels-photo-12555806.png",
        "name": "Hoodies",
        "price": "30.0"
    },
    {
        "image": "https://images.pexels.com/photos/16739807/pexels-photo-16739807.jpeg",
        "name": "Men's Watch",
        "price": "25.5"
    },
    ],
    [
    
    ],
];

const featured_products = document.querySelectorAll(".featured_products");

featured_products.forEach((featured_product, index)=>{
    allImages[index].forEach((image, index2)=>{
        featured_product.innerHTML += `
        <div class="product">
            <a href="product.html" class="image_container">
                <img src="${image.image}" loading="lazy" alt="">
                ${index2 % 2 == 0 && `<div class="badge">25% off</div>`}
            </a>

            <div class="product_desc">
                <h3>${image.name}</h3>

                <div class="product_rating">
                    <div class="product_stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <span class="rating_text">(4.8) 2,341 reviews</span>
                </div>

                <div class="discount_section">
                    <div class="price_and_discount">
                        <p>£${image.price}</p>
                        <span class="discount_price">${index2 % 2 == 0 ? "£"+parseInt(image.price) + 20 : ""}</span>
                    </div>
                    ${index2 % 2 == 0 ? `<span class="discount">25% OFF</span>` : ""}
                </div>
            </div>
        </div>
        `
    });
});