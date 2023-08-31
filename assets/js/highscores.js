// VARIABLE DECLARATIONS
var highScorePage = document.querySelector("#highScoresList");
var footer = document.querySelector("footer");
var h1El = document.querySelector("#h1El");
var clearBtn = document.createElement("button");
clearBtn.textContent = "Clear All Scores";
footer.appendChild(clearBtn);

// FUNCTIONS
// Create function to render high scores
function renderScores() {
  h1El.textContent = "High Scores";
  // Get local storage and store in variable as array of objects
  var highScores = JSON.parse(localStorage.getItem("high-scores"));
  // Exit condition
  if (highScores === null) {
    return;
  }
  // Loop through the array of objects
  for (var i = 0; i < highScores.length; i++) {
    // Sort by descending order function
    highScores.sort(descendingOrder);

    // Create variable to store current index set of initials in uppercase
    var initials = highScores[i].initials.toUpperCase();
    // Create variable to store current index score
    var highScore = highScores[i].score;

    // Create variable to store reference to newly created li element
    var li = document.createElement("li");
    // Add text content of current index initials and score to li
    li.textContent = initials + " - " + highScore;
    // Set attribute for css reference
    li.setAttribute("class", "highScoresItems");
    // Append new li
    highScorePage.appendChild(li);
  }
}

// Create function to sort scores by descending order
function descendingOrder(a, b) {
  if (a.score < b.score) {
    return 1;
  }
  if (a.score > b.score) {
    return -1;
  }
  return 0;
}

// Create function to clear scores from memory and DOM
function clearScores() {
  localStorage.removeItem("high-scores");
  highScorePage.textContent = "";
}

// EVENT LISTENERS
// Listen for click on clearBtn and call clearScores()
clearBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  clearScores();
});

// FUNCTION CALLS
// Call renderScores()
renderScores();