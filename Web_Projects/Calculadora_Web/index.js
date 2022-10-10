let buttonNumber = Array.from(document.getElementsByClassName('number'));
let displayNumbers = document.getElementById('display-text');
let deleteKey = document.getElementsByClassName('delete')[0];
let resetKey = document.getElementsByClassName('reset')[0];
let operatorKey = Array.from(document.getElementsByClassName('operator'));
let darkModeButton = document.getElementById('darkMode');
let equalKey = document.getElementsByClassName('equal')[0];
let displayPrev = document.getElementById('display-prev');
let closeModalButton = document.getElementsByClassName('close')[0];
let darkModeToggle = false;
let prevNumber = 0;
let delPermission = false;
let writePermission = true;
let operationPermission = true;

let sum = false;
let subtraction = false;
let multiplication = false;
let division = false;

closeModalButton.addEventListener('click', () => {
    document.getElementsByClassName('modal-container')[0].style.visibility =
        'hidden';
});

darkModeButton.addEventListener('click', () => {
    if (!darkModeToggle) {
        document.body.style.backgroundColor = '#E6E6E6';
        document.querySelector('h1').style.color = '#35352B';
        document.getElementsByClassName('display')[0].style.backgroundColor =
            '#EEEEEE';
        document.getElementsByClassName('keypad')[0].style.backgroundColor =
            '#D3CDCD';
        document.getElementById('darkMode').src =
            'https://cdn-icons-png.flaticon.com/512/180/180700.png';
        document.getElementsByClassName('reset')[0].style.backgroundColor =
            '#62B5BD';
        document.getElementsByClassName('reset')[0].style.boxShadow =
            '0 4px 0 0 #1D5E60';
        document.getElementsByClassName('delete')[0].style.backgroundColor =
            '#62B5BD';
        document.getElementsByClassName('delete')[0].style.boxShadow =
            '0 4px 0 0 #1D5E60';
        document.getElementsByClassName('equal')[0].style.backgroundColor =
            '#FF8B38';
        document.getElementsByClassName('equal')[0].style.boxShadow =
            '0 4px 0 0 #8B3A02';
        document.getElementById('display-text').style.color = '#35352B';
        document.getElementById('display-prev').style.color = '#35352B';
        darkModeToggle = true;
    } else {
        document.body.style.backgroundColor = '';
        document.querySelector('h1').style.color = '';
        document.getElementsByClassName('display')[0].style.backgroundColor =
            '';
        document.getElementsByClassName('keypad')[0].style.backgroundColor = '';
        document.getElementById('darkMode').src =
            'https://cdn-icons-png.flaticon.com/512/831/831682.png';
        document.getElementsByClassName('reset')[0].style.backgroundColor = '';
        document.getElementsByClassName('reset')[0].style.boxShadow = '';
        document.getElementsByClassName('delete')[0].style.backgroundColor = '';
        document.getElementsByClassName('delete')[0].style.boxShadow = '';
        document.getElementsByClassName('equal')[0].style.backgroundColor = '';
        document.getElementsByClassName('equal')[0].style.boxShadow = '';
        document.getElementById('display-text').style.color = '';
        document.getElementById('display-prev').style.color = '';
        darkModeToggle = false;
    }
});

const checkOperators = () => {
    if (
        displayNumbers.innerHTML.charAt(displayNumbers.innerHTML.length - 1) ===
            '+' ||
        displayNumbers.innerHTML.charAt(displayNumbers.innerHTML.length - 1) ===
            '-' ||
        displayNumbers.innerHTML.charAt(displayNumbers.innerHTML.length - 1) ===
            'X' ||
        displayNumbers.innerHTML.charAt(displayNumbers.innerHTML.length - 1) ===
            '/' ||
        displayNumbers.innerHTML.charAt(displayNumbers.innerHTML.length - 1) ===
            '.'
    ) {
        return true;
    }
};

//****************************************BUTTONS*****************************************
//-------------------------------- NUMBERS BUTTONS
buttonNumber.forEach((button) => {
    button.addEventListener('click', () => {
        if (writePermission) {
            delPermission = true;
            console.log(button.innerHTML);
            displayNumbers.innerHTML += button.innerHTML;
        }
    });
});

//-------------------------------- DELETE BUTTON
deleteKey.addEventListener('click', () => {
    if (delPermission) {
        writePermission = true;
        displayNumbers.innerHTML = displayNumbers.innerHTML.slice(0, -1);
        if (displayNumbers.innerHTML.length <= 0) {
            displayNumbers.innerHTML = '';
        }
        console.log(displayNumbers.innerHTML);
    }
});
//-------------------------------- RESET BUTTON
resetKey.addEventListener('click', () => {
    writePermission = true;
    displayNumbers.innerHTML = '';
    displayPrev.innerHTML = '';
});

