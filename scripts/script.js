const playerChoiceButtons = document.querySelectorAll('.main-middle-picking-button');

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
};