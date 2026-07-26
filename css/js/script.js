// ===================================
// CHOCOCRAFT SCRIPT.JS
// PART 1
// ===================================


// ===============================
// CART SYSTEM
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// Update Cart Count

function updateCartCount() {

    const count = document.getElementById("cart-count");

    if (count) {

        count.innerHTML = cart.length;

    }

}

updateCartCount();


// Add Product To Cart

function addToCart(productName, price, image) {

    let product = {

        name: productName,

        price: price,

        image: image

    };


    cart.push(product);


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    updateCartCount();


    alert("🛒 Product Added To Cart");

}



// ===============================
// DISPLAY CART
// ===============================


function displayCart() {

    let cartItems =
        document.getElementById("cart-items");


    if (!cartItems) {

        return;

    }


    cartItems.innerHTML = "";


    let total = 0;


    cart.forEach((item, index) => {


        total += Number(item.price);


        cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}">

            <h3>${item.name}</h3>

            <p>£${item.price}</p>

            <button onclick="removeCart(${index})">

            Remove

            </button>

        </div>

        `;


    });


    let totalBox =
        document.getElementById("cart-total");


    if (totalBox) {

        totalBox.innerHTML =
            "£" + total.toFixed(2);

    }

}



// Remove Cart Item


function removeCart(index) {

    cart.splice(index, 1);


    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );


    updateCartCount();

    displayCart();

}


// Load Cart Page

displayCart(); // ===================================
// WISHLIST SYSTEM
// ===================================

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];


// Add Wishlist

function addWishlist(productName) {

    if (wishlist.includes(productName)) {

        alert("Already in Wishlist ❤️");

        return;

    }


    wishlist.push(productName);


    localStorage.setItem(

        "wishlist",

        JSON.stringify(wishlist)

    );


    alert("Added to Wishlist ❤️");

}



// Wishlist Button

const favButtons =
    document.querySelectorAll(".fav");


favButtons.forEach((btn) => {


    btn.addEventListener("click", () => {


        let product =
            btn.parentElement.querySelector("h3").innerText;


        addWishlist(product);


        btn.style.color = "red";


    });


});



// ===================================
// SEARCH SYSTEM
// ===================================


function searchProduct() {


    let input =
        document.getElementById("search");


    if (!input) {

        return;

    }


    let value =
        input.value.toLowerCase();



    let products =
        document.querySelectorAll(".card");



    products.forEach((product) => {


        let name =
            product.querySelector("h3")
            .innerText
            .toLowerCase();



        if (name.includes(value)) {


            product.style.display = "block";


        } else {


            product.style.display = "none";


        }


    });


}



// ===================================
// CATEGORY FILTER
// ===================================


function filterCategory(category) {


    let products =
        document.querySelectorAll(".card");



    products.forEach((product) => {


        let name =
            product.innerText.toLowerCase();



        if (category == "all") {


            product.style.display = "block";


        } else if (name.includes(category)) {


            product.style.display = "block";


        } else {


            product.style.display = "none";


        }


    });


}



// ===================================
// MOBILE MENU
// ===================================


const menu =
    document.querySelector(".menu-icon");


const nav =
    document.querySelector(".nav-links");



if (menu) {


    menu.addEventListener("click", () => {


        nav.classList.toggle("show");


    });


}



// ===================================
// BACK TO TOP
// ===================================


window.addEventListener("scroll", () => {


    let topBtn =
        document.querySelector(".top-btn");



    if (topBtn) {


        if (window.scrollY > 300) {


            topBtn.style.display = "flex";


        } else {


            topBtn.style.display = "none";


        }


    }


}); // ===================================
// CHECKOUT SYSTEM
// ===================================


// Place Order

function placeOrder() {

    let cartData =
        JSON.parse(localStorage.getItem("cart")) || [];


    if (cartData.length === 0) {

        alert("Your Cart is Empty 🛒");

        return;

    }


    alert("🎉 Order Placed Successfully");


    localStorage.removeItem("cart");


    window.location.href = "index.html";

}



// ===================================
// CONTACT FORM
// ===================================


const contactForm =
    document.querySelector(".contact-form");



if (contactForm) {


    contactForm.addEventListener("submit", (e) => {


        e.preventDefault();


        alert("✅ Message Sent Successfully");


        contactForm.reset();


    });


}



// ===================================
// PRODUCT DETAILS
// ===================================


function viewProduct(name, price, image) {


    localStorage.setItem(

        "selectedProduct",

        JSON.stringify({

            name: name,

            price: price,

            image: image

        })

    );


    window.location.href = "product.html";


}



// Show Product Details


function loadProduct() {


    let product =
        JSON.parse(
            localStorage.getItem("selectedProduct")
        );


    if (!product) {

        return;

    }



    let name =
        document.getElementById("product-name");


    let price =
        document.getElementById("product-price");


    let image =
        document.getElementById("product-image");



    if (name) {

        name.innerHTML = product.name;

    }


    if (price) {

        price.innerHTML = "£" + product.price;

    }


    if (image) {

        image.src = product.image;

    }


}


loadProduct();



// ===================================
// DARK MODE
// ===================================


const darkBtn =
    document.querySelector(".dark-mode");



if (darkBtn) {


    darkBtn.addEventListener("click", () => {


        document.body.classList.toggle("dark");


        localStorage.setItem(

            "darkMode",

            document.body.classList.contains("dark")

        );


    });


}



// Load Dark Mode


if (localStorage.getItem("darkMode") == "true") {


    document.body.classList.add("dark");


}



// ===================================
// PAGE LOADER
// ===================================


window.addEventListener("load", () => {


    let loader =
        document.querySelector(".loader");



    if (loader) {


        loader.style.display = "none";


    }


});



// ===================================
// WHATSAPP ORDER
// ===================================


function whatsappOrder() {


    let message =
        "Hello ChocoCraft, I want to order cakes and chocolates 🍫🎂";


    let url =
        "https://wa.me/?text=" +
        encodeURIComponent(message);



    window.open(url, "_blank");


}



// ===================================
// CONSOLE MESSAGE
// ===================================


console.log(
    "🍫 ChocoCraft Website Loaded Successfully"
); // ===================================
// PRODUCT QUANTITY SYSTEM
// ===================================

let quantity = 1;


function increaseQuantity() {

    quantity++;

    let qty =
        document.getElementById("quantity");


    if (qty) {

        qty.innerHTML = quantity;

    }

}



function decreaseQuantity() {

    if (quantity > 1) {

        quantity--;

    }


    let qty =
        document.getElementById("quantity");


    if (qty) {

        qty.innerHTML = quantity;

    }

}



// ===================================
// PRICE CALCULATOR
// ===================================


function calculatePrice(price) {


    let total =
        price * quantity;


    let priceBox =
        document.getElementById("total-price");


    if (priceBox) {

        priceBox.innerHTML =
            "£" + total.toFixed(2);

    }


}



// ===================================
// SMOOTH SCROLL
// ===================================


const links =
    document.querySelectorAll("a[href^='#']");


links.forEach(link => {


    link.addEventListener("click", function(e) {


        e.preventDefault();


        let section =
            document.querySelector(
                this.getAttribute("href")
            );


        if (section) {


            section.scrollIntoView({

                behavior: "smooth"

            });


        }


    });


});



// ===================================
// CURRENT YEAR FOOTER
// ===================================


let year =
    document.getElementById("year");


if (year) {


    year.innerHTML =
        new Date().getFullYear();


}



// ===================================
// IMAGE PREVIEW
// ===================================


function changeImage(image) {


    let mainImage =
        document.getElementById("main-image");


    if (mainImage) {


        mainImage.src = image;


    }


}



// ===================================
// FORM VALIDATION
// ===================================


function validateForm() {


    let inputs =
        document.querySelectorAll(
            "input[required]"
        );


    let valid = true;


    inputs.forEach(input => {


        if (input.value.trim() == "") {


            input.style.border = "2px solid red";

            valid = false;


        } else {


            input.style.border = "";


        }


    });



    if (!valid) {


        alert("Please fill all required fields");


    }


    return valid;


}



// ===================================
// SCROLL ANIMATION
// ===================================


const animationItems =
    document.querySelectorAll(
        ".card,.category-card,.review-card"
    );



window.addEventListener("scroll", () => {


    animationItems.forEach(item => {


        let position =
            item.getBoundingClientRect().top;


        let screen =
            window.innerHeight;


        if (position < screen - 100) {


            item.style.opacity = "1";

            item.style.transform =
                "translateY(0)";


        }


    });


});


// ===================================
// END
// ===================================// ===================================
// ADVANCED SEARCH + FILTER
// ===================================


// Product Data

const products = [

    {
        name: "Chocolate Cake",
        category: "cake",
        price: 19.99,
        image: "images/choco-cake.jpg"
    },

    {
        name: "Red Velvet Cake",
        category: "cake",
        price: 24.99,
        image: "images/red-velvet.jpg"
    },

    {
        name: "Chocolate Box",
        category: "chocolate",
        price: 14.99,
        image: "images/chocolate-box.jpg"
    },

    {
        name: "Cup Cake",
        category: "cupcake",
        price: 8.99,
        image: "images/cupcake.jpg"
    },

    {
        name: "Donut",
        category: "donut",
        price: 5.99,
        image: "images/donut.jpg"
    }

];



// Display Products


function showProducts(list) {


    let container =
        document.querySelector(".product-container");


    if (!container) {

        return;

    }


    container.innerHTML = "";



    list.forEach(product => {


        container.innerHTML += `

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<div class="rating">
⭐⭐⭐⭐⭐
</div>

<p>£${product.price}</p>

<button onclick="addToCart(
'${product.name}',
${product.price},
'${product.image}'
)">
Add To Cart
</button>

</div>

`;


    });


}



// Search Filter


function searchProducts(value) {


    let result =
        products.filter(product =>


            product.name
            .toLowerCase()
            .includes(value.toLowerCase())


        );



    showProducts(result);


}



// Category Filter


function categoryFilter(type) {


    if (type === "all") {


        showProducts(products);


        return;


    }



    let result =
        products.filter(product =>

            product.category === type

        );



    showProducts(result);


}



// ===================================
// NOTIFICATION SYSTEM
// ===================================


function showNotification(message) {


    let box =
        document.createElement("div");


    box.className = "notification";


    box.innerHTML = message;


    document.body.appendChild(box);



    setTimeout(() => {


        box.remove();


    }, 3000);



}



// Replace Alert For Cart


function cartNotification() {


    showNotification(
        "🛒 Product Added Successfully"
    );


}



// ===================================
// ONLINE STATUS
// ===================================


window.addEventListener("online", () => {


    showNotification(
        "🌐 Internet Connected"
    );


});


window.addEventListener("offline", () => {


    showNotification(
        "⚠️ Internet Disconnected"
    );


});



// ===================================
// AUTO LOAD
// ===================================


document.addEventListener(
    "DOMContentLoaded",
    () => {


        updateCartCount();


        loadProduct();


    }
); // ===================================
// CHOCOCRAFT ADVANCED SCRIPT
// PART 6
// ===================================


// ===============================
// PRODUCT SORTING
// ===============================


function sortProducts(type) {


    let sorted = [...products];


    if (type === "low") {


        sorted.sort((a, b) => a.price - b.price);


    } else if (type === "high") {


        sorted.sort((a, b) => b.price - a.price);


    } else if (type === "name") {


        sorted.sort((a, b) =>
            a.name.localeCompare(b.name)
        );


    }


    showProducts(sorted);


}



// ===============================
// COUPON SYSTEM
// ===============================


function applyCoupon() {


    let coupon =
        document.getElementById("coupon");



    if (!coupon) {

        return;

    }



    let code =
        coupon.value.toUpperCase();



    if (code === "CHOCO10") {


        alert("🎉 10% Discount Applied");


        localStorage.setItem(
            "discount",
            "10"
        );


    } else {


        alert("❌ Invalid Coupon");


    }


}



// ===============================
// DELIVERY DATE
// ===============================


function deliveryDate() {


    let today =
        new Date();



    today.setDate(
        today.getDate() + 3
    );



    let date =
        today.toDateString();



    let box =
        document.getElementById(
            "delivery-date"
        );



    if (box) {

        box.innerHTML =
            "Delivery Date: " + date;

    }


}


deliveryDate();



// ===============================
// USER PROFILE
// ===============================


function saveUser() {


    let user = {


        name: document.getElementById("username").value,


        email: document.getElementById("useremail").value


    };



    localStorage.setItem(

        "user",

        JSON.stringify(user)

    );



    alert("Profile Saved ✅");


}



// Load User


function loadUser() {


    let user =
        JSON.parse(
            localStorage.getItem("user")
        );



    if (user) {


        let name =
            document.getElementById("username");


        let email =
            document.getElementById("useremail");



        if (name) {

            name.value = user.name;

        }


        if (email) {

            email.value = user.email;

        }


    }


}


loadUser();



// ===============================
// ORDER HISTORY
// ===============================


function saveOrder(order) {


    let orders =
        JSON.parse(
            localStorage.getItem("orders")
        ) || [];



    orders.push(order);



    localStorage.setItem(

        "orders",

        JSON.stringify(orders)

    );


}



function showOrders() {


    let orders =
        JSON.parse(
            localStorage.getItem("orders")
        ) || [];



    let box =
        document.getElementById(
            "orders"
        );



    if (!box) {

        return;

    }



    box.innerHTML = "";



    orders.forEach(order => {


        box.innerHTML += `

<div class="order-card">

<h3>
Order Completed
</h3>

<p>
${order.date}
</p>

<p>
Total : £${order.total}
</p>

</div>

`;


    });


}


showOrders();



// ===============================
// SECURITY CHECK
// ===============================


function logout() {


    localStorage.removeItem(
        "user"
    );


    alert("Logged Out Successfully");


    window.location.href = "login.html";


}



// ===============================
// END
// ===============================// ===================================
// CHOCOCRAFT ADMIN.JS
// ===================================


// ===============================
// ADMIN LOGIN
// ===============================


const loginForm = document.getElementById("adminLogin");


if (loginForm) {


    loginForm.addEventListener("submit", function(e) {


        e.preventDefault();


        let email =
            document.getElementById("adminEmail").value;


        let password =
            document.getElementById("adminPassword").value;



        // Demo Admin Login

        if (email === "admin@gmail.com" && password === "123456") {


            localStorage.setItem(
                "adminLogin",
                "true"
            );


            alert("✅ Admin Login Successful");


            window.location.href = "dashboard.html";


        } else {


            alert("❌ Invalid Admin Details");


        }


    });


}



// ===============================
// DASHBOARD CHECK
// ===============================


if (window.location.pathname.includes("dashboard")) {


    let login =
        localStorage.getItem("adminLogin");



    if (login !== "true") {


        alert("Please Login First");


        window.location.href = "admin-login.html";


    }


}



// ===============================
// LOGOUT
// ===============================


function adminLogout() {


    localStorage.removeItem(
        "adminLogin"
    );


    alert("Admin Logout");


    window.location.href = "admin-login.html";


}



// ===============================
// DASHBOARD DATA
// ===============================


let products =
    JSON.parse(
        localStorage.getItem("products")
    ) || [];



let orders =
    JSON.parse(
        localStorage.getItem("orders")
    ) || [];



let customers =
    JSON.parse(
        localStorage.getItem("customers")
    ) || [];



let productCount =
    document.getElementById("productCount");


let orderCount =
    document.getElementById("orderCount");


let customerCount =
    document.getElementById("customerCount");



if (productCount) {

    productCount.innerHTML =
        products.length || 25;

}


if (orderCount) {

    orderCount.innerHTML =
        orders.length || 120;

}


if (customerCount) {

    customerCount.innerHTML =
        customers.length || 85;

}


// ===============================
// DELETE PRODUCTS
// ===============================


function deleteProduct(index) {


    products.splice(index, 1);


    localStorage.setItem(

        "products",

        JSON.stringify(products)

    );


    alert("Product Deleted");


    location.reload();


}


// ===============================
// ADD PRODUCT
// ===============================


function addProduct() {


    let name =
        document.getElementById("productName").value;


    let price =
        document.getElementById("productPrice").value;


    let image =
        document.getElementById("productImage").value;



    let product = {

        name: name,

        price: price,

        image: image

    };



    products.push(product);



    localStorage.setItem(

        "products",

        JSON.stringify(products)

    );



    alert("🎂 Product Added");


    window.location.href = "products.html";


}


// ===============================
// END
// ===============================
// 
// function goProducts() 
{

    window.location.href = "products.html";

}

function goCart() {

    window.location.href = "cart.html";

} // CART DISPLAY

function displayCart() {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];


    let box =
        document.getElementById("cart-items");


    if (!box) {

        return;

    }


    box.innerHTML = "";


    let total = 0;


    cart.forEach((item, index) => {


        total += Number(item.price);



        box.innerHTML += `

<div class="card">


<img src="${item.image}">


<h3>${item.name}</h3>


<p>£${item.price}</p>


<button onclick="removeCart(${index})">

Remove ❌

</button>


</div>

`;


    });



    document.getElementById("cart-total")
        .innerHTML = total.toFixed(2);


}



function removeCart(index) {


    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];


    cart.splice(index, 1);


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    displayCart();


} // PRODUCT DETAILS QUANTITY

let productQty = 1;



function increaseQty() {

    productQty++;


    document.getElementById("quantity")
        .innerHTML = productQty;


}



function decreaseQty() {

    if (productQty > 1) {

        productQty--;

    }


    document.getElementById("quantity")
        .innerHTML = productQty;


}



// ADD PRODUCT CART

function addProductCart() {


    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];



    let product = {


        name: document.getElementById("productName")
            .innerHTML,


        price: Number(
            document.getElementById("productPrice")
            .innerHTML
        ),


        image: document.getElementById("productImage")
            .src,


        quantity: productQty


    };



    cart.push(product);



    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );



    alert("🛒 Added To Cart");


}



function goCart() {

    window.location.href = "cart.html";

} // OPEN PRODUCT DETAILS PAGE


function openProduct(name, price, image, description) {


    let product = {


        name: name,

        price: price,

        image: image,

        description: description


    };



    localStorage.setItem(

        "selectedProduct",

        JSON.stringify(product)

    );



    window.location.href = "product-details.html";


}
let product =
    JSON.parse(
        localStorage.getItem("selectedProduct")
    );



if (product) {


    document.getElementById("productName")
        .innerHTML = product.name;


    document.getElementById("productPrice")
        .innerHTML = product.price;


    document.getElementById("productImage")
        .src = product.image;


} // LOAD SELECTED PRODUCT DETAILS


let selectedProduct =
    JSON.parse(
        localStorage.getItem("selectedProduct")
    );



if (selectedProduct) {


    document.getElementById("productName")
        .innerHTML =
        selectedProduct.name;



    document.getElementById("productPrice")
        .innerHTML =
        selectedProduct.price;



    document.getElementById("productImage")
        .src =
        selectedProduct.image;



    document.getElementById("productDescription")
        .innerHTML =
        selectedProduct.description;


} // PRODUCT DATA


let productList = [


    {
        name: "Chocolate Cake",
        category: "cake",
        price: 19.99,
        image: "images/choco-cake.jpg",
        description: "Rich chocolate cake with fresh cream"
    },


    {
        name: "Red Velvet Cake",
        category: "cake",
        price: 24.99,
        image: "images/red-velvet.jpg",
        description: "Soft red velvet special cake"
    },


    {
        name: "Dark Chocolate",
        category: "chocolate",
        price: 14.99,
        image: "images/chocolate-box.jpg",
        description: "Premium dark chocolate"
    }


];



// DISPLAY PRODUCTS


function displayProducts(products) {


    let box =
        document.getElementById("productList");



    if (!box) {

        return;

    }



    box.innerHTML = "";



    products.forEach(product => {


        box.innerHTML += `


<div class="card"
onclick="openProduct(
'${product.name}',
${product.price},
'${product.image}',
'${product.description}'
)">



