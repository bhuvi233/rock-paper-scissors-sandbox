const getRandomMove = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };
  
  const getOutcome = (moveOne, moveTwo) => {
    if (moveOne === moveTwo) {
      return "It's a draw!";
    }
  
    if (
      (moveOne === "scissors" && moveTwo === "paper") ||
      (moveOne === "rock" && moveTwo === "scissors") ||
      (moveOne === "paper" && moveTwo === "rock")
    ) {
      return "Player One wins!";
    }
  
    return "Player Two wins!";
  };
  
  // Removing elements (nodes) from the DOM
  const resetGame = () => {
    if (document.getElementById("outcome")) {
      const outcome = document.body.lastChild;
      document.body.removeChild(outcome);
    }
  };
  
  const playGame = () => {
    resetGame();
    const playerOneMove = getRandomMove();
    const playerTwoMove = getRandomMove();
    const outcome = getOutcome(playerOneMove, playerTwoMove);
    updateDOM(playerOneMove, playerTwoMove, outcome);
  };
  
  const updateDOM = (moveOne, moveTwo, outcome) => {

    const playerOneImage = document.getElementById("player-one-move__img");
    document.getElementById("player-one-move__name").textContent = moveOne;
    switch(moveOne){
      case "paper":
        playerOneImage.src = "./images/paper.png"; break;
      case "rock":
        playerOneImage.src = "./images/rock.png"; break;
      case "scissors":
        playerOneImage.src = "./images/scissors.png"; break;
    }

    const playerTwoImage = document.getElementById("player-two-move__img");
    document.getElementById("player-two-move__name").textContent = moveTwo;
    switch(moveTwo){
      case "paper":
        playerTwoImage.src = "./images/paper.png"; break;
      case "rock":
        playerTwoImage.src = "./images/rock.png"; break;
      case "scissors":
        playerTwoImage.src = "./images/scissors.png";break;
    }
    
    const newElement = document.createElement("p");
    newElement.setAttribute("id", "outcome");
    newElement.textContent = outcome;
    document.body.appendChild(newElement);
  };
  
  const playButton = document.getElementById("play-btn");
  playButton.addEventListener("click", playGame);
  