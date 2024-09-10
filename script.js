let message = document.querySelector(".Message");
let nb1 = document.querySelector(".nb1");
let nb2 = document.querySelector(".nb2");
let res = document.querySelector(".res");
let submit = document.querySelector("input[type='submit']");
let score = document.querySelector(".score");
let link = document.querySelector(".link");
let section = document.querySelector("section");
let cpt = 0;

nb1.innerHTML = Math.floor(Math.random() * 11);
nb2.innerHTML = Math.floor(Math.random() * 11);

submit.addEventListener("click", (e) => {
  e.preventDefault();

  score.innerHTML = "";
  message.innerHTML = "";

  let a = parseInt(nb1.textContent);
  let b = parseInt(nb2.textContent);
  let response = parseInt(res.value);
  let valueJust = parseInt(a) + parseInt(b);

  if (a + b == response) {
    setTimeout(() => (res.value = ""), 800);
    message.style.backgroundColor = "green";
    message.innerHTML = "Correct";
    cpt++;

    nb1.innerHTML = Math.floor(Math.random() * 11);
    nb2.innerHTML = Math.floor(Math.random() * 11);
  } else {
    message.style.backgroundColor = "red";
    message.innerHTML = "Faux !";
    score.innerHTML = `
    Vous avez eu un score de ${cpt}. <br />
    La bonne réponse de ${a} + ${b} était ${valueJust}`;
    section.innerHTML = " ";
    link.style.display = "block";
  }
});
