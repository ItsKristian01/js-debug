/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
 for (let i = 0; i < 5; i++) {
     console.log(i);   //Cambiato > con <
 }


// ESERCIZIO 2
let num = 5; //Aggiunto variabile con numero 

 function addIfEven(num) {
     if (num % 2 == 0) {  //Aggiunto 2 uguali
         return num + 5;
     }
     return num;
 }

addIfEven(num);
console.log(addIfEven(num)); //Prova della funzione 


//  ESERCIZIO 3
//Rimosso virgole e sostituite con ; al interno del for
function loopToFive(i) {
    for (let i = 0; i < 5; i++) {   
         console.log(i + 1);
     }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
 function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) { //Rimosso ; alla fine i++  
         if (numbers[i] % 2 === 0) { //Rimosso ; alla fine del () del if e aggiunto ===
            evenNumbers.push(numbers[i]);
         }
     }
     return evenNumbers;
 }
 
 displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]