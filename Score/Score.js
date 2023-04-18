/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Score extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Score/costumes/1.svg", {
        x: 44.54687499999994,
        y: 0.1948084677418933
      }),
      new Costume("2", "./Score/costumes/2.svg", {
        x: 201.65625000000003,
        y: 1.2031250000000284
      }),
      new Costume("3", "./Score/costumes/3.png", { x: 281, y: 20 }),
      new Costume("0", "./Score/costumes/0.svg", { x: 113, y: 41 })
    ];

    this.sounds = [
      new Sound("1", "./Score/sounds/1.wav"),
      new Sound("2", "./Score/sounds/2.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "bad:" }, this.whenIReceiveBad),
      new Trigger(
        Trigger.BROADCAST,
        { name: "score:" },
        this.whenIReceiveScore
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveBad() {
    yield* this.startSound(2);
    this.visible = true;
    this.goto(150, -155);
    this.costume = 0;
    for (let i = 0; i < 7; i++) {
      this.y += 5;
      this.createClone();
      yield;
    }
    this.effects.ghost = 0;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      this.y += 1;
      this.createClone();
      yield;
    }
    this.effects.ghost = 0;
    this.visible = false;
  }

  *whenIReceiveScore() {
    if (!(this.toNumber(this.stage.vars.score) === 0)) {
      this.visible = true;
      this.goto(150, -155);
      this.costume = this.stage.vars.score;
      for (let i = 0; i < 7; i++) {
        this.y += 5;
        this.createClone();
        yield;
      }
      this.effects.ghost = 0;
      for (let i = 0; i < 10; i++) {
        this.effects.ghost += 10;
        this.y += 1;
        this.createClone();
        yield;
      }
      this.effects.ghost = 0;
      this.visible = false;
    } else {
      this.broadcast("bad:");
    }
  }

  *startAsClone() {
    this.effects.ghost = 0;
    this.effects.brightness = -5;
    for (let i = 0; i < 6; i++) {
      this.effects.brightness -= 5;
      yield;
    }
    for (let i = 0; i < 4; i++) {
      this.effects.brightness -= 5;
      this.effects.ghost += 25;
      yield;
    }
    this.deleteThisClone();
  }
}
