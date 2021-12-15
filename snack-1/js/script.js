/* Chiedere per 10 volte all'utente di inserire un numero. 
Stampare la somma dei numeri inseriti in console */

let sum = 0;

for(let i = 0; i < 10; i++) {
    let numeroRichiesto = prompt('Just give me a number!');
    sum += parseInt(numeroRichiesto);
}

console.log(sum);