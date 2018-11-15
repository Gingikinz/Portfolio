import { pokemon } from './assets/pokedex.js';

console.log(pokemon.ename);
console.log(pokemon)

const pokeContainer = document.querySelector('#container')
let count = 1

pokemon.forEach(element => {
    let numPrefix = count < 10 ? '00' : '0'
    let imgName =`${numPrefix}${count++}${element.ename}`
    let fig = document.createElement('figure')
    let cap = document.createElement('figcaption')
    let img = document.createElement('img')
    img.src = `/assets/img/${imgName}.png`
    cap.textContent = element.ename
    fig.appendChild(img)
    fig.appendChild(cap)
    pokeContainer.appendChild(fig)
    //console.log(imgName)
})


let newCard = {
    "base": {
        "Attack": 49, 
        "Defense": 49, 
        "HP": 45, 
        "Sp.Atk": 65, 
        "Sp.Def": 65, 
        "Speed": 45
    }, 
    "cname": "\u5999\u86d9\u79cd\u5b50", 
    "ename": "Bulbasaur", 
}

let button = document.querySelector('#newButtonCard')
button.addEventListener('click', () => {
    console.log("thanksforClicking")
    let card = codument.createElement('div')
    card.className = "card"
    card.appendChild(frontFig(newCard))
    card.appendChild(infoDiv(newCard))
    card.addEventListener('click', function() {
        
    })

    pokemon.push(newCard)
})

