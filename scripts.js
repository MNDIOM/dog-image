let button = document.getElementById("getDog")
let image = document.getElementById("dogImage")
const codeElement = document.createElement("code");

// async function fetchDog() {
//     let response = await axios.get("https://dog.ceo/api/breeds/image/random/3");
//     console.log(response.data)
//     image.src = response.data.message;
// }

button.addEventListener("click", async (event) => {
    const response = await axios({
      url:  "https://dog.ceo/api/breeds/image/random/3",
    });
  
    codeElement.innerText = JSON.stringify(response.data);
    output.appendChild(codeElement);
  });
  


// // button.addEventListener("click", async (event) => {
// //     await fetchDog();
// // })

// // fetch first dog
// fetchDog();