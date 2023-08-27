// VARIABLE DECLARATIONS

// Create html elements and store them in variables
var body = document.body;
var header = document.getElementById("header");
console.log(header);
// timerEl will be the timer element
var timerEl = document.createElement("p");
// Declare timer variable with starting time
var time = 75;
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
timerEl.textContent = "Time: " + time;

// Append start page to the DOM
header.appendChild(timerEl);

// Create object array with each object containing questions, answers, and correctAnswer properties
var quiz = [
  {
    question: "Question 1",
    answers: {
      a: "A",
      b: "B",
      c: "C",
      d: "D",
    },
    correctAnswer: "b",
  },
  {
    question: "Question 2",
    answers: {
      a: "A",
      b: "B",
      c: "C",
      d: "D",
    },
    correctAnswer: "d",
  },
  {
    question: "Question 3",
    answers: {
      a: "A",
      b: "B",
      c: "C",
      d: "D",
    },
    correctAnswer: "b",
  },
  {
    question: "Question 4",
    answers: {
      a: "A",
      b: "B",
      c: "C",
      d: "D",
    },
    correctAnswer: "a",
  },
  {
    question: "Question 5",
    answers: {
      a: "A",
      b: "B",
      c: "C",
      d: "D",
    },
    correctAnswer: "c",
  },
];



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
