import { game } from '../../../app.js';
import { PLAYERSPRITE } from '../../Assets/Player.js';
import { Shield } from './Shield.js';
import { Flame } from './Flame.js';
import { Clock } from '../../Objects/Clock.js';
import { SlowmoGauge } from './SlowmoGauge.js';
import { Animation } from '../../Effects/Misc/Animation.js';
import { SceneUtils } from '../../Scene/SceneUtils.js';
import { Shotgun } from '../../Objects/Shotgun.js';
import { CANVAS } from '../../Assets/Other.js';

const SPEED = 6; // default player speed
const RADIUS = 13; // player hitbox radius. 13 matches the current sprite
const DEFAULTSHOOTINGRATE = 150; // default shooting rate (speed) if not upgraded to machine gun

export class Player {
    constructor() {
        this.x = CANVAS.width / 2;
        this.y = CANVAS.height / 2;
        this.radius = RADIUS;
        this.sprite = PLAYERSPRITE;

        this.flame = new Flame();
        this.slowmogauge = new SlowmoGauge();
        this.shield = new Shield();
        this.clock = new Clock();
        this.shotgun = new Shotgun();
    }

    move() {
        const speed = game.state.slowmo ? SPEED * game.slowmocontroller.slowmorate : SPEED;

        if (game.inputdetection.pressedMovementKeys.up) this.y -= speed;
        if (game.inputdetection.pressedMovementKeys.down) this.y += speed;
        if (game.inputdetection.pressedMovementKeys.left) this.x -= speed;
        if (game.inputdetection.pressedMovementKeys.right) this.x += speed;
    }

    shoot() {
        game.effects.add(new Animation(game.player.x, game.player.y - 15, 'smoke_normal'));
        if (game.buffcontroller.mute || this.clock.active) {
            SceneUtils.shakeScreen(2, 0.25);
            game.audiocontroller.playSound('noammo');
        } else {
            // audio
            game.audiocontroller.playSound('laser');

            // rockets
            let weapon = game.itemactioncontroller.getWeaponType();

            // spray
            game.itemactioncontroller.shootSpray(weapon);

            // seekers
            if (game.enemies.enemiesOnScreen() && game.itemactioncontroller.seekers) {
                game.itemactioncontroller.shootSeeker();
            }

            // darts
            if (game.itemactioncontroller.darts) {
                game.itemactioncontroller.shootDart();
            }

            // shotgun
            if (this.shotgun.owned && this.shotgun.isLoaded()) {
                this.shotgun.shoot();
            }

            // quad-damage & thor's hammer
            if (game.buffcontroller.quaddamage || game.buffcontroller.thorshammer) {
                SceneUtils.shakeScreen(3, 0.25);
            }
        }
    }

    setShoot() {
        const rate = game.itemactioncontroller.machinegun
            ? game.itemactioncontroller.machinegunrate
            : DEFAULTSHOOTINGRATE;
        this.shoot();
        this.shootInterval = setInterval(this.shoot.bind(this), rate);
    }

    unsetShoot() {
        clearInterval(this.shootInterval);
    }
}
