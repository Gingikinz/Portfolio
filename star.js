import { starships } from './assets/starships.js';

console.log(starships)
//console.log(starships[0].name);

const shipContainer = document.querySelector('#container')
const statsContainer = document.querySelector('#sContainer')
// var count = 0
// var i = 0
// while (i <= 25) {
//     console.log(starships[count].name)
//     count++
//     i++
// }

let images = (
    starships.forEach(element => {
    let imgName =`${element.name}`
    let fig = document.createElement('figure')
    let cap = document.createElement('figcaption')
    let img = document.createElement('img')
    img.src = `/assets/simg/${imgName}.png`
    cap.textContent = element.name
    fig.appendChild(img)
    fig.appendChild(cap)
    shipContainer.appendChild(fig)
    //console.log(imgName)
    
}));

console.log(images)
//card back

let stats = (
    starships.forEach(element => {
    let back = document.createElement('fig2')
    let shipName = document.createElement('h2')
    let shipModel = document.createElement('p')
    let shipClass = document.createElement('p')
    let shipCrew = document.createElement('p')
    let shipDrive = document.createElement('p')
    shipName.textContent = element.name
    shipModel.textContent = `Model: ${element.model}`
    shipClass.textContent = `Class: ${element.starship_class}`
    shipCrew.textContent = `Crew: ${element.crew}`
    shipDrive.textContent = `Hyperdrive rating: ${element.hyperdrive_rating}`
    statsContainer.appendChild(shipName)
    statsContainer.appendChild(shipModel)
    statsContainer.appendChild(shipClass)
    statsContainer.appendChild(shipCrew)
    statsContainer.appendChild(shipDrive)
    shipContainer.appendChild(statsContainer)
    console.log(statsContainer)
    
    }));
console.log(stats)
console.log(starships.name)


    // let statsList = document.createElement('backList')
    // // console.log(stats)
    // statsList.appendChild(stats)


var thing = document.querySelector('figure');
thing.addEventListener( 'click', function() {
    thing.classList.toggle('flipped');
});