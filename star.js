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


//card back

const stats = (
    starships.forEach(element => {
    let back = document.createElement('fig2')
    let shipName = document.createElement('h2')
    let shipModel = document.createElement('p')
    let shipClass = document.createElement('p')
    let shipCrew = document.createElement('p')
    let shipDrive = document.createElement('p')
    shipName.textContent = element.name
    shipModel.textContent = element.model
    shipClass.textContent = element.starship_class
    shipCrew.textContent = element.crew
    shipDrive.textContent = element.hyperdrive_rating
    back.appendChild(shipName)
    back.appendChild(shipModel)
    back.appendChild(shipClass)
    back.appendChild(shipCrew)
    back.appendChild(shipDrive)
    //shipContainer.appendChild(statsContainer)
    statsContainer.appendChild(back)
    
    }));
    

    // let statsList = document.createElement('backList')
    // // console.log(stats)
    // statsList.appendChild(stats)


// var cardflip = document.querySelector('#figure');
// cardflip.addEventListener('click', () => { cardflip.classList.toggle('flipped');
// });

// starships.forEach(ship => {
//     let card = document.createElement('div')
//     card.className = "card"
//     card.appendChild(images(ship))
//     card.appendChild(stats(ship))
//     shipContainer.appendChild(card)
//     card.addEventListener( 'click', function () {
//         card.classList.toggle('flipped')
//     })
// })