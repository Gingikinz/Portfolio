let favoriteSciFi = {
    wookie: 'Chewbacca',
    ship: 'Enterprise',
    captain: "Picard",
    potato: "Russet",
    number: 3,
}
let name = document.querySelector("#name")

fetch('https://swapi.co/api/starships/12')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
      name.textContent = myJason.name;
    console.log(myJson.name);
  });