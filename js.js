let pageNumber = 1
const pageNumberP = document.getElementById("pageNumber")
pageNumberP.textContent="Pagina " + pageNumber
async function fetchRicks() {
    try{
        const Response = await fetch("https://rickandmortyapi.com/api/character");
        const Ricks = await Response.json();
        console.log(Ricks)
} catch(Error) {
    return false
}
}
async function filterRicks(name) {
    try{
        const Response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
        const Ricks = await Response.json();
        return Ricks
    } catch(Error) {
        return false
    }
}
async function nextPage(name) {
    try{
    pageNumber += 1
    const Response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&page=${pageNumber}`);
    const Ricks = await Response.json();
    return Ricks
} catch(Error) {
    return false
}
}
async function prevPage(name) {
    try{
    pageNumber -= 1
    if(pageNumber<=0){
    throw new Error("algo salio mal")
}
    const Response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&page=${pageNumber}`);
    const Ricks = await Response.json();
    return Ricks
} catch(Error) {
    return false
}
}

const form = document.getElementById("form")
const container = document.getElementById("cardContainer")
form.addEventListener('submit', async function(event) {
    event.preventDefault();
    container.innerHTML=""
    try {
        let searchQuery = document.getElementById("search").value;
        let filteredRicks = await filterRicks(searchQuery);
        filteredRicks.results.forEach(element => {
            let rickContainer = document.createElement("div")
            rickContainer.classList.add("rickContainer")

            let rickImage = document.createElement("img")
            rickImage.src=element.image
            rickImage.classList.add("rickImage")
            let rickName = document.createElement("p")
            rickName.classList.add("rickName")
            rickName.textContent=element.name

            rickContainer.append(rickImage)
            rickContainer.append(rickName)
            container.append(rickContainer)
    });
    } catch(Error){
    let errorMsg = document.createElement("p")
    errorMsg.textContent="Error, no se encontraron resultados"
    container.append(errorMsg)
}
})

const prevButton = document.getElementById("prevPage")
const nextButton = document.getElementById("nextPage")

nextButton.addEventListener("click",async () => {
    container.innerHTML=""
    try {
    let searchQuery = document.getElementById("search").value;
    let filteredRicks = await nextPage(searchQuery);
    filteredRicks.results.forEach(element => {
        let rickContainer = document.createElement("div")
        rickContainer.classList.add("rickContainer")
        let rickImage = document.createElement("img")
        rickImage.src=element.image
        rickImage.classList.add("rickImage")
        let rickName = document.createElement("p")
        rickName.classList.add("rickName")
        rickName.textContent=element.name
        rickContainer.append(rickImage)
        rickContainer.append(rickName)
        container.append(rickContainer)
        pageNumberP.textContent="Pagina " + pageNumber
});
} catch(Error){
let errorMsg = document.createElement("p")
errorMsg.textContent="Error, no se encontraron resultados"
container.append(errorMsg)
}})

prevButton.addEventListener("click",async () => {
    container.innerHTML=""
    try {
    let searchQuery = document.getElementById("search").value;
    let filteredRicks = await prevPage(searchQuery);
    filteredRicks.results.forEach(element => {
        let rickContainer = document.createElement("div")
        rickContainer.classList.add("rickContainer")
        let rickImage = document.createElement("img")
        rickImage.src=element.image
        rickImage.classList.add("rickImage")
        let rickName = document.createElement("p")
        rickName.classList.add("rickName")
        rickName.textContent=element.name
        rickContainer.append(rickImage)
        rickContainer.append(rickName)
        container.append(rickContainer)
        pageNumberP.textContent="Pagina " + pageNumber
});
} catch(Error){
let errorMsg = document.createElement("p")
errorMsg.textContent="Error, no se encontraron resultados"
container.append(errorMsg)
}})