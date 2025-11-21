import {EnemyData} from './data/EnemyData.js';
// import {PlayerData} from './data/PlayerData.js';
export {spawnEnemies};

function spawnEnemies(){
    // Create multiple enemies
    const numberOfEnemies = 1000;
    
    for (let i = 0; i < numberOfEnemies; i++) {
        // Create image element
        const enemyImg = document.createElement('img');
        enemyImg.src = EnemyData.image;
        enemyImg.alt = EnemyData.name;
        enemyImg.className = EnemyData.class;
        
        // Set random starting position
        enemyImg.style.left = Math.random() * (window.innerWidth - 150) + 'px';
        enemyImg.style.top = Math.random() * (window.innerHeight - 200) + 'px';
        
        // Add image to document
        document.body.appendChild(enemyImg);
    }
}