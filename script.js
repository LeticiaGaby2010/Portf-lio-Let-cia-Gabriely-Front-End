
const themeBtn = document.getElementById("themeBtn");


const temaSalvo = localStorage.getItem("tema");


if (temaSalvo === "light") {

document.body.classList.add("light");

}


function atualizarIconeTema() {

if (document.body.classList.contains("light")) {

if (themeBtn) {
themeBtn.textContent = "🌙";
}

} else {

if (themeBtn) {
themeBtn.textContent = "☀️";
}

}

}


atualizarIconeTema();


if (themeBtn) {

themeBtn.addEventListener("click", function () {

document.body.classList.toggle("light");


if (document.body.classList.contains("light")) {

localStorage.setItem("tema", "light");

} else {

localStorage.setItem("tema", "dark");

}


atualizarIconeTema();

});

}



const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


if (menuBtn) {

menuBtn.addEventListener("click", function () {

navLinks.classList.toggle("active");

});

}



const typingText = document.getElementById("typingText");


if (typingText) {

const textos = [

"Estudante de Informática 💻",

"Apaixonada por tecnologia ❤️",

"Desenvolvedora Front-End 🚀",

"Sempre aprendendo algo novo ✨"

];


let textoAtual = 0;

let caractereAtual = 0;

let apagando = false;


function escreverTexto() {

const texto = textos[textoAtual];


if (!apagando) {

typingText.textContent =
texto.substring(0, caractereAtual + 1);

caractereAtual++;


if (caractereAtual === texto.length) {

apagando = true;

setTimeout(escreverTexto, 1500);

return;

}

} else {

typingText.textContent =
texto.substring(0, caractereAtual - 1);

caractereAtual--;


if (caractereAtual === 0) {

apagando = false;

textoAtual++;

if (textoAtual >= textos.length) {
textoAtual = 0;
}

}

}


setTimeout(
escreverTexto,
apagando ? 50 : 100
);

}


escreverTexto();

}




const elementosReveal =
document.querySelectorAll(".reveal");


function revelarElementos() {

elementosReveal.forEach(function (elemento) {

const alturaTela =
window.innerHeight;

const distanciaTopo =
elemento.getBoundingClientRect().top;


if (distanciaTopo < alturaTela - 100) {

elemento.classList.add("active");

}

});

}


window.addEventListener(
"scroll",
revelarElementos
);


revelarElementos();




const skillBars =
document.querySelectorAll(".skill-progress");


function animarHabilidades() {

skillBars.forEach(function (barra) {

const distancia =
barra.getBoundingClientRect().top;

const tela =
window.innerHeight;


if (distancia < tela - 50) {

const porcentagem =
barra.getAttribute("data-progress");

barra.style.width =
porcentagem + "%";

}

});

}


window.addEventListener(
"scroll",
animarHabilidades
);


animarHabilidades();



const projectButtons =
document.querySelectorAll(".project-btn");


const projectModal =
document.getElementById("projectModal");


const modalTitle =
document.getElementById("modalTitle");


const modalDescription =
document.getElementById("modalDescription");


const closeModal =
document.getElementById("closeModal");


const modalOk =
document.getElementById("modalOk");


projectButtons.forEach(function (button) {

button.addEventListener("click", function () {

const titulo =
button.getAttribute("data-title");

const descricao =
button.getAttribute("data-description");


modalTitle.textContent = titulo;

modalDescription.textContent = descricao;


projectModal.classList.add("active");

});

});


function fecharModal() {

if (projectModal) {

projectModal.classList.remove("active");

}

}


if (closeModal) {

closeModal.addEventListener(
"click",
fecharModal
);

}


if (modalOk) {

modalOk.addEventListener(
"click",
fecharModal
);

}



if (projectModal) {

projectModal.addEventListener(
"click",
function (evento) {

if (evento.target === projectModal) {

fecharModal();

}

}
);

}



const telefone =
document.getElementById("telefone");


if (telefone) {

telefone.addEventListener(
"input",
function () {

let valor =
telefone.value.replace(/\D/g, "");


valor =
valor.substring(0, 11);


if (valor.length <= 10) {

valor =
valor.replace(
/^(\d{2})(\d)/,
"($1) $2"
);

valor =
valor.replace(
/(\d{4})(\d)/,
"$1-$2"
);

} else {

valor =
valor.replace(
/^(\d{2})(\d)/,
"($1) $2"
);

valor =
valor.replace(
/(\d{5})(\d)/,
"$1-$2"
);

}


telefone.value = valor;

}
);

}



const cpf =
document.getElementById("cpf");


if (cpf) {

cpf.addEventListener(
"input",
function () {

let valor =
cpf.value.replace(/\D/g, "");


valor =
valor.substring(0, 11);


valor =
valor.replace(
/(\d{3})(\d)/,
"$1.$2"
);


valor =
valor.replace(
/(\d{3})(\d)/,
"$1.$2"
);


valor =
valor.replace(
/(\d{3})(\d{1,2})$/,
"$1-$2"
);


cpf.value = valor;

}
);

}



const data =
document.getElementById("data");


if (data) {

data.addEventListener(
"input",
function () {

let valor =
data.value.replace(/\D/g, "");


valor =
valor.substring(0, 8);


valor =
valor.replace(
/(\d{2})(\d)/,
"$1/$2"
);


valor =
valor.replace(
/(\d{2})(\d)/,
"$1/$2"
);


data.value = valor;

}
);

}




const contactForm =
document.getElementById("contactForm");


const formModal =
document.getElementById("formModal");


const closeFormModal =
document.getElementById("closeFormModal");


const formModalOk =
document.getElementById("formModalOk");


if (contactForm) {

contactForm.addEventListener(
"submit",
function (evento) {

evento.preventDefault();


const nome =
document.getElementById("nome").value.trim();


const email =
document.getElementById("email").value.trim();


const mensagem =
document.getElementById("mensagem").value.trim();


if (
nome === "" ||
email === "" ||
mensagem === ""
) {

alert(
"Preencha todos os campos obrigatórios!"
);

return;

}



const emailValido =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;


if (!emailValido.test(email)) {

alert(
"Digite um e-mail válido!"
);

return;

}


if (formModal) {

formModal.classList.add("active");

}


contactForm.reset();

}
);

}




function fecharFormModal() {

if (formModal) {

formModal.classList.remove("active");

}

}


if (closeFormModal) {

closeFormModal.addEventListener(
"click",
fecharFormModal
);

}


if (formModalOk) {

formModalOk.addEventListener(
"click",
fecharFormModal
);

}



const topBtn =
document.getElementById("topBtn");


window.addEventListener(
"scroll",
function () {

if (!topBtn) {
return;
}


if (window.scrollY > 300) {

topBtn.classList.add("show");

} else {

topBtn.classList.remove("show");

}

}
);


if (topBtn) {

topBtn.addEventListener(
"click",
function () {

window.scrollTo({

top: 0,

behavior: "smooth"

});

}
);

}



const links =
document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

link.addEventListener(
"click",
function () {

if (navLinks) {

navLinks.classList.remove("active");

}

}
);

});
