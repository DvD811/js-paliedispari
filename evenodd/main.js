var inserisci1 = prompt("inserisci il primo numero");
var inserisci2 = prompt("inserisci il secondo numero");

if (parseInt(inserisci1) > parseInt(inserisci2)) {
    document.getElementById("result").innerHTML = "Il numero maggiore èil primo cioè: " + inserisci1;
} else {
    document.getElementById("result").innerHTML = "Il numero maggiore èil primo cioè: " + inserisci2;
};