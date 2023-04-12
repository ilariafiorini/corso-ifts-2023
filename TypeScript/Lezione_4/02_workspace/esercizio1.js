var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
/////////////////////////////////////
var Person = /** @class */ (function () {
    function Person(name, t, a) {
        if (a === void 0) { a = 27; }
        this.name = name;
        if (t) {
            this.type = t;
        }
        else {
            this.type = "italiano";
        }
        this.age = a;
    }
    Person.prototype.choSonoIo = function () {
        console.log("io sono : " + this.type + " e mi chiamo " + this.name);
    };
    return Person;
}());
var Lavoratore = /** @class */ (function (_super) {
    __extends(Lavoratore, _super);
    function Lavoratore() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ditta = "Ditta";
        _this.anniEsperienza = _super.prototype.age - 20;
        return _this;
    }
    return Lavoratore;
}(Person));
var p = new Person("UgoFantozzi");
var l = new Lavoratore("Merdaccia");
console.log("p.name: ", p.name);
console.log("l.anniEsperienza: ", l.anniEsperienza);
p.choSonoIo();
