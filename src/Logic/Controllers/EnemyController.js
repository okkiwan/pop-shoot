import { game } from '../../../app.js';
import { RedInvader } from '../../Actors/Enemies/Types/RedInvader.js';
import { GreenInvader } from '../../Actors/Enemies/Types/GreenInvader.js';
import { GreenTerror } from '../../Actors/Enemies/Types/GreenTerror.js';
import { GreenEmperor } from '../../Actors/Enemies/Types/GreenEmperor.js';
import { GreenUfo } from '../../Actors/Enemies/Types/GreenUfo.js';
import { GreenPlacer } from '../../Actors/Enemies/Types/GreenPlacer.js';
import { RedUfo } from '../../Actors/Enemies/Types/RedUfo.js';
import { RedEmperor } from '../../Actors/Enemies/Types/RedEmperor.js';
import { RedTerror } from '../../Actors/Enemies/Types/RedTerror.js';
import { BlackEmperor } from '../../Actors/Enemies/Types/BlackEmperor.js';
import { BlackPlacer } from '../../Actors/Enemies/Types/BlackPlacer.js';
import { BlackInvader } from '../../Actors/Enemies/Types/BlackInvader.js';
import { RedPlacer } from '../../Actors/Enemies/Types/RedPlacer.js';
import { BlackTerror } from '../../Actors/Enemies/Types/BlackTerror.js';
import { YellowUfo } from '../../Actors/Enemies/Types/YellowUfo.js';
import { FamiliarSight } from '../../Actors/Enemies/Bosses/FamiliarSight.js';
import { OrangePackage } from '../../Actors/Packages/OrangePackage.js';
import { Abuser } from '../../Actors/Enemies/Bosses/Abuser.js';
import { BlueInvader } from '../../Actors/Enemies/Types/BlueInvader.js';
import { BlueUfo } from '../../Actors/Enemies/Types/BlueUfo.js';
import { BluePlacer } from '../../Actors/Enemies/Types/BluePlacer.js';
import { BlueEmperor } from '../../Actors/Enemies/Types/BlueEmperor.js';
import { BlueTerror } from '../../Actors/Enemies/Types/BlueTerror.js';
import { Fk77 } from '../../Actors/Enemies/Bosses/Fk77.js';
import { Diver } from '../../Actors/Enemies/Types/Diver.js';
import { GreasyHarvey } from '../../Actors/Enemies/Bosses/GreasyHarvey.js';
import { MetalEmperor } from '../../Actors/Enemies/Bosses/MetalEmperor.js';

const enemies = [
    // start: time at which enemy starts spawning
    // end: time at which enemy stops spawning
    // interval: interval at which enemy spawns

    // STAGE 1
    { type: GreenInvader, start: 4, end: 290, interval: 4 },
    { type: GreenUfo, start: 17, end: 290, interval: 11 },
    { type: Diver, start: 60, end: 290, interval: 60 },
    { type: GreenTerror, start: 45, end: 290, interval: 45 },
    { type: GreenPlacer, start: 60, end: 290, interval: 50 },
    { type: GreenEmperor, start: 120, end: 290, interval: 55 },
    { type: BlueInvader, start: 90, end: 290, interval: 35 },
    { type: BlueUfo, start: 90, end: 290, interval: 40 },
    // orange package
    { type: OrangePackage, start: 180, end: 270, interval: 90 },
    // boss
    { type: GreasyHarvey, time: 300 },

    // STAGE 2
    { type: GreenInvader, start: 301, end: 590, interval: 4 },
    { type: GreenUfo, start: 301, end: 590, interval: 11 },
    { type: Diver, start: 360, end: 590, interval: 60 },
    { type: BlueInvader, start: 317, end: 590, interval: 11 },
    { type: BlueUfo, start: 330, end: 590, interval: 17 },
    { type: BlueTerror, start: 365, end: 590, interval: 40 },
    { type: BluePlacer, start: 360, end: 590, interval: 35 },
    { type: BlueEmperor, start: 420, end: 590, interval: 45 },
    { type: RedInvader, start: 390, end: 590, interval: 25 },
    { type: RedUfo, start: 415, end: 590, interval: 25 },
    // orange package
    { type: OrangePackage, start: 360, end: 570, interval: 90 },
    // boss
    { type: MetalEmperor, time: 600 },

    // STAGE 3
    { type: BlueInvader, start: 601, end: 890, interval: 4 },
    { type: BlueUfo, start: 601, end: 890, interval: 11 },
    { type: Diver, start: 660, end: 890, interval: 60 },
    { type: RedInvader, start: 605, end: 890, interval: 11 },
    { type: RedUfo, start: 635, end: 890, interval: 14 },
    { type: RedTerror, start: 740, end: 890, interval: 40 },
    { type: RedPlacer, start: 685, end: 890, interval: 35 },
    { type: RedEmperor, start: 730, end: 890, interval: 45 },
    // orange package
    { type: OrangePackage, start: 630, end: 870, interval: 90 },
    // boss
    { type: FamiliarSight, time: 900 },

    // STAGE 4
    { type: RedInvader, start: 905, end: 1185, interval: 4 },
    { type: RedUfo, start: 910, end: 1185, interval: 11 },
    { type: RedPlacer, start: 960, end: 1185, interval: 30 },
    { type: RedEmperor, start: 990, end: 1185, interval: 40 },
    { type: RedTerror, start: 1050, end: 1185, interval: 35 },
    { type: Diver, start: 960, end: 1185, interval: 60 },
    { type: BlackInvader, start: 1050, end: 1185, interval: 20 },
    { type: YellowUfo, start: 1050, end: 1185, interval: 14 },
    // orange package
    { type: OrangePackage, start: 950, end: 1170, interval: 90 },
    // boss
    { type: Fk77, time: 1200 },

    // STAGE 5
    { type: BlackInvader, start: 1205, end: 1490, interval: 4 },
    { type: Diver, start: 1260, end: 1490, interval: 60 },
    { type: YellowUfo, start: 1210, end: 1490, interval: 11 },
    { type: BlackPlacer, start: 1260, end: 1490, interval: 30 },
    { type: BlackEmperor, start: 1290, end: 1490, interval: 40 },
    { type: BlackTerror, start: 1320, end: 1490, interval: 35 },
    // orange package
    { type: OrangePackage, start: 1250, end: 1470, interval: 90 },
    // boss
    { type: Abuser, time: 1500 },
];

export class EnemyController {
    static checkEnemiesToSpawn() {
        enemies.forEach((enemy) => {
            if (this._shouldSpawn(enemy)) game.enemies.add(new enemy.type());
        });
    }

    static _shouldSpawn(enemy) {
        // enemy is in specified time bracket
        const isInTimeBracket = game.state.time >= enemy.start && game.state.time <= enemy.end;

        // game is not in boss/paused/clock state
        const isInState = !game.state.boss && !game.state.paused && !game.player.clock.active;

        // enemy's interval is reached (not in slowmo mode)
        const isInSpawnTime = game.state.time % enemy.interval === 0 && !game.state.slowmo;

        // enemy's interval is reached (in slowmo mode)
        const isInSlowmoSpawntime =
            game.state.time % (enemy.interval / game.slowmocontroller.slowmorate) === 0 && game.state.slowmo;

        // check for all standard enemy conditions
        const isEnemyTime = isInTimeBracket && isInState && (isInSpawnTime || isInSlowmoSpawntime);

        // check for all boss conditions:
        // enemy is boss, gametime is boss time, and game is not already in boss state
        const isBossTime = enemy.time === game.state.time && !game.state.boss;

        // should enemy spawn?
        return isEnemyTime || isBossTime;
    }
}
