import { fetchData } from "./fetch.js";


export async function pokeImgCall(obj) { 
    // This will use the value from within the select dropdown
    // and make the api call with that interpolated value 
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${obj}`)
    // const pokeDiv = document.querySelector(".pokeList");
    // const pokeData = await fetchData(); 
    // console.log(pokeData);

}

export async function fetchData() { 
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=149")
        if (response.status !== 200) throw new Error(); 
        return response.data; 
        console.log(response.data);
    } catch(e) { 
        console.error("Error" + e); 
    }
}