"use strict";

/* =========================================================
   GODDEN TECH GLOBAL
   Frontend Marketplace
========================================================= */

const WHATSAPP_NUMBER = "2347068270950";

/*
  When the real app is ready, replace "#" with the APK/app URL.
*/
const APP_URL = "#";


/* =========================================================
   PRODUCTS
========================================================= */

const products = [

  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "Smartphones",
    price: 1350000,
    oldPrice: 1450000,
    rating: 4.9,
    icon: "📱",
    deal: true
  },

  {
    id: 2,
    name: "Samsung Galaxy S25",
    category: "Smartphones",
    price: 980000,
    oldPrice: 1100000,
    rating: 4.8,
    icon: "📱",
    deal: true
  },

  {
    id: 3,
    name: "Google Pixel 9",
    category: "Smartphones",
    price: 850000,
    oldPrice: 930000,
    rating: 4.7,
    icon: "📱",
    deal: false
  },

  {
    id: 4,
    name: "MacBook Air M3",
    category: "Laptops",
    price: 1850000,
    oldPrice: 2000000,
    rating: 4.9,
    icon: "💻",
    deal: true
  },

  {
    id: 5,
    name: "HP Pavilion 15",
    category: "Laptops",
    price: 920000,
    oldPrice: 1000000,
    rating: 4.6,
    icon: "💻",
    deal: false
  },

  {
    id: 6,
    name: "Lenovo IdeaPad Slim",
    category: "Laptops",
    price: 780000,
    oldPrice: 850000,
    rating: 4.5,
    icon: "💻",
    deal: false
  },

  {
    id: 7,
    name: "Sony WH-1000XM5",
    category: "Audio",
    price: 420000,
    oldPrice: 470000,
    rating: 4.9,
    icon: "🎧",
    deal: true
  },

  {
    id: 8,
    name: "AirPods Pro",
    category: "Audio",
    price: 285000,
    oldPrice: 320000,
    rating: 4.8,
    icon: "🎧",
    deal: false
  },

  {
    id: 9,
    name: "JBL Tune 770NC",
    category: "Audio",
    price: 145000,
    oldPrice: 170000,
    rating: 4.6,
    icon: "🎧",
    deal: true
  },

  {
    id: 10,
    name: "PlayStation 5",
    category: "Gaming",
    price: 920000,
    oldPrice: 1000000,
    rating: 4.9,
    icon: "🎮",
    deal: true
  },

  {
    id: 11,
    name: "Xbox Wireless Controller",
    category: "Gaming",
    price: 115000,
    oldPrice: 135000,
    rating: 4.7,
    icon: "🎮",
    deal: false
  },

  {
    id: 12,
    name: "Gaming Headset Pro",
    category: "Gaming",
    price: 95000,
    oldPrice: 120000,
    rating: 4.5,
    icon: "🎧",
    deal: true
  },

  {
    id: 13,
    name: "Apple Watch Series 10",
    category: "Wearables",
    price: 620000,
    oldPrice: 700000,
    rating: 4.8,
    icon: "⌚",
    deal: false
  },

  {
    id: 14,
    name: "Samsung Galaxy Watch",
    category: "Wearables",
    price: 350000,
    oldPrice: 400000,
    rating: 4.7,
    icon: "⌚",
    deal: true
  },

  {
    id: 15,
    name: "Smart Fitness Band",
    category: "Wearables",
    price: 45000,
    oldPrice: 60000,
    rating: 4.4,
    icon: "⌚",
    deal: false
  },

  {
    id: 16,
    name: "20000mAh Power Bank",
    category: "Accessories",
    price: 55000,
    oldPrice: 70000,
    rating: 4.5,
    icon: "🔋",
    deal: true
  },

  {
    id: 17,
    name: "65W Fast Charger",
    category: "Accessories",
    price: 35000,
    oldPrice: 45000,
    rating: 4.6,
    icon: "🔌",
    deal: false
  },

  {
    id: 18,
    name: "USB-C Fast Cable",
    category: "Accessories",
    price: 12000,
    oldPrice: 18000,
    rating: 4.5,
    icon: "🔌",
    deal: false
  },

  {
    id: 19,
    name: "Wireless Charging Pad",
    category: "Accessories",
    price: 28000,
    oldPrice: 35000,
    rating: 4.5,
    icon: "🔋",
    deal: true
  },

  {
    id: 20,
    name: "Mechanical Gaming Keyboard",
    category: "Gaming",
    price: 85000,
    oldPrice: 105000,
    rating: 4.8,
    icon: "⌨️",
    deal: false
  },

  {
    id: 21,
    name: "Gaming Mouse RGB",
    category: "Gaming",
    price: 42000,
    oldPrice: 55000,
    rating: 4.7,
    icon: "🖱️",
    deal: true
  },

  {
    id: 22,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 75000,
    oldPrice: 90000,
    rating: 4.6,
    icon: "🔊",
    deal: false
  },

  {
    id: 23,
    name: "Tablet Pro 12",
    category: "Tablets",
    price: 550000,
    oldPrice: 620000,
    rating: 4.7,
    icon: "📲",
    deal: true
  },

  {
    id: 24,
    name: "Premium Laptop Backpack",
    category: "Accessories",
    price: 38000,
    oldPrice: 50000,
    rating: 4.5,
    icon: "🎒",
    deal: false
  }

];


