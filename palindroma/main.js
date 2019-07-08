var str = prompt("Inserisci una parola per sapere se è palindroma")

function reverseString(str) {
    var stringRev = "";
    for (var i = 0; i < str.length; i++) {
        stringRev = str[i] + stringRev;
    }
    return stringRev;
}
if (reverseString(str) ===
    str) {
    document.getElementById("result").innerHTML = "La tua parola è palindroma."
} else {
    document.getElementById("result").innerHTML = "La tua parola non è palindroma."
};