const READLINE = require('readline-sync');

//let userInput = READLINE.question("Type anything and I'll repeat it back!");
//console.log(userInput);

// declare and assign a variable for pennies using readlineSync
// ask the user how many pennies he/she wants change for
let pennies = READLINE.question('Please Put Your Change In For Bigger Change. (>w<)❤️  Pennies:');
console.log(pennies);



let halfDollars = Math.floor (pennies/50);
let pennies2 =pennies%50

// declare, assign, and print how many quarters you can make out of the pennies
let quarters = Math.floor (pennies2/25);
pennies2 = pennies2%25;







// declare, assign, and print how many dimes you can make out of the pennies
let dimes = Math.floor (pennies2/10);
pennies2 = pennies2%10;





// declare, assign, and print how many nickels you can make out of the pennies
let nickels = Math.floor (pennies2/5);
pennies2 = pennies2%5;






let changeBox={
  halfDollars : undefined,
  quarters : undefined,
  dimes : undefined,
  nickels : undefined,
  pennies : undefined
}
changeBox.halfDollars = halfDollars
changeBox.quarters = quarters
changeBox.dimes = dimes
changeBox.nickels = nickels
changeBox.pennies = pennies2

console.log('Change Box',changeBox);

let message = 'ChangeMachine:Thank You!（＾ω＾）';
console.log(message);
