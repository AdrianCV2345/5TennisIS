class TennisScorer {
  constructor() {
    this.player1Points = 0;
    this.player2Points = 0;
    this.scoreMap = ["Love", "15", "30", "40"]; 
  }

  player1Scores() {
    this.player1Points++;
  }

  player2Scores() {
    this.player2Points++;
  }

  getScore(playerPoints) {
    if (playerPoints >= 4) return "Win"; 
    return this.scoreMap[playerPoints] || "Love"; 
  }

  showScore() {
    if (this.player1Points >= 4 && this.player1Points - this.player2Points >= 2) {
      return "Player 1 wins";
    }
    if (this.player2Points >= 4 && this.player2Points - this.player1Points >= 2) {
      return "Player 2 wins";
    }

    if (this.player1Points >= 3 && this.player2Points >= 3) {
      if (this.player1Points === this.player2Points) {
        return "Deuce"; 
      } 
    
    }

    return `${this.getScore(this.player1Points)} - ${this.getScore(this.player2Points)}`;
  }
}

export default TennisScorer;
