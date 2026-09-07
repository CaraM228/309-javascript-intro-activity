"use strict";

/* ACTIVITY 1: Query Selector and rendering strings */
// create a string that cannot be changed (hint: const vs let)
const helloMsg = "Hello World";
// create a variable for the querySelector/getElementById for id="page-title"
const h1 = document.getElementById("page-title");
// pick between innerHTML, innerText, or textContent to render the string (hint: look up which one is most secure and performant)
h1.textContent = helloMsg;

/* Activity 2: Render an array into DOM Nodes */
// create an array with 5 of your favourite characters and shows
const characters = [
  "Mary Poppins",
  "George Banks",
  "Bert",
  "Winifred Banks",
  "Penguin Waiters",
  "Jane Banks",
  "Michael Banks",
];
// log them manually to the DOM like arr[0]
// no loop version:
console.log(characters[0], characters[1], characters[2]);
// loop version (you can also use .map or .forEach like what you'll see below)
for (const character of characters) {
  console.log(character);
}
// create a query selector for favourite-characters
const characterList = document.getElementById("favourite-characters");
// write a loop that adds all <li>list item</li> to the ul via your querySelector
characters.forEach((character) => {
  const li = document.createElement("li");
  li.textContent = character;
  characterList.appendChild(li);
});

/* Activity 3: Rendering values from objects */
// create an object for a user that has a name and email k/v pairs (use const)
const user = {
  name: "Bowser",
  email: "bowser@koopamail.io",
};
// create querySelector/getElementById for user name
const userCard = document.getElementById("user-card");
const userName = document.getElementById("user-name");
// add an id and query selector to render the email into the span of p
const userEmail = document.getElementById("user-email");
// render the name so it replaces "NOBODY IS LOGGED IN
userName.textContent = user.name;
userEmail.textContent = user.email;
userCard.classList.add("user-logged-in");

/* Activity 4: Conditionals */
// create a boolean variable to signal that the user is or is not logged in (hint: if it's editable, should it be const or let?)
let isUserLoggedIn = false;
// create a ternary operator that checks if the user is logged in
const logUserStatus = () =>
  isUserLoggedIn
    ? console.log("Yes the user is logged in", isUserLoggedIn)
    : console.warn("No the user is not logged in: ", isUserLoggedIn);

// if the boolean is true, render the name and email in their spans
// if the boolean is false, render an empty string for email and name
// use .classList to add and remove the provided css classes based on the current log in state
if (isUserLoggedIn) {
  userName.textContent = user.name;
  userEmail.textContent = user.email;
  userCard.classList.remove("user-not-logged-in");
  userCard.classList.add("user-logged-in");
} else {
  userCard.textContent = "Nobody is Logged In";
  userCard.classList.remove("user-logged-in");
  userCard.classList.add("user-not-logged-in");
}

/* Activity 5: Events */
// create a function that makes the boolean variable equal not itself
const toggleIsLoggedIn = () => (isUserLoggedIn = !isUserLoggedIn);
// test your function by calling it in javascript, use console.log to verify if the boolean has changed
toggleIsLoggedIn();
console.log(isUserLoggedIn);
// create a variable for the button based on it's id and make your boolean toggle function run when the button is clicked
const toggleUserBtn = document.getElementById("toggle-user-btn");
toggleUserBtn.addEventListener("click", () => {
  toggleIsLoggedIn();
  logUserStatus();
  if (isUserLoggedIn) {
    userName.textContent = user.name;
    userEmail.textContent = user.email;
    userCard.classList.remove("user-not-logged-in");
    userCard.classList.add("user-logged-in");
  } else {
    userCard.textContent = "Nobody is Logged In";
    userCard.classList.remove("user-logged-in");
    userCard.classList.add("user-not-logged-in");
  }
});
// refactor your code so that when the button is clicked, your conditional code runs and updates the DOM accordingly
