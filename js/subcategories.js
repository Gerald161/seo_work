var categories_container = document.querySelector("#categories_container");

var all_categories = [
    "Clothes", "Bags", "Jewelry", "Shoes", "Embroidery Threads",
    "African Food and Market", "Cars", "Spare Parts", "Electronics",
    "Used Items", "Beads and Bead Designs", "Gold", "Diamonds"
]

all_categories.forEach((category)=>{
    categories_container.innerHTML += `
        <a href="subcategories.html" class="category">
            <div class="representation"></div>
            <p>${category}</p>
        </a>
    `
})

// var categories_container = document.querySelector(".categories_container");

// const categories = [
//     {
//     category: "Clothes",
//     subcategories: [
//         "Men’s Clothing", "Women’s Clothing", "Kids’ Clothing", "Traditional Wear",
//         "Sportswear", "Casual Wear", "Formal Wear", "Undergarments", "Maternity Wear"
//     ]
//     },
//     {
//     category: "Bags",
//     subcategories: [
//         "Handbags", "Backpacks", "Travel Bags", "Laptop Bags", "School Bags",
//         "Clutches", "Duffel Bags", "Wallets & Purses"
//     ]
//     },
//     {
//     category: "Jewelry",
//     subcategories: [
//         "Necklaces", "Earrings", "Bracelets", "Rings", "Anklets", "Brooches",
//         "Sets", "Men’s Jewelry"
//     ]
//     },
//     {
//     category: "Shoes",
//     subcategories: [
//         "Men’s Shoes", "Women’s Shoes", "Kids’ Shoes", "Sneakers", "Sandals",
//         "Boots", "Formal Shoes", "Slippers/Flip-Flops"
//     ]
//     },
//     {
//     category: "Embroidery Threads",
//     subcategories: [
//         "Cotton Threads", "Silk Threads", "Metallic Threads", "Rayon Threads",
//         "Polyester Threads", "Wool Threads", "Variegated Threads"
//     ]
//     },
//     {
//     category: "African Food and Market",
//     subcategories: [
//         "Grains & Cereals", "Spices & Seasoning", "Oils & Sauces", "Snacks",
//         "Beverages", "Frozen Foods", "Fresh Produce", "Packaged Foods"
//     ]
//     },
//     {
//     category: "Cars",
//     subcategories: [
//         "Sedans", "SUVs", "Trucks", "Vans", "Coupes", "Electric Vehicles",
//         "Pickups", "Motorcycles"
//     ]
//     },
//     {
//     category: "Spare Parts",
//     subcategories: [
//         "Engine Parts", "Brake Systems", "Electrical Parts", "Suspension Parts",
//         "Body Parts", "Filters", "Tires & Wheels", "Batteries"
//     ]
//     },
//     {
//     category: "Electronics",
//     subcategories: [
//         "Phones & Accessories", "Computers & Laptops", "Televisions", "Audio Systems",
//         "Kitchen Appliances", "Cameras & Drones", "Gaming Consoles", "Smart Home Devices"
//     ]
//     },
//     {
//     category: "Used Items",
//     subcategories: [
//         "Used Clothes", "Used Electronics", "Used Furniture", "Used Cars",
//         "Used Shoes", "Used Appliances", "Used Books", "Miscellaneous"
//     ]
//     },
//     {
//     category: "Beads and Bead Designs",
//     subcategories: [
//         "Beads (Loose)", "Beaded Necklaces", "Beaded Bracelets", "Waist Beads",
//         "Beading Kits", "Bead Supplies", "Custom Beadwork"
//     ]
//     },
//     {
//     category: "Gold",
//     subcategories: [
//         "Gold Jewelry", "Gold Coins", "Gold Bars", "Custom Gold Pieces",
//         "Investment Gold", "Gold Accessories"
//     ]
//     },
//     {
//     category: "Diamonds",
//     subcategories: [
//         "Diamond Rings", "Loose Diamonds", "Diamond Necklaces", "Diamond Earrings",
//         "Diamond Bracelets", "Custom Diamond Pieces", "Investment Diamonds"
//     ]
//     }
// ];