

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    function sort(numbers) {
        for (let number of numbers) {
            if (number % 2 === 0) { // kollar om talet är jämt (delbart med 2)
                console.log(number, "jämt");
            } else {
                console.log(number, "udda");
            }
        }
    }

    // anropa funktionen och skicka med en array som argument
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    sort(numbers);
}

module.exports = { uppg9 };