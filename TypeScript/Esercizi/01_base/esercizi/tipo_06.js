/**
 *  - tipo-06.ts
 *
 * Crea un'interfaccia per rappresentare un libro con le seguenti proprietà:
 *  titolo (stringa), autore (stringa), anno di pubblicazione (numero)
 * e genere (stringa).
 * Crea un array di libri e scrivi una funzione che accetta un genere
 * come parametro e restituisce un nuovo array contenente solo i libri del
 * genere specificato.
 *
 */
console.log("=====[ tipo-06.ts ]=====");
// let libro1: Libro={titolo:"Violeta", autore: "Isabel Allende", annoPubblicazione: 2023, genere: "Romanzo" };
// let libro2: Libro={titolo:"Piccolo Principe", autore: "Antoine De Saint Exupery", annoPubblicazione:1943, genere:"Fantasy"};
// let libro3: Libro={titolo:"Cappuccetto Rosso", autore:"B. Grimm", annoPubblicazione:1857,genere:"Fantasy"};
// let libro4: Libro={titolo:"Pinocchio", autore:"C.Collodi", annoPubblicazione:1883,genere:"Aventura"};
// let libro5: Libro={titolo:"The Jungle Book", autore:"R.Kipling", annoPubblicazione:1894,genere:"Racconti"};
// let libri: libro[] = [libro1, libro2, libro3, libro4, libro5];
var libri = [
    { titolo: "Violeta", autore: "Isabel Allende", annoPubblicazione: 2023, genere: "Romanzo" },
    { titolo: "Piccolo Principe", autore: "Antoine De Saint Exupery", annoPubblicazione: 1943, genere: "Fantasy" },
    { titolo: "Cappuccetto Rosso", autore: "B. Grimm", annoPubblicazione: 1857, genere: "Fantasy" },
    { titolo: "Pinocchio", autore: "C.Collodi", annoPubblicazione: 1883, genere: "Aventura" },
    { titolo: "The Jungle Book", autore: "R.Kipling", annoPubblicazione: 1894, genere: "Racconti" }
];
function filtraLibriPerGenere(libri, genere) {
    var libriFiltrati = [];
    for (var _i = 0, libri_1 = libri; _i < libri_1.length; _i++) {
        var libro = libri_1[_i];
        if (libro.genere === genere) {
            libriFiltrati.push(libro);
        }
    }
    return libriFiltrati;
}
console.log("====[ Libri Fantasy ]====", filtraLibriPerGenere(libri, "Fantasy"));
console.log("====[ Libri Aventura ]====", filtraLibriPerGenere(libri, "Aventura"));
console.log("====[ Libri Romanzo ]====", filtraLibriPerGenere(libri, "Romanzo"));