/* =========================================================
   STATE
========================================================= */

let currentUser =
  JSON.parse(localStorage.getItem("goddenCurrentUser")) || null;

let cart =
  JSON.parse(localStorage.getItem("goddenCart")) || [];

let orders =
  JSON.parse(localStorage.getItem("goddenOrders")) || [];

let currentCategory = "All";
let searchTerm = "";
let productsShown = 12;


/* =========================================================
   HELPERS
========================================================= */

function money(amount) {

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(amount);

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


function saveCurrentUser() {

  localStorage.setItem(
    "goddenCurrentUser",
    JSON.stringify(currentUser)
  );

}


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


function showToast(message) {

  const toast =
    document.getElementById("toast");

  if (!toast) return;

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer =
    setTimeout(() => {

      toast.classList.remove("show");

    }, 2500);

}


/* =========================================================
   AUTH
========================================================= */

function setupAuth() {

  const loginTab =
    document.getElementById("loginTab");

  const registerTab =
    document.getElementById("registerTab");

  const loginForm =
    document.getElementById("loginForm");

  const registerForm =
    document.getElementById("registerForm");

  const goRegister =
    document.getElementById("goRegister");

  const goLogin =
    document.getElementById("goLogin");


  function showLogin() {

    loginTab.classList.add("active");
    registerTab.classList.remove("active");

    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");

  }


  function showRegister() {

    registerTab.classList.add("active");
    loginTab.classList.remove("active");

    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");

  }


  loginTab.addEventListener(
    "click",
    showLogin
  );

  registerTab.addEventListener(
    "click",
    showRegister
  );

  goRegister.addEventListener(
    "click",
    showRegister
  );

  goLogin.addEventListener(
    "click",
    showLogin
  );


  loginForm.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();

      const email =
        document.getElementById("loginEmail")
          .value
          .trim()
          .toLowerCase();

      const password =
        document.getElementById("loginPassword")
          .value;


      const users = getUsers();

      const user =
        users.find(
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


      currentUser = {
        name: user.name,
        email: user.email
      };

      saveCurrentUser();

      showToast(
        "Welcome back, " + user.name + "!"
      );

      showStore();

    }
  );


  registerForm.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();


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


      if (password.length < 6) {

        showToast(
          "Password must be at least 6 characters."
        );

        return;

      }


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


      const newUser = {
        name,
        email,
        password
      };


      users.push(newUser);

      saveUsers(users);


      currentUser = {
        name,
        email
      };

      saveCurrentUser();


      registerForm.reset();

      showToast(
        "Account created successfully!"
      );

      setTimeout(
        showStore,
        500
      );

    }
  );

}


/* =========================================================
   STORE
========================================================= */

function showStore() {

  document
    .getElementById("authPage")
    .classList.add("hidden");

  document
    .getElementById("storePage")
    .classList.remove("hidden");


  updateUserUI();

  renderDeals();

  renderProducts();

  updateCartUI();

}


function updateUserUI() {

  if (!currentUser) return;

  const name =
    document.getElementById("accountName");

  const email =
    document.getElementById("accountEmail");

  if (name) {
    name.textContent =
      currentUser.name;
  }

  if (email) {
    email.textContent =
      currentUser.email;
  }

}


