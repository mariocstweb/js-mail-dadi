console.log("js ok");

// Recupero l email dell utente nel form
const form = document.getElementById("emailForm");
const check = document.getElementById("emailCheck");
// Creo un array con le mie email
const mailList = [
  "mario@gmail.com",
  "marco@gmail.com",
  "pit@gmail.com",
  "pino@gmail.com",
];

// console.log(mailList);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailUtente = document.getElementById("emailUser").value;
  console.log("Email inserita dall'utente:", emailUtente);

  let confermaEmail = false;
  for (let i = 0; i < mailList.length; i++) {
    if (mailList[i] === emailUtente) {
      confermaEmail = true;
      console.log("ok");
    }
  }

  if (confermaEmail) {
    check.innerText = "Email autorizzata";
  } else {
    check.innerText = "Email non autorizzata";
  }
});
