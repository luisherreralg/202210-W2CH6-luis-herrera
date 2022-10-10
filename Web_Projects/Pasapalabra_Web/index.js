let closeModalButton = document.getElementsByClassName('close-button')[0];

closeModalButton.addEventListener('click', () => {
    document.getElementsByClassName('modal-container')[0].style.visibility =
        'hidden';
    timerOut();
    playPermission = true;
});

document.addEventListener('keypress', (e) => {
    if (playPermission) {
        if (e.key === 'Enter' && rounds < 27) {
            checkAnswer(rounds);
            rounds++;
            if (rounds === 27) {
                counter = indexArray[0];
                printIfo(counter);
                return;
            }
            printIfo(rounds);
        } else if (e.key === 'Enter') {
            checkAnswer(counter);
            indexArray.shift();
            counter = indexArray[0];
            printIfo(counter);
        }
    }
});

//--------------------------------------------------------------------------------------
let rounds = 0;
let timer = 130;
let wordsNumLeft = 27;
let wordsNumFailed = 0;
let wordsNumSuccess = 0;
let indexArray = [];
let counter = '';
let playPermission = false;

const questions = [
    [
        {
            letter: 'a',
            answer: 'abducir',
            status: 0,
            letterInfo: 'CON LA A',
            question:
                'Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien',
        },
        {
            letter: 'b',
            answer: 'bingo',
            status: 0,
            letterInfo: 'CON LA B',
            question:
                "Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
        },
        {
            letter: 'c',
            answer: 'churumbel',
            status: 0,
            letterInfo: 'CON LA C',
            question: 'Niño, crío, bebé',
        },
        {
            letter: 'd',
            answer: 'diarrea',
            status: 0,
            letterInfo: 'CON LA D',
            question:
                'Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida',
        },
        {
            letter: 'e',
            answer: 'ectoplasma',
            status: 0,
            letterInfo: 'CON LA E',
            question:
                'Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación',
        },
        {
            letter: 'f',
            answer: 'facil',
            status: 0,
            letterInfo: 'CON LA F',
            question: 'Que no requiere gran esfuerzo, capacidad o dificultad',
        },
        {
            letter: 'g',
            answer: 'galaxia',
            status: 0,
            letterInfo: 'CON LA G',
            question:
                'Conjunto enorme de estrellas, polvo interestelar, gases y partículas',
        },
        {
            letter: 'h',
            answer: 'harakiri',
            status: 0,
            letterInfo: 'CON LA H',
            question: 'Suicidio ritual japonés por desentrañamiento',
        },
        {
            letter: 'i',
            answer: 'iglesia',
            status: 0,
            letterInfo: 'CON LA I',
            question: 'Templo cristiano',
        },
        {
            letter: 'j',
            answer: 'jabali',
            status: 0,
            letterInfo: 'CON LA J',
            question:
                "Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
        },
        {
            letter: 'k',
            answer: 'kamikaze',
            status: 0,
            letterInfo: 'CON LA K',
            question:
                'Persona que se juega la vida realizando una acción temeraria',
        },
        {
            letter: 'l',
            answer: 'licantropo',
            status: 0,
            letterInfo: 'CON LA L',
            question: 'Hombre lobo',
        },
        {
            letter: 'm',
            answer: 'misantropo',
            status: 0,
            letterInfo: 'CON LA M',
            question:
                'Persona que huye del trato con otras personas o siente gran aversión hacia ellas',
        },
        {
            letter: 'n',
            answer: 'necedad',
            status: 0,
            letterInfo: 'CON LA N',
            question: 'Demostración de poca inteligencia',
        },
        {
            letter: 'ñ',
            answer: 'señal',
            status: 0,
            letterInfo: 'CONTIENE LA Ñ',
            question:
                'Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.',
        },
        {
            letter: 'o',
            answer: 'orco',
            status: 0,
            letterInfo: 'CON LA O',
            question:
                'Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien',
        },
        {
            letter: 'p',
            answer: 'protoss',
            status: 0,
            letterInfo: 'CON LA P',
            question:
                'Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft',
        },
        {
            letter: 'q',
            answer: 'queso',
            status: 0,
            letterInfo: 'CON LA Q',
            question:
                'Producto obtenido por la maduración de la cuajada de la leche',
        },
        {
            letter: 'r',
            answer: 'raton',
            status: 0,
            letterInfo: 'CON LA R',
            question: 'Roedor',
        },
        {
            letter: 's',
            answer: 'stackoverflow',
            status: 0,
            letterInfo: 'CON LA S',
            question: 'Comunidad salvadora de todo desarrollador informático',
        },
        {
            letter: 't',
            answer: 'terminator',
            status: 0,
            letterInfo: 'CON LA T',
            question:
                'Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984',
        },
        {
            letter: 'u',
            answer: 'unamuno',
            status: 0,
            letterInfo: 'CON LA U',
            question:
                "Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
        },
        {
            letter: 'v',
            answer: 'vikingos',
            status: 0,
            letterInfo: 'CON LA V',
            question:
                'Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa',
        },
        {
            letter: 'w',
            answer: 'sandwich',
            status: 0,
            letterInfo: 'CONTIENE LA W',
            question:
                'Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso',
        },
        {
            letter: 'x',
            answer: 'botox',
            status: 0,
            letterInfo: 'CONTIENE LA X',
            question: 'Toxina bacteriana utilizada en cirujía estética',
        },
        {
            letter: 'y',
            answer: 'peyote',
            status: 0,
            letterInfo: 'CON LA Y',
            question:
                'Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos',
        },
        {
            letter: 'z',
            answer: 'zen',
            status: 0,
            letterInfo: 'CON LA Z',
            question:
                'Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional',
        },
    ],
    [
        {
            letter: 'a',
            answer: 'alas',
            status: 0,
            letterInfo: 'CON LA A',
            question:
                'Parte del cuerpo de algunos animales, como las aves o insectos, que les sirve para volar',
        },
        {
            letter: 'b',
            answer: 'biberon',
            status: 0,
            letterInfo: 'CON LA B',
            question:
                'Botella para dar leche y otros líquidos a niños muy pequeños.. Suele ser de cristal y tiene una tetina de plástico.',
        },
        {
            letter: 'c',
            answer: 'cera',
            status: 0,
            letterInfo: 'CON LA C',
            question:
                'Sustancia sólida fabricada por algunos insectos, sobre todo la que hacen las abejas para formar las celdillas de los panales.',
        },
        {
            letter: 'd',
            answer: 'dragon',
            status: 0,
            letterInfo: 'CON LA D',
            question:
                'Animal fantástico que aparece en cuentos infantiles e historias antiguas, es de gran tamaño y echa fuego por la boca.',
        },
        {
            letter: 'e',
            answer: 'escondite',
            status: 0,
            letterInfo: 'CON LA E',
            question:
                'Juego de niños que consistes en que un jugador debe encontrar a los demás que se han escondido.',
        },
        {
            letter: 'f',
            answer: 'flotador',
            status: 0,
            letterInfo: 'CON LA F',
            question:
                'Objeto de plástico, goma u otro material que sirve para flotar en el agua.',
        },
        {
            letter: 'g',
            answer: 'golf',
            status: 0,
            letterInfo: 'CON LA G',
            question:
                'Deporte que consiste en meter una pelotita, golpeándola con un bastón especial, en una serie de hoyos muy alejados unos de otros.',
        },
        {
            letter: 'h',
            answer: 'hipo',
            status: 0,
            letterInfo: 'CON LA H',
            question:
                'Sacudidas bruscas del cuerpo que le dan a alguien y hacen que el aire salga de golpe por la boca produciendo un ruido.',
        },
        {
            letter: 'i',
            answer: 'iglú',
            status: 0,
            letterInfo: 'CON LA I',
            question:
                'Casa redonda que hacen los esquimales con bloques de hielo.',
        },
        {
            letter: 'j',
            answer: 'jueves',
            status: 0,
            letterInfo: 'CON LA J',
            question:
                'Día de la semana que está entre el miércoles y el viernes.',
        },
        {
            letter: 'k',
            answer: 'karate',
            status: 0,
            letterInfo: 'CON LA K',
            question:
                'Lucha de origen japonés que consiste sobre todo en el combate con manos y pies.',
        },
        {
            letter: 'l',
            answer: 'lagartija',
            status: 0,
            letterInfo: 'CON LA L',
            question:
                'Animal parecido a un lagarto pequeño que se mueve muy deprisa y vive en los huecos de los muros y entre las rocas.',
        },
        {
            letter: 'm',
            answer: 'magia',
            status: 0,
            letterInfo: 'CON LA M',
            question:
                'Arte y espectáculo en el que se realizan mediante trucos cosas que parecen imposibles.',
        },
        {
            letter: 'n',
            answer: 'naranja',
            status: 0,
            letterInfo: 'CON LA N',
            question:
                'Fruto de forma redonda dividido en gajos y de sabor dulce y algo ácido.',
        },
        {
            letter: 'ñ',
            answer: 'ñu',
            status: 0,
            letterInfo: 'CON LA Ñ',
            question:
                'Mamífero de color pardo que tiene la cabeza grande con cursos curvos y barba.',
        },
        {
            letter: 'o',
            answer: 'oxigeno',
            status: 0,
            letterInfo: 'CON LA O',
            question:
                'Gas que forma parte del aire y lo necesitamos para respirar.',
        },
        {
            letter: 'p',
            answer: 'paracaidas',
            status: 0,
            letterInfo: 'CON LA P',
            question:
                'Gran bolsa de tela que se utiliza para tirarse desde mucha altura porque frena la velocidad de la caída.',
        },
        {
            letter: 'q',
            answer: 'queso',
            status: 0,
            letterInfo: 'CON LA Q',
            question:
                'Alimento que se hace con la leche de oveja, caba o vaca quitándole la parte líquida.',
        },
        {
            letter: 'r',
            answer: 'rayo',
            status: 0,
            letterInfo: 'CON LA R',
            question:
                'Descarga eléctrica que se produce cuando hay tormenta, es como un gran garabato que se dibuja en el cielo y que a veces llega a la tierra.',
        },
        {
            letter: 's',
            answer: 'sirena',
            status: 0,
            letterInfo: 'CON LA S',
            question: 'Ser fantástico, mitad mujer y mitad pez.',
        },
        {
            letter: 't',
            answer: 'tijeras',
            status: 0,
            letterInfo: 'CON LA T',
            question:
                'Objeto para cortar formado por dos piezas afiladas por uno de los lados y unidas en aspa de manera que pueden abrirse y cerrarse.',
        },
        {
            letter: 'u',
            answer: 'uña',
            status: 0,
            letterInfo: 'CON LA U',
            question:
                'Placa dura que cubre la punta de los dedos del hombre y de muchos animales.',
        },
        {
            letter: 'v',
            answer: 'vagon',
            status: 0,
            letterInfo: 'CON LA V',
            question:
                'Cada vehículo de un tren o metro que transporta personas o mercancías.',
        },
        {
            letter: 'w',
            answer: 'water',
            status: 0,
            letterInfo: 'CON LA W',
            question: 'Agua en idioma inglés.',
        },
        {
            letter: 'x',
            answer: 'xilofono',
            status: 0,
            letterInfo: 'CON LA X',
            question:
                'Instrumento musical que tiene unas láminas de madera o metal que se golpean con unos macillos.',
        },
        {
            letter: 'y',
            answer: 'yayo',
            status: 0,
            letterInfo: 'CON LA Y',
            question: 'Nombre cariñoso y familiar para el abuelo.',
        },
        {
            letter: 'z',
            answer: 'zoologico',
            status: 0,
            letterInfo: 'CON LA Z',
            question:
                'Parque con animales de muchas partes del mundo que puede ser visitado por el público.',
        },
    ],
    [
        {
            letter: 'a',
            answer: 'articulaciones',
            status: 0,
            letterInfo: 'CON LA A',
            question:
                'Parte del cuerpo humano donde se juntan dos o más huesos. (plural)',
        },
        {
            letter: 'b',
            answer: 'branquias',
            status: 0,
            letterInfo: 'CON LA B',
            question:
                'Órganos respiratorios de numerosos animales acuáticos, mediante los cuales se extrae el oxígeno disuelto en el agua.',
        },
        {
            letter: 'c',
            answer: 'carbon',
            status: 0,
            letterInfo: 'CON LA C',
            question: 'Fuente de energía no renovable.',
        },
        {
            letter: 'd',
            answer: 'diametro',
            status: 0,
            letterInfo: 'CON LA D',
            question:
                'Segmento de recta que pasa por el centro y une dos puntos opuestos de una circunferencia',
        },
        {
            letter: 'e',
            answer: 'escaleno',
            status: 0,
            letterInfo: 'CON LA E',
            question:
                'Triángulo en el que cada lado tiene longitudes diferentes.',
        },
        {
            letter: 'f',
            answer: 'fotosintesis',
            status: 0,
            letterInfo: 'CON LA F',
            question:
                'Proceso por el que las plantas verdes convierten el dióxido de carbono y agua en hidratos de carbono desprendiendo oxígeno, y lo hacen aprovechando la energía de la luz solar.',
        },
        {
            letter: 'g',
            answer: 'guapo',
            status: 0,
            letterInfo: 'CON LA G',
            question: 'Antónimo de feo.',
        },
        {
            letter: 'h',
            answer: 'herviboro',
            status: 0,
            letterInfo: 'CON LA H',
            question: 'Animal que se alimenta principalmente de plantas.',
        },
        {
            letter: 'i',
            answer: 'invertebrados',
            status: 0,
            letterInfo: 'CON LA I',
            question:
                'Animales que carecen de columna vertebral o notocorda, y de esqueleto interno articulado.',
        },
        {
            letter: 'j',
            answer: 'jabato',
            status: 0,
            letterInfo: 'CON LA J',
            question: 'Cría del jabalí.',
        },
        {
            letter: 'k',
            answer: 'kilometro',
            status: 0,
            letterInfo: 'CON LA K',
            question: 'Unidad de longitud que equivale a 1000 metros. ',
        },
        {
            letter: 'l',
            answer: 'luna',
            status: 0,
            letterInfo: 'CON LA L',
            question: 'Satélite de la Tierra.',
        },
        {
            letter: 'm',
            answer: 'madrid',
            status: 0,
            letterInfo: 'CON LA M',
            question: 'Capital de España.',
        },
        {
            letter: 'n',
            answer: 'nariz',
            status: 0,
            letterInfo: 'CON LA N',
            question: 'Órgano del cuerpo humano que usamos para respirar.',
        },
        {
            letter: 'ñ',
            answer: 'mañana',
            status: 0,
            letterInfo: 'CON LA Ñ',
            question: 'Contiene la ñ: día después de hoy.',
        },
        {
            letter: 'o',
            answer: 'oviparos',
            status: 0,
            letterInfo: 'CON LA O',
            question:
                'Animales cuya hembra expulsa los huevos al exterior cuando los embriones están sin desarrollar o en una fase muy primitiva de desarrollo.',
        },
        {
            letter: 'p',
            answer: 'pentagono',
            status: 0,
            letterInfo: 'CON LA P',
            question: 'Polígono de cinco lados.',
        },
        {
            letter: 'q',
            answer: 'quince',
            status: 0,
            letterInfo: 'CON LA Q',
            question: 'Resultado de multiplicar 3 x 5. ',
        },
        {
            letter: 'r',
            answer: 'raiz',
            status: 0,
            letterInfo: 'CON LA R',
            question:
                'Parte de la planta que crece en el lado contrario al tallo y sirve para absorber los alimentos que necesita.',
        },
        {
            letter: 's',
            answer: 'silaba',
            status: 0,
            letterInfo: 'CON LA S',
            question:
                'Cada fonema o aquél conjunto de fonemas que pronunciamos en una sola emisión o golpe de voz cuando decimos una palabra.',
        },
        {
            letter: 't',
            answer: 'trisilabas',
            status: 0,
            letterInfo: 'CON LA T',
            question: 'Palabras que tienen tres sílabas.',
        },
        {
            letter: 'u',
            answer: 'urdir',
            status: 0,
            letterInfo: 'CON LA U',
            question: 'Sinónimo de maquinar, tramar, conspirar.',
        },
        {
            letter: 'v',
            answer: 'volga',
            status: 0,
            letterInfo: 'CON LA V',
            question: 'Río más largo de Europa.',
        },
        {
            letter: 'w',
            answer: 'wait',
            status: 0,
            letterInfo: 'CON LA W',
            question: 'Esperar en inglés.',
        },
        {
            letter: 'x',
            answer: 'sexto',
            status: 0,
            letterInfo: 'CON LA X',
            question: 'Número ordinal que va después del quinto.',
        },
        {
            letter: 'y',
            answer: 'yegua',
            status: 0,
            letterInfo: 'CON LA Y',
            question: 'Hembra del caballo.',
        },
        {
            letter: 'z',
            answer: 'zepelin',
            status: 0,
            letterInfo: 'CON LA Z',
            question: 'Vehículo parecido al globo pero con una bolsa alargada.',
        },
    ],
];

