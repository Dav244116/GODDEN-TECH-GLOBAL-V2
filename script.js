/* =====================================================
   GODDEN TECH GLOBAL
   Frontend Store System
===================================================== */

const WHATSAPP_NUMBER = "2347068270950";
const APP_URL = "#";

let currentUser = JSON.parse(localStorage.getItem("goddenCurrentUser")) || null;
let cart = JSON.parse(localStorage.getItem("goddenCart")) || [];
let orders = JSON.parse(localStorage.getItem("goddenOrders")) || [];

let activeCategory = "all";
let visibleProducts = 12;


/* =====================================================
   PRODUCTS
===================================================== */

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "smartphones",
    price: 1250000,
    oldPrice: 1400000,
    emoji: "📱",
    rating: 4.9,
    deal: true
  },
  {
    id: 2,
    name: "Samsung Galaxy S25",
    category: "smartphones",
    price: 1100000,
    oldPrice: 1250000,
    emoji: "📱",
    rating: 4.8,
    deal: true
  },
  {
    id: 3,
    name: "Google Pixel 9",
    category: "smartphones",
    price: 850000,
    oldPrice: 950000,
    emoji: "📱",
    rating: 4.7,
    deal: false
  },
  {
    id: 4,
    name: "MacBook Air M3",
    category: "laptops",
    price: 1650000,
    oldPrice: 1800000,
    emoji: "💻",
    rating: 4.9,
    deal: true
  },
  {
    id: 5,
    name: "HP Pavilion 15",
    category: "laptops",
    price: 950000,
    oldPrice: 1050000,
    emoji: "💻",
    rating: 4.6,
    deal: false
  },
  {
    id: 6,
    name: "Lenovo IdeaPad Slim",
    category: "laptops",
    price: 780000,
    oldPrice: 850000,
    emoji: "💻",
    rating: 4.5,
    deal: false
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    category: "audio",
    price: 420000,
    oldPrice: 480000,
    emoji: "🎧",
    rating: 4.9,
    deal: true
  },
  {
    id: 8,
    name: "AirPods Pro",
    category: "audio",
    price: 350000,
    oldPrice: 390000,
    emoji: "🎧",
    rating: 4.8,
    deal: true
  },
  {
    id: 9,
    name: "JBL Tune 770NC",
    category: "audio",
    price: 120000,
    oldPrice: 145000,
    emoji: "🎧",
    rating: 4.6,
    deal: false
  },
  {
    id: 10,
    name: "PlayStation 5",
    category: "gaming",
    price: 950000,
    oldPrice: 1050000,
    emoji: "🎮",
    rating: 4.9,
    deal: true
  },
  {
    id: 11,
    name: "Xbox Wireless Controller",
    category: "gaming",
    price: 110000,
    oldPrice: 130000,
    emoji: "🎮",
    rating: 4.7,
    deal: false
  },
  {
    id: 12,
    name: "Gaming Headset",
    category: "gaming",
    price: 85000,
    oldPrice: 100000,
    emoji: "🎧",
    rating: 4.5,
    deal: false
  },
  {
    id: 13,
    name: "Apple Watch Series 10",
    category: "wearables",
    price: 520000,
    oldPrice: 590000,
    emoji: "⌚",
    rating: 4.8,
    deal: true
  },
  {
    id: 14,
    name: "Samsung Galaxy Watch",
    category: "wearables",
    price: 300000,
    oldPrice: 350000,
    emoji: "⌚",
    rating: 4.6,
    deal: false
  },
  {
    id: 15,
    name: "Smart Fitness Band",
    category: "wearables",
    price: 45000,
    oldPrice: 60000,
    emoji: "⌚",
    rating: 4.3,
    deal: false
  },
  {
    id: 16,
    name: "20,000mAh Power Bank",
    category: "accessories",
    price: 65000,
    oldPrice: 80000,
    emoji: "🔋",
    rating: 4.6,
    deal: true
  },
  {
    id: 17,
    name: "65W Fast Charger",
    category: "accessories",
    price: 35000,
    oldPrice: 45000,
    emoji: "🔌",
    rating: 4.7,
    deal: false
  },
  {
    id: 18,
    name: "USB-C Cable",
    category: "accessories",
    price: 12000,
    oldPrice: 18000,
    emoji: "🔌",
    rating: 4.4,
    deal: false
  },
  {
    id: 19,
    name: "Wireless Charging Pad",
    category: "accessories",
    price: 28000,
    oldPrice: 35000,
    emoji: "⚡",
    rating: 4.5,
    deal: true
  },
  {
    id: 20,
    name: "Mechanical Gaming Keyboard",
    category: "gaming",
    price: 95000,
    oldPrice: 120000,
    emoji: "⌨️",
    rating: 4.7,
    deal: false
  },
  {
    id: 21,
    name: "Gaming Mouse",
    category: "gaming",
    price: 45000,
    oldPrice: 60000,
    emoji: "🖱️",
    rating: 4.6,
    deal: false
  },
  {
    id: 22,
    name: "Bluetooth Speaker",
    category: "audio",
    price: 75000,
    oldPrice: 95000,
    emoji: "🔊",
    rating: 4.7,
    deal: true
  },
  {
    id: 23,
    name: "Tablet Pro 12",
    category: "smartphones",
    price: 680000,
    oldPrice: 750000,
    emoji: "📱",
    rating: 4.6,
    deal: false
  },
  {
    id: 24,
    name: "Laptop Backpack",
    category: "accessories",
    price: 38000,
    oldPrice: 50000,
    emoji: "🎒",
    rating: 4.5,
    deal: false
  }
];


