

document.addEventListener('DOMContentLoaded', () => { 

fetch('http://www.localhost:3000/cocktails')
.then(res => res.json())
.then(cocktails => cocktails.forEach(cocktail => renderCocktail(cocktail)))

})
  
function renderCocktail(cocktail){

    const {name, desc} = cocktail
    console.log(name, desc)
}

 





  