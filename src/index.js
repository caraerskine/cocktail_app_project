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

const displayDiv = document.getElementById("display-drinks"); //random drink, need to display the data

// const showDiv = document.getElementById("user-drink");


//function to get random drinks (now I need to display them)
function randomDrink() {
   let randomIndex = Math.floor(Math.random()*numberOfCocktails)
   console.log(cocktailArray[randomIndex], randomIndex) 
   return cocktailArray[randomIndex]
}  

//function to get all the cocktail data I have  
function renderCocktail(cocktail) {
  const {name, desc, id, url} = cocktail;

  const main = document.querySelector(".main");
  main.textContent = "Friends, We Are Drinking Tonight";
 
  //code for cards//
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
  //is the "id" of the cardDiv the id of the cocktail

  console.log(name, desc, id, url);
}

//form
//goal: make a form with an input field where a user can type a new drink name, drink desc, add drink img, and add ingredients
//and then create a card of their drink

//what is the form? define it
// let form 

//what do I want the form to do?
// form.addEventListener("submit", (event) => {

// event.preventDefault()




const element = document.getElementById("dark-button");

element.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


const randomDrinkButton = document.getElementById("random-drink");
randomDrinkButton.addEventListener("click", randomDrink) 






