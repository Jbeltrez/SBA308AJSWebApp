import {fetchData} from "./fetch.js"

const data = await fetchData();

const button = document.querySelector(".btn"); 
const testContainer = document.querySelector('.test'); 

const pokeInput = document.querySelector("#breed");


button.addEventListener('click', (e) => {
    e.preventDefault();
    // let poke = pokeInput.value; 
    try { 
        let response = await axios.get(URL);

        console.log(response);
        if(response.status !== 200) throw new Error(); 
        
    } catch(e) {
        console.log(e); 
    }
})

