
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://www.localhost:3000/cocktails")
    .then((res) => res.json())
    .then((cocktails) => {
      cocktails.forEach((cocktail) => renderCocktail(cocktail));
      cocktailArray = [...cocktails]
      numberOfCocktails = cocktails.length;
     
    });
});

let numberOfCocktails 

let cocktailArray = [] 

const displayDiv = document.getElementById("display-drinks"); 


function randomDrink() {
   let randomIndex = Math.floor(Math.random()*numberOfCocktails)
   console.log(cocktailArray[randomIndex], randomIndex) 
   return cocktailArray[randomIndex]
}  

function renderCocktail(cocktail) {
  const {name, desc, id, url} = cocktail;

  const main = document.querySelector(".main");
  main.textContent = "Friends, We Are Having a Drink Tonight";
 
  let cocktailImg = document.createElement("img");
  cocktailImg.setAttribute("class", "card-image");
  cocktailImg.src = url 
  cocktailImg.alt = name 

  let nameH3 = document.createElement("H3");
  nameH3.textContent = name 

  let descP = document.createElement("p");
  descP.textContent = desc

  let cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card");

  let containerDiv = document.createElement("div");
  containerDiv.setAttribute("class", "container");
  containerDiv.append(nameH3, descP);

  cardDiv.append(cocktailImg, containerDiv)
  displayDiv.append(cardDiv)

  console.log(name, desc, id, url);
}

//form
//goal: make a form with an input field where a user can type
//a new drink name, drink desc, add drink img, and add ingredients
//a card with their own drink info will be created and added 

const userDrink = () => {
  const userForm = document.querySelector("form");

  userForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const userForm = document.querySelector("input#drink", "input#desc" , "input#ingr")
    console.log(userForm);
    
});
}


const element = document.getElementById("dark-button");

element.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


const randomDrinkButton = document.getElementById("random-drink");
randomDrinkButton.addEventListener("click", randomDrink) 






