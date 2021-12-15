let number = 2;
let x = 1;

//Stampo i risultati di 2 ad una potenza incrementale fino al raggiungimento del risultato 1024;
while (Math.pow(2, x) <= 1024) {
    console.log(Math.pow(2, x))
    x++
};