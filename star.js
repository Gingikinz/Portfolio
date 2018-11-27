import { starships } from './assets/starships.js';

console.log(starships)
//console.log(starships[0].name);

const shipContainer = document.querySelector('#container')
//const statsContainer = document.querySelector('#scontainer')

starships.forEach(starship => {
let card = document.createElement('div')
card.className = 'card'
card.addEventListener( 'click', () =>  {
    card.classList.toggle('flipped');})
let fig = document.createElement('figure')
fig.className = 'card__face card__face--front'
let cap = document.createElement('figcaption')
let img = document.createElement('img')
img.src = `/assets/simg/${starship.name}.png`
cap.textContent = starship.name
fig.appendChild(img)
fig.appendChild(cap)

card.appendChild(fig)

let back = document.createElement('figure')
back.className = 'card__face card__face--back'
let shipName = document.createElement('h2')
let shipModel = document.createElement('p')
let shipClass = document.createElement('p')
let shipCrew = document.createElement('p')
let shipDrive = document.createElement('p')
shipName.textContent = starship.name
shipModel.textContent = `Model: ${starship.model}`
shipClass.textContent = `Class: ${starship.starship_class}`
shipCrew.textContent = `Crew: ${starship.crew}`
shipDrive.textContent = `Hyperdrive rating: ${starship.hyperdrive_rating}`
back.appendChild(shipName)
back.appendChild(shipModel)
back.appendChild(shipClass)
back.appendChild(shipCrew)
back.appendChild(shipDrive)

card.appendChild(back)
shipContainer.appendChild(card)



    
 
});


//     starships.forEach(starship => {
//     let back = document.createElement('figure')
//     let shipName = document.createElement('h2')
//     let shipModel = document.createElement('p')
//     let shipClass = document.createElement('p')
//     let shipCrew = document.createElement('p')
//     let shipDrive = document.createElement('p')
//     shipName.textContent = starship.name
//     shipModel.textContent = `Model: ${starship.model}`
//     shipClass.textContent = `Class: ${starship.starship_class}`
//     shipCrew.textContent = `Crew: ${starship.crew}`
//     shipDrive.textContent = `Hyperdrive rating: ${starship.hyperdrive_rating}`
//     back.appendChild(shipName)
//     back.appendChild(shipModel)
//     back.appendChild(shipClass)
//     back.appendChild(shipCrew)
//     back.appendChild(shipDrive)
    
//     //statsContainer.appendChild(back)

//     shipContainer.appendChild(back) /*Works*/
// //shipContainer.appendChild(statsContainer)
// //console.log(statsContainer)
// });

//console.log(starships.name)


    // let statsList = document.createElement('backList')
    // // console.log(stats)
    // statsList.appendChild(stats)

 
// var flip = document.querySelector('figure');
// flip.addEventListener( 'click', function() {
//     flip.classList.toggle('flipped');
// });