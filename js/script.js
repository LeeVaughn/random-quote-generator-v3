const quotes = [
  {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    category: "#programming"
  },
  {
    quote: "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.",
    source: "Andy Hunt",
    category: "#programming"
  },
  {
    quote: "One of the best programming skills you can have is knowing when to walk away for awhile.",
    source: "Oscar Godson",
    category: "#programming"
  },
  {
    quote: "A good programmer is someone who always looks both ways before crossing a one-way street.",
    source: "Doug Linder",
    category: "#programming"
  },
  {
    quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    source: "John Woods",
    category: "#programming"
  },
  {
    quote: "Anything worth doing well is worth doing poorly at first.",
    source: "Ray Congdon",
    category: "#learning"
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    source: "Jack Johnson",
    category: "#programming"
  },
  {
    quote: "Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.",
    source: "Eagleson's Law",
    category: "#programming"
  },
  {
    quote: "Programming isn’t about what you know. It’s about what you can figure out.",
    source: "Chris Pine",
    category: "#programming"
  },
  {
    quote: "First do it, then do it right, then do it better.",
    source: "Addy Osmani",
    category: "#success"
  },
  {
    quote: "Don't use a comment when you can use a function or a variable.",
    source: "Martin Fowler",
    category: "#programming",
    year: 2008,
    citation: "Clean Code: A Handbook of Agile Software Craftsmanship"
  },
]

const colors = [
  {
  background: "#420516", // dark maroon
  button: "#B42B51" // light maroon
  },
  {
    background: "#BFA2DB", // lavender
    button: "#7F7C82" // grey
  },
  {
    background: "#002366", // dark blue
    button: "#FA8072" // salmon
  },
  {
    background: "#7952B3", // purple
    button: "#FFC107" // yellow
  },
  {
    background: "#F98404", // orange
    button: "#FC5404" // bright orange
  }
]

// variables to be used to track previous quote and color indexes
let randNumA
let randNumB

/**
 * Generates a random number between 0 and highestNum
 *
 * @param {number} highestNUm - determines highest possible random number
 */
function randomNumber(highestNum) {
  return Math.floor(Math.random() * highestNum);
}

/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);