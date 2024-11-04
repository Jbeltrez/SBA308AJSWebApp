// import { fetchData } from "./fetch.js";


export async function pokeImgCall(obj) { 
    try {
        // console.log(`====> https://pokeapi.co/api/v2/pokemon/${obj}`)
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${obj}`)
        // if (response.status !== 200) throw new Error(); 
        console.log( '---->', response.data.sprites.front_shiny);
        let src = response.data.sprites.front_shiny
        let sprite = document.createElement("img");
        sprite.setAttribute('src', src); 
        let searchedPoke = document.querySelector(".searchedPoke"); 
        searchedPoke.innerHTML = ""
        sprite.setAttribute('class', 'selectedpoke')
        searchedPoke.appendChild(sprite);
        return response.data; 
    } catch(e) { 
        console.error("Error" + e); 
    }
    // This will use the value from within the select dropdown
    // and make the api call with that interpolated value 
    // const response = await axios.get(`https://pokeapi.com/api/v2/pokemon/${obj}`)
    // console.log(response)
    // return response.data; 
    // const pokeDiv = document.querySelector(".pokeList");
    // const pokeData = await fetchData(); 
    // console.log(pokeData);

}

// export async function fetchData() { 
//     try {
//         const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=149")
//         if (response.status !== 200) throw new Error(); 
//         return response.data; 
//         console.log(response.data);
//     } catch(e) { 
//         console.error("Error" + e); 
//     }
// }