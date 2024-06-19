let playerSelection = '';
let computerSelection = '';
let result = '';

function getComputerChoice() {
    const choice = ["batu", "gunting", "kertas"];
    const randomIndex = Math.floor(Math.random(1) * choice.length);
    return choice[randomIndex]
}

function setPlayerChoice1(choice) {
    if (playerSelection === "") {
        playerSelection = choice;
        console.log(`player 1 set choice ${choice}`);
        disableChoiceButtons();
    }
}

let rules = (p1, p2) => {
    if (p1 == p2) {
        return 'draw!';
    };
    if ((p1 == 'batu' && p2 == 'gunting') ||
        (p1 == 'gunting' && p2 == 'kertas') ||
        (p1 == 'kertas' && p2 == 'batu')
        ) {
        return "Player 1 Wins";
    } else {
        return 'Computer Wins';
    }

}


function start() {
    if (!playerSelection) {
        alert('silahkan pilih salah satu: batu, gunting, kertas');
        return;
    }
    computerSelection = getComputerChoice();
    result = rules(playerSelection, computerSelection)
    console.log(`pilihan computer: ${computerSelection}`)
    console.log(`pilihan computer: ${playerSelection}`)
    displayResult();
    resetGame();
}

function displayResult() {
    let resulthtml = document.getElementById('result')
    result = rules(playerSelection, computerSelection)
    resulthtml.innerHTML = `
        <p>Kamu memilih: ${playerSelection}</p>
        <p>Komputer memilih: ${computerSelection}</p>
        <p>Hasil: ${result}</p>
    `;
}

function disableChoiceButtons() {
    document.getElementById('batu').disabled = true;
    document.getElementById('gunting').disabled = true;
    document.getElementById('kertas').disabled = true;
}

function resetGame() {
    playerSelection = '';
    computerSelection = '';
    result = '';
    document.getElementById('batu').disabled = false;
    document.getElementById('gunting').disabled = false;
    document.getElementById('kertas').disabled = false;
}