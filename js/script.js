// console.log("js ok");
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Stampiamo in pagina i due tiri e il risultato

// Recupero dal DOM due elementi
const userNumber = document.getElementById("user");
const pcNumber = document.getElementById("pc");
const roll = document.getElementById("roll");
const result = document.getElementById("result");

roll.addEventListener("click", function () {
  // Genero due volte un numero casuale da 1 a 6
  const randomNumbersUser = Math.floor(Math.random() * 6) + 1;
  const randomNumbersPc = Math.floor(Math.random() * 6) + 1;

  // console.log(randomNumbersUser, randomNumbersPc);

  userNumber.innerText = "Il tuo numero è : " + randomNumbersUser;
  pcNumber.innerText = "Il numero del banco è : " + randomNumbersPc;

  // Faccio in modo che i numeri si vedano solo dopo aver cliccato il button
  userNumber.classList.toggle("d-none");
  pcNumber.classList.toggle("d-none");
  result.classList.toggle("d-none");

  if (randomNumbersUser > randomNumbersPc) {
    result.innerText = "Hai vinto!";
  } else if (randomNumbersUser === randomNumbersPc) {
    result.innerText = "Pareggio!";
  } else {
    result.innerText = "Hai perso!";
  }
});
