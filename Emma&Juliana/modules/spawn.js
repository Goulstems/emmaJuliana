import { PlayerData } from "./PlayerData.js";

export function spawn(playerImg, healthLabel, dmgToDealInit = 100) {
    let dmgToDeal = dmgToDealInit;
    function doSpawn() {
        PlayerData.hp = 100;
        playerImg.src = PlayerData.image;
        PlayerData.element = playerImg;
        healthLabel.textContent = "HP: " + PlayerData.hp;
        let damageInterval = setInterval(function() {
            if (dmgToDeal > 0 && PlayerData.hp > 0) {
                dmgToDeal -= 1; PlayerData.hp -= 1;
                healthLabel.textContent = "HP: " + PlayerData.hp;
                if (PlayerData.hp <= 0) {
                    PlayerData.element.src = PlayerData.deathImg;
                    clearInterval(damageInterval);
                    setTimeout(doSpawn, 1000);
                }
            }
        }, 100);
    }
    doSpawn();
}
