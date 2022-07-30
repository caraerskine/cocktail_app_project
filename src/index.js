

document.addEventListener('DOMContentLoaded', () => { 

fetch('http://www.localhost:3000/cocktails')
.then(res => res.json())
.then(getCocktails(data))

})

function getCocktails(cocktails){
const {name} = cocktails  
    console.log(name)
}
  
getCocktails(data);

 





  