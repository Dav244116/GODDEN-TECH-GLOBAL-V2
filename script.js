"use strict";

/* =========================================================
   GODDEN TECH GLOBAL V2
   FRONTEND JAVASCRIPT
========================================================= */

/* =========================
   CONFIGURATION
========================= */

const WHATSAPP_NUMBER = "2347068270950";

const BACKEND_URL =
  "https://godden-tech-backend-production.up.railway.app";

/*
   The APK does NOT exist yet, so this must remain "#".
   Replace it later with the real APK download URL.
*/
const APP_DOWNLOAD_URL = "#";

/* =========================
   PRODUCTS
========================= */

const products = [

  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "Smartphones",
    price: 1350000,
    icon: "📱",
    description: "Premium Apple smartphone with powerful performance."
  },

  {
    id: 2,
    name: "Samsung Galaxy S25",
    category: "Smartphones",
    price: 1200000,
    icon: "📱",
    description: "Modern flagship smartphone with advanced technology."
  },

  {
    id: 3,
    name: "Google Pixel 9 Pro",
    category: "Smartphones",
    price: 1100000,
    icon: "📱",
    description: "Premium Android phone with an advanced camera system."
  },

  {
    id: 4,
    name: "MacBook Air M3",
    category: "Laptops",
    price: 1850000,
    icon: "💻",
    description: "Lightweight Apple laptop with M3 performance."
  },

  {
    id: 5,
    name: "HP Spectre x360",
    category: "Laptops",
    price: 1600000,
    icon: "💻",
    description: "Premium convertible laptop for work and creativity."
  },

  {
    id: 6,
    name: "ASUS ROG Gaming Laptop",
    category: "Gaming",
    price: 2200000,
    icon: "💻",
    description: "High-performance gaming laptop built for serious gaming."
  },

  {
    id: 7,
    name: "AirPods Pro",
    category: "Audio",
    price: 390000,
    icon: "🎧",
    description: "Premium wireless earbuds with active noise cancellation."
  },

  {
    id: 8,
    name: "Sony WH-1000XM5",
    category: "Audio",
    price: 550000,
    icon: "🎧",
    description: "Premium noise-cancelling wireless headphones."
  },

  {
    id: 9,
    name: "JBL Charge 5",
    category: "Audio",
    price: 250000,
    icon: "🔊",
    description: "Portable Bluetooth speaker with powerful sound."
  },

  {
    id: 10,
    name: "PlayStation 5",
    category: "Gaming",
    price: 950000,
    icon: "🎮",
    description: "Next-generation gaming console."
  },

  {
    id: 11,
    name: "Xbox Series X",
    category: "Gaming",
    price: 850000,
    icon: "🎮",
    description: "Powerful next-generation gaming console."
  },

  {
    id: 12,
    name: "Apple Watch Series 10",
    category: "Wearables",
    price: 650000,
    icon: "⌚",
    description: "Advanced smartwatch for everyday life."
  },

  {
    id: 13,
    name: "Samsung Galaxy Watch",
    category: "Wearables",
    price: 450000,
    icon: "⌚",
    description: "Smart wearable with health and fitness features."
  },

  {
    id: 14,
    name: "Anker Power Bank",
    category: "Accessories",
    price: 120000,
    icon: "🔋",
    description: "High-capacity portable charging solution."
  },

  {
    id: 15,
    name: "65W Fast Charger",
    category: "Accessories",
    price: 65000,
    icon: "🔌",
    description: "Fast USB-C charger for compatible devices."
  },

  {
    id: 16,
    name: "Mechanical Gaming Keyboard",
    category: "Gaming",
    price: 150000,
    icon: "⌨️",
    description: "Responsive mechanical keyboard for gaming."
  }

];

/* =========================
   CATEGORIES
========================= */

const categories = [

  {
    name: "Smartphones",
    icon: "📱",
    description: "Premium mobile devices"
  },

  {
    name: "Laptops",
    icon: "💻",
    description: "Powerful computers"
  },

  {
    name: "Audio",
    icon: "🎧",
    description: "Headphones & speakers"
  },

  {
    name: "Gaming",
    icon: "🎮",
    description: "Gaming equipment"
  },

  {
    name: "Wearables",
    icon: "⌚",
    description: "Smart watches"
  },

  {
    name: "Accessories",
    icon: "🔌",
    description: "Tech accessories"
  },

  {
    name: "Cameras",
    icon: "📷",
    description: "Digital cameras"
  },

  {
    name: "Networking",
    icon: "🌐",
    description: "Network equipment"
  }

];

