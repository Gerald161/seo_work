var allImages = [1,2,3,7,5];

var product_name = [
"Sneakers", "Jeans", "Kicks", "Watch", "Shoe"
]

var prices = [
"45.5","50.0","25.5","30.0","40.5"
]

const featured_products = document.querySelector(".featured_products");

var all_featured_images = [
    "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/6764128/pexels-photo-6764128.jpeg",
    "https://images.pexels.com/photos/8473534/pexels-photo-8473534.jpeg",
    "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
    "https://images.pexels.com/photos/32644171/pexels-photo-32644171.jpeg",
]

allImages.forEach((image, index)=>{
    featured_products.innerHTML += `
    <div class="product">
        <a href="product.html" class="image_container">
            <img src=${all_featured_images[index]} loading="lazy" alt="Ginseng">
            ${index % 2 == 0 && `<div class="badge">NEW</div>`}
        </a>

        ${
        index % 2 == 0 ?
        `<i class="fa-regular fa-heart like_button"></i>`:
        `<i class="fa-solid fa-heart like_button" style="color: red;"></i>`
        }

        <div class="product_desc">
            <h3>${product_name[index]}</h3>

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
                    <p>£${prices[index]}</p>
                    <span class="discount_price">${index % 2 == 0 ? "£"+ (parseInt(prices[index]) + 20) : ""}</span>
                </div>
                ${index % 2 == 0 ? `<span class="discount">25% OFF</span>` : ""}
            </div>
        </div>
    </div>
    `
});

async function getProducts(){
    var req = await fetch("http://127.0.0.1:8000/products/all-products")

    if(req.ok){
        featured_products.innerHTML = ``;

        var res = await req.json();

        const params = new URLSearchParams(window.location.search); 

        const slug = params.get("slug");

        var all_products = res.all_products;

        var filteredProducts = all_products.filter(product => product.slug !== slug);

        var randomProducts = filteredProducts
            .sort(() => Math.random() - 0.5)
            .slice(0, 5);

        randomProducts.forEach((product, index)=>{
            featured_products.innerHTML += `
            <div class="product">
                <a href="product.html?slug=${product.slug}" class="image_container">
                    <img src="http://127.0.0.1:8000/${product.image}" loading="lazy" alt="Ginseng">
                    ${index % 2 == 0 && `<div class="badge">NEW</div>`}
                </a>

                ${
                index % 2 == 0 ?
                `<i class="fa-regular fa-heart like_button"></i>`:
                `<i class="fa-solid fa-heart like_button" style="color: red;"></i>`
                }

                <div class="product_desc">
                    <h3>${product.name}</h3>

                    <div class="product_rating">
                        <div class="product_stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <span class="rating_text">${product.ratings} ${product.reviews} reviews</span>
                    </div>

                    <div class="discount_section">
                        <div class="price_and_discount">
                            <p>£${product.price}</p>
                            <span class="discount_price">${index % 2 == 0 ? "£" + (parseInt(product.price) + 20) : ""}</span>
                        </div>
                        ${index % 2 == 0 ? `<span class="discount">25% OFF</span>` : ""}
                    </div>
                </div>
            </div>
            `
        });
    }
}

getProducts();