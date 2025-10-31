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

    //Utilize `setInterval` for a LOOP structure!
    let damageInterval = setInterval(function() {           
        if (dmgToDeal > 0 && PlayerData.hp > 0) {
            dmgToDeal -= 1;
            PlayerData.hp -= 1; //rate at which health is being configured every iteration :: RATE 1
            healthLabel.textContent = "HP: " + PlayerData.hp;
            if (PlayerData.hp <= 0) {
                PlayerData.element.src = PlayerData.deathImg;
                clearInterval(damageInterval);
                // Respawn after 1 second
                setTimeout(spawn, 1000);
            }
        }
    }, 100); //1000ms = 1 SECOND! :: Refresh rate! -----------------------------------:: RATE 2

};

// ______________________________________________________________________________________

// Display character1's image on the webpage
window.onload = function() {                
    spawn();
};adawd