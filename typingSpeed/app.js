window.addEventListener('load', init)



// Global variables

// Available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 1
}
// to change level
const currentLevel = levels.easy

let time = currentLevel;
let score = 0;
let isPlaying;


const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'envelope',
    'coding',
    'road',
    'descending',
    'obscure',
    'error',
    'complete',
    'batches',
    'premium',
    'initialize',
    'view',
    'inform',
    'function',
    'critic',
    'dizzy',
    'fashioning',
    'nutrition',
    'validate',
    'stoop',
    'create',
    'fellow',
    'birds',
    'environment',
    'character',
    'joyful',
    'arrange',
    'believe',
    'manipulate',
    'greedy',
    'pick',
    'loops',
    'aeroplane',
    'hero',
    'punctuate',
];

// initialize Game

function init(){
    // show number of seconds in UI
    seconds.innerHTML = currentLevel
    // load word from array
    showWord(words);
    wordInput.addEventListener('input', startMartch);
    // call countDown per sec
    setInterval(countDown, 1000);
    setInterval(checkStatus, 50);
}


function startMartch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++
    }
    

    if(score === -1){
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = score;   
    }
}




// match currentWords to wordInput

function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = "correct!";
        return true;
    }else {
        message.innerHTML = '';
        return false;
    }

}

// pick and show random word
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length)
    // output random word
    currentWord.innerHTML = words[randIndex]
}
   
// countDown timer
function countDown(){
    if(time > 0){
        time--;
    }else if(time === 0){
        isPlaying = false;
    }

    timeDisplay.innerHTML = time
}

// check Game Status
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!';
        score = -1
    }
} 
