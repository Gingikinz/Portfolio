import { starships } from './assets/starships.js';

console.log(starships)
//console.log(starships[0].name);

const shipContainer = document.querySelector('#container')

var count = 0
var i = 0
while (i <= 25) {
    console.log(starships[count].name)
    count++
    i++
}


starships.forEach(element => {
    let imgName =`${element.name}`
    let fig = document.createElement('figure')
    let cap = document.createElement('figcaption')
    let img = document.createElement('img')
    img.src = `/assets/simg/${imgName}.png`
    cap.textContent = element.ename
    fig.appendChild(img)
    fig.appendChild(cap)
    shipContainer.appendChild(fig)
    //console.log(imgName)
    
});
