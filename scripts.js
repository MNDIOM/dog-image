
// //1 // Requesting with a different ID

let image = document.getElementById("dogImage")
axios.get('https://dog.ceo/api/breeds/image/random')
  .then(response => {
    console.log(response.data);
    image.src = response.data.message;
  })
  .catch(error => {
    console.log(error);
  });


// changing the Id src will request a different src post