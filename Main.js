//[[Project dependencies]]

import {PlayerData} from "./PlayerData.js";     //`Player.js` holds all the data/information about the Player entity!

let healthLabel = document.getElementById("healthLabel");   // References to HTML elements on the webpage
let playerImg = document.getElementById("playerImg");
let dmgToDeal = 100; // Set amount of damage to deal!

//------------------------------------------------------------------------------------

// Define a `spawn` function to be called intially, and on resets!
function spawn() {                                                    
    PlayerData.hp = 100;                                    //Initialize the player!
    playerImg.src = PlayerData.image;
    PlayerData.element = playerImg;
    healthLabel.textContent = "HP: " + PlayerData.hp;       //Update their health label

    //[[DAMAGE HANDLING]]
    //Utilize `setInterval` for a LOOP structure!
    let damageInterval = setInterval(function() {           
        if (dmgToDeal > 0 && PlayerData.hp > 0) {           //As long as the player is alive, and there is damage to deal
            dmgToDeal -= 1; PlayerData.hp -= 1;             //Deal damage, update Label
            healthLabel.textContent = "HP: " + PlayerData.hp;
            if (PlayerData.hp <= 0) {                       //If the playerHealth has reached 0,
                PlayerData.element.src = PlayerData.deathImg;   //Symbolize death state (switch sprite to deathImg)
                clearInterval(damageInterval);                  //Utilize `clearInterval` to STOP LOOPING
                // Respawn after 1 second
                setTimeout(spawn, 1000);                        //Recall `spawn` after 1 second! (respawn the player!)
            }
        }
    }, 100); //Refresh rate :: 100ms = 1/10th of a second!

};

// ______________________________________________________________________________________

// Display character1's image on the webpage
window.onload = function() {                
    spawn();
};