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

            wizardEl.style.left = initialState.posX + 'px';
            wizardEl.style.top = initialState.posY + 'px';

            this.wizardEl = wizardEl;
            
            gameScreen.appendChild(wizardEl);
            
            return wizardEl;
        },
        createBug(stats) {
            const bugEl = document.createElement('div');
            bugEl.classList.add('bug');
            bugEl.style.width = stats.width + 'px';
            bugEl.style.height = stats.height + 'px';
            bugEl.style.left = gameScreen.offsetWidth - stats.width + 'px';
            bugEl.style.top = Math.floor(Math.random() * gameScreen.offsetHeight - stats.height) + 'px';
            gameScreen.appendChild(bugEl);
        },
    }
}