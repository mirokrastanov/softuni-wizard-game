function initState() {
    let startX = Math.floor(Math.random() * 500);
    let startY = Math.floor(Math.random() * 500);

    const state = {
        player: 'Dozer',
        gameover: false,
        score: 0,
        scoreRate: 1,
        killpts: 1000,
        wizard: {
            width: 82,
            height: 100,
            posX: startX,
            posY: startY,
            speed: 10,
        },
        bug: {
            width: 50,
            height: 50,
            nextSpawned: 0,
            maxInterval: 1500,
            speed: 5,
        },
        fireball: {
            width: 20,
            height: 20,
            speed: 10,
            nextSpawned: 0,
            maxInterval: 200,
        },
        keys: {
            KeyA: false,
            KeyS: false,
            KeyD: false,
            KeyW: false,
            Space: false,
        },
    }

    return state;
}