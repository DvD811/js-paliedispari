// 2 - L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer e dichiariamo chi ha vinto.
// * NOTE=* quindi repo con macro cartella che contiene 2 sottocartelle;
// Il secondo fate non con iserimento utente, ma 2 radon dal pc,
//     come detto non mega funzione ma sul secondo, creo delle funzioni utili a fare cose, la generazione dei numeri e il
// verificare se il risultato è pari o dispari
// NUMERO RANDOM DA UNO A 5
// Math.floor(Math.random() * 5) + 1;

var utentePoD = prompt("Scrivi qui la tua scelta: Pari o Dispari? ").toUpperCase();
var risultato = "";
if (utentePoD === "PARI" || "DISPARI") {
    alert("La tua scelta  è corretta.")
} else {
    alert("La tua scelta non è corretta.")
};

function rand1a5() {
    var nRand = Math.floor(Math.random() * 5) + 1;

    return nRand;
};

function sommRand() {
    var risultato = rand1a5() + rand1a5();
    return risultato;
};
console.log(sommRand())

function sommRandPoD() {
    if (sommRand() % 2 === 0) {
        return "PARI"
    } else {
        return "DISPARI"
    }

};
console.log(sommRandPoD());
// var numUtente = Math.floor(Math.random() * 5) + 1;
// var numPc = Math.floor(Math.random() * 5) + 1;

// function randomN() {

// }