/* =====================================================
   HELPERS
===================================================== */

function money(value) {
  return "₦" + Number(value).toLocaleString("en-NG");
}

function saveUser() {
  localStorage.setItem(
    "goddenCurrentUser",
    JSON.stringify(currentUser)
  );
}

function saveCart() {
  localStorage.setItem(
    "goddenCart",
    JSON.stringify(cart)
  );
}

function saveOrders() {
  localStorage.setItem(
    "goddenOrders",
    JSON.stringify(orders)
  );
}

function showToast(message) {
  const toast = document.getElementById("toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}


/* =====================================================
   AUTH
===================================================== */

function setupAuth() {

  const loginTab = document.getElementById("loginTab");
  const registerTab = document.getElementById("registerTab");

  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (!loginTab || !registerTab || !loginForm || !registerForm) {
    console.error("Authentication elements are missing.");
    return;
  }

  loginTab.addEventListener("click", function () {

    loginTab.classList.add("active");
    registerTab.classList.remove("active");

    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");

  });


  registerTab.addEventListener("click", function () {

    registerTab.classList.add("active");
    loginTab.classList.remove("active");

    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");

  });


  registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
      document.getElementById("registerName").value.trim();

    const email =
      document.getElementById("registerEmail").value.trim().toLowerCase();

    const password =
      document.getElementById("registerPassword").value;

    if (!name || !email || !password) {
      showToast("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      showToast("Password must contain at least 6 characters.");
      return;
    }

    const users =
      JSON.parse(localStorage.getItem("goddenUsers")) || [];

    const exists =
      users.some(user => user.email === email);

    if (exists) {
      showToast("An account with this email already exists.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password
    };

    users.push(newUser);

    localStorage.setItem(
      "goddenUsers",
      JSON.stringify(users)
    );

    currentUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email
    };

    saveUser();

    showToast("Account created successfully!");

    setTimeout(() => {
      showStore();
    }, 700);

  });


  loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email =
      document.getElementById("loginEmail").value.trim().toLowerCase();

    const password =
      document.getElementById("loginPassword").value;

    const users =
      JSON.parse(localStorage.getItem("goddenUsers")) || [];

    const user =
      users.find(
        item =>
          item.email === email &&
          item.password === password
      );

    if (!user) {
      showToast("Incorrect email or password.");
      return;
    }

    currentUser = {
      id: user.id,
      name: user.name,
      email: user.email
    };

    saveUser();

    showToast("Welcome back!");

    setTimeout(() => {
      showStore();
    }, 500);

  });

}


