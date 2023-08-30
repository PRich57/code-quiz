var highScorePage = document.querySelector("#highScores");
var highScoreCountSpan = document.querySelector("#scoreCount");

console.log(highScores);

// Create function to render high scores
function renderScores() {
  highScorePage.textContent = "";
  highScoreCountSpan.textContent = highScores.length;

  for (var i = 0; i < highScores.length; i++) {
    var highScore = highScores[i];

    var li = document.createElement("li");
    li.textContent = highScore;
    li.setAttribute("data-index", i);

    highScorePage.appendChild(li);
  }

}
renderScores();