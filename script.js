// Haalt de huidige datum op
const date = new Date();
const dateOfDeathInput = document.querySelector("#date-of-death");

// Extra vragen partner worden getoond als 'Ja' wordt gekozen en verborgen als 'Nee' wordt gekozen
let inputJa1A = document.querySelector("#getrouwd-ja");
let extraVragenSection = document.querySelector("#extraVragenGetrouwd");
inputJa1A.addEventListener("click", () => {
    extraVragenSection.hidden = false;
});

let inputNee1A = document.querySelector('#getrouwd-nee');
inputNee1A.addEventListener("click", () => {
    extraVragenSection.hidden = true;
});

// Extra vragen voor huwelijkse voorwaarden, tonen/verbergen bij selectie
let inputJa1B2 = document.querySelector("#voorwaarden-ja");
let extraVragenKopie = document.querySelector("#extraVragenKopie");
inputJa1B2.addEventListener("click", () => {
    extraVragenKopie.hidden = false;
});

let inputNee1B2 = document.querySelector("#voorwaarden-nee");
inputNee1B2.addEventListener("click", () => {
    extraVragenKopie.hidden = true;
});

// Extra vragen kinderen tonen of verbergen
let inputJa1C = document.querySelector("#kinderen-ja");
let extraVragenSectionKinderen = document.querySelector("#extraVragenKinderen");
inputJa1C.addEventListener("click", () => {
    extraVragenSectionKinderen.hidden = false;
});

let inputNee1C = document.querySelector('#kinderen-nee');
inputNee1C.addEventListener("click", () => {
    extraVragenSectionKinderen.hidden = true;
});

// Opslaan van ingevulde velden in localStorage, zodat gegevens behouden blijven na herladen
const inputFields = document.querySelectorAll("input");
inputFields.forEach((inputField) => {
    if (localStorage.getItem(inputField.id)) {
        inputField.value = localStorage.getItem(inputField.id);
    }
    inputField.addEventListener("input", () => {
        localStorage.setItem(inputField.id, inputField.value);
    });
});

// De maximale datum voor overlijdensdatum instellen op vandaag
dateOfDeathInput.setAttribute("max", date.toISOString().split("T")[0]);

// Trein beweegt mee met de scrollpositie 🏃🚆
const trein = document.querySelector(".trein");
window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    let maxScroll = document.body.scrollHeight - window.innerHeight; // Maximaal scrollbare hoogte
    let maxMove = window.innerWidth; // Hoe ver de trein kan bewegen
    let treinPositie = (scrollY / maxScroll) * maxMove;
    trein.style.transform = `translateX(${treinPositie}px)`;
});

// Functie om de som van bedragen te berekenen en weer te geven
let som = null;

function updateSom() {
    let getal1 = parseFloat(document.getElementById("geld-input1").value) || 0;
    let getal2 = parseFloat(document.getElementById("geld-input2").value) || 0;
    // parseFloat zet een stukje tekst om in een echt getal met decimalen, zodat er mee gerekend kan worden

    som = getal1 + getal2;
    document.getElementById("resultaat").textContent = som;
    // met .textContent zet je iets in de geselecteerde id

    return som;
}

document.getElementById("geld-input1").addEventListener("input", updateSom);
document.getElementById("geld-input2").addEventListener("input", updateSom);
document.addEventListener("DOMContentLoaded", updateSom);

// Verdeling van de som over het aantal verkrijgers
const waardes = [
    document.querySelector("#aantalVerkrijgers1"),
    document.querySelector("#aantalVerkrijgers2"),
    document.querySelector("#aantalVerkrijgers3"),
    document.querySelector("#aantalVerkrijgers4")
];
// aanroepen verschillende waardes

const breukResultaat = document.querySelector("#resultaat1");
// aanroepen waar het resultaat moet komen

waardes.forEach((waarde) => {
    waarde.addEventListener("change", () => {
        breukResultaat.textContent = updateSom() / waarde.value;
        // hier zet je dus weer met textContent iets op de plek 'breukResultaat', namelijk de breuk van updatesom / waarde
    });

    document.addEventListener("DOMContentLoaded", () => breukResultaat.textContent = updateSom() / waarde.value);
    document.getElementById("geld-input1").addEventListener("input", () => breukResultaat.textContent = updateSom() / waarde.value);
    document.getElementById("geld-input2").addEventListener("input", () => breukResultaat.textContent = updateSom() / waarde.value);
});

// Alle extra vragen standaard verbergen bij het laden van de pagina, zodat iemand zonder JS ze altijd ziet. 
extraVragenSection.hidden = true;
extraVragenKopie.hidden = true;
extraVragenSectionKinderen.hidden = true;