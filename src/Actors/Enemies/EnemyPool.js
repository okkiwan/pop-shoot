import { game } from '../../../app.js';
import { CANVAS } from '../../Assets/Other.js';
import { RedPackage } from '../Packages/RedPackage.js';
import { Slash } from '../../Effects/Misc/Slash.js';

export class EnemyPool {
    constructor() {
        this.liveEnemies = [];
    }

    add(enemy) {
        this.liveEnemies.push(enemy);

        if (game.state.slowmo) {
            game.slowmocontroller.applyToOneEnemy(enemy);
        }
    }

    move() {
        if (!game.player.clock.active) {
            this.liveEnemies.forEach((enemy) => {
                if (!enemy.stunned) {
                    enemy.move();
                }
            });
        }
    }

    damageAll(amount) {
        this.liveEnemies.forEach((enemy) => {
            enemy.takeDamage(amount);
            game.effects.add(new Slash(enemy.x, enemy.y));
        });
    }

    clear(noCash) {
        // noCash = true, enemies are cleared & cash is not counted
        if (noCash) {
            this.liveEnemies = this.liveEnemies.filter((enemy) => {
                // cleanup() function clears trailing boss timeouts & long-lasting sounds
                if (enemy.cleanup !== undefined) {
                    enemy.cleanup();
                }
                return false;
            });
        }
        // noCash = false, enemies are killed normally & cash will be counted
        else {
            this.liveEnemies.forEach((enemy) => (enemy.hp = 0));
        }
    }

    enemiesOnScreen() {
        return this.liveEnemies.length;
    }

    refresh() {
        this.liveEnemies = this.liveEnemies.filter((enemy) => {
            const isRedPackage = enemy.constructor === RedPackage;
            const isOnScreen = enemy.y <= CANVAS.height;
            const isAlive = enemy.hp > 0;

            // call die() function on killed enemies & remove them
            if (!isAlive && isOnScreen) {
                enemy.die();
                return false;
            }

            // redpackage has left the screen limits
            if (isRedPackage && !isOnScreen) {
                enemy.vanish();
                return false;
            }

            // keep living enemies only if still on-screen
            if (isAlive && isOnScreen) {
                return true;
            }
        });
    }
}
