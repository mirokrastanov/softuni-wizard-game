function start(state, game) {
    game.createWizard(state.wizard);
    window.requestAnimationFrame((timestamp) => gameLoop(state, game, timestamp));
}

function gameLoop(state, game, timestamp) {
    const { wizard } = state;
    const { wizardEl } = game;
    game.scoreElement.textContent = `${state.score} pts.`;

    // Move Wizard
    updateWizardPosition(state, game);

    // Wizard spell casting
    if (state.keys.Space) {
        wizardEl.style.backgroundImage = 'url("/src/images/wizard-fire.png")';
        if (timestamp > state.fireball.nextSpawned) {
            game.createFireball(wizard, state.fireball);
            state.fireball.nextSpawned = timestamp + state.fireball.maxInterval;
        }
    } else {
        wizardEl.style.backgroundImage = 'url("/src/images/wizard.png")';
    }

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
    let bugElements = document.querySelectorAll('.bug');
    bugElements.forEach(bug => {
        let posX = parseInt(bug.style.left);

        if (detectCollision(wizardEl, bug)) {
            state.gameover = true;
        }
        if (posX > 0) {
            bug.style.left = posX - state.bug.speed + 'px';
        } else {
            bug.remove();
        }
    });

    // Render fireballs
    document.querySelectorAll('.fireball').forEach(fireball => {
        let posX = parseInt(fireball.style.left);

        // Detect collision
        bugElements.forEach(bug => {
            if (detectCollision(bug, fireball)) {
                state.score += state.killpts;
                bug.remove();
                fireball.remove();
            }
        });

        if (posX > game.gameScreen.offsetWidth) {
            fireball.remove();
        } else {
            fireball.style.left = posX + state.fireball.speed + 'px';
        }

    });

    if (!state.gameover) {
        state.score += state.scoreRate;
        window.requestAnimationFrame(gameLoop.bind(null, state, game));
    } else {
        game.gameScreen.classList.add('hidden');
        game.gameoverScreen.classList.remove('hidden');
        game.finalScoreElement.textContent = `${state.score} pts.`;
        return;
    }
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

function detectCollision(objectA, objectB) {
    let first = objectA.getBoundingClientRect();
    let second = objectB.getBoundingClientRect();

    let hasCollision = !(first.top > second.bottom || first.bottom < second.top ||
        first.right < second.left || first.left > second.right);

    return hasCollision;
}