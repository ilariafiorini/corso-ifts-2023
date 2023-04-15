class Accumulatore {
    private currentLoad: number;
    constructor(private maxLoad: number){
        this.currentLoad = 0;
        //console.log(this.currentLoad);
        //console.log(this.maxLoad);
    }
    
    carica(n: number){
        if((this.currentLoad+n)<=this.maxLoad){
            
            this.currentLoad += n;
            //console.log(this.currentLoad);
        } else{
            this.currentLoad=this.maxLoad;
        }
        
    }
    
    scarica(n: number) {
        
        if((this.currentLoad-n)>=0){
            
            this.currentLoad -= n;
            //console.log(this.currentLoad);
        } else{
            this.currentLoad=0;
            //console.log(this.currentLoad);
        }
    }
    
    livello() :number {
        //console.log(this.currentLoad);
        return this.currentLoad;

    }

    livello100() :number {
        
        //console.log(this.currentLoad/this.maxLoad*100);
        return this.currentLoad/this.maxLoad*100;
    }
}

let accuTest = new Accumulatore(5000);

console.log("livello:"+accuTest.livello());
console.log(accuTest.livello100()+"%");

accuTest.carica(100);
console.log("livello:"+accuTest.livello());
console.log(accuTest.livello100()+"%");

accuTest.scarica(50);

console.log("livello:"+accuTest.livello());
console.log(accuTest.livello100()+"%");


accuTest.scarica(60);
console.log("livello:"+accuTest.livello());
console.log(accuTest.livello100()+"%");

