console.log("js ok");

// Recupero l email dell utente nel form
const form = document.getElementById("emailUser");

// Creo un array con le mie email
const mailList = [
  "mario@gmail.com",
  "marco@gmail.com",
  "pit@gmail.com",
  "pino@gmail.com",
];

// console.log(mailList);
form.addEventListener("click", function () {
  const emailUtente = document.getElementById("emailUser").value;
  console.log("Email inserita dall'utente:", emailUtente);
});
