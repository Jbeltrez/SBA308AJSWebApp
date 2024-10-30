import { fetchData } from "./fetch.js";


export async function pokeImgCall() { 
    const pokeDiv = document.querySelector(".pokeList");
    const pokeData = await fetchData(); 
    console.log(pokeData);
}