
const editBtnPlayer1 = document.getElementById('edit-player1-btn');
const editBtnPlayer2 = document.getElementById('edit-player2-btn');
const formElement = document.querySelector('form');
const errorOutput = document.getElementById('config-errors');

const configOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');
const cancelBtn = document.getElementById('cancel-config-btn');


editBtnPlayer1.addEventListener('click', openPlayerConfig);

editBtnPlayer2.addEventListener('click', openPlayerConfig);

cancelBtn.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);