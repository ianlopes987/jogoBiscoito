let phrase = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Você é um querido amigo, parabéns",
    "Que Deus abençoe a sua vida e a sua casa.",
    "Eu tenho certeza que você vai conseguir",
    "Não desista, você é muito bom e inteligente.",
    "Continue focado no seu estudo!",
    "Volte a sua rotina de dieta e atividades físicas"
];

let randomPhrase = Math.round(Math.random() * phrase.length);

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnReset = document.querySelector("#btnReset");
const stone = document.querySelector("#stone");

stone.addEventListener("click",generateLuck);
btnReset.addEventListener("click",reset);

function generateLuck(){
    toggleScreen();
    document.querySelector("#sorte p").innerText = `${phrase[randomPhrase]}`;
    randomPhrase = Math.round(Math.random() * phrase.length);
}

function reset(){
    toggleScreen();
}


function toggleScreen(){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

