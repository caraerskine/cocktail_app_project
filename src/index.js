document.addEventListener("DOMContentLoaded", () => {
  fetchCocktails();
});

let newDrinkForm = document.getElementById("new-drink-form");

let numberOfCocktails;

let cocktailArray = [];
let ingredientArray = [];

const displayDiv = document.getElementById("display-drinks");

function fetchCocktails() {
  fetch("http://www.localhost:3000/cocktails")
    .then((res) => res.json())
    .then((cocktails) => {
      cocktails.forEach((cocktail) => renderCocktail(cocktail));
      cocktailArray = [...cocktails];
      numberOfCocktails = cocktails.length;
    });
}

function randomDrink() {
  let randomIndex = Math.floor(Math.random() * numberOfCocktails);
  let randomCocktail = cocktailArray[randomIndex];
  displayDiv.innerHTML = "";
  renderCocktail(randomCocktail);
}

function renderCocktail(cocktail) {
  const { name, desc, id, url } = cocktail;

  let cocktailImg = document.createElement("img");
  cocktailImg.setAttribute("class", "card-image");
  cocktailImg.src = url;
  cocktailImg.alt = name;

  let nameH3 = document.createElement("H3");
  nameH3.textContent = name;

  let descP = document.createElement("p");
  descP.textContent = desc;

  let cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card");

  let containerDiv = document.createElement("div");
  containerDiv.setAttribute("class", "container");
  containerDiv.append(nameH3, descP);

  cardDiv.append(cocktailImg, containerDiv);
  displayDiv.append(cardDiv);
}

//goal is to create a new object for each ingr.
//need three new inputs every time
//step 1 create a function that will create the three diff inputs, append to ingr div
//when inputs are created, needs to also craete an object in key/value pairs, and get filled in by the mini-form
//button on the form, callback function, tracks them and adds them to object
const ingrDiv = document.getElementById("new-ingredients")
const addIngrBtn = document.getElementById("add-ingr");

addIngrBtn.addEventListener("click", (e) => {
  //ingredient name, quantity, unit of measurement
  e.preventDefault();
  const ingrName = document.createElement("input");
  const qty = document.createElement("input");
  const meas = document.createElement("input");

  ingrDiv.append(ingrName, qty, meas);
  
 
});

newDrinkForm.addEventListener("submit", addNewDrink);

function addNewDrink(e) {
  e.preventDefault();
  const newDrink = document.getElementById("drink");
  const newDesc = document.getElementById("desc");
  const newUrl = document.getElementById("url");
  console.log(ingredientArray);
  while (ingrDiv.hasChildNodes()) {
    ingrDiv.removeChild(ingrDiv.lastChild);
}

  const userCreatedDrink = {
    name: newDrink.value,
    desc: newDesc.value,
    url: newUrl.value,
    ingredients: ingredientArray
  };
  
  // if (userCreatedDrink.name === "" || userCreatedDrink.name === null){
  //   alert ("You must enter a drink name")
  //   return 
  // }


  fetch("http://www.localhost:3000/cocktails", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userCreatedDrink),
  })
    .then((res) => res.json())
    .then((newDrink) => {
      cocktailArray = [...cocktailArray, newDrink];
      renderCocktail(newDrink);
      ingredientArray = [];
    });

  newDrinkForm.reset();
}

const element = document.getElementById("dark-button");

element.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const randomDrinkButton = document.getElementById("random-drink");
randomDrinkButton.addEventListener("click", randomDrink);

const allDrinksButton = document.getElementById("all-drinks");
allDrinksButton.addEventListener("click", () => {
  displayDiv.innerHTML = "";
  cocktailArray.forEach((cocktail) => renderCocktail(cocktail))
});
