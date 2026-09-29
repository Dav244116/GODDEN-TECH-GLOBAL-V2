/* =========================================================
   GODDEN TECH GLOBAL
   Marketplace Store Engine
========================================================= */


/* =========================================================
   SETTINGS
========================================================= */

const WHATSAPP_NUMBER = "2347068270950";

const APP_URL = "#";

let productsShown = 20;

let currentFilter = "all";

let cart = JSON.parse(
  localStorage.getItem("godden_cart") || "[]"
);

let orders = JSON.parse(
  localStorage.getItem("godden_orders") || "[]"
);

let users = JSON.parse(
  localStorage.getItem("godden_users") || "[]"
);

let currentUser = JSON.parse(
  localStorage.getItem("godden_current_user") || "null"
);


/* =========================================================
   PRODUCTS
========================================================= */

const products = [

  {
    id: 1,
    name: "Premium Smartphone Pro 5G",
    category: "smartphones",
    price: 289000,
    oldPrice: 340000,
    discount: 15,
    rating: 4.8,
    sold: 1240,
    icon: "📱"
  },

  {
    id: 2,
    name: "Android Smartphone 256GB",
    category: "smartphones",
    price: 185000,
    oldPrice: 220000,
    discount: 16,
    rating: 4.7,
    sold: 873,
    icon: "📱"
  },

  {
    id: 3,
    name: "Budget Android Phone",
    category: "smartphones",
    price: 99000,
    oldPrice: 125000,
    discount: 21,
    rating: 4.5,
    sold: 2140,
    icon: "📱"
  },

  {
    id: 4,
    name: "Ultra Camera Smartphone",
    category: "smartphones",
    price: 375000,
    oldPrice: 430000,
    discount: 13,
    rating: 4.9,
    sold: 562,
    icon: "📱"
  },

  {
    id: 5,
    name: "5G Gaming Smartphone",
    category: "smartphones",
    price: 315000,
    oldPrice: 360000,
    discount: 12,
    rating: 4.8,
    sold: 719,
    icon: "📱"
  },


  {
    id: 6,
    name: "SlimBook 15 Laptop",
    category: "laptops",
    price: 485000,
    oldPrice: 560000,
    discount: 13,
    rating: 4.8,
    sold: 318,
    icon: "💻"
  },

  {
    id: 7,
    name: "Business Laptop 8GB RAM",
    category: "laptops",
    price: 325000,
    oldPrice: 390000,
    discount: 17,
    rating: 4.6,
    sold: 481,
    icon: "💻"
  },

  {
    id: 8,
    name: "Gaming Laptop RTX",
    category: "laptops",
    price: 895000,
    oldPrice: 1050000,
    discount: 15,
    rating: 4.9,
    sold: 167,
    icon: "💻"
  },

  {
    id: 9,
    name: "Student Laptop 256GB",
    category: "laptops",
    price: 285000,
    oldPrice: 330000,
    discount: 14,
    rating: 4.5,
    sold: 926,
    icon: "💻"
  },


  {
    id: 10,
    name: "Wireless Noise Cancelling Headphones",
    category: "audio",
    price: 58000,
    oldPrice: 75000,
    discount: 23,
    rating: 4.8,
    sold: 1830,
    icon: "🎧"
  },

  {
    id: 11,
    name: "Bluetooth Earbuds Pro",
    category: "audio",
    price: 28500,
    oldPrice: 40000,
    discount: 29,
    rating: 4.7,
    sold: 3421,
    icon: "🎧"
  },

  {
    id: 12,
    name: "Portable Bluetooth Speaker",
    category: "audio",
    price: 32000,
    oldPrice: 45000,
    discount: 29,
    rating: 4.6,
    sold: 1275,
    icon: "🔊"
  },

  {
    id: 13,
    name: "Mini Wireless Earbuds",
    category: "audio",
    price: 14500,
    oldPrice: 22000,
    discount: 34,
    rating: 4.4,
    sold: 5120,
    icon: "🎧"
  },


  {
    id: 14,
    name: "Wireless Gaming Controller",
    category: "gaming",
    price: 45000,
    oldPrice: 65000,
    discount: 31,
    rating: 4.8,
    sold: 1904,
    icon: "🎮"
  },

  {
    id: 15,
    name: "RGB Gaming Headset",
    category: "gaming",
    price: 39000,
    oldPrice: 55000,
    discount: 29,
    rating: 4.7,
    sold: 841,
    icon: "🎧"
  },

  {
    id: 16,
    name: "Mechanical Gaming Keyboard",
    category: "gaming",
    price: 42000,
    oldPrice: 60000,
    discount: 30,
    rating: 4.8,
    sold: 724,
    icon: "⌨️"
  },

  {
    id: 17,
    name: "RGB Gaming Mouse",
    category: "gaming",
    price: 18500,
    oldPrice: 28000,
    discount: 34,
    rating: 4.6,
    sold: 2410,
    icon: "🖱️"
  },


  {
    id: 18,
    name: "Smart Watch Series X",
    category: "wearables",
    price: 35000,
    oldPrice: 50000,
    discount: 30,
    rating: 4.7,
    sold: 1320,
    icon: "⌚"
  },

  {
    id: 19,
    name: "Fitness Smart Band",
    category: "wearables",
    price: 12500,
    oldPrice: 19000,
    discount: 34,
    rating: 4.5,
    sold: 3750,
    icon: "⌚"
  },

  {
    id: 20,
    name: "Premium Smart Watch",
    category: "wearables",
    price: 68000,
    oldPrice: 85000,
    discount: 20,
    rating: 4.8,
    sold: 431,
    icon: "⌚"
  },


  {
    id: 21,
    name: "65W Fast Charging Adapter",
    category: "accessories",
    price: 14500,
    oldPrice: 21000,
    discount: 31,
    rating: 4.8,
    sold: 4270,
    icon: "🔌"
  },

  {
    id: 22,
    name: "USB-C Fast Charging Cable",
    category: "accessories",
    price: 6500,
    oldPrice: 10000,
    discount: 35,
    rating: 4.7,
    sold: 8100,
    icon: "🔌"
  },

  {
    id: 23,
    name: "20,000mAh Power Bank",
    category: "accessories",
    price: 25000,
    oldPrice: 36000,
    discount: 31,
    rating: 4.8,
    sold: 2930,
    icon: "🔋"
  },

  {
    id: 24,
    name: "Premium Phone Stand",
    category: "accessories",
    price: 8500,
    oldPrice: 12000,
    discount: 29,
    rating: 4.5,
    sold: 1180,
    icon: "📱"
  }

];