/* =========================
   STATE
========================= */

let cart = JSON.parse(
  localStorage.getItem("goddenCart") || "[]"
);

let currentUser = JSON.parse(
  localStorage.getItem("goddenCurrentUser") || "null"
);

/* =========================
   DOM
========================= */

const loadingScreen =
  document.getElementById("loadingScreen");

const authScreen =
  document.getElementById("authScreen");

const storeApp =
  document.getElementById("storeApp");

const loginForm =
  document.getElementById("loginForm");

const registerForm =
  document.getElementById("registerForm");

const productGrid =
  document.getElementById("productGrid");

const categoryGrid =
  document.getElementById("categoryGrid");

const categoryFilter =
  document.getElementById("categoryFilter");

const searchInput =
  document.getElementById("searchInput");

const cartDrawer =
  document.getElementById("cartDrawer");

const cartOverlay =
  document.getElementById("cartOverlay");

const cartItems =
  document.getElementById("cartItems");

const cartTotal =
  document.getElementById("cartTotal");

const cartCount =
  document.getElementById("cartCount");

const productModal =
  document.getElementById("productModal");

const productModalContent =
  document.getElementById("productModalContent");

const accountModal =
  document.getElementById("accountModal");

const appPopup =
  document.getElementById("appPopup");

const toast =
  document.getElementById("toast");

const toastMessage =
  document.getElementById("toastMessage");

/* =========================
   HELPERS
========================= */

function formatPrice(price) {

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(price);

}

function saveCart() {

  localStorage.setItem(
    "goddenCart",
    JSON.stringify(cart)
  );

}

function showToast(message) {

  toastMessage.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);

}

function scrollToTop() {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

/* =========================
   AUTH
========================= */

function getUsers() {

  return JSON.parse(
    localStorage.getItem("goddenUsers") || "[]"
  );

}

function saveUsers(users) {

  localStorage.setItem(
    "goddenUsers",
    JSON.stringify(users)
  );

}

function showLogin() {

  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");

}

function showRegister() {

  loginForm.classList.add("hidden");
  registerForm.classList.remove("hidden");

}

function enterStore() {

  authScreen.classList.add("hidden");
  storeApp.classList.remove("hidden");

  renderCategories();
  renderProducts();
  renderCart();
  updateAccount();

}

function logout() {

  currentUser = null;

  localStorage.removeItem("goddenCurrentUser");

  storeApp.classList.add("hidden");
  authScreen.classList.remove("hidden");

  showLogin();

  showToast("You have been logged out.");

}

document
  .getElementById("showRegister")
  .addEventListener("click", showRegister);

document
  .getElementById("showLogin")
  .addEventListener("click", showLogin);

/* LOGIN */

document
  .getElementById("loginFormElement")
  .addEventListener("submit", function(e) {

    e.preventDefault();

    const email =
      document.getElementById("loginEmail")
        .value
        .trim()
        .toLowerCase();

    const password =
      document.getElementById("loginPassword")
        .value;

    const users = getUsers();

    const user = users.find(
      u =>
        u.email === email &&
        u.password === password
    );

    if (!user) {

      showToast(
        "Invalid email or password."
      );

      return;

    }

    currentUser = user;

    localStorage.setItem(
      "goddenCurrentUser",
      JSON.stringify(user)
    );

    showToast("Login successful.");

    setTimeout(() => {
      enterStore();
    }, 500);

  });

/* REGISTER */

document
  .getElementById("registerFormElement")
  .addEventListener("submit", function(e) {

    e.preventDefault();

    const name =
      document.getElementById("registerName")
        .value
        .trim();

    const email =
      document.getElementById("registerEmail")
        .value
        .trim()
        .toLowerCase();

    const password =
      document.getElementById("registerPassword")
        .value;

    const confirm =
      document.getElementById("registerConfirm")
        .value;

    if (password !== confirm) {

      showToast(
        "Passwords do not match."
      );

      return;

    }

    const users = getUsers();

    if (
      users.some(
        user => user.email === email
      )
    ) {

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

    saveUsers(users);

    currentUser = user;

    localStorage.setItem(
      "goddenCurrentUser",
      JSON.stringify(user)
    );

    showToast(
      "Account created successfully."
    );

    setTimeout(() => {

      enterStore();

      /*
        Show app notification after
        successful registration.
      */
      setTimeout(() => {
        openAppPopup();
      }, 1000);

    }, 500);

  });

/* =========================
   PRODUCTS
========================= */

function renderCategories() {

  categoryGrid.innerHTML = "";

  categories.forEach(category => {

    const card =
      document.createElement("div");

    card.className = "category-card";

    card.innerHTML = `

      <div class="category-icon">
        ${category.icon}
      </div>

      <h3>
        ${category.name}
      </h3>

      <p>
        ${category.description}
      </p>

    `;

    card.addEventListener("click", () => {

      categoryFilter.value =
        category.name;

      renderProducts();

      document
        .getElementById("products")
        .scrollIntoView({
          behavior: "smooth"
        });

    });

    categoryGrid.appendChild(card);

  });

}

function populateCategoryFilter() {

  categories.forEach(category => {

    const option =
      document.createElement("option");

    option.value = category.name;
    option.textContent = category.name;

    categoryFilter.appendChild(option);

  });

}

function renderProducts() {

  const search =
    searchInput.value
      .trim()
      .toLowerCase();

  const category =
    categoryFilter.value;

  let filtered =
    products.filter(product => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search) ||
        product.category
          .toLowerCase()
          .includes(search);

      const matchesCategory =
        category === "all" ||
        product.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );

    });

  productGrid.innerHTML = "";

  if (!filtered.length) {

    productGrid.innerHTML = `

      <div style="
        grid-column:1/-1;
        text-align:center;
        padding:70px 20px;
        color:#777;
      ">

        No products found.

      </div>

    `;

    return;

  }

  filtered.forEach(product => {

    const card =
      document.createElement("article");

    card.className = "product-card";

    card.innerHTML = `

      <div class="product-image">
        ${product.icon}
      </div>

      <div class="product-info">

        <span class="product-category">
          ${product.category}
        </span>

        <h3>
          ${product.name}
        </h3>

        <p class="product-description">
          ${product.description}
        </p>

        <div class="product-bottom">

          <span class="product-price">
            ${formatPrice(product.price)}
          </span>

          <button
            class="add-btn"
            data-id="${product.id}"
          >
            +
          </button>

        </div>

      </div>

    `;

    card.addEventListener("click", function(e) {

      if (
        e.target.classList.contains("add-btn")
      ) {

        addToCart(product.id);

        return;

      }

      openProduct(product.id);

    });

    productGrid.appendChild(card);

  });

}

