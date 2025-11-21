import { spawn } from "./modules/PlayerSpawn.js";
import { enablePlayerMovement } from "./modules/PlayerMovement.js";
import { spawnEnemies } from "./modules/enemies.js";

let healthLabel = document.getElementById("healthLabel");   // References to HTML elements on the webpage
let playerImg = document.getElementById("playerImg");
// let healthBar = document.getElementById("healthBar"); // Health bar element

// ______________________________________________________________________________________

// Display character1's image on the webpage
window.onload = function() {
    spawn(playerImg, healthLabel);
    enablePlayerMovement(playerImg);
    spawnEnemies();
};