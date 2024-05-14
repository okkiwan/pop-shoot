import { game, gameloop } from '../../../app.js';
import { OrangePackage } from '../../Actors/Packages/OrangePackage.js';
import { RedPackage } from '../../Actors/Packages/RedPackage.js';
import { SceneUtils } from '../../Scene/SceneUtils.js';

export class Debugging {
    static showHitboxes = false;

    static toggleHitboxes() {
        this.showHitboxes = !this.showHitboxes;
    }

    static toggleWeather() {
        game.weathercontroller.toggleWeather();
    }

    static goToBoss() {
        Debugging.warpToStage({ stage: game.state.stage, boss: true });
    }

    static clearEnemies() {
        game.enemies.clear();
    }

    static warpToStage({ stage, boss }) {
        SceneUtils.flashScreen();
        SceneUtils.shakeScreen(3, 1);
        game.state.boss = false;
        game.state.stage = stage;
        game.state.time = boss ? 300 * stage + 290 : 300 * stage + 1;
        game.audiocontroller.rewindMusic();
        game.audiocontroller.updateMusic();
        game.weathercontroller.stopWeather();
        game.buffcontroller.init();
        game.enemies.clear(true);
        game.firelasers.clear();
        game.bluelasers.clear();
        game.effects.clear();
        game.state.addStageNotification();
    }

    static unsetGameover() {
        if (game.state.over) {
            game.state.over = false;
            game.firelasers.clear();
            game.player.shield.charge = 100;
            window.requestAnimationFrame(gameloop);
            game.audiocontroller.updateMusic();
        }
    }

    static spawnRedPackage() {
        game.enemies.add(new RedPackage());
    }

    static spawnOrangePackage() {
        game.enemies.add(new OrangePackage());
    }

    static dropItem() {
        game.itemdropcontroller.drop();
    }

    static clearItems() {
        game.itemdropcontroller.init();
        game.itemactioncontroller.init();
        game.slowmocontroller.init();
        game.player.clock.init();
        game.player.shotgun.init();
    }
}
