
const API_KEY = "live_PwQyLmNZR9H9elcnOZ7A8Dr9ib54diZy9wt75CtLd6ntVJmt6swh2ww5qseKB7QU";

const URL = `https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${API_KEY}`

const BASE_URL = 'https://api.thedogapi.com/v1/'

const button = document.querySelector(".btn"); 

const dogInput = document.querySelector("#breed");

button.addEventListener('click', async () => {
    let dog = dogInput.value; 
    try { 
        let response = await axios.get(`${BASE_URL}`)
        console.log(response.data);
    } catch(e) {
        console.log(e); 
    }
})

