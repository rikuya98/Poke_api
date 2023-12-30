const baseUri = "https://pokeapi.co/api/v2/pokemon/"
const searchButton = document.querySelector('#search-btn')
const randomButton = document.querySelector('#random-btn')
const imgFrom = document.querySelector('#pokemon-image')
const POKEMON_MAX_ID = 1000
const POKEMON_MIN_ID = 1

async function showPokeData(pokeId) {
    const res = await fetch(`${baseUri}${pokeId}`);
    const json = await res.json();
    const pokeData = json.sprites.front_default
    return pokeData
}
searchButton.addEventListener('click', async () => {
    const pokeFrom = document.querySelector('#poke-form')
    const searchKey = pokeFrom.value
    const imgData = await showPokeData(searchKey)
    imgFrom.src = imgData
}
)

randomButton.addEventListener('click', async ()=> {
    const randomId = getRandomId(POKEMON_MIN_ID, POKEMON_MAX_ID);
    const imgData = await showPokeData(randomId)
    imgFrom.src = imgData
})

function getRandomId(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


