const input = document.querySelector("input");
const main = document.querySelector("main");
const card = document.querySelector("#card");
const contact = document.querySelector("#contact");
const valid = document.querySelector('#valid')
const placeholder = input.getAttribute('placeholder')


card.style.display = "none";

function getValue() {
  const email = input.value;
  
  const list = [];

  if (email.indexOf("@") == -1 || email == null) {
    
    input.style.background = " #ff5a67f6 33%"; 
    input.setAttribute("placeholder", "ash#loremcompany.com");
    
    valid.innerText= 'Valid email required';
  } else {
    list.push(email);
    main.style.display = "none";
    card.style.display = "block";
    contact.innerText = `${email}`;
  }
}

function back() {
  main.style.display = "flex";
  card.style.display = "none";
  input.value = "";
}
