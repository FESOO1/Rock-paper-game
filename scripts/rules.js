const rulesContainer = document.querySelector('.main-bottom-rules-container');
const rulesOpenButton = document.querySelector('.main-bottom-button');
const rulesCloseButton = document.querySelector('.main-bottom-rules-container-inner-header-button');
let isRulesContainerOpen = false;

// OPENING THE RULES CONTAINER

function openingTheRulesContainer() {
    isRulesContainerOpen = true;
    rulesContainer.classList.add('main-bottom-rules-container-active');
};

// CLOSING THE RULES CONTAINER

function closingTheRulesContainer() {
    isRulesContainerOpen = false;
    rulesContainer.classList.remove('main-bottom-rules-container-active');
};

// INITIALIZE BUTTONS
rulesOpenButton.addEventListener('click', openingTheRulesContainer);
rulesCloseButton.addEventListener('click', closingTheRulesContainer);