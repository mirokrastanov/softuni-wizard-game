function start(state, game) {
    game.createWizard(state.wizard);
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game) {
    const { wizard } = state;
    const { wizardEl } = game;
    
    // Move Wizard
    if (state.keys.KeyD) {
        wizard.posX += 10;
    }

    // Render
    wizardEl.style.left = wizard.posX + 'px';

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}