/* =========================
   CART
========================= */

function addToCart(id) {

  const existing =
    cart.find(item => item.id === id);

  if (existing) {

    existing.quantity++;

  } else {

    cart.push({
      id,
      quantity: 1
    });

  }

  saveCart();

  renderCart();

  showToast("Added to cart.");

}

function removeFromCart(id) {

  cart =
    cart.filter(item => item.id !== id);

  saveCart();

  renderCart();

}

function changeQuantity(id, change) {

  const item =
    cart.find(item => item.id === id);

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {

    removeFromCart(id);

    return;

  }

  saveCart();

  renderCart();

}

function renderCart() {

  cartItems.innerHTML = "";

  let total = 0;
  let count = 0;

  if (!cart.length) {

    cartItems.innerHTML = `

      <div class="empty-cart">

        <div style="font-size:50px">
          🛒
        </div>

        <p>
          Your cart is empty.
        </p>

      </div>

    `;

  }

  cart.forEach(item => {

    const product =
      products.find(
        product => product.id === item.id
      );

    if (!product) return;

    const subtotal =
      product.price * item.quantity;

    total += subtotal;

    count += item.quantity;

    const div =
      document.createElement("div");

    div.className = "cart-item";

    div.innerHTML = `

      <div class="cart-item-image">
        ${product.icon}
      </div>

      <div class="cart-item-info">

        <h4>
          ${product.name}
        </h4>

        <p>
          ${formatPrice(product.price)}
        </p>

        <div class="qty-controls">

          <button
            data-action="minus"
            data-id="${product.id}"
          >
            -
          </button>

          <span>
            ${item.quantity}
          </span>

          <button
            data-action="plus"
            data-id="${product.id}"
          >
            +
          </button>

        </div>

      </div>

      <button
        class="remove-item"
        data-action="remove"
        data-id="${product.id}"
      >
        ✕
      </button>

    `;

    cartItems.appendChild(div);

  });

  cartTotal.textContent =
    formatPrice(total);

  cartCount.textContent = count;

}

/* CART EVENTS */

