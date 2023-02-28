function initGameObjects() {
    const startScreen = document.querySelector('.start-screen');
    const gameScreen = document.querySelector('.game-screen');
    const scoreElement = document.querySelector('.score');
    const finalScoreElement = document.querySelector('.score-final');
    const gameoverScreen = document.querySelector('.gameover-screen'); 
    const playAgain = document.querySelector('.start-over');
    const anotherTab = document.querySelector('.start-new-tab');

    return {
        startScreen,
        finalScoreElement,
        gameoverScreen,
        gameScreen,
        playAgain,
        anotherTab,
        scoreElement, 
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
        createFireball(wizard, fireball) {
            let fireballElement = document.createElement('div');
            fireballElement.classList.add('fireball');
            fireballElement.style.left = wizard.posX + wizard.width + 'px';
            fireballElement.style.top = wizard.posY + wizard.height / 3  + 5 + 'px';
            fireballElement.style.width = fireball.width + 'px';
            fireballElement.style.height = fireball.height + 'px';
            gameScreen.appendChild(fireballElement);
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