function initState() {
    let startX = Math.floor(Math.random() * 500);
    let startY = Math.floor(Math.random() * 500);

    const state = {
        player: 'Dozer',
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
        },
        keys: {
            keyA: false,
            keyS: false,
            keyD: false,
            keyW: false,
        },
    }

    return state;
}