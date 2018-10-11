let favoriteSciFi = {
    wookie: 'Chewbacca',
    ship: 'Enterprise',
    captain: "Picard",
    potato: "Russet",
    number: 3,
}
let name = document.querySelector("#name")

fetch('https://swapi.co/api/starships')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    // ship.textContent = myJason.xWing;
    // see the video for this
    // console.log(myJson);
    myJson.results.forEach( (ship) => {
      console.log(ship.results.name)
    })
  });
  



  // var x = (is assigned the value of) document('a'). The following thing will only apply to the first 'a' thing. //
    // var link = document.querySelector('a');
    // Console log: will come up in the browser console.
    // console.log("Hi, I am a ginger");
    // console.error('Bad things! Oh no!');

    // console.log(link);
    // uncomment following lines to see the change it would make.
    // link.textContent = 'Mozilla Developer Network'
    // link.href = 'https://developer.mozilla.org/en-US/' 

    // var welcome = document.querySelector('#welcome-section');
    // var para = document.createElement('p');
    // para.textContent = 'We hope you enjoyed this page!';
    // welcome.appendChild(para);

    // var text = document.createTextNode(' - The premier source for web development knowledge.');
    // var linkPara = document.querySelector('p');
    // linkPara.appendChild(text);

    // var git = document.querySelector('#profile-link-text')
    // git.textContent = 'This is the link to my Github profile: click here to go there!'
    
    // var checkOut = document.querySelector('#project-header')
    // var subtitle = document.createElement('p')
    // subtitle.textContent = "Potatoes are really good too, but they don't have much to do with this! (This text is a script experiment)"
    // checkOut.appendChild(subtitle)
    // Watch the videos!
  