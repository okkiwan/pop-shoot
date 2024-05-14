import { game } from '../../../app.js';
import {
    FLAME0SPRITE,
    FLAME1SPRITE,
    FLAME2SPRITE,
    FLAME3SPRITE,
    FLAME4SPRITE,
    FLAME5SPRITE,
    FLAME6SPRITE,
    FLAME7SPRITE,
    FLAME8SPRITE,
    FLAME9SPRITE,
    FLAME10SPRITE,
    FLAME11SPRITE,
} from '../../Assets/Player.js';
import { Animation } from '../../Effects/Misc/Animation.js';
import { randomInRange } from '../../Logic/Helpers.js';

const SPRITE = [
    FLAME0SPRITE,
    FLAME1SPRITE,
    FLAME2SPRITE,
    FLAME3SPRITE,
    FLAME4SPRITE,
    FLAME5SPRITE,
    FLAME6SPRITE,
    FLAME7SPRITE,
    FLAME8SPRITE,
    FLAME9SPRITE,
    FLAME10SPRITE,
    FLAME11SPRITE,
];

const DEFAULT_SPEED = 100; // sprite change speed in ms
const SLOWMO_SPEED = 500; // sprite change speed when in slowmo
const VERTICAL_OFFSET = 26; // offset of y position below the player where the flame is drawn
const SMOKE_OFFSET = 10; // offset of y position below the player where the flame is drawn

export class Flame {
    constructor() {
        this.yOffset = VERTICAL_OFFSET;
        this.sprite = FLAME0SPRITE;
        this.setSpriteChanger(DEFAULT_SPEED);
    }

    setSpriteChanger(speed) {
        this.spriteChanger = setInterval(() => {
            this.sprite = SPRITE[randomInRange(0, SPRITE.length - 1)];
        }, speed);
    }

    toggleSpeed() {
        // clear previously running sprite changing interval
        clearInterval(this.spriteChanger);

        // get appropriate flame speed
        const speed = game.state.slowmo ? SLOWMO_SPEED : DEFAULT_SPEED;

        // set sprite changer
        this.setSpriteChanger(speed);
    }

    move({ smoketype }) {
        this.yOffset = game.player.slowmogauge.charge * (VERTICAL_OFFSET / 100);
        if (Math.round(this.yOffset) % 2 === 0 && smoketype)
            game.effects.add(new Animation(game.player.x, game.player.y + this.yOffset + SMOKE_OFFSET, smoketype));
    }

    get x() {
        return game.player.x;
    }

    get y() {
        return game.player.y + this.yOffset;
    }
}
