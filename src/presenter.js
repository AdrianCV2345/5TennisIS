import TennisScorer from "./tennisScorer.js";
const scorer = new TennisScorer();

const player1Button = document.getElementById("player1-button");
const player2Button = document.getElementById("player2-button");
const resultadoDiv = document.getElementById("resultado-div");

player1Button.addEventListener("click", () => {
  scorer.player1Scores();
  resultadoDiv.innerHTML = scorer.showScore(); 
});

player2Button.addEventListener("click", () => {
  scorer.player2Scores();
  resultadoDiv.innerHTML = scorer.showScore(); 
});

resultadoDiv.innerHTML = scorer.showScore();  
