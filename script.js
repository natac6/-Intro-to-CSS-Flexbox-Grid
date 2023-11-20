let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainTitle = document.getElementById('main-title'); // or document.querySelector('#main-title');
  mainTitle.textContent = 'My name is DOM Toretto';

  // Part 2
  document.body.style.backgroundColor = 'hotpink';

  // Part 3
  const favoriteThingsList = document.getElementById('favorite-things');
  const lastListItem = favoriteThingsList.lastElementChild;
  favoriteThingsList.removeChild(lastListItem);


  // Part 4
  const specialTitles = document.querySelectorAll('.special-title');
  specialTitles.forEach(title => {
    title.style.fontSize = '2rem';
  });


  // Part 5
  // Assuming the Past Races list has an id of "past-races"
  var pastRacesList = document.getElementById("past-races");
  // Get all list items in the Past Races list
  var raceItems = pastRacesList.getElementsByTagName("li");
  // Loop through the list items to find and remove the one with text content "Chicago"
  for (var i = 0; i < raceItems.length; i++) {
      if (raceItems[i].textContent === "Chicago") {
          // Remove the list item
          pastRacesList.removeChild(raceItems[i]);
          break; // Exit the loop once Chicago is removed
      }
  }
 
  // Part 6
  // Assuming the Past Races list has an id of "past-races"
  var pastRacesList = document.getElementById("past-races");

  // Create a new list item element
  var newCityItem = document.createElement("li");

  // Set the text content to the name of the new city
  newCityItem.textContent = "New York";

  // Append the new list item to the Past Races list
  pastRacesList.appendChild(newCityItem);


  
  // Part 7 code
  const mainDiv = document.querySelector('.main')
  const newDiv = document.createElement('div')
  newDiv.setAttribute('class','blog-post purple')
  mainDiv.appendChild(newDiv)
  const header2 = document.createElement('h1')
  newDiv.appendChild(header2)
  header2.textContent = "New York"
  const paragraph = document.createElement('p')
  paragraph.textContent='I drove my car across James River'
  newDiv.appendChild(paragraph)
  const domAdventureEl = document.getElementById('dom-adventures')
  domAdventureEl.insertAdjacentElement('afterend', newDiv)

  // Part 8
  const quoteTitleEl = document.querySelector('#quote-title')
  quoteTitleEl.addEventListener('click',function(event){
    randomQuote()
  })

  // Part 9
  const blogPosts = document.querySelectorAll('.blog-post')
        for(let i=0;i<blogPosts.length;i++){
          blogPosts[i].addEventListener('mouseenter',function(event){

              blogPosts[i].classList.toggle('purple')

            blogPosts[i].classList.toggle('red')

          })

          blogPosts[i].addEventListener('mouseout',function(event){


             blogPosts[i].classList.toggle('red')

            blogPosts[i].classList.toggle('purple')
          })
   }



});g