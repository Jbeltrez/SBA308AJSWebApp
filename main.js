import { searchBtn } from "./searchBtn.js"; 
import { fetchData } from "./fetch.js"
import {pokeImgCall} from "./pokeImgCall.js"
const data = await fetchData();

const render = await searchBtn(); 
const img = await pokeImgCall(); 

