let rules = (p1, p2) => {
    if (p1 == p2) {
        return 'draw!';
    };
    if ((p1 == 'batu' && p2 == 'gunting') || (p1 == 'gunting' && p2 == 'kertas') || (p1 == 'kertas' && p2 == 'batu')) {
        return "Player 1 Wins";
    } else {
        return 'Player 2 Wins';
    }

}

function start() {
    let mulai = rules("gunting","kertas");
    console.log(mulai)
}