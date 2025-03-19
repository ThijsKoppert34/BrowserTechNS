const date = new Date();
const dateOfDeathInput = document.querySelector("#date-of-death");

// extra vragen partner


let inputJa1A = document.querySelector("#getrouwd-ja");
let extraVragenSection = document.querySelector("#extraVragenGetrouwd");

inputJa1A.addEventListener("click", (event) => {
    extraVragenSection.hidden = false;
})



let inputNee1A = document.querySelector('#getrouwd-nee');

inputNee1A.addEventListener("click", (event) => {
    extraVragenSection.hidden = true;
})

// voeg een kopie toe

let inputJa1B2 = document.querySelector("#voorwaarden-ja");
let stuurKopie = document.querySelector("#extraVragenKopie");

inputJa1B2.addEventListener("click", (event) => {
    extraVragenKopie.hidden = false;
})

let inputNee1B2 = document.querySelector("#voorwaarden-nee");

inputNee1B2.addEventListener("click", (event) => {
    extraVragenKopie.hidden = true;
})


// extra vragen kinderen

let inputJa1C = document.querySelector("#kinderen-ja");
let extraVragenSectionKinderen = document.querySelector("#extraVragenKinderen");

inputJa1C.addEventListener("click", (event) => {
    extraVragenSectionKinderen.hidden = false;
})

let inputNee1C = document.querySelector('#kinderen-nee');

inputNee1C.addEventListener("click", (event) => {
    extraVragenSectionKinderen.hidden = true;
})

const inputFields = document.querySelectorAll("input");

inputFields.forEach((inputField) => {
    if (localStorage.getItem(inputField.id)) {
        inputField.value = localStorage.getItem(inputField.id);
    }
    inputField.addEventListener("input", () => {
        localStorage.setItem(inputField.id, inputField.value);
    });
});

dateOfDeathInput.setAttribute("max", date.toISOString().split("T")[0]);

let inputAnders2A = document.querySelector("#anders");
let andersExtra = document.querySelector("#andersVerborgen");

// inputAnders2A.addEventListener("click", (event) => {
//     andersExtra.hidden = false;
// })

extraVragenSection.hidden = true;
extraVragenKopie.hidden = true;
extraVragenSectionKinderen.hidden = true;
// andersExtra.hidden = true;

const trein = document.querySelector(".trein");

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    let maxScroll = document.body.scrollHeight - window.innerHeight;
    // dit is hoeveel je maximaal kan scrollen (hoogte body - hoogte scherm)

    let maxMove = window.innerWidth;

    let treinPositie = (scrollY / maxScroll) * maxMove;

    trein.style.transform = `translateX(${treinPositie}px)`;
});