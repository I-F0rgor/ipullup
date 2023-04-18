/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./_2/costumes/1.svg", {
        x: 67.82291666666669,
        y: 111.0000000000001
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "song" }, this.whenIReceiveSong)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.stage.vars.song = 0;
    while (true) {
      if (this.touching("mouse")) {
        this.effects.brightness = 10;
        if (this.mouse.down) {
          this.stage.vars.song = 2;
          this.broadcast("song");
        }
      } else {
        this.effects.brightness = 0;
      }
      yield;
    }
  }

  *whenIReceiveSong() {
    /* TODO: Implement stop other scripts in sprite */ null;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }
}
