const READLINE = require("readline-sync");


let player = {
  name: undefined
};

console.log();
console.log("*** Welcome to WrlWarZ ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} Wakes up somewhere...`);
console.log(`${player.name} Are you in the city or Are you in a farm?`);
let city = READLINE.question("Do you wake up in a city? (yes or no) ");
   if(city == "n" || city == "no"){
     console.log(`${player.name} wakes up...`);
      let decision = READLINE.question("Do you feel cold or hot?")
      if (decision == "hot"){
       console.log("zombie insects bite and sting you die, Thanks for playing");
      }
      if (decision == "cold"){
       let decision = READLINE.question("It is cold, do you start a fire?");
       if(decision == "n" || decision == "no"){
         console.log("You freeze over and you die, Thanks for playing!");
       }
       if(decision == "y" || decision == "yes"){
         let decision = READLINE.question("you find a axe, and head out of firewood. A zombie sneaks up on you, do you fight or run?");
         if (decision == "run"){
          console.log("You fail to get firewood before the night, you freeze over and die. Thanks for playing! ");
         }
         if(decision == "fight"){
           console.log("You chop the zombie in half. You survive in the farm by growing food and surviving long enough for the zombies to decompose. Thanks for Playing!");
         }
       }
      }
   }
if(city == "y" || city == "yes") {
  console.log(`${player.name} wakes up...`);
  let decision  = READLINE.question("Would you like to visit the Gunshop (1) or a Lab (2)?");
  if (decision == 2){
      let decision = READLINE.question("You enter the lab. There is an eerie silence. You see something that catchs your eye, do you turn it on?");
      if (decision == "yes" || decision == "y"){
       console.log("A beam of light pierces the sky. All zombies get purifed and disintegrated. You win!, Thanks for Playing!");
      }
      if (decision == "no" || decision == "n"){
       console.log("Zombies being to break through the door. They break through and you die, Thanks for Playing!");
      }
     }
  if (decision == 1) {
   let decision = READLINE.question("The Gunshop is empty is would you like a Assault Rifle?(yes or no)");
   if (decision === "y" || decision === "yes") {
     let decision = READLINE.question("There is a horde of zombies approaching you, do you run or fight?");
     if (decision == "run"){
      console.log("you die trying to run, Thanks for playing!");
  }
     if (decision == "fight"){
      console.log("you fight your way out and live long enough for the zombies to decompose, Thanks for playing!");
     }
  }
  if (decision == "n" || decision == "no"){
   console.log("You walk outside and a horde of zombies kill you. Thanks for playing!");
    }
 }
}
