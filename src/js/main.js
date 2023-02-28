let state = initState();
let game = initGameObjects();

const availableKeys = [
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyW',
    'Space',
];

document.addEventListener('keydown', (e) => {
    if (availableKeys.includes(e.code)) {
        state.keys[e.code] = true;
    }
});
document.addEventListener('keyup', (e) => {
    if (availableKeys.includes(e.code)) {
        state.keys[e.code] = false;
    }
});

game.playAgain.addEventListener('click', (e) => {
    window.location.reload();
});

game.anotherTab.addEventListener('click', (e) => {
    window.open('https://softuni-wizard-game.mirokrastanov.repl.co/', '_blank');
});

game.startScreen.addEventListener('click', (e) => {
    game.startScreen.classList.add('hidden');
    game.anotherTab.classList.add('hidden');
    game.gameScreen.classList.remove('hidden');

    // start game
    start(state, game);
});



