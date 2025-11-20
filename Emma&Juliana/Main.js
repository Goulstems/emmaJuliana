import { spawn } from "./modules/spawn.js";
import { enablePlayerMovement } from "./modules/movement.js";

let healthLabel = document.getElementById("healthLabel");   // References to HTML elements on the webpage
let playerImg = document.getElementById("playerImg");
// let healthBar = document.getElementById("healthBar"); // Health bar element

// ______________________________________________________________________________________

// Display character1's image on the webpage
window.onload = function() {
    spawn(playerImg, healthLabel);
    enablePlayerMovement(playerImg);
    
};