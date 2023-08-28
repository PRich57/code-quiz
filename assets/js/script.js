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


h2El.textContent = quiz[0].question;
li1.textContent = quiz[0].answers.a;
li2.textContent = quiz[0].answers.b;
li3.textContent = quiz[0].answers.c;
li4.textContent = quiz[0].answers.d;
console.log(h2El);
console.log(li1);
console.log(li2);
console.log(li3);
console.log(li4);
// FIGURE THIS OUT
// function myQuiz() {
//   
//   // For each iteration, add next question and possible answers

//   for (var i = 0; i < quiz.length; i++) {
//     if (quiz[i] !== undefined) {
  //      addEventListener here
  //     // Clear out main content
  //     main.textContent = " ";
  //  
         // Add value of each corresponding key in the quiz object array
  //     h2El.textContent = quiz[i].question;
  //     li1.textContent = quiz[i].answers.a;
  //     li2.textContent = quiz[i].answers.b;
  //     li3.textContent = quiz[i].answers.c;
  //     li4.textContent = quiz[i].answers.d;
  //   }
//   }
// }
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
