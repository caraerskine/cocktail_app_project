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

const displayDiv = document.getElementById("display-drinks"); //random drink

// const showDiv = document.getElementsByClassName("card"); //all drinks, not sure if it should be "show-drinks"


//Not sure if any of this is correct. Trying to make my HTML from the JS here//
const main = document.querySelector(".main");
main.textContent = "Friends, We Are Drinking Tonight";

//test
// function addElement(){
//   const newCar
// }





// const li = document.createElement("li");
// const ul = document.createElement("ul");
// li.appendChild(document.createTextNode("id"));
// li.appendChild(document.createTextNode("ingredients"));
// li.appendChild(document.createTextNode("img"));
// ul.appendChild(li);


// const getAllCocktails = () => {
//   fetch("http://www.localhost:3000/cocktails")
//   .then((res) => res.json())
//   .then((cocktails) => {
//     cocktails.forEach((cocktail) => renderCocktail(cocktail));
//     cocktailArray = [...cocktails]
//     numberOfCocktails = cocktails.length;
//   });
// }



//function to get random drinks (now I need to display them)
function randomDrink() {
   let randomIndex = Math.floor(Math.random()*numberOfCocktails)
   console.log(cocktailArray[randomIndex]) 
   return cocktailArray[randomIndex]
//innerHTML? to display it?
}  



//function to get all the cocktail data I have  
function renderCocktail(cocktail) {
  const {name, desc, id, url} = cocktail;

  let cocktailImg = document.createElement("img");
  cocktailImg.setAttribute("class", "card-image")
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

  //consider the "id" of the cardDiv the id of the cocktail
 

  console.log(name, desc, id, url);
}

 //<div class="card">
//   <img src="img_avatar.png" alt="Avatar" style="width:100%">
//   <div class="container">
//     <h4><b>John Doe</b></h4>
//     <p>Architect & Engineer</p>
//   </div>
// </div>





//function to get all the drinks (I need to display them as well)
// function getAllDrinks(renderCocktail) {
  
// let 
// }




//toggle dark-light mode <toggle dark mode> <WORKS>

const element = document.getElementById("dark-button");

element.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});



//random drink button <surprise me> returns the random drink in devtools <WORKS>

const randomDrinkButton = document.getElementById("random-drink");

randomDrinkButton.addEventListener("click", randomDrink) 



//all drinks button <gimme all the drinks>

// const allDrinksButton = document.getElementsByClassName("card"); //not sure if this should be "card" or "show-drinks"

// allDrinksButton.addEventListener("click", getAllDrinks)


