const openPlayerConfig = () => {
    configOverlay.style.display = 'block';
    backdrop.style.display = 'block';
}

const closePlayerConfig = (e) => {
    configOverlay.style.display = 'none';
    backdrop.style.display = 'none';
    errorOutput.textContent = '';
    formElement.firstElementChild.classList.remove('error');
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
    

}