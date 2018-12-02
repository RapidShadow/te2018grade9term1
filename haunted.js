const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  weapon: "fists"
};

console.log();
console.log("*** Welcome to WrlWarZ ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} Wakes up somewhere...`);
console.log(`${player.name} Are you in the city or Are you in a farm?`);
let city = READLINE.question("Do you wake up in a city? (yes or no) ");
if( city == "y" || city == "yes") {
  console.log(`${player.name} wakes up...`);
  let decision  = READLINE.question("Would you like to visit the Gunshop (1) or a Lab (2)?");
  if (decision === 2){
   let decision = READLINE.question("You entered the lab.You find a bunch of machines.One is catching your eye, Do you turn it on?")
    
  }
  if (decision === 1) {
   let decision = READLINE.question("The Gunshop is empty is would you like a Assualt Rifle?(yes or no)");
    if (decision === "y" || decision === "yes") {
      let decision = READLINE.question("There is a horde of zombies apporaching you, do you run or fight?");
    }


 }
}  // continue the story

//} else {
  //console.log(`${player.name} decides not to open the door. However...`);
  // continue the story

//}
//console.log("Thanks for playing!");