function logout() {

  currentUser = null;

  localStorage.removeItem(
    "goddenCurrentUser"
  );

  closeAllPanels();

  document
    .getElementById("storePage")
    .classList.add("hidden");

  document
    .getElementById("authPage")
    .classList.remove("hidden");

  showToast(
    "You have been logged out."
  );

}


/* =========================================================
   PRODUCTS
========================================================= */

function getFilteredProducts() {

  return products.filter(product => {

    const categoryMatch =
      currentCategory === "All" ||
      product.category === currentCategory;


    const searchMatch =
      product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      product.category
        .toLowerCase()
        .includes(searchTerm.toLowerCase());


    return categoryMatch && searchMatch;

  });

}


function renderProductCard(product) {

  const card =
    document.createElement("article");

  card.className =
    "product-card";


  card.innerHTML = `

    <div class="product-image">

      ${
        product.deal
          ? `<span class="deal-badge">FLASH DEAL</span>`
          : ""
      }

      <span>${product.icon}</span>

    </div>

    <div class="product-info">

      <span class="product-category">
        ${product.category}
      </span>

      <h3 class="product-name">
        ${product.name}
      </h3>

      <div class="rating">
        ⭐ ${product.rating}
      </div>

      <div class="product-price">

        <span class="current-price">
          ${money(product.price)}
        </span>

        <span class="old-price">
          ${money(product.oldPrice)}
        </span>

      </div>

      <div class="product-buttons">

        <button
          class="quick-btn"
          data-id="${product.id}"
          type="button"
        >
          View
        </button>

        <button
          class="add-btn"
          data-id="${product.id}"
          type="button"
        >
          Add to Cart
        </button>

      </div>

    </div>

  `;


  card
    .querySelector(".quick-btn")
    .addEventListener(
      "click",
      () => openProduct(product.id)
    );


  card
    .querySelector(".add-btn")
    .addEventListener(
      "click",
      () => addToCart(product.id)
    );


  return card;

}


function renderProducts() {

  const grid =
    document.getElementById(
      "productsGrid"
    );

  if (!grid) return;


  grid.innerHTML = "";


  const filtered =
    getFilteredProducts();


  const visible =
    filtered.slice(
      0,
      productsShown
    );


  visible.forEach(product => {

    grid.appendChild(
      renderProductCard(product)
    );

  });


  const title =
    document.getElementById(
      "productsTitle"
    );

  if (title) {

    if (searchTerm) {

      title.textContent =
        `Search results for "${searchTerm}"`;

    } else if (
      currentCategory !== "All"
    ) {

      title.textContent =
        currentCategory;

    } else {

      title.textContent =
        "Popular Products";

    }

  }


  const clearButton =
    document.getElementById(
      "clearFilterButton"
    );


  if (
    clearButton &&
    (
      currentCategory !== "All" ||
      searchTerm
    )
  ) {

    clearButton.classList.remove(
      "hidden"
    );

  } else if (clearButton) {

    clearButton.classList.add(
      "hidden"
    );

  }


  const loadMore =
    document.getElementById(
      "loadMoreButton"
    );


  if (loadMore) {

    if (
      visible.length >=
      filtered.length
    ) {

      loadMore.classList.add(
        "hidden"
      );

    } else {

      loadMore.classList.remove(
        "hidden"
      );

    }

  }

}


function renderDeals() {

  const grid =
    document.getElementById(
      "dealsGrid"
    );

  if (!grid) return;


  grid.innerHTML = "";


  products
    .filter(product => product.deal)
    .slice(0, 4)
    .forEach(product => {

      grid.appendChild(
        renderProductCard(product)
      );

    });

}


/* =========================================================
   CATEGORY
========================================================= */

function selectCategory(category) {

  currentCategory = category;

  searchTerm = "";

  productsShown = 12;


  document
    .querySelectorAll(".category-btn")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.category === category
      );

    });


  renderProducts();


  document
    .getElementById(
      "productsSection"
    )
    .scrollIntoView({
      behavior: "smooth"
    });

}


