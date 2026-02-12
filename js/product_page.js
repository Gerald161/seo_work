var additional_images_container = document.querySelector("#additional_images_container");

var next = document.querySelector('.next');

var prev = document.querySelector('.prev');

var slider = document.querySelector('.all_images');

var selected_index = 0;

var max_index = 0;

var current_slider_value = 45;

const name = document.querySelector("#name");

const category = document.querySelector("#category");

const old_price = document.querySelector("#old_price");

const new_price = document.querySelector("#new_price");

const discount = document.querySelector("#discount");

const ratings = document.querySelector("#ratings");

const description = document.querySelector("#description");

async function getProductDetails(){
    const params = new URLSearchParams(window.location.search);

    const slug = params.get("slug");

    var req = await fetch(`http://127.0.0.1:8000/products/${slug}`)

    if(req.ok){
        var res = await req.json();

        if(res.status == "ok"){
            name.innerHTML = res.product.name;

            category.innerHTML = res.product.category;

            old_price.innerHTML = `£${res.product.price}`

            new_price.innerHTML = `£${res.product.price}`
            
            if(parseInt(res.product.discount) == 0){
                discount.style.display = "none";
                old_price.style.display = "none";
            }else{
                discount.innerHTML = `${res.product.discount}% Disc`;

                new_price.innerHTML = `£${(parseInt(res.product.price) - parseInt(res.product.price) * parseInt(res.product.discount)/100)}`
            }

            ratings.innerHTML = `(${res.product.ratings}) | ${res.product.reviews} ratings`;

            description.innerHTML = res.product.description;

            if(res.product.images.length > 1){
                res.product.images.forEach((product_image, index)=>{
                    slider.innerHTML += `
                        <img src="http://127.0.0.1:8000/${product_image}" data-left="" alt="${product_image}">
                    `
                    if(index == 0){
                        additional_images_container.innerHTML += `
                            <div class="additional_image active">
                                <img src="http://127.0.0.1:8000/${product_image}" alt="${product_image}">
                            </div>
                        `
                    }else{
                        additional_images_container.innerHTML += `
                            <div class="additional_image">
                                <img src="http://127.0.0.1:8000/${product_image}" alt="${product_image}">
                            </div>
                        `
                    }
                })

                var additional_images = document.querySelectorAll(".additional_image");

                additional_images.forEach((additional_image, index)=>{
                    additional_image.addEventListener("click", (e)=>{
                        slider.style.left = `-${current_slider_value * index}vw`;

                        selected_index = index;

                        document.querySelector(".active").classList.remove("active");

                        additional_image.classList.add("active");
                    })

                    max_index = index;
                })

                next.addEventListener("click", (e)=>{
                    slider.style.transition = 'all 0.7s';

                    document.querySelector(".active").classList.remove("active");

                    slideRight();
                })

                prev.addEventListener("click", (e)=>{
                    slider.style.transition = 'all 0.7s';

                    document.querySelector(".active").classList.remove("active");

                    if(selected_index == 0){
                        selected_index = max_index;

                        slider.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});

                        slider.style.transition = 'all 0s';

                        slider.style.left = `-${current_slider_value * selected_index}vw`;
                        
                        additional_images[selected_index].classList.add("active");
                    }else{
                        slider.style.left = `-${current_slider_value * (selected_index - 1)}vw`;

                        selected_index--;

                        additional_images[selected_index].classList.add("active");
                    }
                })

                function slideRight(){
                    if(selected_index == max_index){
                        selected_index = 0;

                        slider.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});

                        slider.style.transition = 'all 0s';

                        slider.style.left = `-${current_slider_value * selected_index}vw`;
                        
                        additional_images[selected_index].classList.add("active");
                    }else{
                        slider.style.left = `-${current_slider_value * (selected_index + 1)}vw`;

                        selected_index++;

                        additional_images[selected_index].classList.add("active");
                    }
                }

                window.onresize = checkWindowSize;

                function checkWindowSize(){
                    selected_index --;
                    if(window.innerWidth <= '900'){
                        current_slider_value = 100;
                        slideRight();
                    }else{
                        current_slider_value = 45;
                        slideRight();
                    }
                }

                if(window.innerWidth <= '900'){
                    current_slider_value = 100;
                }else{
                    current_slider_value = 45;
                }

                // here is where swiper begins
                var images_container = document.querySelector(".images_container")

                var startX = 0;
                var currentX = 0;
                var isDragging = false;
                var startTransform = 0;

                var itemsLength = additional_images.length - 1 //based on amount of images + videos

                images_container.addEventListener("mousedown", (e)=>{handleStart(e)});

                document.addEventListener("mousemove", (e)=>{handleMove(e)});

                document.addEventListener("mouseup", (e)=>{handleEnd(e)});

                images_container.addEventListener("touchstart", (e)=>{handleStart(e)});

                document.addEventListener("touchmove", (e)=>{handleMove(e)});

                document.addEventListener("touchend", (e)=>{handleEnd(e)});

                const handleStart = (e) => {
                    isDragging = true;
                    startX = getClientX(e);

                    startTransform = -(current_slider_value * selected_index);
                    
                    slider.style.transition = 'all 0s';
                }

                const handleMove = (e) => {
                    if (!isDragging) return;

                    currentX = getClientX(e);

                    const deltaX = currentX - startX;

                    // FIXED: Convert pixels to vw units (since you're using vw in handleEnd)
                    const deltaVw = (deltaX / window.innerWidth) * 100;
                    
                    // FIXED: Calculate new position in vw units
                    const newTransform = startTransform + deltaVw;
                    
                    // Apply the new position using left property
                    slider.style.left = `${newTransform}vw`;
                }

                const handleEnd = (e) => {
                    if (!isDragging) return;
                                
                    isDragging = false;

                    slider.style.transition = 'left 0.7s ease';
                    
                    const deltaX = currentX - startX;

                    const threshold = images_container.offsetWidth * 0.2;

                    document.querySelector(".active").classList.remove("active");
                    
                    if(Math.abs(deltaX) > threshold) {
                        if(deltaX > 0 && selected_index > 0) {
                            slider.style.left = `-${current_slider_value * (selected_index - 1)}vw`;
                            selected_index--;
                            additional_images[selected_index].classList.add("active");
                        }else if(deltaX < 0 && selected_index < itemsLength) {
                            slider.style.left = `-${current_slider_value * (selected_index + 1)}vw`;
                            selected_index++; 
                            additional_images[selected_index].classList.add("active");
                        }else{
                            slider.style.left = `-${current_slider_value * selected_index}vw`;
                            additional_images[selected_index].classList.add("active");
                        }
                    }else{
                        slider.style.left = `-${current_slider_value * selected_index}vw`;
                        additional_images[selected_index].classList.add("active");
                    }
                }

                function getClientX(e) {
                    return e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
                }

                images_container.addEventListener("dragstart", (e)=>{
                    e.preventDefault();
                })
            }else{
                slider.innerHTML = `
                    <img src="http://127.0.0.1:8000/${res.product.images[0]}" data-left="" alt="${res.product.images[0]}">
                `

                next.style.display = "none";

                prev.style.display = "none";
            }
        }else{
            window.location.href = "/";
        }
    }
}

getProductDetails()