/* =========================================================
   FORMAT MONEY
========================================================= */

function money(amount) {

  return "₦" + Number(amount).toLocaleString("en-NG");

}


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  setupAuth();

  renderProducts();

  renderFlashDeals();

  updateCart();

  startCountdown();

  loadOrders();

  if (currentUser) {

    showStore();

  } else {

    showAuth();

  }

});


/* =========================================================
   AUTH SETUP
========================================================= */

function setupAuth() {

  const loginForm =
    document.getElementById("loginForm");

  const registerForm =
    document.getElementById("registerForm");


  loginForm.addEventListener("submit", login);

  registerForm.addEventListener(
    "submit",
    register
  );

}


/* =========================================================
   SHOW LOGIN
========================================================= */

function showLogin() {

  document
    .getElementById("loginForm")
    .classList.remove("hidden");

  document
    .getElementById("registerForm")
    .classList.add("hidden");


  document
    .getElementById("loginTab")
    .classList.add("active");

  document
    .getElementById("registerTab")
    .classList.remove("active");

}


/* =========================================================
   SHOW REGISTER
========================================================= */

function showRegister() {

  document
    .getElementById("loginForm")
    .classList.add("hidden");

  document
    .getElementById("registerForm")
    .classList.remove("hidden");


  document
    .getElementById("loginTab")
    .classList.remove("active");

  document
    .getElementById("registerTab")
    .classList.add("active");

}


/* =========================================================
   REGISTER
========================================================= */

function register(event) {

  event.preventDefault();


  const name =
    document
      .getElementById("registerName")
      .value
      .trim();

  const email =
    document
      .getElementById("registerEmail")
      .value
      .trim()
      .toLowerCase();

  const password =
    document
      .getElementById("registerPassword")
      .value;


  if (users.some(user => user.email === email)) {

    showToast(
      "An account with this email already exists."
    );

    return;

  }


  const user = {

    id: Date.now(),

    name,

    email,

    password

  };


  users.push(user);

  localStorage.setItem(
    "godden_users",
    JSON.stringify(users)
  );


  currentUser = user;

  localStorage.setItem(
    "godden_current_user",
    JSON.stringify(currentUser)
  );


  showToast(
    "Account created successfully!"
  );


  setTimeout(showStore, 500);

}


