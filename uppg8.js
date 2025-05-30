

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age
const personer = [
    { name: "Kalle", age: 28 },
    { name: "Lisa", age: 32 },
    { name: "Mio", age: 25 },
    { name: "Ava", age: 35 },
    { name: "Nicklas", age: 40 }
];


// skapa en fuktion som tar in en array som argument

function printNamesOver30(arr) {
    for (let person of arr) {

        // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
        //  över 30 år som skrivs ut i konsolen

        if (person.age > 30) {
            console.log(person.name);
        }
    }
}


// anropa funktionen och skicka med arrayen som argument
printNamesOver30(personer);

}

module.exports = { uppg8 };