/* =====================================================
   SHOW STORE
===================================================== */

function showStore() {

  const authPage = document.getElementById("authPage");
  const store = document.getElementById("store");

  if (authPage) {
    authPage.classList.add("hidden");
  }

  if (store) {
    store.classList.remove("hidden");
  }

  updateUserUI();
  renderProducts();
  renderFlashDeals();
  updateCart();

}


/* =====================================================
   USER UI
===================================================== */

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


/* =====================================================
   LOGOUT
===================================================== */

function logout() {

  currentUser = null;

  localStorage.removeItem("goddenCurrentUser");

  location.reload();

}


/* =====================================================
   PRODUCTS
===================================================== */

function renderProducts() {

  const grid =
    document.getElementById("productGrid");

  if (!grid) return;

  let list = [...products];

  if (activeCategory !== "all") {

    if (activeCategory === "deals") {
      list =
        list.filter(product => product.deal);
    } else {
      list =
        list.filter(
          product =>
            product.category === activeCategory
        );
    }

  }

  const searchInput =
    document.getElementById("searchInput");

  const search =
    searchInput
      ? searchInput.value.trim().toLowerCase()
      : "";

  if (search) {
    list =
      list.filter(product =>
        product.name.toLowerCase().includes(search)
      );
  }

  list =
    list.slice(0, visibleProducts);

  grid.innerHTML = "";

  if (!list.length) {

    grid.innerHTML = `
      <div class="empty-state">
        <h3>No products found</h3>
        <p>Try another search or category.</p>
      </div>
    `;

    return;
  }

  list.forEach(product => {

    grid.insertAdjacentHTML(
      "beforeend",
      productCard(product)
    );

  });

}


/* =====================================================
   PRODUCT CARD
===================================================== */

function productCard(product) {

  const discount =
    Math.round(
      ((product.oldPrice - product.price) /
        product.oldPrice) * 100
    );

  return `
    <article class="product-card">

      <div
        class="product-image"
        onclick="openProduct(${product.id})"
      >

        ${
          product.deal
            ? `<span class="deal-badge">-${discount}%</span>`
            : ""
        }

        <span class="product-emoji">
          ${product.emoji}
        </span>

        <button
          class="quick-view"
          onclick="event.stopPropagation(); openProduct(${product.id})"
        >
          View
        </button>

      </div>

      <div class="product-info">

        <span class="product-category">
          ${product.category}
        </span>

        <h3>
          ${product.name}
        </h3>

        <div class="rating">
          ⭐ ${product.rating}
        </div>

        <div class="price-row">

          <strong>
            ${money(product.price)}
          </strong>

          <del>
            ${money(product.oldPrice)}
          </del>

        </div>

        <button
          class="add-cart-btn"
          onclick="addToCart(${product.id})"
        >
          Add to Cart
        </button>

      </div>

    </article>
  `;
}


/* =====================================================
   FLASH DEALS
===================================================== */

function renderFlashDeals() {

  const grid =
    document.getElementById("flashGrid");

  if (!grid) return;

  const deals =
    products
      .filter(product => product.deal)
      .slice(0, 6);

  grid.innerHTML =
    deals.map(product => productCard(product)).join("");

}


/* =====================================================
   FILTER
===================================================== */

function filterProducts(category) {

  activeCategory = category;
  visibleProducts = 12;

  document
    .querySelectorAll(".filter-btn")
    .forEach(button =>
      button.classList.remove("active")
    );

  renderProducts();

  const productsSection =
    document.getElementById("products");

  if (productsSection) {
    productsSection.scrollIntoView({
      behavior: "smooth"
    });
  }

}


/* =====================================================
   SEARCH
===================================================== */

function searchProducts() {
  visibleProducts = 12;
  renderProducts();
}

function loadMoreProducts() {

  visibleProducts += 12;

  renderProducts();

}


/* =====================================================
   CART
===================================================== */

