// VARIABLE DECLARATIONS

// Create html elements and store them in variables
var body = document.body;
// Header will contain the view high scores and timer elements
var header = document.createElement("header");
// scoresEl will contain an anchor to a high scores page
var scoresEl = document.createElement("a");
// timerEl will be the timer element
var timerEl = document.createElement("p");
// main element will hold the main content of the quiz
var main = document.createElement("main");
// startEl will be the start button element
var startEl = document.createElement("button");
// h1El will hold the header of the start button page
var h1El = document.createElement("h1");
// h2El will hold the current question
var h2El = document.createElement("h2");
// listEl will hold the current list of possible answers
var listEl = document.createElement("ol");
// Create the ordered list
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// Update the text nodes of the elements that don't alter text
h1El.textContent = "Welcome to the Code Quiz! Press the Start button to begin";
//
// Create object array with each object containing 

// Declare timer variable with starting time



// FUNCTIONS
// Create time interval function

// While time != 0 && value at array variable != undefined

// Add multiple choice question and answers to screen

// Internal function upon button click event listener

  // Add hr between last multiple choice option and display of Correct or Wrong

  // If !choice, decrement timer variable by 5

  // Display Wrong beneath hr

  // Else

  // Display Correct beneath hr

// Increment multipleChoice array for next question and possible answers


// EVENT LISTENERS