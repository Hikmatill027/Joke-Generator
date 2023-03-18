const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "VcQsVynZjGSa5HMfi61azg==dRJZwWCyVCEuEuuv";

const options = {
    method: "GET",
    headers:{
        "X-Api-Key": apiKey
    }
};
const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1"; 

async function getJoke() {
    try {
        jokeEl.innerText = "Searching ...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading ...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "There was an error, please try again"
    }
    
}


btnEl.addEventListener("click", getJoke)