function addToCart(productId) {

  const product =
    products.find(item => item.id === productId);

  if (!product) return;

  const existing =
    cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  saveCart();
  updateCart();

  showToast(`${product.name} added to cart.`);

}


function updateCart() {

  const count =
    document.getElementById("cartCount");

  const items =
    document.getElementById("cartItems");

  const totalElement =
    document.getElementById("cartTotal");

  const totalItems =
    cart.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );

  const totalPrice =
    cart.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );

  if (count) {
    count.textContent = totalItems;
  }

  if (totalElement) {
    totalElement.textContent =
      money(totalPrice);
  }

  if (!items) return;

  if (!cart.length) {

    items.innerHTML = `
      <div class="empty-state">
        <div style="font-size:50px">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add some products to get started.</p>
      </div>
    `;

    return;
  }

  items.innerHTML =
    cart.map(item => `

      <div class="cart-item">

        <div class="cart-item-image">
          ${item.emoji}
        </div>

        <div class="cart-item-info">

          <h3>
            ${item.name}
          </h3>

          <strong>
            ${money(item.price)}
          </strong>

          <div class="quantity-controls">

            <button
              onclick="changeQuantity(${item.id}, -1)"
            >
              −
            </button>

            <span>
              ${item.quantity}
            </span>

            <button
              onclick="changeQuantity(${item.id}, 1)"
            >
              +
            </button>

            <button
              onclick="removeFromCart(${item.id})"
            >
              🗑️
            </button>

          </div>

        </div>

      </div>

    `).join("");

}


function changeQuantity(productId, amount) {

  const item =
    cart.find(product => product.id === productId);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart =
      cart.filter(product => product.id !== productId);
  }

  saveCart();
  updateCart();

}


function removeFromCart(productId) {

  cart =
    cart.filter(product => product.id !== productId);

  saveCart();
  updateCart();

}


/* =====================================================
   CART DRAWER
===================================================== */

function openCart() {

  document
    .getElementById("cartOverlay")
    ?.classList.remove("hidden");

  document
    .getElementById("cartDrawer")
    ?.classList.add("open");

  updateCart();

}


function closeCart() {

  document
    .getElementById("cartOverlay")
    ?.classList.add("hidden");

  document
    .getElementById("cartDrawer")
    ?.classList.remove("open");

}


/* =====================================================
   ACCOUNT
===================================================== */

function openAccount() {

  document
    .getElementById("accountOverlay")
    ?.classList.remove("hidden");

  document
    .getElementById("accountDrawer")
    ?.classList.add("open");

  updateUserUI();

}


function closeAccount() {

  document
    .getElementById("accountOverlay")
    ?.classList.add("hidden");

  document
    .getElementById("accountDrawer")
    ?.classList.remove("open");

}


/* =====================================================
   ORDERS
===================================================== */

function openOrders() {

  closeAccount();

  document
    .getElementById("ordersOverlay")
    ?.classList.remove("hidden");

  document
    .getElementById("ordersDrawer")
    ?.classList.add("open");

  loadOrders();

}


function closeOrders() {

  document
    .getElementById("ordersOverlay")
    ?.classList.add("hidden");

  document
    .getElementById("ordersDrawer")
    ?.classList.remove("open");

}


function loadOrders() {

  const body =
    document.getElementById("ordersBody");

  if (!body) return;

  if (!orders.length) {

    body.innerHTML = `
      <div class="empty-state">
        <div style="font-size:50px">📦</div>
        <h3>No orders yet</h3>
        <p>Your completed orders will appear here.</p>
      </div>
    `;

    return;
  }

  body.innerHTML =
    orders.map(order => `

      <div class="order-card">

        <strong>
          Order #${order.id}
        </strong>

        <span>
          ${order.date}
        </span>

        <b>
          ${money(order.total)}
        </b>

      </div>

    `).join("");

}


/* =====================================================
   PRODUCT MODAL
===================================================== */

