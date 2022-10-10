const questions = [
    [
        {
            letter: 'a',
            answer: 'abducir',
            status: 0,
            question:
                'CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien',
        },
        {
            letter: 'b',
            answer: 'bingo',
            status: 0,
            question:
                "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
        },
        {
            letter: 'c',
            answer: 'churumbel',
            status: 0,
            question: 'CON LA C. Niño, crío, bebé',
        },
        {
            letter: 'd',
            answer: 'diarrea',
            status: 0,
            question:
                'CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida',
        },
        {
            letter: 'e',
            answer: 'ectoplasma',
            status: 0,
            question:
                'CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación',
        },
        {
            letter: 'f',
            answer: 'facil',
            status: 0,
            question:
                'CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad',
        },
        {
            letter: 'g',
            answer: 'galaxia',
            status: 0,
            question:
                'CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas',
        },
        {
            letter: 'h',
            answer: 'harakiri',
            status: 0,
            question: 'CON LA H. Suicidio ritual japonés por desentrañamiento',
        },
        {
            letter: 'i',
            answer: 'iglesia',
            status: 0,
            question: 'CON LA I. Templo cristiano',
        },
        {
            letter: 'j',
            answer: 'jabali',
            status: 0,
            question:
                "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
        },
        {
            letter: 'k',
            answer: 'kamikaze',
            status: 0,
            question:
                'CON LA K. Persona que se juega la vida realizando una acción temeraria',
        },
        {
            letter: 'l',
            answer: 'licantropo',
            status: 0,
            question: 'CON LA L. Hombre lobo',
        },
        {
            letter: 'm',
            answer: 'misantropo',
            status: 0,
            question:
                'CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas',
        },
        {
            letter: 'n',
            answer: 'necedad',
            status: 0,
            question: 'CON LA N. Demostración de poca inteligencia',
        },
        {
            letter: 'ñ',
            answer: 'señal',
            status: 0,
            question:
                'CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.',
        },
        {
            letter: 'o',
            answer: 'orco',
            status: 0,
            question:
                'CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien',
        },
        {
            letter: 'p',
            answer: 'protoss',
            status: 0,
            question:
                'CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft',
        },
        {
            letter: 'q',
            answer: 'queso',
            status: 0,
            question:
                'CON LA Q. Producto obtenido por la maduración de la cuajada de la leche',
        },
        {
            letter: 'r',
            answer: 'raton',
            status: 0,
            question: 'CON LA R. Roedor',
        },
        {
            letter: 's',
            answer: 'stackoverflow',
            status: 0,
            question:
                'CON LA S. Comunidad salvadora de todo desarrollador informático',
        },
        {
            letter: 't',
            answer: 'terminator',
            status: 0,
            question:
                'CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984',
        },
        {
            letter: 'u',
            answer: 'unamuno',
            status: 0,
            question:
                "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
        },
        {
            letter: 'v',
            answer: 'vikingos',
            status: 0,
            question:
                'CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa',
        },
        {
            letter: 'w',
            answer: 'sandwich',
            status: 0,
            question:
                'CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso',
        },
        {
            letter: 'x',
            answer: 'botox',
            status: 0,
            question:
                'CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética',
        },
        {
            letter: 'y',
            answer: 'peyote',
            status: 0,
            question:
                'CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos',
        },
        {
            letter: 'z',
            answer: 'zen',
            status: 0,
            question:
                'CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional',
        },
    ],
    [
        {
            letter: 'a',
            answer: 'alas',
            status: 0,
            question:
                'CON LA A. Parte del cuerpo de algunos animales, como las aves o insectos, que les sirve para volar',
        },
        {
            letter: 'b',
            answer: 'biberon',
            status: 0,
            question:
                'CON LA B. Botella para dar leche y otros líquidos a niños muy pequeños.. Suele ser de cristal y tiene una tetina de plástico.',
        },
        {
            letter: 'c',
            answer: 'cera',
            status: 0,
            question:
                'CON LA C. Sustancia sólida fabricada por algunos insectos, sobre todo la que hacen las abejas para formar las celdillas de los panales.',
        },
        {
            letter: 'd',
            answer: 'dragon',
            status: 0,
            question:
                'CON LA D. Animal fantástico que aparece en cuentos infantiles e historias antiguas, es de gran tamaño y echa fuego por la boca.',
        },
        {
            letter: 'e',
            answer: 'escondite',
            status: 0,
            question:
                'CON LA E. Juego de niños que consistes en que un jugador debe encontrar a los demás que se han escondido.',
        },
        {
            letter: 'f',
            answer: 'flotador',
            status: 0,
            question:
                'CON LA F. Objeto de plástico, goma u otro material que sirve para flotar en el agua.',
        },
        {
            letter: 'g',
            answer: 'golf',
            status: 0,
            question:
                'CON LA G. Deporte que consiste en meter una pelotita, golpeándola con un bastón especial, en una serie de hoyos muy alejados unos de otros.',
        },
        {
            letter: 'h',
            answer: 'hipo',
            status: 0,
            question:
                'CON LA H. Sacudidas bruscas del cuerpo que le dan a alguien y hacen que el aire salga de golpe por la boca produciendo un ruido.',
        },
        {
            letter: 'i',
            answer: 'iglú',
            status: 0,
            question:
                'CON LA I. Casa redonda que hacen los esquimales con bloques de hielo.',
        },
        {
            letter: 'j',
            answer: 'jueves',
            status: 0,
            question:
                'CON LA J. Día de la semana que está entre el miércoles y el viernes.',
        },
        {
            letter: 'k',
            answer: 'karate',
            status: 0,
            question:
                'CON LA K. Lucha de origen japonés que consiste sobre todo en el combate con manos y pies.',
        },
        {
            letter: 'l',
            answer: 'lagartija',
            status: 0,
            question:
                'CON LA L. Animal parecido a un lagarto pequeño que se mueve muy deprisa y vive en los huecos de los muros y entre las rocas.',
        },
        {
            letter: 'm',
            answer: 'magia',
            status: 0,
            question:
                'CON LA M. Arte y espectáculo en el que se realizan mediante trucos cosas que parecen imposibles.',
        },
        {
            letter: 'n',
            answer: 'naranja',
            status: 0,
            question:
                'CON LA N. Fruto de forma redonda dividido en gajos y de sabor dulce y algo ácido.',
        },
        {
            letter: 'ñ',
            answer: 'ñu',
            status: 0,
            question:
                'CONTIENE LA Ñ. Mamífero de color pardo que tiene la cabeza grande con cursos curvos y barba.',
        },
        {
            letter: 'o',
            answer: 'oxigeno',
            status: 0,
            question:
                'CON LA O. Gas que forma parte del aire y lo necesitamos para respirar.',
        },
        {
            letter: 'p',
            answer: 'paracaidas',
            status: 0,
            question:
                'CON LA P. Gran bolsa de tela que se utiliza para tirarse desde mucha altura porque frena la velocidad de la caída.',
        },
        {
            letter: 'q',
            answer: 'queso',
            status: 0,
            question:
                'CON LA Q. Alimento que se hace con la leche de oveja, caba o vaca quitándole la parte líquida.',
        },
        {
            letter: 'r',
            answer: 'rayo',
            status: 0,
            question:
                'CON LA R. Descarga eléctrica que se produce cuando hay tormenta, es como un gran garabato que se dibuja en el cielo y que a veces llega a la tierra.',
        },
        {
            letter: 's',
            answer: 'sirena',
            status: 0,
            question: 'CON LA S. Ser fantástico, mitad mujer y mitad pez.',
        },
        {
            letter: 't',
            answer: 'tijeras',
            status: 0,
            question:
                'CON LA T. Objeto para cortar formado por dos piezas afiladas por uno de los lados y unidas en aspa de manera que pueden abrirse y cerrarse.',
        },
        {
            letter: 'u',
            answer: 'uña',
            status: 0,
            question:
                'CON LA U. Placa dura que cubre la punta de los dedos del hombre y de muchos animales.',
        },
        {
            letter: 'v',
            answer: 'vagon',
            status: 0,
            question:
                'CON LA V. Cada vehículo de un tren o metro que transporta personas o mercancías.',
        },
        {
            letter: 'w',
            answer: 'water',
            status: 0,
            question: 'CONTIENE LA W. Agua en idioma inglés.',
        },
        {
            letter: 'x',
            answer: 'xilofono',
            status: 0,
            question:
                'CONTIENE LA X. Instrumento musical que tiene unas láminas de madera o metal que se golpean con unos macillos.',
        },
        {
            letter: 'y',
            answer: 'yayo',
            status: 0,
            question:
                'CONTIENE LA Y. Nombre cariñoso y familiar para el abuelo.',
        },
        {
            letter: 'z',
            answer: 'zoologico',
            status: 0,
            question:
                'CON LA Z. Parque con animales de muchas partes del mundo que puede ser visitado por el público.',
        },
    ],
    [
        {
            letter: 'a',
            answer: 'articulaciones',
            status: 0,
            question:
                'CON LA A. Parte del cuerpo humano donde se juntan dos o más huesos. (plural)',
        },
        {
            letter: 'b',
            answer: 'branquias',
            status: 0,
            question:
                'CON LA B. Órganos respiratorios de numerosos animales acuáticos, mediante los cuales se extrae el oxígeno disuelto en el agua.',
        },
        {
            letter: 'c',
            answer: 'carbon',
            status: 0,
            question: 'CON LA C. Fuente de energía no renovable.',
        },
        {
            letter: 'd',
            answer: 'diametro',
            status: 0,
            question:
                'CON LA D. Segmento de recta que pasa por el centro y une dos puntos opuestos de una circunferencia',
        },
        {
            letter: 'e',
            answer: 'escaleno',
            status: 0,
            question:
                'CON LA E. Triángulo en el que cada lado tiene longitudes diferentes.',
        },
        {
            letter: 'f',
            answer: 'fotosintesis',
            status: 0,
            question:
                'CON LA F. Proceso por el que las plantas verdes convierten el dióxido de carbono y agua en hidratos de carbono desprendiendo oxígeno, y lo hacen aprovechando la energía de la luz solar.',
        },
        {
            letter: 'g',
            answer: 'guapo',
            status: 0,
            question: 'CON LA G. Antónimo de feo.',
        },
        {
            letter: 'h',
            answer: 'herviboro',
            status: 0,
            question:
                'CON LA H. Animal que se alimenta principalmente de plantas.',
        },
        {
            letter: 'i',
            answer: 'invertebrados',
            status: 0,
            question:
                'CON LA I. Animales que carecen de columna vertebral o notocorda, y de esqueleto interno articulado.',
        },
        {
            letter: 'j',
            answer: 'jabato',
            status: 0,
            question: 'CON LA J. Cría del jabalí.',
        },
        {
            letter: 'k',
            answer: 'kilometro',
            status: 0,
            question:
                'CON LA K. Unidad de longitud que equivale a 1000 metros. ',
        },
        {
            letter: 'l',
            answer: 'luna',
            status: 0,
            question: 'CON LA L. Satélite de la Tierra.',
        },
        {
            letter: 'm',
            answer: 'madrid',
            status: 0,
            question: 'CON LA M. Capital de España.',
        },
        {
            letter: 'n',
            answer: 'nariz',
            status: 0,
            question:
                'CON LA N. Órgano del cuerpo humano que usamos para respirar.',
        },
        {
            letter: 'ñ',
            answer: 'mañana',
            status: 0,
            question: 'CONTIENE LA Ñ. Contiene la ñ: día después de hoy.',
        },
        {
            letter: 'o',
            answer: 'oviparos',
            status: 0,
            question:
                'CON LA O. Animales cuya hembra expulsa los huevos al exterior cuando los embriones están sin desarrollar o en una fase muy primitiva de desarrollo.',
        },
        {
            letter: 'p',
            answer: 'pentagono',
            status: 0,
            question: 'CON LA P. Polígono de cinco lados.',
        },
        {
            letter: 'q',
            answer: 'quince',
            status: 0,
            question: 'CON LA Q. Resultado de multiplicar 3 x 5. ',
        },
        {
            letter: 'r',
            answer: 'raiz',
            status: 0,
            question:
                'CON LA R. Parte de la planta que crece en el lado contrario al tallo y sirve para absorber los alimentos que necesita.',
        },
        {
            letter: 's',
            answer: 'silaba',
            status: 0,
            question:
                'CON LA S. Cada fonema o aquél conjunto de fonemas que pronunciamos en una sola emisión o golpe de voz cuando decimos una palabra.',
        },
        {
            letter: 't',
            answer: 'trisilabas',
            status: 0,
            question: 'CON LA T. Palabras que tienen tres sílabas.',
        },
        {
            letter: 'u',
            answer: 'urdir',
            status: 0,
            question: 'CON LA U. Sinónimo de maquinar, tramar, conspirar.',
        },
        {
            letter: 'v',
            answer: 'volga',
            status: 0,
            question: 'CON LA V. Río más largo de Europa.',
        },
        {
            letter: 'w',
            answer: 'wait',
            status: 0,
            question: 'CONTIENE LA W. Esperar en inglés.',
        },
        {
            letter: 'x',
            answer: 'sexto',
            status: 0,
            question:
                'CONTIENE LA X. Contiene la X: número ordinal que va después del quinto.',
        },
        {
            letter: 'y',
            answer: 'yegua',
            status: 0,
            question: 'CONTIENE LA Y. Hembra del caballo.',
        },
        {
            letter: 'z',
            answer: 'zepelin',
            status: 0,
            question:
                'CON LA Z. Vehículo parecido al globo pero con una bolsa alargada.',
        },
    ],
];

