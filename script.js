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

extraVragenSection.hidden = true;
extraVragenKopie.hidden = true;
extraVragenSectionKinderen.hidden = true;