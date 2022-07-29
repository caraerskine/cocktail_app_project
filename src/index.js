console.info('src/index.js loaded');

// function getNewDrinks()

document.addEventListener('DOMContentLoaded', () => { 

console.log("DOMContentLoaded")
// {
 
//   fetch('http://www.thecocktaildb.com/api/json/v1/1/random.php:1')
//   .then(res => res.json())
//   .then(data => console.log (data))
// }

//   getNewDrinks();

//   })

  
 //Alternate fetch I found 

function getNewDrinks(){
fetch('http://www.thecocktaildb.com/api/json/v1/1/random.php:1')
    .then(
    function(response) {
        if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
        console.log(data);
        });
    }
    )
    .catch(function(err) {
    console.log('Fetch Error :-S', err);
    });

  getNewDrinks();



  }})


  //10 cocktails
  //for each or map to itierate over array for cocktails 
  //dark light mode "click event"
  //see many cocktails
  //see a random cocktail
  //clearing the field, is not redirect 
  //assesment by the 12th
  //1-get all cocntails on one page (60-70% project requirements)
  //2-can the random cocktail button work?
  //could people add their own cocktails?
  //localhost300/cocktails
  //return would be an array of datda
  //for each or a map to craete li's or cards
  //objects should have an id or else back end will have problems
  // onece you return data you can play wiuth it

  //book a meeting before the assesment 1:1 for a code challenge

  //Monday after 6 pm 
  //weds after 4:00 is ok 
  //thurs 5:30
  //office hours 