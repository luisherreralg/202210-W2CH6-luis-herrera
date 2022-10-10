import {
    alertAdminActions,
    alertAskForAdmin,
    alertGetUser,
    alertIsNan,
    alertAskForRole,
} from './utils';

let flights = [
    { id: 0, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 1, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 2, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 3, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 4, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 5, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 6, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 7, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 8, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 9, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false },
];

let username;
let adminAction;

const getUser = () => {
    const user = prompt('Por favor, introduzca su nombre');
    if (user === null || user.trim().length === 0) {
        alertGetUser();
    } else if (Number.isNaN(Number.parseFloat(user)) === false) {
        alertGetUser();
    } else {
        alert(`Bienvenido ${user} a ISDI Coders Airlines!`);
        username = user;
        showBasicInfo();
        showAveragePrice();
        showFlightsWithScales();
        lastFlights();
        askForRole();
    }
};

const showBasicInfo = () => {
    console.log('************************ VUELOS ************************');
    flights.sort((a, b) => b.cost - a.cost);

    flights.forEach((flights) => {
        console.log(
            `El vuelo con origen: ${flights.from}, y destino: ${
                flights.to
            } tiene un coste de ${flights.cost}€ y ${
                flights.scale
                    ? 'si realiza escala'
                    : 'no realiza ninguna escala'
            }.`
        );
    });
    console.log('');
};

const showAveragePrice = () => {
    let sumPrices = 0;
    let countFlights = 0;

    flights.forEach((flights) => {
        sumPrices = flights.cost + sumPrices;
        countFlights++;
    });

    console.log(
        '************************ PRECIO MEDIO ************************'
    );
    console.log(
        `El precio medio de todos los vuelos es: ${sumPrices / countFlights}€.`
    );
    console.log('');
};

const showFlightsWithScales = () => {
    console.log(
        '************************ VUELOS CON ESCALA ************************'
    );
    flights.forEach((flights) => {
        if (flights.scale) {
            console.log(
                `Vuelo que sale de: ${flights.from} con destino: ${flights.to}.`
            );
        }
    });

    console.log('');
};

const lastFlights = () => {
    console.log(
        '************************ ÚLTIMOS VUELOS ************************'
    );
    const latestFlights = flights.slice(-5);
    let resultsArray = [];

    latestFlights.forEach((latestflight) => {
        const joinFlights = ' ' + latestflight.to + ' - ' + latestflight.from;
        resultsArray.push(joinFlights);
    });
    console.log(`Los últimos vuelos del día son:${resultsArray.join()}`);
    console.log('');
};

const askForRole = () => {
    const role = prompt(`Por favor ${username}, indica si eres (user/admin)`);

    if (role.trim().length === 0 || role === null) {
        alertAskForRole();
    } else if (
        role.toLocaleLowerCase() !== 'user' &&
        role.toLowerCase() !== 'admin'
    ) {
        alertAskForRole();
    } else if (role.toLowerCase() === 'admin') {
        askAdmin();
    } else {
        userActions();
    }
};

const askAdmin = () => {
    const action = prompt(
        'Inserte que acción quiere llevar a cabo (create/delete)'
    );

    if (action.trim().length === 0) {
        alertAskForAdmin();
    } else if (
        action.toLowerCase() !== 'create' &&
        action.toLowerCase() !== 'delete'
    ) {
        alertAskForAdmin();
    } else {
        adminAction = action.toLowerCase();
        adminActions();
    }
};

const userActions = () => {
    const precioFilter = prompt(
        'Introduzca el precio por el que le interesaría viajar'
    );
    const lowerPrice = flights.length - 1;
    if (precioFilter === null || precioFilter.trim().length === 0) {
        alertIsNan();
    } else if (Number.isNaN(Number.parseFloat(precioFilter))) {
        alertIsNan();
    } else if (flights[lowerPrice].cost > Number.parseFloat(precioFilter)) {
        alert(
            `No se han encontrado vuelos, ya que el precio mínimo por el que puede buscar un vuelo es de ${flights[lowerPrice].cost}€`
        );
        userActions();
    } else {
        flights = flights.filter(
            (flights) => flights.cost <= Number.parseFloat(precioFilter)
        );
        showBasicInfo();
    }
};

const adminActions = () => {
    if (adminAction === 'create') {
        checkTotalFlights();
        const newFlight = {};

        newFlight.to = prompt('Indique el destino del vuelo');
        newFlight.from = prompt('Indique el origen del vuelo');
        newFlight.cost = prompt('Indique el precio del billete');
        newFlight.scale = prompt('¿El vuelo va a realizar escala? (si/no)');
        newFlight.id = flights.length + 1;

        flights.push(newFlight);
        console.table(flights);
    } else if (adminAction === 'delete') {
        console.table(flights);
        let idToDelete = prompt('Inserte el ID que quiera eliminar');
        if (
            Number.isNaN(Number.parseFloat(idToDelete)) ||
            idToDelete === null
        ) {
            alert('Introduzca un ID válido');
            adminActions();
        } else if (flights.length - 1 < Number.parseFloat(idToDelete)) {
            alert('No existe ese ID, por favor, introduzca un ID válido');
            return adminActions();
        }

        flights = flights.filter(
            (flights) => flights.id !== Number.parseFloat(idToDelete)
        );
        console.table(flights);
    }
    askAdminMoreActions();
};

const askAdminMoreActions = () => {
    let actions = prompt('¿Desea realizar otra acción? (y/n)');
    if (actions.toLowerCase().trim().length === 0) {
        alertAdminActions();
    } else if (Number.isNaN(Number.parseFloat(actions)) === false) {
        alertAdminActions();
    } else if (actions.toLowerCase() !== 'n' && actions.toLowerCase() !== 'y') {
        alertAdminActions();
    } else if (
        actions.toLowerCase() === 'n' ||
        actions.toLowerCase() === null
    ) {
        return alert('Cambios guardados');
    } else {
        askAdmin();
    }
};

const checkTotalFlights = () => {
    if (flights.length >= 15) {
        alert(
            'Has superado la cifra de 15 vuelos archivados, prueba a borrar alguno antes de crear otro'
        );
        askAdmin();
    }
};

getUser();