let letterInfo = [];
let score = [
    { name: 'xX_DoritosMLG_Xx', aciertos: 15, fallos: 40 },
    { name: 'The_Unlucky_One', aciertos: 27, fallos: 10 },
    { name: 'Ibai(Sponsored)', aciertos: 27, fallos: 7 },
    { name: 'Alfredo', aciertos: 27, fallos: 4 },
    { name: 'Jacinto', aciertos: 27, fallos: 0 },
];
let win = false;
let end = false;
let randomArray = 0;

// const timeOut = () => {
//     throw new Error ("GAME OVER TIME OUT")
// };
// setTimeout(timeOut, 1000);

const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
};

const printInfo = (respuesta) => {
    if (respuesta === 'correcto') {
        console.log(`
        ██████  ██████  ██████  ██████  ███████  ██████ ████████  ██████  ██ ██ 
       ██      ██    ██ ██   ██ ██   ██ ██      ██         ██    ██    ██ ██ ██ 
       ██      ██    ██ ██████  ██████  █████   ██         ██    ██    ██ ██ ██ 
       ██      ██    ██ ██   ██ ██   ██ ██      ██         ██    ██    ██       
        ██████  ██████  ██   ██ ██   ██ ███████  ██████    ██     ██████  ██ ██ 
                                                                                
                                                                                
       `);
    } else if (respuesta === 'incorrecto') {
        console.log(`
        ██ ███    ██  ██████  ██████  ██████  ██████  ███████  ██████ ████████  ██████  ██ ██ 
        ██ ████   ██ ██      ██    ██ ██   ██ ██   ██ ██      ██         ██    ██    ██ ██ ██ 
        ██ ██ ██  ██ ██      ██    ██ ██████  ██████  █████   ██         ██    ██    ██ ██ ██ 
        ██ ██  ██ ██ ██      ██    ██ ██   ██ ██   ██ ██      ██         ██    ██    ██       
        ██ ██   ████  ██████  ██████  ██   ██ ██   ██ ███████  ██████    ██     ██████  ██ ██ 
                                                                                              
                                                                                              
        `);
    } else if (respuesta === 'vuelta') {
        console.log(`
        ██    ██ ██    ██ ███████ ██      ████████  █████  
        ██    ██ ██    ██ ██      ██         ██    ██   ██ 
        ██    ██ ██    ██ █████   ██         ██    ███████ 
         ██  ██  ██    ██ ██      ██         ██    ██   ██ 
          ████    ██████  ███████ ███████    ██    ██   ██ 
                                                           
                                                           
        `);
    } else if (respuesta === 'victoria') {
        console.log(`
        ██    ██ ██  ██████ ████████  ██████  ██████  ██  █████  
        ██    ██ ██ ██         ██    ██    ██ ██   ██ ██ ██   ██ 
        ██    ██ ██ ██         ██    ██    ██ ██████  ██ ███████ 
         ██  ██  ██ ██         ██    ██    ██ ██   ██ ██ ██   ██ 
          ████   ██  ██████    ██     ██████  ██   ██ ██ ██   ██ 
                                                                 
                                                                 
        `);
    }
};

