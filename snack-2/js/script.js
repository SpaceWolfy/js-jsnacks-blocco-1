/* Richiedo un numero, stampo il cubo dei numeri precedenti al numero richiesto, compreso quest'ultimo */
let numeroRichiesto = prompt('Inserisci un numero');

for(let i = 1; i <= parseInt(numeroRichiesto); i++) {
console.log('Il cubo del numero', i, 'è', Math.pow(i, 3))
};