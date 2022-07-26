console.info('src/index.js loaded');

function getNewDrinks()

document.addEventListener('DOMContentLoaded', () => { 


  console.log("DOMContentLoaded")
{
  fetch('http://www.thecocktaildb.com/api/json/v1/1/random.php:1')
  .then(res => res.json())
  .then(data => console.log (data))
}

// function getNewDrinks(){
// fetch('http://www.thecocktaildb.com/api/json/v1/1/random.php:1')
//     .then(
//     function(response) {
//         if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//             response.status);
//         return;
//         }

//         // Examine the text in the response
//         response.json().then(function(data) {
//         console.log(data);
//         });
//     }
//     )
    // .catch(function(err) {
    // console.log('Fetch Error :-S', err);
    // });

  getNewDrinks();




  })

  
  //getNewDrinks();




