var persona = {
	"name": "Mario",
	"surname": "Rossi",
	"active": true,
	"favoriteNumber": 54,
	"birthday": {
		"day": 1,
		"month": 1,
		"year": 2000
	},
	"languages": [ "it", "en" ]
};

var nome = persona.name;

console.log(nome);

console.log(persona.birthday.year);
persona.active = false;
console.log(persona.active);

persona.birthday = "1/1/2000";


function add(a, b){
    return
    a+b;
}

console.log(add(1,2));