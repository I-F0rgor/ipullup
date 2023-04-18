/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("0", "./Stage/costumes/0.png", { x: 480, y: 360 }),
      new Costume("1", "./Stage/costumes/1.svg", { x: 247, y: 180 }),
      new Costume("2", "./Stage/costumes/2.png", { x: 480, y: 360 })
    ];

    this.sounds = [
      new Sound("1", "./Stage/sounds/1.wav"),
      new Sound("2", "./Stage/sounds/2.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "song" }, this.whenIReceiveSong)
    ];

    this.vars.health = 3;
    this.vars.song = 1;
    this.vars.score = 1;
    this.vars.speed = -5;
  }

  *whenIReceiveStart() {
    this.audioEffects.volume = 100;
    if (this.toNumber(this.vars.song) === 1) {
      yield* this.playSoundUntilDone(1);
      this.broadcast("win");
    }
    if (this.toNumber(this.vars.song) === 2) {
      yield* this.playSoundUntilDone(2);
      yield* this.playSoundUntilDone(2);
      this.broadcast("win");
    }
  }

  *whenIReceiveGameOver() {
    for (let i = 0; i < 100; i++) {
      this.audioEffects.pitch -= 10;
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenGreenFlagClicked() {
    this.costume = 0;
  }

  *whenIReceiveSong() {
    if (this.toNumber(this.vars.song) === 1) {
      this.vars.speed = -5;
      this.costume = 1;
    }
    if (this.toNumber(this.vars.song) === 2) {
      this.vars.speed = -7;
      this.costume = 2;
    }
  }
}
