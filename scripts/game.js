const resetGame = () => {
    activePlayer = 0;
    currentRound = 1;
    gameOverElement.firstElementChild.innerHTML = 'You Won, <span id="winner-name">Player Name</span>!';
    gameOverElement.style.display = 'none';

    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
        }
    }
    for(let gamefieldelement of gameFieldElements) {
        gamefieldelement.textContent = '';
        gamefieldelement.classList.remove('disabled');
    }
}


const startGame = () => {
    resetGame();
  if (players[0].name === "" || players[1].name === "") {
    alert("Set player names");
    return;
  }
  activeGame.style.display = "block";
  activePlayerName.textContent = players[activePlayer].name;
};

const switchPlayer = () => {
  activePlayer = activePlayer == 1 ? 0 : 1;
  activePlayerName.textContent = players[activePlayer].name;
};

const selectGameField = (e) => {
  const row = e.target.dataset.row - 1;
  const col = e.target.dataset.col - 1;
  if (gameData[row][col] > 0) return;

  gameData[row][col] = activePlayer + 1;

  e.target.textContent = players[activePlayer].symbol;
  e.target.classList.add("disabled");
  console.log(gameData);
  
  let winnerId = checkGameOver();

  if(winnerId !== 0) endGame(winnerId);

  currentRound++;
  switchPlayer();
};


const checkGameOver = () => {
  //checking rows
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
        console.log(1)
      return gameData[i][0];
    }
  }
  //checking columns
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
        console.log(2)
      return gameData[0][i];
    }
  }

  //checking diagonals
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }
  if (currentRound === 9) {
    return -1;
  }

  return 0;
};

const endGame = (winnerId) => {
    gameOverElement.style.display = 'block';

    if(winnerId > 0) {
        winnerName.textContent = players[winnerId].name;
    }else {
        gameOverElement.firstElementChild.textContent = 'It\'s a DRAW';
    }
}