"use strict";

/* ACTIVITY 1: Query Selector and rendering strings */

// create a string that cannot be changed (hint: const vs let)
const pageTitle = "My Favourite Characters";

// create a variable for the querySelector/getElementById for id="page-title"
const title = document.getElementById("page-title");

// pick between innerHTML, innerText, or textContent to render the string (hint: look up which one is most secure and performant)
title.textContent = pageTitle;

/* Activity 2: Render an array into DOM Nodes */

// create an array with 5 of your favourite characters and shows
const characters = [
    "Spongebob",
    "Patrick",
    "Squidward",
    "Sandy",
    "Plankton",
];
console.log(characters);

// log them manually to the DOM like arr[0]
characters.forEach(characters=>{console.log(characters)});

// create a query selector for favourite-characters
const characterList = document.getElementById("favourite-characters");

// write a loop that adds all <li>list item</li> to the ul via your querySelector (hint: + vs +=)
characters.forEach((character) => {
    const li = document.createElement("li");
    li.textContent = character;
    characterList.appendChild(li);
});


/* Activity 2: Rendering values from objects */
// create an object for a user that has a name and email k/v pairs (use const)
// create querySelector/getElementById for user name
// render the name so it replaces "NOBODY IS LOGGED IN
// add an id and query selector to render the email into the span of p

/* Activity 4: Conditionals */
// create a boolean variable to signal that the user is or is not logged in (hint: if it's editable, should it be const or let?)
// create a conditional statement that checks if the user is logged in
// if the boolean is true, render the name and email in their spans
// if the boolean is false, render an empty string for email and name
// use .classList to add and remove the provided css classes based on the current log in state

/* Activity 5: Events */
// create a function that makes the boolean variable equal not itself
// test your function by calling it in javascript, use console.log to verify if the boolean has changed
// create a variable for the button based on it's id and make your boolean toggle function run when the button is clicked
// refactor your code so that when the button is clicked, your conditional code runs and updates the DOM accordingly
