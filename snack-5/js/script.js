//Aggiungere numeri ad un array vuoto finché la somma di questi ultimi non superi il 50:
let arrayNum = [];
let sum = 0;
let num;

let i = 0;

do {
    num = parseInt(prompt('Dammi qualche numero, ma attento a non superare il 50!'));
    arrayNum.push(num);
    sum += arrayNum[i];

    i++;
    console.log(arrayNum);

    if(sum >= 50) {
        alert('Attento! Ti avevo detto di non superare il 50')
        console.log('Cavolo... non dovevi superare il 50. La tua somma è', sum);
    } else if(sum < 50) {
        console.log('Perfetto! non hai superato il limite. La tua somma è', sum);
    }
} while (sum <= 49);


