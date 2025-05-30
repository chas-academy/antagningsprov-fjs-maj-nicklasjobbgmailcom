function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    const bigEven = [];
    const smallOdd = [];
    const other = [];

    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna

    for (let number of numbers) {

      // kolla om talet är större än 10 och jämnt (delbart med 2)
      if (number > 10 && number % 2 === 0) {
        bigEven.push(number);
      }

      // kolla om talet är mindre än 10 och udda
      else if ((number < 10) && ((number % 2) !== 0)) {
        smallOdd.push(number);
      }

      // annars lägg till talet i other
      else {
        other.push(number);
      }
    }

    // returnera ett objekt med de tre arrayerna
    return {
      bigEven: bigEven,
      smallOdd: smallOdd,
      other: other
    };


  
    
  
  }
  
  module.exports = { uppg10 };
  