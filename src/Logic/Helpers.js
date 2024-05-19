import { game } from '../../app.js';

// min & max are inclusive
export function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getGametimeToMMSS() {
    let minutes = Math.floor(game.state.time / 60);
    let seconds = game.state.time % 60;

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return `${minutes}:${seconds}`;
}

export function getClosestEnemyTo(entity) {
    let distance = 9999;
    let closestEnemy;
    game.enemies.liveEnemies.forEach((enemy) => {
        const dx = enemy.x - entity.x;
        const dy = enemy.y - entity.y;

        const squared = dx * dx + dy * dy;
        const newDistance = Math.sqrt(squared);

        if (newDistance < distance) {
            distance = newDistance;
            closestEnemy = enemy;
        }
    });
    return closestEnemy;
}
