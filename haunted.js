const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,

  weapon: "fists",

};

console.log();
console.log("*** WELCOME TO THE HUSK SIMULATIOR***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} Wakes up somewhere...`);
console.log(`${player.name} Are you in the city or Are you in a farm?`);
let city = READLINE.question("Do you wake up in a city? (yes or no) ");
if( city == "y" || city == "yes") {
  console.log(`${player.name} wakes up...`);
   let decision  = READLINE.question("Would you like to visit the Gunshop (1) or a Lab (2)?");
    if decision == 1 {
      console.log("The Gunshop is empty is would you like a Assualt Rifle(1) , Shotgun(2) , or Sniper Rifle?(3)")
     


  // continue the story

//} else {
  //console.log(`${player.name} decides not to open the door. However...`);
  // continue the story

//}
//console.log("Thanks for playing!");
