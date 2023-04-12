function maiuscola (stringa :string) :string{
    return stringa.toUpperCase();
}

function tuttoInMaiuscolo(frase :string[]) :string[]{
    var upperFrase = frase.map(maiuscola)
    return upperFrase;
}


console.log(tuttoInMaiuscolo(["pino", "olmo", "abete"]));
