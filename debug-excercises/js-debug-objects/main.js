/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'benzina' //Cambiato B con b
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'diesel'  //Cambiato D con d
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },                  //Aggiunto virgola
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'benzina'  //Cambiato B con b
    },
];

const gasolineCars = cars.filter( (cars) => cars.type === 'benzina'); // >= corretto con =>

const dieselCars = cars.filter( (cars) => {  //Cambiato auto.type con cars.type
    return cars.type === 'diesel'; //aggiunto return
});

const otherCars = cars.filter( (auto) => {
    return (auto.type !== 'benzina' && auto.type !== 'diesel'); //aggiunto () e && con ||
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);