const resetBackgroundColor = () => {
    setTimeout(() => {
        document.getElementsByTagName('body')[0].style.background = '';
    }, 500);
};

const getRandomArray = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
};
let randomArray = 0;

const checkAnswer = (number) => {
    let answer = document.getElementById('input').value.toLowerCase();
    if (answer === questions[randomArray][number].answer) {
        document
            .getElementsByClassName(
                `${questions[randomArray][number].letter}`
            )[0]
            .classList.remove('pasapalabra');
        document
            .getElementsByClassName(
                `${questions[randomArray][number].letter}`
            )[0]
            .classList.remove('failed');
        document
            .getElementsByClassName(
                `${questions[randomArray][number].letter}`
            )[0]
            .classList.add('successful');
        wordsNumLeft--;
        wordsNumSuccess++;
        document.getElementsByTagName('body')[0].style.background =
            'radial-gradient(circle, rgba(2,0,36,1) -11%, rgba(0,0,0,1) 0%, rgba(0,255,70,1) 99%)';
        questions[0][number].status = true;
        questions[1][number].status = true;
        questions[2][number].status = true;
        checkIfWin();
    } else if (answer === 'pasapalabra' || answer === 'pasa') {
        document
            .getElementsByClassName(
                `${questions[randomArray][number].letter}`
            )[0]
            .classList.add('pasapalabra');
        document.getElementsByTagName('body')[0].style.background =
            'radial-gradient(circle, rgb(187 187 187) 40%, rgb(255 255 255) 100%)';
        indexArray.push(number);
    } else {
        document
            .getElementsByClassName(
                `${questions[randomArray][number].letter}`
            )[0]
            .classList.remove('pasapalabra');
        document
            .getElementsByClassName(
                `${questions[randomArray][number].letter}`
            )[0]
            .classList.add('failed');
        document.getElementsByTagName('body')[0].style.background =
            'radial-gradient(circle, rgba(2,0,36,1) -11%, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 99%)';
        wordsNumFailed++;
        wordsNumLeft--;
        questions[0][number].status = true;
        questions[1][number].status = true;
        questions[2][number].status = true;
        checkIfWin();
    }
    document.getElementById('input').value = '';
    resetBackgroundColor();
};

