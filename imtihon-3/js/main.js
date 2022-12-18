const btn1 = document.querySelector('#btn');
const wrapper1 = document.querySelector('.wrapper');
const x = document.querySelector('#x')
btn1.addEventListener("click" , () => {
 wrapper1.style.display = "block";
}  )
x.addEventListener("click", () => {
    wrapper1.style.display = "none"});




const form1 = document.querySelector("#form1");
const inputContact = document.querySelector("#input-contact");
const btnContact = document.querySelector("#btn-contact");


form1.addEventListener("submit", (e) => {
e.preventDefault();

let inputContactValue = inputContact.value;
alert(`Your email ${inputContactValue} is successfully sent!`)
});