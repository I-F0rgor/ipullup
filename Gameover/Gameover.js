/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Gameover extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Gameover/costumes/1.svg", { x: 240, y: 180 })
    ];

    this.sounds = [new Sound("1", "./Gameover/sounds/1.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveGameOver() {
    this.visible = true;
    this.effects.ghost = 100;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    this.effects.ghost = 0;
    yield* this.playSoundUntilDone(1);
    /* TODO: Implement stop all */ null;
  }
}
