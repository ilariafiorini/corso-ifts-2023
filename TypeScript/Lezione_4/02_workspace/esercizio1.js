"use strict";
let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
let myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
/////////////////////////////////////
class Person {
    constructor(name, t, a = 27) {
        this.name = name;
        if (t) {
            this.type = t;
        }
        else {
            this.type = "italiano";
        }
        this.age = a;
    }
    choSonoIo() {
        console.log("io sono : " + this.type + " e mi chiamo " + this.name);
    }
}
class Lavoratore extends Person {
    constructor() {
        super(...arguments);
        this.ditta = "Ditta";
        this.anniEsperienza = super.age - 20;
    }
}
let p = new Person("UgoFantozzi");
let l = new Lavoratore("Merdaccia");
console.log("p.name: ", p.name);
console.log("l.anniEsperienza: ", l.anniEsperienza);
p.choSonoIo();
//# sourceMappingURL=esercizio1.js.map