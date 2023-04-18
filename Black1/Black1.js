/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Black1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Black1/costumes/1.png", { x: 480, y: 360 }),
      new Costume("2", "./Black1/costumes/2.svg", {
        x: 362.9999925000001,
        y: 273
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.costume = 1;
    while (true) {
      this.moveAhead();
      this.effects.ghost += 10;
      yield;
    }
  }
}
