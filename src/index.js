

document.addEventListener('DOMContentLoaded', () => { 

fetch('http://www.localhost:3000/cocktails')
.then(res => res.json())
.then(cocktails => cocktails.forEach(cocktail => renderCocktail(cocktail)))

})


//idk if this is the function
function randomDrink(cocktail) {
const randomDrink = cocktail.forEach((item) => {console.log(item)});
}

function renderCocktail(cocktail){

    const {name, desc, id} = cocktail
    console.log(name, desc, id)
}


//toggle dark-light mode 

const element = document.getElementById("darkButton");

element.addEventListener("click", () => {
   
    document.body.classList.toggle("dark-mode")
});

//random drink button 

const drinks = document.getElementById("clickme");

drinks.addEventListener("click", () => {
    document.getElementById("displayme").innerHTML = console.log(Math.floor(Math.random() * renderCocktail));
}
)





  