//-------------------------------- OPERATOR BUTTONS
operatorKey.forEach((button) => {
    if (button.innerHTML === '+') {
        button.addEventListener('click', () => {
            console.log(button.innerHTML);
            if (operationPermission) {
                if (
                    displayNumbers.innerHTML !== '' &&
                    checkOperators() !== true
                ) {
                    sum = true;
                    operationPermission = false;
                    writePermission = true;
                    prevNumber = Number.parseFloat(displayNumbers.innerHTML);
                    displayPrev.innerHTML = prevNumber + '+';
                    displayNumbers.innerHTML = '';
                    operationPermission = false;
                }
            }
        });
    }

    if (button.innerHTML === '-') {
        button.addEventListener('click', () => {
            console.log(button.innerHTML);
            if (operationPermission) {
                if (
                    displayNumbers.innerHTML !== '' &&
                    checkOperators() !== true
                ) {
                    subtraction = true;
                    writePermission = true;
                    prevNumber = Number.parseFloat(displayNumbers.innerHTML);
                    displayPrev.innerHTML = prevNumber + '-';
                    displayNumbers.innerHTML = '';
                    operationPermission = false;
                }
            }
        });
    }

    if (button.innerHTML === 'X') {
        button.addEventListener('click', () => {
            console.log(button.innerHTML);
            if (operationPermission) {
                if (
                    displayNumbers.innerHTML !== '' &&
                    checkOperators() !== true
                ) {
                    multiplication = true;
                    writePermission = true;
                    prevNumber = Number.parseFloat(displayNumbers.innerHTML);
                    displayPrev.innerHTML = prevNumber + 'x';
                    displayNumbers.innerHTML = '';
                    operationPermission = false;
                }
            }
        });
    }

    if (button.innerHTML === '/') {
        button.addEventListener('click', () => {
            console.log(button.innerHTML);
            if (operationPermission) {
                if (
                    displayNumbers.innerHTML !== '' &&
                    checkOperators() !== true
                ) {
                    division = true;
                    writePermission = true;
                    prevNumber = Number.parseFloat(displayNumbers.innerHTML);
                    displayPrev.innerHTML = prevNumber + '/';
                    displayNumbers.innerHTML = '';
                    operationPermission = false;
                }
            }
        });
    }

    if (button.innerHTML === '.') {
        button.addEventListener('click', () => {
            console.log(button.innerHTML);
            if (!operationPermission) {
                if (
                    displayNumbers.innerHTML !== '' &&
                    checkOperators() !== true
                ) {
                    division = true;
                    writePermission = true;
                    displayNumbers.innerHTML += '.';
                }
            }
        });
    }
});

//-------------------------------- EQUAL BUTTON
equalKey.addEventListener('click', () => {
    if (displayNumbers.innerHTML !== '') {
        writePermission = false;
        delPermission = false;
        operationPermission = true;

        if (sum) {
            let resultado =
                prevNumber + Number.parseFloat(displayNumbers.innerHTML);
            if (Number.isInteger(resultado) === false) {
                resultado = resultado.toFixed(5);
                resultado = Number.parseFloat(resultado);
            }
            displayNumbers.innerHTML = resultado;
            displayPrev.innerHTML = '';
            prevNumber = 0;
            sum = false;
        } else if (subtraction) {
            let resultado =
                prevNumber - Number.parseFloat(displayNumbers.innerHTML);
            if (Number.isInteger(resultado) === false) {
                resultado = resultado.toFixed(5);
                resultado = Number.parseFloat(resultado);
            }
            displayNumbers.innerHTML = resultado;
            displayPrev.innerHTML = '';
            prevNumber = 0;
            subtraction = false;
        } else if (division) {
            let resultado =
                prevNumber / Number.parseFloat(displayNumbers.innerHTML);
            if (Number.isInteger(resultado) === false) {
                resultado = resultado.toFixed(5);
                resultado = Number.parseFloat(resultado);
            }
            displayNumbers.innerHTML = resultado;
            displayPrev.innerHTML = '';
            prevNumber = 0;
            division = false;
        } else if (multiplication) {
            let resultado =
                prevNumber * Number.parseFloat(displayNumbers.innerHTML);
            if (Number.isInteger(resultado) === false) {
                resultado = resultado.toFixed(5);
                resultado = Number.parseFloat(resultado);
            }
            displayNumbers.innerHTML = resultado;
            displayPrev.innerHTML = '';
            prevNumber = 0;
            multiplication = false;
        }
    }
});
