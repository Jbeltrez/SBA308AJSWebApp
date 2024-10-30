import {fetchData} from "./fetch.js"

const data = await fetchData();


export async function searchBtn() {
    const button = document.querySelector(".btn"); 
    const testContainer = document.querySelector('.test'); 
    // const pokeInput = document.querySelector("#breed");
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // console.log(data)
        const pokeArr = data.results; 
        for (let i = 0; i < pokeArr.length; i++) { 
            console.log(pokeArr[i]); 
            let newPoke = document.createElement("p"); 
            newPoke.class = "poke"
            newPoke.innerHTML = pokeArr[i].name;
            testContainer.appendChild(newPoke); 
        }
        // pokeArr.forEach((poke) => {
        //     console.log(poke)
        //     let newPoke = document.createElement("div"); 
        //     newPoke.innerHTML = poke.name
        //     let counter = 0; 
        //     for (let i = 0; i < 100; i++)
        //     newPoke.setAttribute('class', `poke poke-${i}`)
        //     testContainer.appendChild(newPoke); 
        //     .setAttribute('class', `poke poke-${i}`)
        //     guesses.appendChild(guess);
        // })



        // const pokeStuff = data; 
        // testContainer.innerHTML(data)
        // let poke = pokeInput.value; 
    
    })
}
