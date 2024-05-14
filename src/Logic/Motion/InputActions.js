import { game } from '../../../app.js';

export class InputActions {
    static handleShootKeyDown() {
        if (!game.state.time) {
            game.state.startGame();
            //CANVAS.requestFullscreen();
        }
        game.player.unsetShoot(); // used to prevent stuck to autoshooting by accident
        game.player.setShoot();
    }

    static handleShootKeyUp() {
        game.player.unsetShoot();
    }

    static handleSlowmoKeyDown() {
        game.state.startSlowmo();
    }

    static handleSlowmoKeyUp() {
        game.state.stopSlowmo();
    }

    static handlePauseKeyDown() {
        if (!game.state.over) {
            game.state.togglePause();
        } else {
            game.state.replay();
        }
    }
}