const getLetterInfo = () => {
    letterInfo = [];

    for (let i = 0; i < 27; i++) {
        letterInfo.push(questions[0][i].letter.toUpperCase());
    }
};
getLetterInfo();

const getUser = () => {
    const user = prompt('Por favor, introduzca un nombre de usuario');
    if (
        user === null ||
        user.trim().length === 0 ||
        Number.isNaN(Number.parseFloat(user)) === false
    ) {
        console.log('Por favor introduzca una respuesta válida');
        getUser();
    }
    console.log(`Bienvenido ${user} al Pasapalabra!`);
    alert(`Antes de empezar me gustaría hacerte algunas recomendaciones:
  - Introducir mayúsculas o minúsculas no altera el resultado.
  - Si introduce tildes, el programa no reconocera la palabra y le contará la respuesta como incorrecta.
  - Si no tiene claro la respuesta, puede introducir "pasapalabra" para no puntura e ir a la siguiente pregunta.
  - Cuando quiera terminar la partida escriba "end".
  -Disfrute!!`);

    score.push({ name: user, aciertos: 0, fallos: 0 });

    return user;
};

const username = getUser();

const endGame = () => {
    const yourScore = score[score.length - 1];
    console.log(
        `${yourScore.name} has terminado con ${yourScore.aciertos} aciertos y ${yourScore.fallos} fallos`
    );
};

