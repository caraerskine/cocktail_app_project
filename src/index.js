document.addEventListener("DOMContentLoaded", () => {
  fetchCocktails();
});
//global variables
let newDrinkForm = document.getElementById("new-drink-form");

let numberOfCocktails;

let cocktailArray = [];

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

newDrinkForm.addEventListener("submit", addNewDrink);

function addNewDrink(e) {
  e.preventDefault();
  const newDrink = document.getElementById("drink");
  const newDesc = document.getElementById("desc");
  const newUrl = document.getElementById("url");
  const newIngr = document.getElementById("ingr");

  const userCreatedDrink = {
    name: newDrink.value,
    desc: newDesc.value,
    url: newUrl.value,
    ingredients: [
      {
        ingredientName: newIngr.value,
        measurement: "",
        units: "",
      },
    ],
  };
  
  if (userCreatedDrink.name === "" || userCreatedDrink.name === null){
    alert ("You must enter a drink name")
    return 
  }


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
