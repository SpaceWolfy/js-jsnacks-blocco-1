let num = '';

do {
    num = prompt('Inserisci un numero di 4 cifre');

    if(num.length < 4 && parseInt(num)){
        alert('Il numero deve essere di 4 cifre!')
    }

    if(isNaN(num)){
        alert('Ho chiesto un numero, non una parola')
    };
    
} while(num.length != 4 || isNaN(num));

console.log(parseInt(num[0]) + parseInt(num[1]) + parseInt(num[2]) + parseInt(num[3]))
