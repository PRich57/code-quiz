// VARIABLE DECLARATIONS

var body = document.body;
// Declare header variable
var header = document.getElementById("header");
// Declare main variable
var main = document.getElementById("main");
// Declare start section variable
var sContainer = document.querySelector("#start");
// Declare variable that references start button
var start = document.querySelector("#start-button");
// Declare variable for initials response on results page
var response = document.getElementById("response");
// Declare variable for index and set to 0
var index = 0;
// Declare timeLeft variable
var timeLeft = 90;
// Declare variable to store user selection
var userInput;
// Declare check variable to hold a boolean value
var check = true;
// Declare object variable to store score in local memory
var scoreObj;
// Declare high scores array to push newest score into
var highScores = [];
// Create object array containing the quiz
var quiz = [
  {
    question: "Question 1 of 10: Inside which HTML element do we put the source to an external JavaScript file?",
    choices: ["<link>", "<head>", "<script>", "<meta>"],
    correctAnswer: "2",
  },
  {
    question: "Question 2 of 10: What does CSS stand for?",
    choices: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Cambodian Computer Store"],
    correctAnswer: "1",
  },
  {
    question: "Question 3 of 10: How do you insert a comment in a CSS file?",
    choices: ["/* This is a comment */", "// This is a comment", "'This is a comment", "// This is a comment //"],
    correctAnswer: "0",
  },
  {
    question: "Question 4 of 10: What does HTML stand for?",
    choices: ["Hyper Tom Makes Lunch", "Home Tool Markup Language", "Hyperlinks Text Module Linker", "Hyper Text Markup Language"],
    correctAnswer: "3",
  },
  {
    question: "Question 5 of 10: In HTML, which character is used to indicate an end tag?",
    choices: ["*", "^", "]", "/"],
    correctAnswer: "3",
  },
  {
    question: "Question 6 of 10: How can we make a numbered list in HTML?",
    choices: ["<ol>", "<ul>", "<li>", "<list>"],
    correctAnswer: "0",
  },
  {
    question: "Question 7 of 10: How do we make a function in JavaScript?",
    choices: ["function = myFunction()", "function:myFunction()", "function myFunction()", "myFunction(function)"],
    correctAnswer: "2",
  },
  {
    question: "Question 8 of 10: What is the difference between a function and a method?",
    choices: ["A method is a CSS term, a function is related to JavaScript", "A function has at least one parameter while a method has none", "A function is a set of instructions or procedures to perform a specific task, and a method is a set of instructions that are associated with an object", "A method is used to create new elements in the DOM while a function is used to perform a specific task with these elements"],
    correctAnswer: "2",
  },
  {
    question: "Question 9 of 10: If an array has a length of 10, what would be the final index in the array?",
    choices: ["8", "11", "10", "9"],
    correctAnswer: "3",
  },
  {
    question: "Question 10 of 10: Why shouldn't we refer to JavaScript as Java?",
    choices: ["We should", "They're two entirely different languages", "It'll hurt Ben's feelings", "I don't know what either of those are but now I want coffee"],
    correctAnswer: "1",
  },
];

// Create html elements in JS for practice
// timerEl will be the timer element
var timerEl = document.createElement("h4");
// h2El will hold the current question
var h2El = document.createElement("h2");
// listEl will hold the current list of possible answers
var listEl = document.createElement("ol");
// // Create the ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
// Create button elements for each li
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");
// Declare variable to store array of buttons
var buttons = [button1, button2, button3, button4];
// Declare variable to display and remove hr
var hr = document.createElement("hr");
// Declare variable to display and remove "correct"
var correct = document.createElement("h3");
// Declare variable to display and remove "incorrect"
var incorrect = document.createElement("h3");
// Create header for results page
var resultsHeader = document.createElement("h2");
// Create input element for results function
var resultsInput = document.createElement("input");
// Create submit button for results page
var resultsButton = document.createElement("button");

// SET ATTRIBUTES

// Set button attributes to check against correct answer
button1.setAttribute("id", "0");
button2.setAttribute("id", "1");
button3.setAttribute("id", "2");
button4.setAttribute("id", "3");
// Set attributes for css
button1.setAttribute("class", "qButton");
button2.setAttribute("class", "qButton");
button3.setAttribute("class", "qButton");
button4.setAttribute("class", "qButton");

// Add text content to timerEl so it displays on start screen
timerEl.textContent = "Time: " + timeLeft;

// APPEND ELEMENTS

header.appendChild(timerEl);
main.appendChild(h2El);

// FUNCTIONS