const game = () => {
    for (let i = 0; i < 27; i++) {
        randomArray = getRandomNumber();
        if (questions[randomArray][i].status === 0 && end === false) {
            console.log(letterInfo);
            console.log(questions[randomArray][i].question);
            const answer = getAnswer();

            if (answer === 'end') {
                end = true;
                return;
            } else if (answer === 'pasapalabra') {
                questions[0][i].status === false;
                questions[1][i].status === false;
                questions[2][i].status === false;
            } else if (answer === questions[randomArray][i].answer) {
                letterInfo[i] = `[-]`;
                printInfo('correcto');
                questions[0][i].status = true;
                questions[1][i].status = true;
                questions[2][i].status = true;
                score[score.length - 1].aciertos =
                    score[score.length - 1].aciertos + 1;
            } else {
                printInfo('incorrecto');
                questions[0][i].status = false;
                questions[1][i].status = false;
                questions[2][i].status = false;
                score[score.length - 1].fallos =
                    score[score.length - 1].fallos + 1;
            }
        } else if (
            questions[randomArray][i].status === false &&
            end === false
        ) {
            console.log(letterInfo);
            console.log(questions[randomArray][i].question);
            const answer = getAnswer();

            if (answer === 'end') {
                end = true;
                return;
            } else if (answer === 'pasapalabra') {
                questions[0][i].status === false;
                questions[1][i].status === false;
                questions[2][i].status === false;
            } else if (answer === questions[randomArray][i].answer) {
                letterInfo[i] = `[-]`;
                printInfo('correcto');
                questions[0][i].status = true;
                questions[1][i].status = true;
                questions[2][i].status = true;
                score[score.length - 1].aciertos =
                    score[score.length - 1].aciertos + 1;
            } else {
                printInfo('incorrecto');
                questions[0][i].status = false;
                questions[1][i].status = false;
                questions[2][i].status = false;
                score[score.length - 1].fallos =
                    score[score.length - 1].fallos + 1;
            }
        }
    }
    gameCycle();
};