function setupCategories() {

  document
    .querySelectorAll(
      "[data-category]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        function() {

          selectCategory(
            this.dataset.category
          );

        }
      );

    });

}


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {

  const input =
    document.getElementById(
      "searchInput"
    );

  const button =
    document.getElementById(
      "searchButton"
    );


  function search() {

    searchTerm =
      input.value.trim();

    currentCategory = "All";

    productsShown = 12;

    renderProducts();

    document
      .getElementById(
        "productsSection"
      )
      .scrollIntoView({
        behavior: "smooth"
      });

  }


  button.addEventListener(
    "click",
    search
  );


  input.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Enter"
      ) {

        search();

      }

    }
  );

}


/* =========================================================
   CART
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
      ...product,
      quantity: 1
    });

  }


  saveCart();

  updateCartUI();

  showToast(
    `${product.name} added to cart.`
  );

}


function changeQuantity(
  productId,
  change
) {

  const item =
    cart.find(
      product => product.id === productId
    );


  if (!item) return;


  item.quantity += change;


  if (item.quantity <= 0) {

    cart =
      cart.filter(
        product => product.id !== productId
      );

  }


  saveCart();

  updateCartUI();

}


function removeFromCart(productId) {

  cart =
    cart.filter(
      item => item.id !== productId
    );


  saveCart();

  updateCartUI();

}


function getCartTotal() {

  return cart.reduce(
    (total, item) =>
      total +
      item.price *
      item.quantity,
    0
  );

}


function getCartCount() {

  return cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

}


function updateCartUI() {

  const count =
    document.getElementById(
      "cartCount"
    );

  const items =
    document.getElementById(
      "cartItems"
    );

  const subtotal =
    document.getElementById(
      "cartSubtotal"
    );


  if (count) {

    count.textContent =
      getCartCount();

  }


  if (!items) return;


  if (cart.length === 0) {

    items.innerHTML = `

      <div style="
        text-align:center;
        padding:60px 15px;
        color:#777;
      ">

        <div style="font-size:55px;">
          🛒
        </div>

        <h3 style="color:white;margin:15px 0 5px;">
          Your cart is empty
        </h3>

        <p style="font-size:12px;">
          Add products to your cart to see them here.
        </p>

      </div>

    `;

  } else {

    items.innerHTML = "";


    cart.forEach(item => {

      const element =
        document.createElement(
          "div"
        );

      element.className =
        "cart-item";


      element.innerHTML = `

        <div class="cart-item-image">
          ${item.icon}
        </div>

        <div class="cart-item-info">

          <h3>${item.name}</h3>

          <p>${money(item.price)}</p>

          <div class="quantity-controls">

            <button
              data-minus="${item.id}"
              type="button"
            >
              −
            </button>

            <span>
              ${item.quantity}
            </span>

            <button
              data-plus="${item.id}"
              type="button"
            >
              +
            </button>

            <button
              class="remove-item"
              data-remove="${item.id}"
              type="button"
            >
              Remove
            </button>

          </div>

        </div>

      `;


      element
        .querySelector(
          `[data-minus="${item.id}"]`
        )
        .addEventListener(
          "click",
          () =>
            changeQuantity(
              item.id,
              -1
            )
        );


      element
        .querySelector(
          `[data-plus="${item.id}"]`
        )
        .addEventListener(
          "click",
          () =>
            changeQuantity(
              item.id,
              1
            )
        );


      element
        .querySelector(
          `[data-remove="${item.id}"]`
        )
        .addEventListener(
          "click",
          () =>
            removeFromCart(
              item.id
            )
        );


      items.appendChild(element);

    });

  }


  if (subtotal) {

    subtotal.textContent =
      money(getCartTotal());

  }

}


/* =========================================================
   DRAWERS
========================================================= */

function openDrawer(id) {

  closeAllPanels();

  const drawer =
    document.getElementById(id);

  const overlay =
    document.getElementById("overlay");

  if (!drawer) return;

  drawer.classList.add("open");

  if (overlay) {
    overlay.classList.add("open");
  }
}


function closeDrawer(id) {

  const drawer =
    document.getElementById(id);

  const overlay =
    document.getElementById("overlay");

  if (drawer) {
    drawer.classList.remove("open");
  }

  if (overlay) {
    overlay.classList.remove("open");
  }
}


