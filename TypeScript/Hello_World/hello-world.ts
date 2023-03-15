console.log("Hello World!");

function saluto(msg: string) {
    console.log("Ciao " + msg);
}

saluto("Mondo");
saluto("4");

/*
desso guardiamo tutti i tipi
*/

//Boolean

let fatto: boolean = true; //or false
//fatto = "no";
//fatto = 0;
fatto = false;

let fatto2 = "stringa";

//fatto2 = 1;
//fatto2 = true;
fatto2 = "pippo";


//Number

let anno: number = 2018;
//anno = "2018";

//String

let colore: string = "rosso";
//colore = 3;

let nomignolo:string;
//nomignolo = 3;
nomignolo = "teddy";


//Array

let elenco1: number[] = [1, 2, 3, 4];

elenco1 = [2];
//elenco1 = [ "a"];
//elenco1 = [1, 2, "a"];


let elenco2: Array<number> = [1, 2, 3, 4];
//elenco2 = ["a", "b"];

let elenco3: Array<string> = ["a", "b", "c", "d"];
//elenco3 = [1,2,3,4];

let elenco4: string[];
elenco4 =["a", "b", "c"];

//Tupla

let indirizzo: [string, number, number, string, string];
indirizzo = ["via dei Faggi", 45, 47923, "Rimini", "RN"];
//indirizzo = ["via dei Faggi", 45, 47923, "Rimini"];
//indirizzo = ["via dei Faggi", 45, 47923];
//indirizzo = ["a", "b", "c","d","e"];


//Any

let nonsaprei: any = 4;
nonsaprei = 'pippo';
nonsaprei = true;

//Enum

enum Colore{
    Rosso,
    Giallo,
    Blu
};

let c: Colore = Colore.Rosso;

enum HTTPStatus{
    NOT_FOUND,
    BED_REQUEST,
    INTERNAL_SERVER_ERROR,
    NOT_PERMITTED,
    NOT_AUTHENTICATED
};

let httpStatus:HTTPStatus;
httpStatus = HTTPStatus.NOT_FOUND; //httpStatus = 0 


enum CodedHTTPStatus{
    NOT_FOUND = 404,
    BED_REQUEST = 400,
    INTERNAL_SERVER_ERROR = 500,
    NOT_PERMITTED = 403,
    NOT_AUTHENTICATED = 401
};

let codedHttpStatus:CodedHTTPStatus;
codedHttpStatus = CodedHTTPStatus.NOT_FOUND; //codedHttpStatus = 404


enum StringCodedHTTPStatus{
    NOT_FOUND = "404 - Not Found",
    BED_REQUEST = "400 - Bad Request",
    INTERNAL_SERVER_ERROR = "500 - Internal Server Error",
    NOT_PERMITTED = "403 - Not premitted",
    NOT_AUTHENTICATED = "401 - Not Authenticated"
};

let stringCodedHttpStatus:StringCodedHTTPStatus;
stringCodedHttpStatus = StringCodedHTTPStatus.NOT_FOUND; //stringCodedHttpStatus = "404 - Not Found"





console.log("httpStatus = " + httpStatus);
console.log("stringCodedHttpStatus = " + stringCodedHttpStatus);


//Void
function avviso(msg: string): void{
    //alert("premi OK per continuare."); alert esiste solo nei browser
    console.log("premi OK per continuare.");
    //return msg; non funziona perchè la funzione non ha ritorno
}

let result: string;
//result = avviso("errore"); //avviso non ha return per cui non puo essere utilizzata per assegnare un valore ad una variabile

// function avviso(msg: string): string{
//     alert("premi OK per continuare.");
//     return msg;
// }

// let result: string;
// result = avviso("errore");

//Null e undefined
let nonusable1 = null;
let nonusable2:undefined = undefined;
let nonusable3: null = null;

/*
Null e undefined si utilizza per gestire variabili per 
esempio di form, non compilate, quindo definendo un tipo di dato che 
può assumere più valori
*/

//composiziopne di tipi

let variabileFacoltativa: string;
//variabileFacoltativa = null; //non funziona perchè il tipo non coincide
let variabileFacoltativaVera: string | null;

variabileFacoltativaVera = null;
variabileFacoltativaVera = "qualcosa";
//variabileFacoltativaVera = 0; // non funziona perchè non è del tipo specificato (con unica alternativa null)

let numberOrString: number | string;
numberOrString = "stringa";
numberOrString = 0;

//
// tipi dati personalizzati

type UserData = {
    id: number;
    name: string;
    surname?: string;
    }
    
type UserAddress = {
address: string;
city: string;
state?: string;
country: string;
}

let user1: UserData;
user1 ={id: 1234567, name: "pippo"};

let user2: UserData;
user2 ={id: 1234567, name: "pippo", surname: "dePippis"};

let userAddress1: {address: "via", city: "citta", country:"paese"};
let userAddress2: {address: "via", city: "citta",state: "regione",country:"paese"};
let userAddress3: {address: "via", state: "regione",country:"nazione"};
let userAddress4: {city: "citta", address: "via", state: "regione",country:"nazione"};

let userProfile1: UserData | UserAddress;
userProfile1 = user1;
//userProfile1 = userAddress1; //non funziona perchè con l'or ho stabilito che deve eserre di un o solo dei due tipi e poi non si cambia

let userProfile2: UserData & UserAddress;
userProfile2 = {id: 1234567, name: "pippo", surname: "dePippis", address: "via", city: "citta",state: "regione",country:"paese"};

type User = UserData & UserAddress;

let data: UserData = { id: 1, name: 'Daniele' };
let address: UserAddress =
 { address: 'via Flaminia, 12', city: 'Rimini', country: 'Italy' };

 let user: User = { id: 2, name: 'Mario', surname: 'Rossi',
 address: 'via Dante, 4', city: 'Rimini', country: 'Italy' };

 // Interfacce

 interface IUserData {
    id: number;
    name: string;
    surname?: string;
}
    
interface IUserAddress {
    address: string;
    city: string;
    state?: string;
    country: string;
}
    
interface IUser extends IUserData, IUserAddress {}
    
let dataI: IUserData = { 
    id: 1, 
    name: 'Daniele' 
    };
    
let addressI: IUserAddress ={ 
    address: 'via Flaminia, 12', 
    city: 'Rimini', 
    country: 'Italy' 
    };
    
let userI: IUser = {
    id: 2, 
    name: 'Mario', 
    surname: 'Rossi',
    address: 'via Dante, 4', 
    city: 'Rimini', 
    country: 'Italy' 
    };

function spedisciAIndirizzo(addr: IUserAddress): void{
    console.log("spedisciAIndirizzo(): address=", addr.address);
}

spedisciAIndirizzo(userI);