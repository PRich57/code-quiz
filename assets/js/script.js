// VARIABLE DECLARATIONS

// Create html elements and store them in variables
var body = document.body;
// Declare header variable
var header = document.getElementById("header");
// Declare main variable
var main = document.getElementById("main");
// Declare start section variable
var sContainer = document.querySelector("#start");
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
// Set button attributes to check against correct answer
button1.setAttribute("id", "0");
button2.setAttribute("id", "1");
button3.setAttribute("id", "2");
button4.setAttribute("id", "3");
// Create array of buttons
var buttons = [button1, button2, button3, button4];
// Create variable as reference to start button
var start = document.querySelector("#start-button");
// Set index to 0
var index = 0;
// Declare variable to store userInput
var userInput;
// Declare check variable to hold a boolean value
var check = true;

// APPEND ELEMENTS
header.appendChild(timerEl);
main.appendChild(h2El);

// Create object array with each object containing questions, answers, and correctAnswer properties
var quiz = [
  {
    question: "Question 1",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 2,
  },
  {
    question: "Question 2",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 0,
  },
  {
    question: "Question 3",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 1,
  },
  {
    question: "Question 4",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 3,
  },
  {
    question: "Question 5",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 3,
  },
];

// FUNCTIONS

// Start section
// start button
// attach event listener
// timer starts - save this until the end
// hide start section
// show quiz section
// display a question

start.addEventListener("click", function (event) {
  // Stop from bubbling up
  event.stopPropagation();

  // Clear content
  sContainer.textContent = " ";

  // Show quiz section
  h2El.textContent = quiz[0].question;
  button1.textContent = quiz[0].choices[0];
  button2.textContent = quiz[0].choices[1];
  button3.textContent = quiz[0].choices[2];
  button4.textContent = quiz[0].choices[3];
  
  // Append content
  main.appendChild(listEl);
  listEl.appendChild(li1);
  listEl.appendChild(li2);
  listEl.appendChild(li3);
  listEl.appendChild(li4);
  li1.appendChild(button1);
  li2.appendChild(button2);
  li3.appendChild(button3);
  li4.appendChild(button4);
  
  listEl.addEventListener("click", function(event) {
  event.stopPropagation();
  var choice = event.target;
  userInput = choice.getAttribute("id");
  displayQuestion();
  });
});

// Run display question on click


// Create function to display next question and call checkAnswer function  
function displayQuestion() {
  
  if (index > quiz.length) {
    // displayScore();
  } else {
    var check = checkAnswer(userInput, quiz[index].correctAnswer);
    console.log(quiz[index].correctAnswer);
    console.log(userInput);
    if (check){
      var hr = document.createElement("hr");
      main.appendChild(hr);
      var correct = document.createElement("h3");
      correct.textContent = "Correct";
      main.appendChild(correct);
      
      h2El.textContent = quiz[index].question;
      button1.textContent = quiz[index].choices[0];
      button2.textContent = quiz[index].choices[1];
      button3.textContent = quiz[index].choices[2];
      button4.textContent = quiz[index].choices[3];
    } else {
      
      h2El.textContent = quiz[index].question;
      button1.textContent = quiz[index].choices[0];
      button2.textContent = quiz[index].choices[1];
      button3.textContent = quiz[index].choices[2];
      button4.textContent = quiz[index].choices[3];
    }
  }
  index++;
}



// Create a pause function to pause for 2 seconds after each answer selection to display correct or incorrect

// Create function to check if answer is correct
function checkAnswer(userChoice, correctAnswer) {
  if (userChoice === correctAnswer){
    return true;
  } else {
    return false;
  }
}

// quiz section
// array of objects
  // question
  // array of answers
  // correct answer
// could list the index of the correct answer or put the string of the correct answer
// Build a displayQuestion()
// Attach click event to each option
// when clicked, check if answer is right or wrong
// if right,
// display next question
// if wrong,
// decrement the timer by 15
// if timer <= 0 || if quiz[next] === undefined
// display results
// else
// next question

// Results section
// form or input field with a button
// user inputs initials
// store initials and score in local storage
// setItem, getItem, stringify
// display most recent to screen
// append to array, don't overwrite

// High scores
// display all scores in local storage in descending order

// Create countdown function
function countdown() {
  timeLeft = 75;

  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;

    // Exit condition
    if (timeLeft === 0) {
      // displayScore(); - need to create this function
      clearInterval(timeInterval);
      return;
    }
  }, 1000);
}

// FIGURE THIS OUT - On button click, if start button, pull up quiz[0], else if quiz[i] === undefined, pull up all done page, else, pull up next question
// Look at the class activities 15 to help with the event listener setup. This might need to be an event listener function from the start.
// Turn this into a carousel where JS shows or hides the questions on click
function displayQuiz() {
  // For each iteration, add next question and possible answers

  for (var i = 0; i < quiz.length; i++) {
    if (quiz[i] !== undefined) {
      //  addEventListener here for click on button class choice
      // Clear out main content
      main.textContent = " ";
      // Add value of each corresponding key in the quiz object array
      h2El.textContent = quiz[i].question;
      button1.textContent = quiz[i].answers.a;
      button2.textContent = quiz[i].answers.b;
      button3.textContent = quiz[i].answers.c;
      button4.textContent = quiz[i].answers.d;
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

// Local storage to store high scores and use an array of objects - each object will contain initials and a score

// EVENT LISTENERS
