/**
 *
 * 1. Creazione di un array di numeri e utilizzo del metodo filter()
 *    per restituire solo i numeri pari.
 *
 * 2. Creazione di un array di stringhe e utilizzo del metodo map()
 *    per aggiungere una lettera alla fine di ogni stringa.
 *
 * 3. Creazione di un array di oggetti rappresentanti prodotti in un negozio online. Utilizzo del metodo filter() per
 *    restituire solo i prodotti con un prezzo inferiore a 50 euro.
 *
 */
var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numeriPari1 = [];
for (var _i = 0, numeri_1 = numeri; _i < numeri_1.length; _i++) {
    var numero = numeri_1[_i];
    if (numero % 2 === 0) {
        numeriPari1.push(numero);
    }
}
console.log("===[numeri pari 1]===", numeriPari1);
var numeriPari2 = numeri.filter(function (num) { return num % 2 === 0; });
console.log("===[numeri pari 2]===", numeriPari2);
// 2. Creazione di un array di stringhe e utilizzo del metodo map()
//    per aggiungere una lettera alla fine di ogni stringa.
var nomi = ["Mario", "Luigi", "Peach", "Toad", "Yoshi"];
var nomiConS1 = [];
for (var _a = 0, nomi_1 = nomi; _a < nomi_1.length; _a++) {
    var nome = nomi_1[_a];
    nomiConS1.push(nome + "s");
}
console.log("=====[ Nomi con S 1 ]=====", nomiConS1);
var nomiConS2 = nomi.map(function (x) {
    var x2 = x + "S";
    return x2;
});
console.log("=====[ Nomi con S 2 ]=====", nomiConS2);
// 3. Creazione di un array di oggetti rappresentanti prodotti in un negozio online.
//  Utilizzo del metodo filter() per restituire solo i prodotti con un prezzo
//  inferiore a 50 euro.
//TODO: implementare a casa 
//TODO: implementare a casa gli altri esercizi da 4 a 7
// 8. Creazione di un array di numeri e utilizzo del metodo map()
//    per calcolare il quadrato di ogni numero.
var numeri2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const numeriAlQuadrato1: number[] = numeri2.map( (numero) => numero * numero );
var numeriAlQuadrato1 = numeri2.map(function (numero) { return Math.pow(numero, 2); });
console.log("=====[ Numeri al quadrato 1 ]=====", numeriAlQuadrato1);