function openProduct(productId) {

  const product =
    products.find(item => item.id === productId);

  if (!product) return;

  const modal =
    document.getElementById("productModal");

  const details =
    document.getElementById("productDetails");

  if (!modal || !details) return;

  details.innerHTML = `

    <div class="product-detail">

      <div class="product-detail-image">
        ${product.emoji}
      </div>

      <div class="product-detail-info">

        <span>
          ${product.category}
        </span>

        <h2>
          ${product.name}
        </h2>

        <div class="rating">
          ⭐ ${product.rating}
        </div>

        <div class="detail-price">
          ${money(product.price)}
        </div>

        <p>
          Premium ${product.name} available from
          GODDEN TECH GLOBAL.
        </p>

        <button
          class="primary-btn"
          onclick="addToCart(${product.id}); closeProductModal();"
        >
          Add to Cart
        </button>

      </div>

    </div>

  `;

  modal.classList.remove("hidden");

}


function closeProductModal() {

  document
    .getElementById("productModal")
    ?.classList.add("hidden");

}

/* =====================================================
   CHECKOUT
===================================================== */

function checkout() {

  if (!cart.length) {
    showToast("Your cart is empty.");
    return;
  }

  const total = cart.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );

  const order = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    total: total,
    items: cart.map(item => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price
    }))
  };

  orders.unshift(order);
  saveOrders();

  const message =
    `Hello GODDEN TECH GLOBAL.%0A%0A` +
    `I want to place an order:%0A%0A` +
    cart.map(item =>
      `${item.name} x${item.quantity} - ${money(item.price * item.quantity)}`
    ).join("%0A") +
    `%0A%0ATotal: ${money(total)}`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
    "_blank"
  );

  cart = [];
  saveCart();
  updateCart();

  closeCart();

  showToast("Order created successfully!");
}


/* =====================================================
   APP DOWNLOAD
===================================================== */

function downloadApp() {

  if (APP_URL && APP_URL !== "#") {

    window.open(APP_URL, "_blank");

    return;
  }

  showToast(
    "The GODDEN TECH app will be available soon."
  );
}


function closeAppPopup() {

  const popup =
    document.getElementById("appPopup");

  if (popup) {
    popup.classList.add("hidden");
  }

}


/* =====================================================
   SUPPORT
===================================================== */

function contactSupport() {

  const message =
    "Hello GODDEN TECH GLOBAL, I need help.";

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank"
  );

}


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

  const nav =
    document.querySelector(".category-nav");

  if (!nav) return;

  nav.classList.toggle("mobile-open");

}


/* =====================================================
   COUNTDOWN
===================================================== */

let dealEnd =
  Date.now() + (24 * 60 * 60 * 1000);


function updateCountdown() {

  let difference =
    dealEnd - Date.now();

  if (difference <= 0) {

    dealEnd =
      Date.now() + (24 * 60 * 60 * 1000);

    difference =
      dealEnd - Date.now();
  }

  const hours =
    Math.floor(
      difference / (1000 * 60 * 60)
    );

  const minutes =
    Math.floor(
      (difference / (1000 * 60)) % 60
    );

  const seconds =
    Math.floor(
      (difference / 1000) % 60
    );

  const hoursElement =
    document.getElementById("hours");

  const minutesElement =
    document.getElementById("minutes");

  const secondsElement =
    document.getElementById("seconds");

  if (hoursElement) {
    hoursElement.textContent =
      String(hours).padStart(2, "0");
  }

  if (minutesElement) {
    minutesElement.textContent =
      String(minutes).padStart(2, "0");
  }

  if (secondsElement) {
    secondsElement.textContent =
      String(seconds).padStart(2, "0");
  }

}


/* =====================================================
   SEARCH
===================================================== */

function setupSearch() {

  const input =
    document.getElementById("searchInput");

  if (!input) return;

  input.addEventListener("input", function () {

    visibleProducts = 12;

    renderProducts();

  });

  input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
      searchProducts();
    }

  });

}


/* =====================================================
   START APPLICATION
===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    setupAuth();

    setupSearch();

    updateCountdown();

    setInterval(
      updateCountdown,
      1000
    );

    if (currentUser) {
      showStore();
    }

  }
);
