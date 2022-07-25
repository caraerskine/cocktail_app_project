const BASE_URL = 'https://www.thecocktaildb.com/'

//trying a button out I got from an event listener and handler webpage 
  let button = document.querySelector("button");
  button.addEventListener("mousedown", event => {
    if (event.button == 0) {
      console.log("Left button");
    } else if (event.button == 1) {
      console.log("Middle button");
    } else if (event.button == 2) {
      console.log("Right button");
    }
  });


//prevent default
document.getElementById("myAnchor").addEventListener("click", function(event){
    event.preventDefault()
  });


//trying this out to see if it works (?)//

const init = () => {
    const inputForm = document.querySelector('form');
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('input#searchByID');
  
      console.log(input.value);
  
      fetch('https://www.thecocktaildb.com/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // LOG: (3) [{…}, {…}, {…}]
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);



// //first event listener
// window.addEventListener('DOMContentLoaded', () => {
//     getDrinks()
// })
  
// function getDrinks(){
//    const ul = document.getElementById('drink-list')
//    fetch('https://www.thecocktaildb.com/')
// }
 
// let btn = document.createElement("button");
//     btn.innerHTML = "Submit";
//     btn.type = "submit";
//     btn.name = "formBtn";
// document.body.appendChild(btn);

//second event listener
// let btn = document.createElement("button");
// btn.innerHTML = "Drinks";
// btn.addEventListener("click", function () {
//   alert("Button is clicked");
// });
// document.body.appendChild(btn);

