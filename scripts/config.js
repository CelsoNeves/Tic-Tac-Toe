const openPlayerConfig = (e) => {
    editPlayer = +e.target.dataset.playerid;
    configOverlay.style.display = 'block';
    backdrop.style.display = 'block';
}

const closePlayerConfig = (e) => {
    editPlayer = 0;
    configOverlay.style.display = 'none';
    backdrop.style.display = 'none';
    errorOutput.textContent = '';
    formElement.firstElementChild.classList.remove('error');
    formElement.firstElementChild.lastElementChild.value = '';
}

const savePlayerConfig = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const enteredPlayername = formData.get('playername').trim();

    if(!enteredPlayername) {
        e.target.firstElementChild.classList.add('error');
        errorOutput.textContent = 'Please enter a valid name'
        return;
    }
    const updatedPlayerDataElement = document.getElementById('player-'+ editPlayer + '-data')
    updatedPlayerDataElement.children[1].textContent = enteredPlayername

    players[editPlayer -1].name = enteredPlayername;

    closePlayerConfig();
}