function closeAllPanels() {

  document
    .querySelectorAll(".drawer")
    .forEach(drawer => {
      drawer.classList.remove("open");
    });

  const overlay =
    document.getElementById("overlay");

  if (overlay) {
    overlay.classList.remove("open");
  }

  const modal =
    document.getElementById("productModal");

  if (modal) {
    modal.classList.remove("open");
  }
}


/* =========================================================
   PRODUCT MODAL
========================================================= */

function openProduct(productId) {

  const product =
    products.find(
      item => item.id === productId
    );

  if (!product) return;

  const modal =
    document.getElementById("productModal");

  const content =
    document.getElementById(
      "productModalContent"
    );

  if (!modal || !content) return;

  content.innerHTML = `

    <div class="modal-product">

      <div class="modal-product-image">
        ${product.icon}
      </div>

      <div class="modal-product-info">

        <span class="product-category">
          ${product.category}
        </span>

        <h2>${product.name}</h2>

        <div class="rating">
          ⭐ ${product.rating}
        </div>

        <div class="modal-price">
          ${money(product.price)}
        </div>

        <p>
          Premium ${product.category.toLowerCase()}
          product available from GODDEN TECH GLOBAL.
          Add it to your cart to continue shopping.
        </p>

        <button
          id="modalAddButton"
          class="primary-btn full-btn"
          type="button"
        >
          🛒 Add to Cart
        </button>

      </div>

    </div>

  `;

  modal.classList.add("open");

  const addButton =
    document.getElementById(
      "modalAddButton"
    );

  if (addButton) {

    addButton.addEventListener(
      "click",
      () => {

        addToCart(product.id);

        modal.classList.remove("open");

      }
    );

  }
}


/* =========================================================
   ORDERS
========================================================= */

function loadOrders() {

  const content =
    document.getElementById(
      "ordersContent"
    );

  if (!content) return;

  const userOrders =
    orders.filter(
      order =>
        currentUser &&
        order.email === currentUser.email
    );


  if (userOrders.length === 0) {

    content.innerHTML = `

      <div style="
        text-align:center;
        padding:60px 15px;
        color:#777;
      ">

        <div style="font-size:50px;">
          📦
        </div>

        <h3 style="
          color:white;
          margin:15px 0 5px;
        ">
          No orders yet
        </h3>

        <p style="font-size:12px;">
          Your completed orders will appear here.
        </p>

      </div>

    `;

    return;
  }


  content.innerHTML = "";


  userOrders
    .slice()
    .reverse()
    .forEach(order => {

      const card =
        document.createElement("div");

      card.className =
        "order-card";


      card.innerHTML = `

        <h3>
          Order #${order.id}
        </h3>

        <p>
          ${new Date(
            order.date
          ).toLocaleString()}
        </p>

        <p>
          ${order.items.length}
          product item(s)
        </p>

        <p class="order-total">
          Total: ${money(order.total)}
        </p>

      `;

      content.appendChild(card);

    });

}


/* =========================================================
   CHECKOUT
========================================================= */

function checkout() {

  if (!currentUser) {

    showToast(
      "Please login before checkout."
    );

    return;
  }


  if (cart.length === 0) {

    showToast(
      "Your cart is empty."
    );

    return;
  }


  const order = {

    id:
      "GT" +
      Date.now()
        .toString()
        .slice(-8),

    email:
      currentUser.email,

    name:
      currentUser.name,

    items:
      cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),

    total:
      getCartTotal(),

    date:
      new Date().toISOString()

  };


  orders.push(order);

  saveOrders();


  let message =
    `Hello GODDEN TECH GLOBAL!\n\n` +
    `New Order: ${order.id}\n` +
    `Customer: ${order.name}\n` +
    `Email: ${order.email}\n\n`;


  cart.forEach(item => {

    message +=
      `${item.name} x${item.quantity} - ` +
      `${money(
        item.price * item.quantity
      )}\n`;

  });


  message +=
    `\nTotal: ${money(order.total)}`;


  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=` +
    encodeURIComponent(message);


  cart = [];

  saveCart();

  updateCartUI();

  loadOrders();

  closeAllPanels();


  window.open(
    whatsappURL,
    "_blank"
  );


  showToast(
    "Order created. WhatsApp is opening..."
  );

}


/* =========================================================
   APP DOWNLOAD
========================================================= */

function downloadApp() {

  if (
    APP_URL &&
    APP_URL !== "#"
  ) {

    window.open(
      APP_URL,
      "_blank"
    );

    return;
  }


  showToast(
    "The GODDEN TECH app will be available soon."
  );

}


function closeAppPopup() {

  const popup =
    document.getElementById(
      "appPopup"
    );

  if (popup) {
    popup.classList.add("hidden");
  }

}


/* =========================================================
   CUSTOMER SUPPORT
========================================================= */

function contactSupport() {

  const message =
    "Hello GODDEN TECH GLOBAL, I need help with my order.";

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}` +
    `?text=${encodeURIComponent(message)}`;


  window.open(
    url,
    "_blank"
  );

}


