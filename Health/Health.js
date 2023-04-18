/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Health extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Health/costumes/1.png", { x: 35, y: 12 }),
      new Costume("2", "./Health/costumes/2.png", { x: 35, y: 12 }),
      new Costume("3", "./Health/costumes/3.png", { x: 35, y: 12 }),
      new Costume("0", "./Health/costumes/0.png", { x: 35, y: 12 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "Bad:" }, this.whenIReceiveBad)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.health = 3;
    while (true) {
      this.costume = this.stage.vars.health;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.compare(this.stage.vars.health, 0) < 0) {
        this.stage.vars.health = 0;
      }
      if (this.toNumber(this.stage.vars.health) === 0) {
        this.broadcast("Game Over");
        while (true) {
          this.goto(-151, 146);
          yield;
        }
      }
      yield;
    }
  }

  *whenIReceiveBad() {
    this.stage.vars.health--;
  }
}
