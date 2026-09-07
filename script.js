"use strict";

// elements grouped together for clarity
const pageTitle = document.getElementById("page-title");
const characterList = document.getElementById("favourite-characters");
const userCard = document.getElementById("user-card");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const toggleUserBtn = document.getElementById("toggle-user-btn");

// User Message & String Rendering
const helloMsg = "Hello World";
pageTitle.textContent = helloMsg;

// Array rendering
const characters = [
  "Mary Poppins",
  "George Banks",
  "Bert",
  "Winifred Banks",
  "Penguin Waiters",
  "Jane Banks",
  "Michael Banks",
];

characters.forEach((character) => {
  const li = document.createElement("li");
  li.textContent = character;
  characterList.appendChild(li);
});

// Object Rendering

const user = {
  name: "Bowser",
  email: "bowser@koopamail.io",
};

// Conditional Rendering & Helper Functions

// global state variable
let isUserLoggedIn = false;
const toggleIsLoggedIn = () => (isUserLoggedIn = !isUserLoggedIn);
// login logger
const logUserStatus = () =>
  isUserLoggedIn
    ? console.log("Yes the user is logged in", isUserLoggedIn)
    : console.warn("No the user is not logged in: ", isUserLoggedIn);

function renderUserInfo() {
  userName.textContent = user.name;
  userEmail.textContent = user.email;
  userCard.classList.remove("user-not-logged-in");
  userCard.classList.add("user-logged-in");
}
function clearUserInfo() {
  userCard.textContent = "Nobody is Logged In";
  userCard.classList.remove("user-logged-in");
  userCard.classList.add("user-not-logged-in");
}

toggleUserBtn.addEventListener("click", () => {
  toggleIsLoggedIn();
  logUserStatus();
  isUserLoggedIn ? renderUserInfo() : clearUserInfo();
});