/* =========================================================
   COUNTDOWN
========================================================= */

let dealSeconds =
  24 * 60 * 60;


function updateCountdown() {

  const countdown =
    document.getElementById(
      "countdown"
    );

  if (!countdown) return;


  const hours =
    Math.floor(
      dealSeconds / 3600
    );

  const minutes =
    Math.floor(
      (dealSeconds % 3600) / 60
    );

  const seconds =
    dealSeconds % 60;


  countdown.textContent =
    `${String(hours).padStart(2, "0")}:` +
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`;


  dealSeconds--;


  if (dealSeconds < 0) {

    dealSeconds =
      24 * 60 * 60;

  }

}


/* =========================================================
   MAIN EVENTS
========================================================= */

function setupEvents() {

  /* CART */

  const cartButton =
    document.getElementById(
      "cartButton"
    );

  if (cartButton) {

    cartButton.addEventListener(
      "click",
      () =>
        openDrawer("cartDrawer")
    );

  }


  const closeCartButton =
    document.getElementById(
      "closeCartButton"
    );

  if (closeCartButton) {

    closeCartButton.addEventListener(
      "click",
      () =>
        closeDrawer("cartDrawer")
    );

  }


  const continueShoppingButton =
    document.getElementById(
      "continueShoppingButton"
    );

  if (continueShoppingButton) {

    continueShoppingButton.addEventListener(
      "click",
      () =>
        closeDrawer("cartDrawer")
    );

  }


  const checkoutButton =
    document.getElementById(
      "checkoutButton"
    );

  if (checkoutButton) {

    checkoutButton.addEventListener(
      "click",
      checkout
    );

  }


  /* ACCOUNT */

  const accountButton =
    document.getElementById(
      "accountButton"
    );

  if (accountButton) {

    accountButton.addEventListener(
      "click",
      () =>
        openDrawer("accountDrawer")
    );

  }


  const closeAccountButton =
    document.getElementById(
      "closeAccountButton"
    );

  if (closeAccountButton) {

    closeAccountButton.addEventListener(
      "click",
      () =>
        closeDrawer("accountDrawer")
    );

  }


  const logoutButton =
    document.getElementById(
      "logoutButton"
    );

  if (logoutButton) {

    logoutButton.addEventListener(
      "click",
      logout
    );

  }


  /* ORDERS */

  const ordersButton =
    document.getElementById(
      "ordersButton"
    );

  if (ordersButton) {

    ordersButton.addEventListener(
      "click",
      () => {

        loadOrders();

        openDrawer("ordersDrawer");

      }
    );

  }


  const closeOrdersButton =
    document.getElementById(
      "closeOrdersButton"
    );

  if (closeOrdersButton) {

    closeOrdersButton.addEventListener(
      "click",
      () =>
        closeDrawer("ordersDrawer")
    );

  }


  const accountOrdersButton =
    document.getElementById(
      "accountOrdersButton"
    );

  if (accountOrdersButton) {

    accountOrdersButton.addEventListener(
      "click",
      () => {

        closeDrawer("accountDrawer");

        loadOrders();

        openDrawer("ordersDrawer");

      }
    );

  }


  /* OVERLAY */

  const overlay =
    document.getElementById(
      "overlay"
    );

  if (overlay) {

    overlay.addEventListener(
      "click",
      closeAllPanels
    );

  }


  /* PRODUCT MODAL */

  const closeProductModal =
    document.getElementById(
      "closeProductModal"
    );

  if (closeProductModal) {

    closeProductModal.addEventListener(
      "click",
      () => {

        document
          .getElementById(
            "productModal"
          )
          .classList.remove("open");

      }
    );

  }


  /* APP */

  const downloadAppButton =
    document.getElementById(
      "downloadAppButton"
    );

  if (downloadAppButton) {

    downloadAppButton.addEventListener(
      "click",
      downloadApp
    );

  }


  const popupDownloadButton =
    document.getElementById(
      "popupDownloadButton"
    );

  if (popupDownloadButton) {

    popupDownloadButton.addEventListener(
      "click",
      downloadApp
    );

  }


  const closeAppPopupButton =
    document.getElementById(
      "closeAppPopup"
    );

  if (closeAppPopupButton) {

    closeAppPopupButton.addEventListener(
      "click",
      closeAppPopup
    );

  }


  /* SUPPORT */

  const supportButton =
    document.getElementById(
      "supportButton"
    );

  if (supportButton) {

    supportButton.addEventListener(
      "click",
      contactSupport
    );

  }


  /* FOOTER ORDERS */

  const footerOrders =
    document.getElementById(
      "footerOrders"
    );

  if (footerOrders) {

    footerOrders.addEventListener(
      "click",
      () => {

        loadOrders();

        openDrawer("ordersDrawer");

      }
    );

  }


  /* FOOTER ACCOUNT */

  const footerAccount =
    document.getElementById(
      "footerAccount"
    );

  if (footerAccount) {

    footerAccount.addEventListener(
      "click",
      () =>
        openDrawer("accountDrawer")
    );

  }


  /* HERO SHOP BUTTON */

  const shopNowButton =
    document.getElementById(
      "shopNowButton"
    );

  if (shopNowButton) {

    shopNowButton.addEventListener(
      "click",
      () => {

        document
          .getElementById(
            "productsSection"
          )
          .scrollIntoView({
            behavior: "smooth"
          });

      }
    );

  }


  /* HERO DEAL BUTTON */

  const viewDealsButton =
    document.getElementById(
      "viewDealsButton"
    );

  if (viewDealsButton) {

    viewDealsButton.addEventListener(
      "click",
      () => {

        document
          .getElementById(
            "dealsSection"
          )
          .scrollIntoView({
            behavior: "smooth"
          });

      }
    );

  }


  /* LOAD MORE */

  const loadMoreButton =
    document.getElementById(
      "loadMoreButton"
    );

  if (loadMoreButton) {

    loadMoreButton.addEventListener(
      "click",
      () => {

        productsShown += 8;

        renderProducts();

      }
    );

  }


  /* CLEAR FILTER */

  const clearFilterButton =
    document.getElementById(
      "clearFilterButton"
    );

  if (clearFilterButton) {

    clearFilterButton.addEventListener(
      "click",
      () => {

        currentCategory = "All";

        searchTerm = "";

        productsShown = 12;


        const searchInput =
          document.getElementById(
            "searchInput"
          );

        if (searchInput) {
          searchInput.value = "";
        }


        document
          .querySelectorAll(
            ".category-btn"
          )
          .forEach(button => {

            button.classList.toggle(
              "active",
              button.dataset.category === "All"
            );

          });


        renderProducts();

      }
    );

  }


  /* BRAND HOME */

  const brandHome =
    document.getElementById(
      "brandHome"
    );

  if (brandHome) {

    brandHome.addEventListener(
      "click",
      function(event) {

        event.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }

}


/* =========================================================
   CATEGORY BUTTONS
========================================================= */

function setupCategories() {

  document
    .querySelectorAll(
      "[data-category]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        function() {

          selectCategory(
            this.dataset.category
          );

        }
      );

    });

}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

  const button =
    document.getElementById(
      "mobileMenuButton"
    );

  const nav =
    document.getElementById(
      "categoryNav"
    );


  if (!button || !nav) return;


  button.addEventListener(
    "click",
    () => {

      nav.scrollIntoView({
        behavior: "smooth"
      });

    }
  );

}


/* =========================================================
   START APPLICATION
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    const year =
      document.getElementById(
        "year"
      );

    if (year) {

      year.textContent =
        new Date().getFullYear();

    }


    setupAuth();

    setupEvents();

    setupCategories();

    setupSearch();

    setupMobileMenu();

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
