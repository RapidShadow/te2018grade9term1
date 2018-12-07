const READLINE = require("readline-sync");

let decision = READLINE.question("Does your brain functionalilty improve via gaming. True or False?");
if (decision === "t" || decision === "true"){
  console.log("Yes, studies have shown that gaming improves brain functionalilty.");
  let decision = READLINE.question("Gaming can cause cancer. True or False?");
  if (decision === "f" || decision === "false"){
    console.log("Gaming does not cause cancer.");
    let decision = READLINE.question("Dsylexia is linked to video games. True or False?");
    if (decision === "f" || decision === "false"){
      console.log("Dsylexia and video games are not linked.");
      let decision = READLINE.question("Can TETRIS help with trauma? True or False?");
      if(decision === "t" || decision === "true"){
        console.log("Yes, the classic TETRIS can help deal with trauma");
        let decision = READLINE.question("Can video games help boost your problem solving skills, math and self confidence? True or False?")
        if(decision === "t" || decision === "true"){
          console.log("video games help boost your problem solving skills, math and self confidence. Thanks for playing! You Win.")
          console.log('This simple "video game" is brought to you by David Ung, Harry Li, and Jayden Huang.')
        }
      }
    }
  }
}
else {
  console.log("You lose. Thats tuff.😂")
}
