/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TheDance extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Idle1", "./TheDance/costumes/Idle1.png", { x: 264, y: 260 }),
      new Costume("Idle2", "./TheDance/costumes/Idle2.png", { x: 266, y: 260 }),
      new Costume("Idle3", "./TheDance/costumes/Idle3.png", { x: 262, y: 260 }),
      new Costume("Right1", "./TheDance/costumes/Right1.png", {
        x: 180,
        y: 260
      }),
      new Costume("Right2", "./TheDance/costumes/Right2.png", {
        x: 162,
        y: 264
      }),
      new Costume("Right3", "./TheDance/costumes/Right3.png", {
        x: 158,
        y: 260
      }),
      new Costume("Right4", "./TheDance/costumes/Right4.png", {
        x: 154,
        y: 264
      }),
      new Costume("Left1", "./TheDance/costumes/Left1.png", { x: 324, y: 260 }),
      new Costume("Left2", "./TheDance/costumes/Left2.png", { x: 344, y: 264 }),
      new Costume("Left3", "./TheDance/costumes/Left3.png", { x: 346, y: 260 }),
      new Costume("Left4", "./TheDance/costumes/Left4.png", { x: 352, y: 264 }),
      new Costume("Up1", "./TheDance/costumes/Up1.png", { x: 236, y: 260 }),
      new Costume("Up2", "./TheDance/costumes/Up2.png", { x: 236, y: 284 }),
      new Costume("Up3", "./TheDance/costumes/Up3.png", { x: 236, y: 294 }),
      new Costume("Up4", "./TheDance/costumes/Up4.png", { x: 236, y: 298 }),
      new Costume("Down1", "./TheDance/costumes/Down1.png", { x: 252, y: 264 }),
      new Costume("Down2", "./TheDance/costumes/Down2.png", { x: 236, y: 224 }),
      new Costume("Down3", "./TheDance/costumes/Down3.png", { x: 236, y: 208 }),
      new Costume("Down4", "./TheDance/costumes/Down4.png", { x: 236, y: 234 }),
      new Costume("Fail1", "./TheDance/costumes/Fail1.png", { x: 264, y: 260 }),
      new Costume("Fail2", "./TheDance/costumes/Fail2.png", { x: 262, y: 276 }),
      new Costume("Fail3", "./TheDance/costumes/Fail3.png", { x: 264, y: 284 }),
      new Costume("Fail4", "./TheDance/costumes/Fail4.png", { x: 262, y: 272 }),
      new Costume("Fail5", "./TheDance/costumes/Fail5.png", { x: 264, y: 206 }),
      new Costume("Fail6", "./TheDance/costumes/Fail6.png", { x: 262, y: -14 }),
      new Costume("Fail7", "./TheDance/costumes/Fail7.png", { x: 102, y: -306 })
    ];

    this.sounds = [
      new Sound("1", "./TheDance/sounds/1.wav"),
      new Sound("2", "./TheDance/sounds/2.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "bad:" }, this.whenIReceiveBad),
      new Trigger(Trigger.BROADCAST, { name: "up" }, this.whenIReceiveUp),
      new Trigger(Trigger.BROADCAST, { name: "down" }, this.whenIReceiveDown),
      new Trigger(Trigger.BROADCAST, { name: "right" }, this.whenIReceiveRight),
      new Trigger(Trigger.BROADCAST, { name: "left" }, this.whenIReceiveLeft)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.goto(100, 0);
    while (true) {
      this.costume = "Idle1";
      yield* this.wait(0.05);
      this.costume = "Idle2";
      yield* this.wait(0.05);
      this.costume = "Idle3";
      yield* this.wait(0.05);
      yield;
    }
  }

  *whenIReceiveBad() {
    /* TODO: Implement stop other scripts in sprite */ null;
    if (!(this.toNumber(this.stage.vars.health) === 0)) {
      /* TODO: Implement stop other scripts in sprite */ null;
      this.costume = "Fail1";
      yield* this.wait(0.05);
      this.costume = "Fail2";
      yield* this.wait(0.05);
      this.costume = "Fail3";
      yield* this.wait(0.05);
      this.costume = "Fail4";
      yield* this.wait(0.05);
      this.costume = "Fail5";
      yield* this.wait(0.05);
      while (true) {
        this.costume = "Idle1";
        yield* this.wait(0.05);
        this.costume = "Idle2";
        yield* this.wait(0.05);
        this.costume = "Idle3";
        yield* this.wait(0.05);
        yield;
      }
    }
    if (this.toNumber(this.stage.vars.health) === 0) {
      this.visible = true;
      /* TODO: Implement stop other scripts in sprite */ null;
      this.costume = "Fail1";
      for (let i = 0; i < 5; i++) {
        yield* this.wait(0.05);
        this.costumeNumber++;
        yield;
      }
      yield* this.wait(0.05);
      this.costume = "Fail7";
      yield* this.wait(0.05);
      this.visible = false;
    }
  }

  *whenIReceiveUp() {
    yield* this.startSound(this.stage.vars.song);
    /* TODO: Implement stop other scripts in sprite */ null;
    this.costume = "Up1";
    yield* this.wait(0.05);
    this.costume = "Up2";
    yield* this.wait(0.05);
    this.costume = "Up3";
    yield* this.wait(0.05);
    this.costume = "Up4";
    yield* this.wait(0.05);
    this.costume = "Up3";
    yield* this.wait(0.05);
    this.costume = "Up2";
    yield* this.wait(0.05);
    this.costume = "Up1";
    yield* this.wait(0.05);
    while (true) {
      this.costume = "Idle1";
      yield* this.wait(0.05);
      this.costume = "Idle2";
      yield* this.wait(0.05);
      this.costume = "Idle3";
      yield* this.wait(0.05);
      yield;
    }
  }

  *whenIReceiveDown() {
    yield* this.startSound(this.stage.vars.song);
    /* TODO: Implement stop other scripts in sprite */ null;
    this.costume = "Down1";
    yield* this.wait(0.05);
    this.costume = "Down2";
    yield* this.wait(0.05);
    this.costume = "Down3";
    yield* this.wait(0.05);
    this.costume = "Down4";
    yield* this.wait(0.05);
    while (true) {
      this.costume = "Idle1";
      yield* this.wait(0.05);
      this.costume = "Idle2";
      yield* this.wait(0.05);
      this.costume = "Idle3";
      yield* this.wait(0.05);
      yield;
    }
  }

  *whenIReceiveRight() {
    yield* this.startSound(this.stage.vars.song);
    /* TODO: Implement stop other scripts in sprite */ null;
    this.costume = "Right1";
    yield* this.wait(0.05);
    this.costume = "Right2";
    yield* this.wait(0.05);
    this.costume = "Right3";
    yield* this.wait(0.05);
    this.costume = "Right4";
    yield* this.wait(0.05);
    this.costume = "Right3";
    yield* this.wait(0.05);
    this.costume = "Right2";
    yield* this.wait(0.05);
    this.costume = "Right1";
    yield* this.wait(0.05);
    while (true) {
      this.costume = "Idle1";
      yield* this.wait(0.05);
      this.costume = "Idle2";
      yield* this.wait(0.05);
      this.costume = "Idle3";
      yield* this.wait(0.05);
      yield;
    }
  }

  *whenIReceiveLeft() {
    yield* this.startSound(this.stage.vars.song);
    /* TODO: Implement stop other scripts in sprite */ null;
    this.costume = "Left1";
    yield* this.wait(0.05);
    this.costume = "Left2";
    yield* this.wait(0.05);
    this.costume = "Left3";
    yield* this.wait(0.05);
    this.costume = "Left4";
    yield* this.wait(0.05);
    this.costume = "Left3";
    yield* this.wait(0.05);
    this.costume = "Left2";
    yield* this.wait(0.05);
    this.costume = "Left1";
    yield* this.wait(0.05);
    while (true) {
      this.costume = "Idle1";
      yield* this.wait(0.05);
      this.costume = "Idle2";
      yield* this.wait(0.05);
      this.costume = "Idle3";
      yield* this.wait(0.05);
      yield;
    }
  }
}
