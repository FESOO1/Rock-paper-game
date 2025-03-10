const playerChoiceButtons = document.querySelectorAll('.main-middle-picking-button');
const pickingContainer = document.querySelector('.main-middle-picking');
const outcomeContainer = document.querySelector('.main-middle-outcome');

// GAME
const game = {
    playerPicked: '',
    housePicked: '',
    choices: {
        rock: {
            canBeat: {
                paper: false,
                scissors: true,
                lizard: true,
                spock: false
            }
        },
        paper: {
            canBeat: {
                rock: true,
                scissors: false,
                lizard: false,
                spock: true
            }
        },
        scissors: {
            canBeat: {
                rock: false,
                paper: true,
                lizard: true,
                spock: false
            }
        },
        lizard: {
            canBeat: {
                rock: false,
                paper: true,
                scissors: false,
                spock: true
            }
        },
        spock: {
            canBeat: {
                rock: true,
                paper: false,
                scissors: true,
                lizard: false
            }
        }
    },
    choiceNames: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
};

// PLAYER PICKING

for (let i = 0; i < playerChoiceButtons.length; i++) {
    playerChoiceButtons[i].addEventListener('click', () => {
        // SAVING THE PICKED BY THE PLAYER
        game.playerPicked = playerChoiceButtons[i].value;

        // SAVING THE PICKED BY THE HOUSE
        theHousePicking();
    }); 
};

// THE HOUSE PICKING

function theHousePicking() {
    const pickedByHouse = game.choiceNames[Math.floor(Math.random() * game.choiceNames.length)];
    game.housePicked = pickedByHouse;

    // CHECK WHO WON THE GAME
    checkWhoWonTheGame();

    console.log('PLAYER: ' + game.playerPicked,'HOUSE: ' + game.housePicked);
};

function checkWhoWonTheGame() {
    if (game.choices[game.playerPicked].canBeat[game.housePicked] === true) {
        console.log('You won the game');
    } else if (game.playerPicked === game.housePicked) {
        console.log('Draw');
    } else {
        console.log('The house won the game');
    };
};