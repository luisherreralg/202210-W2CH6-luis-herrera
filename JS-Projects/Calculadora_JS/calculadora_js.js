let userNums = [];

const askForMoreOperations = () => {
    let moreOperations = prompt('¿Desea realizar más operaciones?(y/n)');

    if (
        moreOperations.toLowerCase() !== 'y' &&
        moreOperations.toLowerCase() !== 'n'
    ) {
        alert('Por favor, introduzca una respuesta válida');
        askForMoreOperations();
    } else if (moreOperations.toLowerCase() === 'n') {
        alert('Gracias por usar nuestra calculadora. Esperamos verle pronto');
    } else {
        userNums = [];
        getNumbers();
    }
};

function operations() {
    let resultadoSuma = 0;
    let resultadoResta = 0;
    let resultadoMulti = 1;
    let resultadoDivi = 0;

    for (num in arguments) {
        resultadoSuma += arguments[num];
    }
    if (Number.isInteger(resultadoSuma) !== true) {
        resultadoSuma = resultadoSuma.toFixed(3);
    }
    console.log(
        `El resultado de la suma de todas las cifras es: ${resultadoSuma}`
    );

    for (num in arguments) {
        let count = Number.parseInt(num);
        count === 0
            ? (resultadoResta = arguments[num])
            : (resultadoResta = resultadoResta - arguments[num]);
    }
    if (Number.isInteger(resultadoResta) !== true) {
        resultadoResta = resultadoResta.toFixed(3);
    }
    console.log(
        `El resultado de la resta de todas las cifras es: ${resultadoResta}`
    );

    for (num in arguments) {
        resultadoMulti *= arguments[num];
    }
    if (Number.isInteger(resultadoMulti) !== true) {
        resultadoMulti = resultadoMulti.toFixed(3);
    }
    console.log(
        `El resultado de la multiplicación de todas las cifras es: ${resultadoMulti}`
    );

    for (num in arguments) {
        let count = Number.parseInt(num);
        count === 0
            ? (resultadoDivi = arguments[num])
            : (resultadoDivi = resultadoDivi / arguments[num]);
    }
    if (Number.isInteger(resultadoDivi) !== true) {
        resultadoDivi = resultadoDivi.toFixed(3);
    }
    console.log(
        `El resultado de la division de todas las cifras es: ${resultadoDivi}`
    );
    console.log(
        '-----------------------------------------------------------------------------------------'
    );

    askForMoreOperations();
}

const getSquareRoot = () => {
    let squareRootResult = Math.sqrt(userNums[0]);

    if (Number.isInteger(squareRootResult) !== true) {
        squareRootResult = squareRootResult.toFixed(3);
    }

    console.log(
        `La raíz cuadrada de la única cifra introducida es: ${squareRootResult}`
    );
    console.log(
        '-----------------------------------------------------------------------------------------'
    );
    askForMoreOperations();
};

const userDecision = () => {
    let decision = prompt('Desea introducir otra cifra? (y/n)');
    if (
        (decision.toLowerCase() !== 'y' && decision.toLowerCase() !== 'n') ||
        decision === null
    ) {
        alert('Introduzca una respuesta válida');
        userDecision();
    } else if (decision.toLowerCase() !== 'y' && userNums.length <= 1) {
        getSquareRoot();
    } else if (decision.toLowerCase() !== 'y') {
        operations(...userNums);
    } else {
        getNumbers();
    }
};

const getNumbers = () => {
    let nums = prompt('Introduzca una cifra con la que quiera operar');
    if (nums === '') {
        alert('Introduzca una cifra válida');
        getNumbers();
    } else if (Number.isNaN(Number.parseFloat(nums))) {
        alert('Introduzca una cifra válida');
        getNumbers();
    } else {
        nums = Number.parseFloat(nums);
        userNums.push(nums);
        userDecision();
    }
};
getNumbers();
