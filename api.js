import { senatorData } from './assets/senators.js';
//console.log(senators);

const senators = senatorData.results[0].members;



console.log(senators)
const republicans = senators.filter(senator => senator.party === "R");

console.log(republicans);

const democrats = senators.filter(senator => senator.party ==="D");

console.log(democrats);

const voteMostRepub = republicans.reduce((acc, vote) => republicans.total_votes ||  0 )

console.log(voteMostRepub);

//console.log(republicans);