/* =========================================================
   LOGIN
========================================================= */

function login(event) {

  event.preventDefault();


  const email =
    document
      .getElementById("loginEmail")
      .value
      .trim()
      .toLowerCase();

  const password =
    document
      .getElementById("loginPassword")
      .value;


  const user = users.find(
    item =>
      item.email === email &&
      item.password === password
  );


  if (!user) {

    showToast(
      "Incorrect email or password."
    );

    return;

  }


  currentUser = user;

  localStorage.setItem(
    "godden_current_user",
    JSON.stringify(currentUser)
  );


  showToast(
    "Welcome back!"
  );


  setTimeout(showStore, 400);

}


/* =========================================================
   SHOW STORE
========================================================= */

function showStore() {

  document
    .getElementById("authPage")
    .classList.add("hidden");

  document
    .getElementById("store")
    .classList.remove("hidden");


  updateUserUI();

}


/* =========================================================
   SHOW AUTH
========================================================= */

function showAuth() {

  document
    .getElementById("authPage")
    .classList.remove("hidden");

  document
    .getElementById("store")
    .classList.add("hidden");

}


/* =========================================================
   LOGOUT
========================================================= */

function logout() {

  currentUser = null;

  localStorage.removeItem(
    "godden_current_user"
  );


  closeAccount();

  closeCart();

  closeOrders();


  showAuth();

  showLogin();

  showToast(
    "You have been logged out."
  );

}


/* =========================================================
   USER UI
========================================================= */

function updateUserUI() {

  if (!currentUser) return;


  const headerName =
    document.getElementById("headerName");

  const accountName =
    document.getElementById("accountName");

  const accountEmail =
    document.getElementById("accountEmail");


  if (headerName) {

    headerName.textContent =
      currentUser.name.split(" ")[0];

  }


  if (accountName) {

    accountName.textContent =
      currentUser.name;

  }


  if (accountEmail) {

    accountEmail.textContent =
      currentUser.email;

  }

}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts() {

  const grid =
    document.getElementById("productGrid");

  if (!grid) return;


  let filtered = products;


  if (currentFilter !== "all") {

    filtered =
      products.filter(
        product =>
          product.category === currentFilter
      );

  }


  filtered =
    filtered.slice(0, productsShown);


  grid.innerHTML = filtered
    .map(createProductCard)
    .join("");

}


/* =========================================================
   PRODUCT CARD
========================================================= */

function createProductCard(product) {

  return `

    <article
      class="product-card"
      onclick="openProduct(${product.id})"
    >

      <div class="product-image">

        <span class="sale-badge">
          -${product.discount}%
        </span>

        <button
          class="wishlist"
          onclick="event.stopPropagation(); toggleWishlist(${product.id})"
        >
          ♡
        </button>

        ${product.icon}

      </div>


      <div class="product-info">

        <div class="product-name">
          ${product.name}
        </div>


        <div class="product-rating">

          ★ ${product.rating}

          <span>
            (${formatSold(product.sold)})
          </span>

        </div>


        <div class="product-price">

          <strong>
            ${money(product.price)}
          </strong>

          <span class="product-old">
            ${money(product.oldPrice)}
          </span>

        </div>


        <div class="product-sold">

          ${formatSold(product.sold)}+ sold

        </div>


        <span class="delivery">
          ✓ Free delivery available
        </span>

      </div>


      <div class="product-actions">

        <button
          class="add-cart"
          onclick="event.stopPropagation(); addToCart(${product.id})"
        >
          Add to Cart
        </button>

      </div>

    </article>

  `;

}


/* =========================================================
   SOLD FORMAT
========================================================= */

function formatSold(number) {

  if (number >= 1000) {

    return (
      (number / 1000)
        .toFixed(1)
        .replace(".0", "") +
      "k"
    );

  }

  return number;

}


/* =========================================================
   FLASH DEALS
========================================================= */

function renderFlashDeals() {

  const grid =
    document.getElementById("flashGrid");

  if (!grid) return;


  const deals =
    [...products]
      .sort(
        (a, b) =>
          b.discount - a.discount
      )
      .slice(0, 6);


  grid.innerHTML = deals
    .map(product => `

      <article
        class="flash-card"
        onclick="openProduct(${product.id})"
      >

        <div class="flash-image">
          ${product.icon}
        </div>

        <div class="flash-info">

          <strong class="flash-price">
            ${money(product.price)}
          </strong>

          <span class="flash-old">
            ${money(product.oldPrice)}
          </span>

          <div class="product-rating">
            ★ ${product.rating}
          </div>

          <div class="progress">
            <span
              style="width:${Math.min(
                product.discount * 2.3,
                92
              )}%"
            ></span>
          </div>

          <small>
            ${product.discount}% claimed
          </small>

        </div>

      </article>

    `)
    .join("");

}


