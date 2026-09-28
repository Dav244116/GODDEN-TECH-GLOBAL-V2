/* =========================================
   GODDEN TECH GLOBAL V2
   Frontend Authentication & App Flow
========================================= */

const loadingScreen = document.getElementById("loadingScreen");
const authScreen = document.getElementById("authScreen");
const storeScreen = document.getElementById("storeScreen");

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

const switchAuthBtn = document.getElementById("switchAuthBtn");
const switchText = document.getElementById("switchText");

const authTitle = document.getElementById("authTitle");
const authSubtitle = document.getElementById("authSubtitle");
const authMessage = document.getElementById("authMessage");

const welcomeUser = document.getElementById("welcomeUser");

const logoutBtn = document.getElementById("logoutBtn");

const apkPopup = document.getElementById("apkPopup");
const closePopup = document.getElementById("closePopup");
const continueWebBtn = document.getElementById("continueWebBtn");
const downloadAppBtn = document.getElementById("downloadAppBtn");

const shopBtn = document.getElementById("shopBtn");


/* =========================================
   CONFIGURATION
========================================= */

/*
   IMPORTANT:
   Replace this later with the real
   GODDEN TECH APK download link.
*/

const APK_DOWNLOAD_URL = "#";


/*
   Backend URL.

   We will connect this to the new
   Railway backend later.

   For now the website uses localStorage
   so we can test the interface.
*/

const API_URL = "";


/* =========================================
   APP START
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  setTimeout(() => {

    loadingScreen.style.opacity = "0";

    setTimeout(() => {

      loadingScreen.classList.add("hidden");

      checkUserSession();

    }, 500);

  }, 1000);

});


/* =========================================
   CHECK LOGIN SESSION
========================================= */

function checkUserSession() {

  const savedUser = localStorage.getItem("goddenTechUser");

  if (savedUser) {

    try {

      const user = JSON.parse(savedUser);

      showStore(user);

    } catch (error) {

      localStorage.removeItem("goddenTechUser");

      showAuth();

    }

  } else {

    showAuth();

  }

}


/* =========================================
   SHOW AUTH
========================================= */

function showAuth() {

  authScreen.classList.remove("hidden");

  storeScreen.classList.add("hidden");

}


/* =========================================
   SHOW STORE
========================================= */

function showStore(user) {

  authScreen.classList.add("hidden");

  storeScreen.classList.remove("hidden");

  const name = user.name || "Customer";

  welcomeUser.textContent =
    `Welcome, ${name}.`;

}


/* =========================================
   SWITCH LOGIN / REGISTER
========================================= */

switchAuthBtn.addEventListener("click", () => {

  clearMessage();

  const registerVisible =
    !registerForm.classList.contains("hidden");


  if (registerVisible) {

    registerForm.classList.add("hidden");

    loginForm.classList.remove("hidden");

    authTitle.textContent =
      "Welcome back";

    authSubtitle.textContent =
      "Login to access GODDEN TECH GLOBAL.";

    switchText.textContent =
      "Don't have an account?";

    switchAuthBtn.textContent =
      "Register";

  } else {

    loginForm.classList.add("hidden");

    registerForm.classList.remove("hidden");

    authTitle.textContent =
      "Create your account";

    authSubtitle.textContent =
      "Register to access GODDEN TECH GLOBAL.";

    switchText.textContent =
      "Already have an account?";

    switchAuthBtn.textContent =
      "Login";

  }

});


/* =========================================
   REGISTER
========================================= */

registerForm.addEventListener("submit", async (event) => {

  event.preventDefault();

  const name =
    document.getElementById("registerName").value.trim();

  const email =
    document.getElementById("registerEmail").value.trim().toLowerCase();

  const password =
    document.getElementById("registerPassword").value;


  if (!name || !email || !password) {

    showMessage(
      "Please complete all fields."
    );

    return;

  }


  if (password.length < 6) {

    showMessage(
      "Password must be at least 6 characters."
    );

    return;

  }


  /*
     TEMPORARY FRONTEND ACCOUNT

     This is only for testing the V2 interface.

     We will replace this with the secure
     Railway backend authentication.
  */

  const existingUsers =
    JSON.parse(
      localStorage.getItem("goddenTechUsers") || "[]"
    );


  const alreadyExists =
    existingUsers.some(
      user => user.email === email
    );


  if (alreadyExists) {

    showMessage(
      "An account with this email already exists."
    );

    return;

  }


  const newUser = {

    id: Date.now(),

    name,

    email,

    password

  };


  existingUsers.push(newUser);


  localStorage.setItem(
    "goddenTechUsers",
    JSON.stringify(existingUsers)
  );


  localStorage.setItem(
    "goddenTechUser",
    JSON.stringify({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email
    })
  );


  registerForm.reset();


  showStore({
    name,
    email
  });


  /*
     Show APK notification after registration.
  */

  setTimeout(() => {

    showApkPopup();

  }, 700);

});


/* =========================================
   LOGIN
========================================= */

loginForm.addEventListener("submit", async (event) => {

  event.preventDefault();


  const email =
    document.getElementById("loginEmail")
      .value
      .trim()
      .toLowerCase();


  const password =
    document.getElementById("loginPassword").value;


  if (!email || !password) {

    showMessage(
      "Please enter your email and password."
    );

    return;

  }


  const users =
    JSON.parse(
      localStorage.getItem("goddenTechUsers") || "[]"
    );


  const user =
    users.find(
      account =>
        account.email === email &&
        account.password === password
    );


  if (!user) {

    showMessage(
      "Incorrect email or password."
    );

    return;

  }


  const sessionUser = {

    id: user.id,

    name: user.name,

    email: user.email

  };


  localStorage.setItem(
    "goddenTechUser",
    JSON.stringify(sessionUser)
  );


  loginForm.reset();


  showStore(sessionUser);

});


/* =========================================
   LOGOUT
========================================= */

logoutBtn.addEventListener("click", () => {

  localStorage.removeItem("goddenTechUser");

  apkPopup.classList.add("hidden");

  showAuth();

});


/* =========================================
   APK POPUP
========================================= */

function showApkPopup() {

  apkPopup.classList.remove("hidden");

}


function closeApkPopup() {

  apkPopup.classList.add("hidden");

}


closePopup.addEventListener(
  "click",
  closeApkPopup
);


continueWebBtn.addEventListener(
  "click",
  closeApkPopup
);


/* =========================================
   APK DOWNLOAD
========================================= */

downloadAppBtn.addEventListener("click", () => {

  if (
    APK_DOWNLOAD_URL &&
    APK_DOWNLOAD_URL !== "#"
  ) {

    window.open(
      APK_DOWNLOAD_URL,
      "_blank"
    );

  } else {

    showMessage(
      "The GODDEN TECH APK download link will be added soon."
    );

    closeApkPopup();

  }

});


/* =========================================
   EXPLORE PRODUCTS
========================================= */

shopBtn.addEventListener("click", () => {

  document
    .querySelector(".products-section")
    .scrollIntoView({
      behavior: "smooth"
    });

});


/* =========================================
   AUTH MESSAGE
========================================= */

function showMessage(message) {

  authMessage.textContent = message;

}


function clearMessage() {

  authMessage.textContent = "";

      }
