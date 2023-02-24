function initGameObjects() {
    const startScreen = document.querySelector('.start-screen');
    const gameScreen = document.querySelector('.game-screen');

    return {
        startScreen,
        gameScreen,
        createWizard(initialState) {
            let wizardEl = document.createElement('div');
            wizardEl.classList.add('wizard');
            wizardEl.style.width = initialState.width + 'px';
            wizardEl.style.height = initialState.height + 'px';
            wizardEl.style.left = initialState.startX + 'px';
            wizardEl.style.top = initialState.startY + 'px';
            this.wizardEl = wizardEl;
            gameScreen.appendChild(wizardEl);
            return wizardEl;
        },
    }
}