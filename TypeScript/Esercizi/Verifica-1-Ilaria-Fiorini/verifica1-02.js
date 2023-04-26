var Accumulatore = /** @class */ (function () {
    function Accumulatore(maxLoad) {
        this.maxLoad = maxLoad;
        this.currentLoad = 0;
        //console.log(this.currentLoad);
        //console.log(this.maxLoad);
    }
    Accumulatore.prototype.carica = function (n) {
        if ((this.currentLoad + n) <= this.maxLoad) {
            this.currentLoad += n;
            //console.log(this.currentLoad);
        }
        else {
            this.currentLoad = this.maxLoad;
        }
    };
    Accumulatore.prototype.scarica = function (n) {
        if ((this.currentLoad - n) >= 0) {
            this.currentLoad -= n;
            //console.log(this.currentLoad);
        }
        else {
            this.currentLoad = 0;
            //console.log(this.currentLoad);
        }
    };
    Accumulatore.prototype.livello = function () {
        //console.log(this.currentLoad);
        return this.currentLoad;
    };
    Accumulatore.prototype.livello100 = function () {
        //console.log(this.currentLoad/this.maxLoad*100);
        return this.currentLoad / this.maxLoad * 100;
    };
    return Accumulatore;
}());
var accuTest = new Accumulatore(5000);
console.log("livello:" + accuTest.livello());
console.log(accuTest.livello100() + "%");
accuTest.carica(100);
console.log("livello:" + accuTest.livello());
console.log(accuTest.livello100() + "%");
accuTest.scarica(50);
console.log("livello:" + accuTest.livello());
console.log(accuTest.livello100() + "%");
accuTest.scarica(60);
console.log("livello:" + accuTest.livello());
console.log(accuTest.livello100() + "%");
