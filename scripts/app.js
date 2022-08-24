const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let editPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O',
    },
];

const editBtnPlayer1 = document.getElementById('edit-player1-btn');
const editBtnPlayer2 = document.getElementById('edit-player2-btn');
const formElement = document.querySelector('form');
const errorOutput = document.getElementById('config-errors');

const configOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');
const cancelBtn = document.getElementById('cancel-config-btn');

const startGameBtn = document.getElementById('start-game-btn');
const activeGame = document.getElementById('active-game');
const activePlayerName = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');


const gameFieldElements = document.querySelectorAll('#game-board li');

editBtnPlayer1.addEventListener('click', openPlayerConfig);

editBtnPlayer2.addEventListener('click', openPlayerConfig);

cancelBtn.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startGameBtn.addEventListener('click', startGame);

for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click', selectGameField);
}