cartItems.addEventListener("click", function(e) {

  const button =
    e.target.closest("button");

  if (!button) return;

  const id =
    Number(button.dataset.id);

  const action =
    button.dataset.action;

  if (action === "plus") {

    changeQuantity(id, 1);

  }

  if (action === "minus") {

    changeQuantity(id, -1);

  }

  if (action === "remove") {

    removeFromCart(id);

  }

});

/* =========================
   CART OPEN/CLOSE
========================= */

function openCart() {

  cartDrawer.classList.add("open");
  cartOverlay.classList.remove("hidden");

}

function closeCart() {

  cartDrawer.classList.remove("open");
  cartOverlay.classList.add("hidden");

}

document
  .getElementById("cartBtn")
  .addEventListener("click", openCart);

document
  .getElementById("closeCart")
  .addEventListener("click", closeCart);

cartOverlay.addEventListener(
  "click",
  closeCart
);

/* =========================
   PRODUCT MODAL
========================= */

function openProduct(id) {

  const product =
    products.find(
      product => product.id === id
    );

  if (!product) return;

  productModalContent.innerHTML = `

    <div class="modal-product">

      <div class="modal-product-image">
        ${product.icon}
      </div>

      <div class="modal-product-info">

        <span class="product-category">
          ${product.category}
        </span>

        <h2>
          ${product.name}
        </h2>

        <div class="modal-price">
          ${formatPrice(product.price)}
        </div>

        <p>
          ${product.description}
        </p>

        <button
          class="primary-btn"
          id="modalAddButton"
        >
          ADD TO CART
        </button>

      </div>

    </div>

  `;

  productModal.classList.remove("hidden");

  document
    .getElementById("modalAddButton")
    .addEventListener("click", () => {

      addToCart(product.id);

      productModal.classList.add("hidden");

    });

}

document
  .getElementById("closeProductModal")
  .addEventListener("click", () => {

    productModal.classList.add("hidden");

  });

productModal.addEventListener("click", e => {

  if (e.target === productModal) {

    productModal.classList.add("hidden");

  }

});

/* =========================
   ACCOUNT
========================= */

function updateAccount() {

  if (!currentUser) return;

  document.getElementById(
    "accountName"
  ).textContent = currentUser.name;

  document.getElementById(
    "accountEmail"
  ).textContent = currentUser.email;

}

document
  .getElementById("accountBtn")
  .addEventListener("click", () => {

    updateAccount();

    accountModal.classList.remove("hidden");

  });

document
  .getElementById("closeAccountModal")
  .addEventListener("click", () => {

    accountModal.classList.add("hidden");

  });

document
  .getElementById("accountLogout")
  .addEventListener("click", logout);

document
  .getElementById("footerLogout")
  .addEventListener("click", logout);

/* =========================
   WHATSAPP CHECKOUT
========================= */

document
  .getElementById("checkoutBtn")
  .addEventListener("click", checkout);

function checkout() {

  if (!cart.length) {

    showToast(
      "Your cart is empty."
    );

    return;

  }

  let message =
    "Hello GODDEN TECH GLOBAL 👋%0A%0A";

  message +=
    "I want to order:%0A%0A";

  let total = 0;

  cart.forEach(item => {

    const product =
      products.find(
        product => product.id === item.id
      );

    if (!product) return;

    const subtotal =
      product.price * item.quantity;

    total += subtotal;

    message +=
      `• ${product.name} x${item.quantity} - ${formatPrice(subtotal)}%0A`;

  });

  message +=
    `%0A*Total: ${formatPrice(total)}*%0A%0A`;

  if (currentUser) {

    message +=
      `Customer: ${currentUser.name}%0A`;

    message +=
      `Email: ${currentUser.email}%0A%0A`;

  }

  message +=
    "Please provide the next steps for my order.";

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  window.open(url, "_blank");

  saveOrder();

}

/* =========================
   SAVE ORDER TO BACKEND
========================= */

async function saveOrder() {

  if (!currentUser || !cart.length) {
    return;
  }

  const order = {

    customer: {
      name: currentUser.name,
      email: currentUser.email
    },

    items: cart.map(item => {

      const product =
        products.find(
          product => product.id === item.id
        );

      return {
        name: product.name,
        quantity: item.quantity,
        price: product.price
      };

    }),

    createdAt:
      new Date().toISOString()

  };

  try {

    await fetch(
      `${BACKEND_URL}/api/orders`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body:
          JSON.stringify(order)

      }
    );

  } catch (error) {

    console.log(
      "Order backend unavailable:",
      error
    );

  }

}

/* ======================