const getAnswer = () => {
    let answer = prompt('Introduzca su respuesta');

    if (answer === null || answer.trim().length === 0) {
        alert('Por favor, introduzca una respuesta válida');
        getAnswer();
    } else if (Number.isNaN(Number.parseFloat(answer)) === false) {
        alert(
            'Por favor, introduzca una respuesta válida, no introduzca números, unicamente texto'
        );
        getAnswer();
    } else {
        answer = answer.trim().toLowerCase();
        return answer;
    }
};

const printResultados = () => {
    const finalScore = score.sort((a, b) => a.fallos - b.fallos);

    console.log('RESULTADOS');
    finalScore.forEach((number, index) => {
        console.log(
            `${index + 1}º-${number.name}--> aciertos:${
                number.aciertos
            }, fallos: ${number.fallos} `
        );
    });
};

const checkIfWin = () => {
    for (let i = 0; i < 27; i++) {
        if (questions[0][i].status === 0 || questions[0][i].status === false) {
            win = false;
            return;
        }
    }
    win = true;
};

const gameCycle = () => {
    for (let i = 0; i < 27; i++) {
        if (questions[0][i].status === 0 && end === false) {
            game();
        } else if (questions[0][i].status === false && end === false) {
            printInfo('vuelta');
            game();
        }
    }

    checkIfWin();
    if (win === true) {
        win = false;
        printInfo('victoria');
        printResultados();
    } else if (end === true) {
        return endGame();
    }
};
game();
