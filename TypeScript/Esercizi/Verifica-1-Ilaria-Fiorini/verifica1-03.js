function maiuscola(stringa) {
    return stringa.toUpperCase();
}
function tuttoInMaiuscolo(frase) {
    var upperFrase = frase.map(maiuscola);
    return upperFrase;
}
console.log(tuttoInMaiuscolo(["pino", "olmo", "abete"]));
