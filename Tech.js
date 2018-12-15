const READLINE = require("readline-sync");


let player = {
  name: undefined
};
 player.name = READLINE.question("What is your name to start the adventure?");
 console.log("You wake up in the middle of nowhere with no idea to get home. ");
 let decision = READLINE.question("You walk up to a crossroad and see a peasant. Are you a degenerate heathen and ask the lowly peasant for directions? Yes or No?");
 if (decision === "n" || decision === "no"){
   console.log("You wander out in the forest, and you find 2 roads. ");
   let decision = READLINE.question("Do you choose road 1 or 2?");
   if (decision === "2"){
     console.log("You find a kingdom called Wakanda.");
     let decision = READLINE.question("The king of Wakanda offers you to fight him in a ritual.Yes or No? ");
     if (decision === "n" || decision === "no"){
       console.log("He kills you because you refuse to fight him");
     }
     if (decision === "y" || decision === "yes"){
       console.log("You win and he offers you tojoin the ranks of the generals");
       let decision = READLINE.question("Do you decide to become a general? Yes or No?");
       if (decision === "n" || decision ===  "no"){
           console.log("The king respects your decision and allows you to live your life in the kingdom and gifts you 2 horses and a ancient artifact");
           let decision = READLINE.question("The ancient artifact is ringing do you touch the artifact. Yes or No?");
           if (decision === "n" || decision === "no"){
             console.log ("The artifact stops ringing. Later than night somthing seems off. A eerie silence followed a bright light wakes you up.");
             console.log ("A Emisarry of the artifact appears and takes your life.")
           }
           if (decision === "y" || decision === "yes"){
             console.log("You reach out to the artifact. It make a gong like sound and you have been transported to a land where it is peaceful.");
             console.log("Something seems off though. There are men with the body of a horse. Who shoots the escapees from the blood river conjured from the horrific screams of the lost souls.");
             let decision = READLINE.question("You see a mountain that seems familiar but you don't know why. Do you walk towards it? Yes or No?");
             if (decision === "n" || decision === "no"){
               console.log("the land seems to have no end and you eternal wander this plane until one day you teleport back to your house in the kingdom.");
               console.log("You forgot your family and live without a trace of your previous life.")
             }
             if (decision === "y" || decision === "yes"){
               console.log("You cross the phlegethon, and mountain is really a island.");
               console.log("You travel to the island and find a castle beneath a lake.");
               let decsion = READLINE.question("A lady comes out of the castle. Do you talk to her(1) or Do you walk away(2)?");
               if (decision === "2"){
                 console.log("You eternally wander the new era missing everyone you love.")
               }
               if (decision === "1"){
                 console.log("She knews you and transports you back to your era and place. Your parents are in the corner crying of joy. You live a happy life");

               }
             }


           }
       }

       if (decision === "y" || decision === "yes"){
         console.log("The king is happy with your answer.");
         let decision = READLINE.question("The kingdom is being crusaded by the western kingdom of Liagmereia. Do you stand and fight(1) or Do you run and hide(2)");
         if (decision === '1'){
           console.log("You fight to the death and successfully defend against the western kingdom of Liagmereia.");
           console.log("Later that night, a assassin sent by the Liagmereia stabs you.");
           console.log("He kills you but you also kill him in the process.");
         }
         if (decision === "2"){
           console.log("The pandemonium caused you to run and hide.");
           console.log("You feel hopeless and commit suicide before they can get you.");
         }


       }
     }

   }
   if (decision === "1"){
     console.log("you get lost in the forest with no sign of civilization.");
     console.log("you eventually starve and regret your entire existence.");
   }
 }
 if (decision === "y" || decision === "yes"){
   console.log("The peasant is infected with a plague called Myera, but you realize you aren't in your era or place.");
   console.log("He explains that because he is a lowley peasant, he was infected by a rat that had Myera.");
   let decision = READLINE.question('Myera is a plague that kills you via disintegratiton once the victim had Myera for 12 years. Do you commit suicide(1) or try to save yourself(2)?');
   if (decision === "1"){
     console.log("You commit suicide by jumping off a cliff.");
     console.log("You wake up in a hostipal with your parents crying of joy that their beloved child has awoken for their coma.");
     console.log("You feel a intense pain in your heart. The doctors rush in, your heart fails and you die.");
     console.log("The parents are crushed from this new revelation, Your dad becomes pessimistic and alcoholic.");
     console.log("He dies of liver failure. After, your Mother loses her child and her husband, she jumps off a bridge.");
   }
   if (decision === "2"){
     console.log("You wander into the forest and eventually you find a kingdom.");
     console.log("They let you inside and begin your life.");
     let decision = READLINE.question("The king offers you to be able to train to become a knight. Do you wish to become a knight? Yes or No?");
     if (decision === 'n' || decision === "no"){
       console.log('You became a peaceful villager, and start a family after 1 year? Yes or No?');
       let decision = READLINE.question("Do you decide to have kids? Yes or No?");
       if (decision === 'y' || decision === "yes"){
         console.log("After 10 years, you leave your significant other because of Myera and your two children are asking where you are.");
         console.log("Your significant other tries to explain that you aren't coming back. Everynight, your significant other cries themself to sleep.");
         console.log("They dont commit suicide because of the burden of children.");
         console.log("Your eldest son understands you will never come back, but you youngest son doesnt understand death yet.")
       }
       if (decision === 'n' || decision === "no"){
         console.log("You died after 12 years and your significant other is overcome with grief");
         console.log('They die of suicide.');
       }

     }
     if (decision === "y" || decision === "yes"){
       console.log("You train to become a knight. You go to your first war againist the Wakanda kingdom ");
       let decision = READLINE.question("Do listen to the general and retreat(1) or Do you kill the general and take over the troops(2)?")
       if (decision === "1"){
         console.log("You die retreating from the Wakandian army. You see the horror in your comrades as your best friend watchs you bleed out.");
       }
       if (decision === "2"){
         console.log("You kill the general and the troops listen to you and win the war.");
         console.log("you return to the kingdom and the king talks to you in person.");
         let decision = READLINE.question('The king is thankful and offers you to be his advisor or a general. Do you become a advisor(1) or general(2)?');
         if (decision === "2"){
           console.log("A assassin stabs you to death.");
           console.log("He explains that his brother was the general.");
         }
         if (decision === "1"){
           console.log("After service to the king for 4 years, he dies.");
           let decision = READLINE.question("Do you step up as the king(1), or do you let the princess become the queen(2).");
           if (decision === "2"){
             console.log("The princess after her father's death ruled the kingdom with a iron fist");
             console.log("The citizens were not pleased with their new leader, they overthrew her and killed you in the process.")
           }
           if(decision === "1"){
             console.log("You become the king. You find out the eastern king Altheon has a exlir that can grant the person immortality.");
             let decision = READLINE.question('Do you decide to crusade the eastern king. Yes or No?');
             if (decision === "n" || decision === "no"){
               console.log('The next couple of years the eastern kingdom is running out of resources.');
               console.log('The invade and you die in the invasion.')
             }
             if (decision === "y" || decision === "yes"){
               console.log("You conquer the land and take the exlir of life.");
               console.log(`Congrats you don't die to Myera and rule the kingdom forever.`);
             }
           }
         }

       }
     }
   }





 }
