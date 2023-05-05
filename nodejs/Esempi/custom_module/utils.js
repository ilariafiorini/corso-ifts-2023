function hello(name) {
    let benvenuto = welcome();
    console.log(`Ciao, ${name} ${benvenuto}`);
}

function sum(a, b) {
    return a + b;
}

function welcome() {
    return ', benvenuto/a!';
}

const pi = 3.14;

module.exports = { hello, sum, pi };