import { CANVAS } from '../../Assets/Other.js';
import { Debugging } from '../State/Debugging.js';
import { InputActions } from './InputActions.js';

// movement
const UP = 'KeyW';
const DOWN = 'KeyS';
const LEFT = 'KeyA';
const RIGHT = 'KeyD';
const SHOOT = 'KeyK';
const SLOWMO = 'ShiftLeft';
const PAUSE = 'Space';

// debugging
const UNSETGAMEOVER = 'KeyP';
const DROPITEM = 'Enter';
const CLEARITEMS = 'Backspace';
const STAGEBUTTONS = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5'];
const BOSS = 'KeyB';
const REDPACKAGE = 'KeyR';
const ORANGEPACKAGE = 'KeyO';
const CLEARENEMIES = 'KeyX';
const TOGGLEWEATHER = 'KeyV';
const TOGGLEHITBOXES = 'KeyH';

export class InputDetection {
    constructor() {
        this.pressedMovementKeys = {
            up: false,
            down: false,
            left: false,
            right: false,
        };
        this.addKeyUpListeners();
        this.addKeyDownListeners();
        this.disableRightClickMenu();
    }

    addKeyUpListeners() {
        document.addEventListener('keydown', (e) => {
            if (e.repeat) return; // prevent unexpected behaviour due to button being held down

            // movement
            if (e.code === UP) this.pressedMovementKeys.up = true;
            if (e.code === DOWN) this.pressedMovementKeys.down = true;
            if (e.code === LEFT) this.pressedMovementKeys.left = true;
            if (e.code === RIGHT) this.pressedMovementKeys.right = true;

            // action
            if (e.code === SHOOT) InputActions.handleShootKeyDown();
            if (e.code === SLOWMO) InputActions.handleSlowmoKeyDown();
            if (e.code === PAUSE) InputActions.handlePauseKeyDown();

            // debugging
            if (e.code === UNSETGAMEOVER) Debugging.unsetGameover();
            if (e.code === DROPITEM) Debugging.dropItem();
            if (e.code === CLEARITEMS) Debugging.clearItems();
            if (e.code === BOSS) Debugging.goToBoss();
            if (e.code === REDPACKAGE) Debugging.spawnRedPackage();
            if (e.code === ORANGEPACKAGE) Debugging.spawnOrangePackage();
            if (e.code === CLEARENEMIES) Debugging.clearEnemies();
            if (e.code === TOGGLEWEATHER) Debugging.toggleWeather();
            if (e.code === TOGGLEHITBOXES) Debugging.toggleHitboxes();
            STAGEBUTTONS.forEach((button, index) => {
                if (e.code === button) Debugging.warpToStage({ stage: index, boss: false });
            });
        });
    }

    addKeyDownListeners() {
        document.addEventListener('keyup', (e) => {
            // movement
            if (e.code === UP) this.pressedMovementKeys.up = false;
            if (e.code === DOWN) this.pressedMovementKeys.down = false;
            if (e.code === LEFT) this.pressedMovementKeys.left = false;
            if (e.code === RIGHT) this.pressedMovementKeys.right = false;

            // action
            if (e.code === SHOOT) InputActions.handleShootKeyUp();
            if (e.code === SLOWMO) InputActions.handleSlowmoKeyUp();
        });
    }

    disableRightClickMenu() {
        CANVAS.addEventListener('contextmenu', (e) => e.preventDefault());
    }
}
