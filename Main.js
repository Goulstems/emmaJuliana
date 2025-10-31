import {Player} from "./Player.js"; //Load the data from Player.js!
//-------------------------------------------------------------------------------------

// Get references to HTML elements
let healthLabel = document.getElementById("healthLabel");
let playerImg = document.getElementById("playerImg");

Player.hp -=150;


// Display character1's image on the webpage
window.onload = function() {                
    spawn();
};

function spawn() {
    // Reset player HP and image
    Player.hp = 100; // Or whatever starting HP you want
    playerImg.src = Player.image;
    Player.element = playerImg;
    healthLabel.textContent = "HP: " + Player.hp;

    let dmgToDeal = 100; // Set amount of damage to deal!
    let damageInterval = setInterval(function() {
        if (dmgToDeal > 0 && Player.hp > 0) {
            dmgToDeal -= 1;
            Player.hp -= 1; //rate at which health is being configured every iteration :: RATE 1
            healthLabel.textContent = "HP: " + Player.hp;
            if (Player.hp <= 0) {
                Player.element.src = Player.deathImg;
                clearInterval(damageInterval);
                // Respawn after 1 second
                setTimeout(spawn, 1000);
            }
        }
    }, 100); //1000ms = 1 SECOND! :: Refresh rate! -----------------------------------:: RATE 2
};

// ______________________________________________________________________________________
