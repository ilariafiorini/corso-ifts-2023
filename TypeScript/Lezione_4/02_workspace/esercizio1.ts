let bankAccount = {
    money: 2000,
    deposit(value: number) {
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
    name: string;
    private type: string;
    protected age: number;

    constructor(name: string, t?: string, a: number = 27){
        this.name = name;
        if(t){

            this.type = t;
        }else{
            this.type = "italiano";
        }
        this.age = a;
    }

    choSonoIo():void {
        console.log("io sono : " + this.type + " e mi chiamo " +this.name);
    }
    
   }

   class Lavoratore extends Person{
    ditta: string = "Ditta";
    anniEsperienza:number = super.age - 20;
   }

   let p = new Person("UgoFantozzi");
   let l: Lavoratore = new Lavoratore("Merdaccia");

   console.log("p.name: ", p.name);
   console.log("l.anniEsperienza: ",l.anniEsperienza);
   p.choSonoIo();