// Create function used to display first question
function displayFirst() {
  // Show quiz section
  h2El.textContent = quiz[0].question;
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].textContent = quiz[0].choices[i];
  }

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
}

// Create function to display next question and call checkAnswer function
function displayQuestion() {
  // Exit condition
  if (index > quiz.length - 1) {
    // results();
    console.log("this is the stop section");
    return;
  } else {
    // Call checkAnswer
    var check = checkAnswer(userInput, quiz[index].correctAnswer);
    console.log(quiz[index].correctAnswer);
    console.log(userInput);
    console.log(check);
    if (check) {
      // Correct process
      main.appendChild(hr);
      correct.textContent = "Correct!";
      main.appendChild(correct);
      // Disable buttons here
      disableButtons();
      // Pause for 1.5s before displaying next question
      setTimeout(pauseNext, 1500);
    } else {
      // Incorrect process
      main.appendChild(hr);
      incorrect.textContent = "Incorrect";
      main.appendChild(incorrect);
      disableButtons();
      setTimeout(pauseNext, 1500);
    }
    // Increment index
    index++;
  }
}

// Create function to disable buttons to prevent stacked events
function disableButtons() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    buttons[i].setAttribute("style", "background-color:gray;box-shadow:inset 0px 0px 0px gray;");
  }
}

// Create function to enable buttons
function enableButtons() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
    buttons[i].setAttribute("style", "background-color:rgb(89, 4, 186);");
  }
}

// Create countdown function
function countdown() {
  var timeInterval = setInterval(function () {
    // Exit conditions
    if (quiz[index] !== undefined) {
      if (timeLeft <= 0) {
        timeLeft = 0;
        results();
        timerEl.textContent = "Time: " + timeLeft;
        clearInterval(timeInterval);
        return;
      }
      timeLeft--;
      timerEl.textContent = "Time: " + timeLeft;
    }
  }, 1000);
}

// Create function to check if answer is correct
function checkAnswer(userChoice, correctAnswer) {
  if (userChoice === correctAnswer) {
    return true;
  } else {
    // Make sure timer goes to 0 instead of negative
    if (timeLeft < 15) {
      timeLeft = 0;
      return false;
    } else {
      timeLeft -= 15;
      return false;
    }
  }
}

// Create pauseNext to use in setTimeout() to delay next question
function pauseNext() {
  if (quiz[index] !== undefined) {
    h2El.textContent = quiz[index].question;
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].textContent = quiz[index].choices[i];
    }
    // Clear the hr and correct or incorrect text
    main.removeChild(hr);
    correct.textContent = " ";
    incorrect.textContent = " ";
    // Enable the buttons again
    enableButtons();
  } else {
    // Call results function
    results();
  }
}

// Create function to display results
function results() {
  main.textContent = "";
  resultsHeader.textContent = "Enter Your Initials";
  main.appendChild(resultsHeader);
  main.appendChild(resultsInput);
  resultsButton.textContent = "Submit";
  main.appendChild(resultsButton);
  timerEl.textContent = "Time: " + timeLeft;
}

// Create function to store highScores array
function storeScore() {
  localStorage.setItem("high-scores", JSON.stringify(highScores));
}

// Create init function to prevent overwrite
function init() {
  var storedScores = JSON.parse(localStorage.getItem("high-scores"));
  if (storedScores !== null) {
    highScores = storedScores;
  }
}

// EVENT LISTENERS

// Listen for click on start button
start.addEventListener("click", function (event) {
  // Stop from bubbling up
  event.stopPropagation();
  // Clear content
  sContainer.textContent = " ";
  // Call countdown function
  countdown();
  // Call displayFirst
  displayFirst();
});

// Listen for click on any multiple choice option
listEl.addEventListener("click", function (event) {
  event.stopPropagation();
  var choice = event.target;
  userInput = choice.getAttribute("id");
  displayQuestion();
});

// Listen for click on submit button
resultsButton.addEventListener("click", function (event) {
  event.stopPropagation();
  var userInitials = resultsInput.value.trim();
  if (userInitials === "") {
    response.textContent = "You must enter your initials!";
    main.appendChild(response);
  } else {
    scoreObj = {
      score: timeLeft,
      initials: userInitials,
    };
    response.textContent = `Thank you!
      ${scoreObj.initials.toLocaleUpperCase()}   -  ${scoreObj.score}
      has been saved!`;
    main.appendChild(response);
    highScores.push(scoreObj);
    resultsInput.value = "";
  }
  storeScore();
});

// FUNCTION CALL

init();
