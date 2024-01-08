const resultElement = document.getElementById("main-title");

// chiedo all'utente il suo nome
const firstName = prompt("Inserisci il tuo nome");
console.log(firstName);

// chiedo all'utente il suo cognome
const lastName = prompt("Inserisci il tuo cognome");
console.log(lastName);

// chiedo all'utente il suo colore preferito
const favColor = prompt("Inserisci il tuo colore preferito");
console.log(favColor);

// creo password e la salvo in una variabile
const genPassword = firstName + lastName + favColor + "23";
console.log(genPassword);

// stampo la variabile
resultElement.innerText = genPassword;
