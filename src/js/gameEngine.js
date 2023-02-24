function start(state, game) {
    game.createWizard(state.wizard);
    window.requestAnimationFrame((timestamp) => gameLoop(state, game, timestamp));
}

function gameLoop(state, game, timestamp) {
    const { wizard } = state;
    const { wizardEl } = game;

    // Move Wizard
    updateWizardPosition(state, game);

    // Spawns bugs
    if (timestamp > state.bug.nextSpawned) {
        game.createBug(state.bug);
        state.bug.nextSpawned = timestamp + Math.random() * state.bug.maxInterval;
    }

    // Render
    wizardEl.style.left = wizard.posX + 'px';
    wizardEl.style.top = wizard.posY + 'px';

    // Render bugs
    // TODO - add an array to hold spawned bugs and move them separateyly, based on their x,y coords
    // currently done - same, but moving ALL together, instead of separately
    document.querySelectorAll('.bug').forEach(bug => {
        let posX = parseInt(bug.style.left);
        bug.style.left = posX - state.bug.speed + 'px';
    });


    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function updateWizardPosition() {
    const { wizard } = state;

    if (state.keys.KeyA) {
        wizard.posX = Math.max(wizard.posX - wizard.speed, 0)
    }
    if (state.keys.KeyS) {
        wizard.posY = Math.min(wizard.posY + wizard.speed, game.gameScreen.offsetHeight - wizard.height);
    }
    if (state.keys.KeyD) {
        wizard.posX = Math.min(wizard.posX + wizard.speed, game.gameScreen.offsetWidth - wizard.width);
    }
    if (state.keys.KeyW) {
        wizard.posY = Math.max(wizard.posY - wizard.speed, 0);
    }
}