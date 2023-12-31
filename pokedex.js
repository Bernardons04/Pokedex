const imgPokemon = document.querySelector(".pokemon")
const input = document.querySelector(".inputSearch")
const form = document.querySelector(".formulario")
const numberPoke = document.querySelector(".numberPoke")
const namePoke = document.querySelector(".pokeName")
const btnPrev = document.querySelector(".btnPrev")
const btnNext = document.querySelector(".btnNext")

let NumeroPokeAtual = 1;

const fetchPokemon = async (pokemon) => {
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (apiResponse.status === 200) {
        const data = await apiResponse.json();
        return data;
    }
}

const mostrarPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);  
    if (data) {
        namePoke.innerHTML = data.name
        numberPoke.innerHTML = data.id
        imgPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        if (numberPoke.innerHTML < 650) {
            imgPokemon.style.height = '18%';
            imgPokemon.style.bottom = '55%';
            imgPokemon.style.left = '50%';
        }
        if (numberPoke.innerHTML >= 650) {
            imgPokemon.src = data['sprites']['versions']['generation-vi']['omegaruby-alphasapphire']['front_default'];
            imgPokemon.style.height = '30%';
            imgPokemon.style.bottom = '50%';
            imgPokemon.style.left = '55%';
        }
        if (numberPoke.innerHTML >= 722) {
            imgPokemon.src = data['sprites']['versions']['generation-v']['black-white']['front_default'];
            imgPokemon.style.height = '24%';
            imgPokemon.style.bottom = '53%';
            imgPokemon.style.left = '55%';
        }
        if (numberPoke.innerHTML >= 899) {
            imgPokemon.src = data['sprites']['front_default'];
            imgPokemon.style.height = '24%';
            imgPokemon.style.bottom = '53%';
            imgPokemon.style.left = '55%';
        }
        input.value = '';
        NumeroPokeAtual = data.id;
    } else {
        imgPokemon.src = ""
        namePoke.innerHTML = 'Not found :c';
        numberPoke.innerHTML = '';
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    mostrarPokemon(input.value.toLowerCase());
})

btnPrev.addEventListener("click", () => {
    if (NumeroPokeAtual > 1) {
        NumeroPokeAtual -= 1;
        mostrarPokemon(NumeroPokeAtual);
    }
})

btnNext.addEventListener("click", () => {
    NumeroPokeAtual += 1;
    mostrarPokemon(NumeroPokeAtual);
})

mostrarPokemon(NumeroPokeAtual);