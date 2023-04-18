/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Beat extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Beat/costumes/1.svg", { x: 244, y: 180 }),
      new Costume("2", "./Beat/costumes/2.svg", { x: 244, y: 180 }),
      new Costume("3", "./Beat/costumes/3.svg", { x: 244, y: 180 }),
      new Costume("4", "./Beat/costumes/4.svg", { x: 244, y: 180 })
    ];

    this.sounds = [new Sound("pop", "./Beat/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Down" }, this.whenIReceiveDown),
      new Trigger(Trigger.BROADCAST, { name: "Left" }, this.whenIReceiveLeft),
      new Trigger(Trigger.BROADCAST, { name: "Right" }, this.whenIReceiveRight),
      new Trigger(Trigger.BROADCAST, { name: "Up" }, this.whenIReceiveUp)
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = 1;
    while (true) {
      yield* this.wait(0.03);
      this.costumeNumber++;
      yield;
    }
  }

  *whenIReceiveDown() {
    this.visible = true;
    this.size = 140;
    for (let i = 0; i < 5; i++) {
      this.size -= 5;
      yield;
    }
    for (let i = 0; i < 5; i++) {
      this.size -= 1;
      yield;
    }
    for (let i = 0; i < 4; i++) {
      this.effects.ghost += 25;
      yield;
    }
    this.visible = false;
    this.effects.ghost = 0;
  }

  *whenIReceiveLeft() {
    this.visible = true;
    this.size = 140;
    for (let i = 0; i < 5; i++) {
      this.size -= 5;
      yield;
    }
    for (let i = 0; i < 5; i++) {
      this.size -= 1;
      yield;
    }
    for (let i = 0; i < 4; i++) {
      this.effects.ghost += 25;
      yield;
    }
    this.visible = false;
    this.effects.ghost = 0;
  }

  *whenIReceiveRight() {
    this.visible = true;
    this.size = 140;
    for (let i = 0; i < 5; i++) {
      this.size -= 5;
      yield;
    }
    for (let i = 0; i < 5; i++) {
      this.size -= 1;
      yield;
    }
    for (let i = 0; i < 4; i++) {
      this.effects.ghost += 25;
      yield;
    }
    this.visible = false;
    this.effects.ghost = 0;
  }

  *whenIReceiveUp() {
    this.visible = true;
    this.size = 140;
    for (let i = 0; i < 5; i++) {
      this.size -= 5;
      yield;
    }
    for (let i = 0; i < 5; i++) {
      this.size -= 1;
      yield;
    }
    for (let i = 0; i < 4; i++) {
      this.effects.ghost += 25;
      yield;
    }
    this.visible = false;
    this.effects.ghost = 0;
  }
}
