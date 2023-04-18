/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Action extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Action/costumes/1.svg", { x: 240, y: -65 }),
      new Costume("2", "./Action/costumes/2.svg", { x: 240, y: -65 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching(this.sprites["Arrow"].andClones())) {
        if (!(this.toNumber(this.stage.vars.score) === 0)) {
          this.costume = 2;
        }
      } else {
        this.costume = 1;
      }
      yield;
    }
  }
}
