// VARIABLE DECLARATIONS

// Create html elements and store them in variables
var body = document.body;
// Declare header variable
var header = document.getElementById("header");
// Declare main variable
var main = document.getElementById("main");
// timerEl will be the timer element
var timerEl = document.createElement("p");
// h2El will hold the current question
var h2El = document.createElement("h2");
// listEl will hold the current list of possible answers
var listEl = document.createElement("ol");
// Create the ordered list
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// Append timer to the
header.appendChild(timerEl);
main.appendChild(h2El);
main.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

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
// Create countdown function
function countdown() {
  timeLeft = 75;

  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;

    // Exit condition
    if (timeLeft === 0) {
      displayScore();
      clearInterval(timeInterval);
      return;
    }
  }, 1000);
}



// FIGURE THIS OUT
function myQuiz() {
  var questionNumber = 1;
  // For each iteration, add next question and possible answers
  questionNumber++;

  // while quiz[index] is not undefined
  while (quiz[questionNumber] !== undefined) {
    // Clear out main content
    main.textContent = " ";
    // Add value of each corresponding key in the quiz object array
    h2El.textContent = quiz[questionNumber].question;
    li1.textContent = quiz[questionNumber].answers.a;
    li2.textContent = quiz[questionNumber].answers.b;
    li3.textContent = quiz[questionNumber].answers.c;
    li4.textContent = quiz[questionNumber].answers.d;
  }
}
myQuiz();

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
