var highScorePage = document.querySelector("#highScoresList");
var footer = document.querySelector("footer");
var h1El = document.querySelector("#h1El");
var clearBtn = document.createElement("button");
clearBtn.textContent = "Clear All Scores";
footer.appendChild(clearBtn);

// Create function to render high scores
function renderScores() {
  h1El.textContent = "High Scores";
  var highScores = JSON.parse(localStorage.getItem("high-scores"));
  if (highScores === null){
    return;
  }
  for (var i = 0; i < highScores.length; i++) {
    // Sort by descending order function
    highScores.sort(descendingOrder);
    
    var initials = highScores[i].initials.toUpperCase();
    var highScore = highScores[i].score;
    
    var li = document.createElement("li");
    li.textContent = initials + " - " + highScore;
    li.setAttribute("data-index", i);
    li.setAttribute("class", "highScoresItems");
    
    highScorePage.appendChild(li);
    
  }
}

renderScores();

function descendingOrder(a, b) {
  if (a.score < b.score) {
    return 1;
  }
  if (a.score > b.score) {
    return -1;
  }
  return 0;
}

function clearScores() {
  localStorage.removeItem("high-scores");
}

clearBtn.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  clearScores();
  highScorePage.textContent = "";
});
