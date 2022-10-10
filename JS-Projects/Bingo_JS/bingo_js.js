let username;
let carton = [];
const poolNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
];
let cartonToGuess = [];
let usedNumbers = [];
let rounds = 0;
let won = false;
let isPlaying = true;
let checkline1 = true;

let score = [
    { name: 'xX_DoritosMLG_Xx', score: 300 },
    { name: 'The_Unlucky_One', score: 0 },
    { name: 'Ibai(Sponsored)', score: 60 },
    { name: 'Alfredo', score: 20 },
    { name: 'Jacinto', score: 80 },
];

const getUser = () => {
    const user = prompt('Por favor, introduzca su nombre');
    if (user === '' || user === null || user.trim().length === 0) {
        alert('Por favor, introduzca un nombre de usuario válido');
        getUser();
    } else if (Number.isNaN(Number.parseFloat(user)) === false) {
        alert('Por favor, introduzca un nombre de usuario válido');
        getUser();
    } else {
        alert(`Bienvenido ${user} a ISDI Coders Bingo!`);
        username = user;
    }
};

const askForAnotherCarton = () => {
    showCarton();

    const decision = prompt(`${username}, Desea otro cartón? (y/n)`);

    if (decision === null) {
        return;
    } else if (decision.toLowerCase() === 'y') {
        carton = [];
        cartonToGuess = [];
        generateRandomCarton();
        generateCartonToGuess();
        askForAnotherCarton();
    } else if (
        decision.toLowerCase() !== 'y' &&
        decision.toLowerCase() !== 'n'
    ) {
        alert('Introduzca una respuesta válida');
        askForAnotherCarton();
    }
};

const showCarton = (crossedPos) => {
    let savedNumbers = [];
    savedNumbers[crossedPos] = 'X';

    cartonToGuess.forEach((number) => {
        const numbers = number.number;
        savedNumbers.push(numbers);
    });

    console.log(
        '----------------------------CARTON---------------------------'
    );

    let line1 = savedNumbers.slice(0, 5);
    console.log(line1);

    let line2 = savedNumbers.slice(5, 10);
    console.log(line2);

    let line3 = savedNumbers.slice(10);
    console.log(line3);
};

const generateRandomCarton = () => {
    const randomNumber = Math.floor(Math.random() * 51);

    do {
        if (carton.includes(randomNumber) || randomNumber === 0) {
            return generateRandomCarton();
        }

        carton.push(randomNumber);
    } while (carton.length <= 14);
};

const generateCartonToGuess = () => {
    for (let i = 0; i < carton.length; i++) {
        cartonToGuess.push({ number: carton[i], isMatched: false });
    }
};

const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * poolNumbers.length);

    if (usedNumbers.includes(randomNumber)) {
        return getRandomNumber();
    }

    usedNumbers.push(randomNumber);
    return poolNumbers[randomNumber];
};

const printLines = () => {
    const printLine1 = () => {
        let countLine1 = 0;

        if (checkline1 === true) {
            for (let i = 0; i < 5; i++) {
                if (cartonToGuess[i].number === 'X') {
                    countLine1++;
                }
            }
        }

        if (countLine1 === 5 && checkline1 === true) {
            checkline1 = false;
            console.log(`
                ___      ___   __    _  _______  _______      __   __  
               |   |    |   | |  |  | ||       ||   _   |    |  | |  | 
               |   |    |   | |   |_| ||    ___||  |_|  |    |  | |  | 
               |   |    |   | |       ||   |___ |       |    |  | |  | 
               |   |___ |   | |  _    ||    ___||       |    |__| |__| 
               |       ||   | | | |   ||   |___ |   _   |     __   __  
               |_______||___| |_|  |__||_______||__| |__|    |__| |__| 
               `);
            return;
        }
    };

    printLine1();
};

const getScore = () => {
    //Perfect score = 300, 50rounds score = 0
    const baseScore = 1000;
    let scoreToSubstract = rounds * 20;
    const finalScore = baseScore - scoreToSubstract;
    return finalScore;
};

const saveScore = () => {
    const newScore = {};

    newScore.name = username;
    newScore.score = getScore();
    score.push(newScore);
    showScore();
};

const showScore = () => {
    score.sort((a, b) => b.score - a.score);

    console.log('----------------------------SCORE---------------------------');
    score.forEach((e) => {
        console.log(`${e.name}: ${e.score}`);
    });
};

const newTurn = () => {
    const randomNumber = getRandomNumber();
    alert(`Ha salido la bola con número... ${randomNumber}`);

    console.log(`Ha salido la bola con número... ${randomNumber}`);

    cartonToGuess.forEach((number) => {
        if (number.number === randomNumber) {
            alert(`Estas de suerte! Tu cartón tenía el número ${randomNumber}`);
            number.isMatched = true;
            number.number = 'X';
            printLines();
        }
    });
    rounds++;
};

const checkIfWin = () => {
    for (let i = 0; i < cartonToGuess.length; i++) {
        if (cartonToGuess[i].isMatched === false) {
            return;
        }
    }

    won = true;
    return;
};

const playAgain = () => {
    const decision = prompt(`${username}, Desea jugar otra partida? (y/n)`);

    if (decision === null) {
        return;
    } else if (decision.toLowerCase() === 'y') {
        carton = [];
        cartonToGuess = [];
        usedNumbers = [];
        rounds = 0;
        won = false;
        isPlaying = true;
        checkline1 = true;
        playGame();
    } else if (
        decision.toLowerCase() !== 'y' &&
        decision.toLowerCase() !== 'n'
    ) {
        alert('Introduzca una respuesta válida');
        playAgain();
    }
};

const playGame = () => {
    getUser();
    generateRandomCarton();
    generateCartonToGuess();
    askForAnotherCarton();

    do {
        if (confirm('Desea probar suerte con una bola?')) {
            newTurn();
            checkIfWin();
            showCarton();
        } else {
            isPlaying = false;
        }
    } while (isPlaying);

    if (won) {
        console.log(`
        _______  ___   __    _  _______  _______  __   __  
       |  _    ||   | |  |  | ||       ||       ||  | |  | 
       | |_|   ||   | |   |_| ||    ___||   _   ||  | |  | 
       |       ||   | |       ||   | __ |  | |  ||  | |  | 
       |  _   | |   | |  _    ||   ||  ||  |_|  ||__| |__| 
       | |_|   ||   | | | |   ||   |_| ||       | __   __  
       |_______||___| |_|  |__||_______||_______||__| |__| 
       `);
        alert(
            `Enhorabuena! Has ganado en ${rounds} rondas y con un total de ${getScore()} puntos`
        );
        saveScore();
        playAgain();
    } else {
        alert('Hasta la próxima!');
    }
};
playGame();