/* =========================================================
   FILTER PRODUCTS
========================================================= */

function filterProducts(category) {

  currentFilter = category;

  productsShown = 20;


  document
    .getElementById("products")
    .scrollIntoView({
      behavior: "smooth"
    });


  renderProducts();

}


/* =========================================================
   SEARCH
========================================================= */

function searchProducts() {

  const input =
    document.getElementById("searchInput");

  if (!input) return;


  const query =
    input.value
      .trim()
      .toLowerCase();


  if (!query) {

    currentFilter = "all";

    renderProducts();

    return;

  }


  const results =
    products.filter(product =>
      product.name
        .toLowerCase()
        .includes(query) ||
      product.category
        .toLowerCase()
        .includes(query)
    );


  const grid =
    document.getElementById("productGrid");


  grid.innerHTML =
    results.length
      ? results.map(createProductCard).join("")
      : `

        <div
          style="
            grid-column:1/-1;
            padding:50px;
            text-align:center;
          "
        >

          <div style="font-size:45px">
            🔍
          </div>

          <h3>
            No products found
          </h3>

          <p style="color:#777">
            Try another search.
          </p>

        </div>

      `;


  document
    .getElementById("products")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================================================
   LOAD MORE
========================================================= */

function loadMoreProducts() {

  productsShown += 10;

  renderProducts();

}


/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(productId) {

  const product =
    products.find(
      item => item.id === productId
    );


  if (!product) return;


  const existing =
    cart.find(
      item => item.id === productId
    );


  if (existing) {

    existing.quantity += 1;

  } else {

    cart.push({

      id: product.id,

      quantity: 1

    });

  }


  saveCart();

  updateCart();


  showToast(
    `${product.name} added to cart.`
  );

}


/* =========================================================
   SAVE CART
========================================================= */

function saveCart() {

  localStorage.setItem(
    "godden_cart",
    JSON.stringify(cart)
  );

}


/* =========================================================
   UPDATE CART
========================================================= */

function updateCart() {

  const count =
    cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );


  const countElement =
    document.getElementById("cartCount");


  if (countElement) {

    countElement.textContent =
      count;

  }


  renderCart();

}


/* =========================================================
   RENDER CART
========================================================= */

function renderCart() {

  const container =
    document.getElementById("cartItems");

  const totalElement =
    document.getElementById("cartTotal");


  if (!container) return;


  if (!cart.length) {

    container.innerHTML = `

      <div class="empty-cart">

        <div>
          🛒
        </div>

        <h3>
          Your cart is empty
        </h3>

        <p>
          Add something you love.
        </p>

      </div>

    `;


    if (totalElement) {

      totalElement.textContent =
        "₦0";

    }

    return;

  }


  let total = 0;


  container.innerHTML =
    cart.map(item => {

      const product =
        products.find(
          p => p.id === item.id
        );


      if (!product) return "";


      const itemTotal =
        product.price *
        item.quantity;


      total += itemTotal;


      return `

        <div class="cart-item">

          <div class="cart-item-image">
            ${product.icon}
          </div>


          <div class="cart-item-info">

            <div class="cart-item-name">
              ${product.name}
            </div>

            <div class="cart-item-price">
              ${money(itemTotal)}
            </div>


            <div class="cart-controls">

              <button
                onclick="changeQuantity(${product.id}, -1)"
              >
                −
              </button>

              <strong>
                ${item.quantity}
              </strong>

              <button
                onclick="changeQuantity(${product.id}, 1)"
              >
                +
              </button>

              <button
                onclick="removeFromCart(${product.id})"
              >
                🗑️
              </button>

            </div>

          </div>

        </div>

      `;

    })
    .join("");


  if (totalElement) {

    totalElement.textContent =
      money(total);

  }

}


/* =========================================================
   CHANGE QUANTITY
========================================================= */

function changeQuantity(
  productId,
  amount
) {

  const item =
    cart.find(
      cartItem =>
        cartItem.id === productId
    )