let numberOfCocktails 

let cocktailArray = [] 

let displayDiv = document.getElementById("display-drinks"); //random drink

let showDiv = document.getElementById("show-drinks"); //all drinks



// let showAllDiv = document.getElementById("")

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://www.localhost:3000/cocktails")
    .then((res) => res.json())
    .then((cocktails) => {
      cocktails.forEach((cocktail) => renderCocktail(cocktail));
      cocktailArray = [...cocktails]
      numberOfCocktails = cocktails.length;
    });
});



//function to get random drinks (now I need to display them)
function randomDrink() {
   let randomIndex = Math.floor(Math.random()*numberOfCocktails)
   console.log(cocktailArray[randomIndex]) 
   return cocktailArray[randomIndex]
}  



//function to get all the cocktail data I have  
function renderCocktail(cocktail) {
  const {name, desc, id} = cocktail;
  console.log(name, desc, id);
}




//function to get all the drinks (I need to display them as well)
function getAllDrinks(cocktail) {
   const {card, container} = cocktail;
console.log(card, container);
}




//toggle dark-light mode <toggle dark mode>

const element = document.getElementById("dark-button");

element.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});



//random drink button <surprise me>

const randomDrinkButton = document.getElementById("random-drink");

randomDrinkButton.addEventListener("click", randomDrink) 



//all drinks button <gimme all the drinks>

const allDrinksButton = document.getElementById("all-drinks");

allDrinksButton.addEventListener("click", getAllDrinks)