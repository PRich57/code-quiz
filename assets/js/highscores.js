var highScorePage = document.querySelector("#highScores");
var highScoreCountSpan = document.querySelector("#scoreCount");
var highScores = JSON.parse(localStorage.getItem("high-scores"));
var scores = [];

// Create function to render high scores
function renderScores() {
  highScorePage.textContent = "";
  highScoreCountSpan.textContent = highScores.length;
  for (var i = 0; i < highScores.length; i++) {
    // Sort by descending order function
    highScores.sort(descendingOrder);

    var initials = highScores[i].initials;
    var highScore = highScores[i].score;

    var li = document.createElement("li");
    li.textContent = initials + " - " + highScore;
    li.setAttribute("data-index", i);

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