const timerOut = () => {
    let interval = setInterval(() => {
        timer--;
        document.getElementById('timeout-text').innerHTML = `${timer}`;

        if (timer <= 0) {
            document.getElementsByClassName(
                'modal-container'
            )[0].style.visibility = '';
            document.getElementById('modal-header').innerHTML = 'GAME OVER';
            document.getElementsByClassName('close-button')[0].innerHTML =
                'Reiniciar';
            document.getElementsByClassName(
                'modal-container'
            )[0].style.background = 'transparent';
            document.getElementById(
                'modal-text'
            ).innerHTML = `Se ha terminado el tiempo y has terminado la partida con ${wordsNumFailed} fallos y ${wordsNumSuccess} aciertos. Si quieres volver a jugar haz click en reiniciar.`;
            document.getElementsByClassName('modal')[0].style.background =
                'linear-gradient( 135deg, #F97794 10%, #623AA2 100%)';
            closeModalButton.addEventListener('click', () => {
                document.location.reload(true);
            });
            clearInterval(interval);
        }
    }, 1000);
};

const checkIfWin = () => {
    for (let i = 0; i < 27; i++) {
        if (questions[0][i].status === 0) {
            return;
        }
    }
    playPermission = false;
    document.getElementsByClassName('modal-container')[0].style.visibility = '';
    document.getElementById('modal-header').innerHTML = 'Partida Finalizada';
    document.getElementsByClassName('close-button')[0].innerHTML = 'Reiniciar';
    document.getElementsByClassName('modal-container')[0].style.background =
        'transparent';
    document.getElementById(
        'modal-text'
    ).innerHTML = `Has terminado la partida con ${wordsNumFailed} fallos y ${wordsNumSuccess} aciertos. Si quieres volver a jugar haz click en reiniciar.`;
    document.getElementsByClassName('modal')[0].style.background =
        'linear-gradient( 135deg, #6B73FF 10%, #000DFF 100%)';
    closeModalButton.addEventListener('click', () => {
        document.location.reload(true);
    });
};

const printIfo = (number) => {
    randomArray = getRandomArray();
    document.getElementsByClassName('letter-info')[0].innerHTML =
        questions[randomArray][number].letterInfo;
    document.getElementById('question').innerHTML =
        questions[randomArray][number].question;
    document
        .getElementsByClassName(`${questions[randomArray][number].letter}`)[0]
        .classList.add('focus');
    document.getElementsByClassName('num-r')[0].innerHTML = `${wordsNumLeft}`;
    document.getElementsByClassName('num-f')[0].innerHTML = `${wordsNumFailed}`;
};
printIfo(0);
