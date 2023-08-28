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
// Create button elements for each li
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");
// Create 

// APPEND ELEMENTS
header.appendChild(timerEl);
main.appendChild(h2El);
main.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
li1.appendChild(button1);
li2.appendChild(button2);
li3.appendChild(button3);
li4.appendChild(button4);

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


h2El.textContent = quiz[0].question;
button1.textContent = quiz[0].answers.a;
button2.textContent = quiz[0].answers.b;
button3.textContent = quiz[0].answers.c;
button4.textContent = quiz[0].answers.d;
console.log(h2El);
console.log(li1);
console.log(li2);
console.log(li3);
console.log(li4);


// FIGURE THIS OUT - On button click, if start button, pull up quiz[0], else if quiz[i] === undefined, pull up all done page, else, pull up next question
function myQuiz() {
  
//   // For each iteration, add next question and possible answers

  for (var i = 0; i < quiz.length; i++) {
    if (quiz[i] !== undefined) {
      //  addEventListener here for click on button class choice
      // Clear out main content
      main.textContent = " ";
      // Add value of each corresponding key in the quiz object array
      h2El.textContent = quiz[i].question;
      li1.textContent = quiz[i].answers.a;
      li2.textContent = quiz[i].answers.b;
      li3.textContent = quiz[i].answers.c;
      li4.textContent = quiz[i].answers.d;
    }
  }
}
// myQuiz();

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
