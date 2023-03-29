"use strict";
exports.__esModule = true;
var classi_01_1 = require("./classi_01");
/**
 * ## classi-02.ts
 *
 * Definisci una classe denominata `Cerchio` per rappresentare un cerchio
 * in uno spazio bidimensionale.
 *
 * La classe deve contenere le seguenti proprietà:
 * centro (istanza della classe `Punto`),
 * raggio (numero).
 *
 * La classe deve contenere un metodo per calcolare l'area del cerchio.
 * La classe deve contenere un metodo per calcolare la lunghezza del cerchio.
 * Crea un'istanza della classe e stampa l'area e la lunghezza del cerchio.
 *
 * NOTA: La classe `Punto` è già definita nell'esercizio precedente, pertanto non duplicate la sua definizione, piuttosto importatela.
 *
 */
var Cerchio = /** @class */ (function () {
    function Cerchio(centro, raggio) {
        this.centro = centro;
        this.raggio = raggio;
    }
    Cerchio.prototype.getArea = function () {
        return Math.pow(this.raggio, 2) * Math.PI;
    };
    Cerchio.prototype.getPerimetro = function () {
        return 2 * this.raggio * Math.PI;
    };
    return Cerchio;
}());
var c1 = new Cerchio(new classi_01_1.Punto(1, 1), 3);
console.log("area del cerchio: ", c1.getArea());
console.log("perimetro del cerchio: ", c1.getPerimetro());
