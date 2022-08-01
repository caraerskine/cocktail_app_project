let numberOfCocktails 

let cocktailArray = [] 

let displayDiv = document.getElementById("display-drinks"); //random drink

let showDiv = document.getElementsByClassName("#card"); //all drinks, not sure if it should be "show-drinks"


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
return cocktailArray[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  //   return (name, desc, id);
  console.log(name, desc, id);
}




//function to get all the drinks (I need to display them as well)
function getAllDrinks() {
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

const allDrinksButton = document.getElementsByClassName("#card"); //not sure if this should be "card" or "show-drinks"

allDrinksButton.addEventListener("click", getAllDrinks)