<img src="${product.image}">


<h3>
${product.name}
</h3>


<p>
£${product.price}
</p>


<button onclick="event.stopPropagation();addToCart(
'${product.name}',
${product.price},
'${product.image}'
)">

Add Cart 🛒

</button>


</div>


`;

    });


}



// SEARCH


function searchProducts() {


    let value =
        document.getElementById("searchBox")
        .value
        .toLowerCase();



    let result =
        productList.filter(product =>

            product.name
            .toLowerCase()
            .includes(value)

        );



    displayProducts(result);


}




// CATEGORY FILTER


function filterProducts() {


    let category =
        document.getElementById("categoryFilter")
        .value;



    if (category == "all") {


        displayProducts(productList);


    } else {


        let result =
            productList.filter(product =>

                product.category == category

            );


        displayProducts(result);


    }


}



displayProducts(productList); // USER SIGNUP


function signupUser(e) {

    e.preventDefault();


    let user = {


        name: document.getElementById("signupName").value,


        email: document.getElementById("signupEmail").value,


        password: document.getElementById("signupPassword").value


    };



    localStorage.setItem(

        "user",

        JSON.stringify(user)

    );



    alert("Signup Successful ✅");


    window.location.href = "login.html";


}





// USER LOGIN


function loginUser(e) {

    e.preventDefault();



    let user =
        JSON.parse(
            localStorage.getItem("user")
        );



    let email =
        document.getElementById("loginEmail").value;



    let password =
        document.getElementById("loginPassword").value;



    if (user &&
        user.email == email &&
        user.password == password) {


        localStorage.setItem(
            "loggedIn",
            "true"
        );


        alert("Login Successful 🎉");


        window.location.href = "index.html";


    } else {


        alert("Invalid Details ❌");


    }


}





// LOGOUT


function logoutUser() {


    localStorage.removeItem("loggedIn");


    alert("Logout Successful");


    window.location.href = "login.html";


} // USER NAVBAR UPDATE


function updateNavbar() {


    let user =
        JSON.parse(
            localStorage.getItem("user")
        );



    let logged =
        localStorage.getItem("loggedIn");



    let loginLink =
        document.getElementById("loginLink");


    let userBox =
        document.getElementById("userBox");


    let logoutLink =
        document.getElementById("logoutLink");


    let userName =
        document.getElementById("userName");



    if (logged === "true" && user) {



        if (loginLink) {

            loginLink.style.display = "none";

        }



        if (userBox) {

            userBox.style.display = "block";

        }



        if (logoutLink) {

            logoutLink.style.display = "block";

        }



        if (userName) {

            userName.innerHTML =
                "Hi, " + user.name + " 👋";

        }


    } else {


        if (loginLink) {

            loginLink.style.display = "block";

        }


        if (userBox) {

            userBox.style.display = "none";

        }


        if (logoutLink) {

            logoutLink.style.display = "none";

        }


    }


}



updateNavbar();
let user = {

    name: document.getElementById("signupName").value,


    email: document.getElementById("signupEmail").value,


    password: document.getElementById("signupPassword").value,


    phone: document.getElementById("signupPhone").value

}; // ===============================
// USER ORDER HISTORY
// ===============================


function loadMyOrders() {


    let orders =
        JSON.parse(
            localStorage.getItem("orders")
        ) || [];



    let box =
        document.getElementById("myOrders");



    if (!box) {

        return;

    }



    box.innerHTML = "";



    if (orders.length === 0) {


        box.innerHTML =
            "<h2>No Orders Found 🛒</h2>";


        return;


    }



    orders.forEach((order, index) => {


        let products = "";


        order.products.forEach(item => {


            products +=
                `
<p>
${item.name} - £${item.price}
</p>
`;



        });



        box.innerHTML += `


<div class="card">


<h3>
Order #${index+1}
</h3>


${products}


<p>
Customer:
${order.name}
</p>


<p>
Date:
${order.date}
</p>


<p>
Status:
${order.status || "Pending"}
</p>


</div>


`;



    });


}



loadMyOrders();