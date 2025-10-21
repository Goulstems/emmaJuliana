import {Player} from "./Player.js"; //Load the data from Player.js!
//-------------------------------------------------------------------------------------

// Get references to HTML elements
let healthLabel = document.getElementById("healthLabel");
let playerImg = document.getElementById("playerImg");

Player.hp -=150;


// Display character1's image on the webpage
window.onload = function() {                
    
    // Set up player image
    playerImg.src = Player.image;
    Player.element = playerImg;
    
    // Update health label after damage
    healthLabel.textContent = "HP: " + Player.hp;

    //TODO: LOOP via `setInterval` method!

    let dmgToDeal = 50;           //Set amount of damage to deal!
    setInterval(function() {      
        if (dmgToDeal > 0) {           // Only if there's still damage to deal
            dmgToDeal -= 1;            // Decrement damage counter
            Player.hp -= 1;            // Deal 1 damage
            healthLabel.textContent = "HP: " + Player.hp;
            if (Player.hp <= 0) {
                Player.element.src = Player.deathImg;
            }
        }
    }, 10); // Every 16 ms ~ 60 FPS :: FRAMES PER SECOND! :: Refresh rate!
};

// ______________________________________________________________________________________
