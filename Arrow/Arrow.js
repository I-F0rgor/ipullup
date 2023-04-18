/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Arrow extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Arrow/costumes/1.png", { x: 248, y: 360 }),
      new Costume("2", "./Arrow/costumes/2.png", { x: 248, y: 360 }),
      new Costume("3", "./Arrow/costumes/3.png", { x: 360, y: 249 }),
      new Costume("4", "./Arrow/costumes/4.png", { x: 360, y: 248 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(Trigger.CLONE_START, this.startAsClone5),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLONE_START, this.startAsClone6),
      new Trigger(Trigger.BROADCAST, { name: "bad:" }, this.whenIReceiveBad),
      new Trigger(Trigger.CLONE_START, this.startAsClone7),
      new Trigger(Trigger.CLONE_START, this.startAsClone8)
    ];

    this.vars.score = 0;
  }

  *startAsClone() {
    while (true) {
      if (this.touching(this.sprites["Action"].andClones())) {
        this.stage.vars.score = 3;
        this.effects.brightness = -100;
        this.effects.brightness += 25;
        for (let i = 0; i < 3; i++) {
          this.effects.brightness += 25;
          yield;
        }
        this.effects.brightness = 0;
        yield* this.wait(0);
        this.stage.vars.score = 2;
        yield* this.wait(0.1);
        this.stage.vars.score = 1;
        yield* this.wait(0.5);
        while (true) {
          this.stage.vars.score = 0;
          this.effects.brightness = -100;
          this.effects.pixelate += 10;
          this.x -= 0.5;
          yield;
        }
      }
      yield;
    }
  }

  *startAsClone2() {
    while (true) {
      if (this.costumeNumber === 1) {
        if (this.touching(this.sprites["Action"].andClones())) {
          if (this.keyPressed("down arrow")) {
            while (!!this.keyPressed("down arrow")) {
              yield;
            }
            this.broadcast("down");
            this.broadcast("score:");
            for (let i = 0; i < 10; i++) {
              this.effects.ghost += 10;
              this.size -= 10;
              this.y += 3;
              yield;
            }
            this.deleteThisClone();
          }
          if (
            this.keyPressed("up arrow") ||
            this.keyPressed("right arrow") ||
            this.keyPressed("left arrow")
          ) {
            this.broadcast("bad:");
            for (let i = 0; i < 10; i++) {
              this.effects.ghost += 10;
              yield;
            }
            this.deleteThisClone();
          }
        }
      }
      yield;
    }
  }

  *startAsClone3() {
    while (true) {
      if (this.costumeNumber === 2) {
        if (this.touching(this.sprites["Action"].andClones())) {
          if (this.keyPressed("up arrow")) {
            while (!!this.keyPressed("up arrow")) {
              yield;
            }
            this.broadcast("up");
            this.broadcast("score:");
            for (let i = 0; i < 10; i++) {
              this.effects.ghost += 10;
              this.size -= 10;
              this.y += 3;
              yield;
            }
            this.deleteThisClone();
          }
          if (
            this.keyPressed("down arrow") ||
            this.keyPressed("right arrow") ||
            this.keyPressed("left arrow")
          ) {
            this.broadcast("bad:");
            for (let i = 0; i < 10; i++) {
              this.effects.ghost += 10;
              yield;
            }
            this.deleteThisClone();
          }
        }
      }
      yield;
    }
  }

  *startAsClone4() {
    while (true) {
      if (this.costumeNumber === 3) {
        if (this.touching(this.sprites["Action"].andClones())) {
          if (this.keyPressed("right arrow")) {
            while (!!this.keyPressed("right arrow")) {
              yield;
            }
            this.broadcast("right");
            this.broadcast("score:");
            for (let i = 0; i < 10; i++) {
              this.effects.ghost += 10;
              this.size -= 10;
              this.y += 3;
              yield;
            }
            this.deleteThisClone();
          }
          if (
            this.keyPressed("up arrow") ||
            this.keyPressed("down arrow") ||
            this.keyPressed("left arrow")
          ) {
            this.broadcast("bad:");
            for (let i = 0; i < 10; i++) {
              this.effects.ghost += 10;
              yield;
            }
            this.deleteThisClone();
          }
        }
      }
      yield;
    }
  }

  *startAsClone5() {
    while (true) {
      if (this.costumeNumber === 4) {
        if (this.touching(this.sprites["Action"].andClones())) {
          if (this.keyPressed("left arrow")) {
            while (!!this.keyPressed("left arrow")) {
              yield;
            }
            this.broadcast("left");
            this.broadcast("score:");
            for (let i = 0; i < 10; i++) {
              this.effects.ghost += 10;
              this.size -= 10;
              this.y += 3;
              yield;
            }
            this.deleteThisClone();
          }
          if (
            this.keyPressed("up arrow") ||
            this.keyPressed("down arrow") ||
            this.keyPressed("right arrow")
          ) {
            this.broadcast("bad:");
            for (let i = 0; i < 10; i++) {
              this.effects.ghost += 10;
              yield;
            }
            this.deleteThisClone();
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveStart() {
    this.vars.score = 0;
    this.visible = false;
    if (this.toNumber(this.stage.vars.song) === 1) {
      yield* this.wait(3.4);
      this.createClone();
      yield* this.wait(1.2);
      this.createClone();
      yield* this.wait(5);
      this.createClone();
      yield* this.wait(2.3);
      this.createClone();
      yield* this.wait(2.3);
      this.createClone();
      yield* this.wait(2.3);
      this.createClone();
      yield* this.wait(2.2);
      this.createClone();
      yield* this.wait(2.3);
      this.createClone();
      yield* this.wait(2.3);
      this.createClone();
      yield* this.wait(2);
      this.createClone();
      yield* this.wait(3.5);
      this.createClone();
      yield* this.wait(4.5);
      this.createClone();
      yield* this.wait(1);
      this.createClone();
      yield* this.wait(2.5);
      this.createClone();
      yield* this.wait(2.3);
      this.createClone();
      yield* this.wait(2.3);
      this.createClone();
    }
    if (this.toNumber(this.stage.vars.song) === 2) {
      this.createClone();
      yield* this.wait(2.4);
      this.createClone();
      yield* this.wait(2.4);
      this.createClone();
      yield* this.wait(2.3);
      this.createClone();
      yield* this.wait(0.5);
      this.createClone();
      yield* this.wait(2);
      this.createClone();
      yield* this.wait(2.4);
      this.createClone();
      yield* this.wait(2.4);
      this.createClone();
      yield* this.wait(2.3);
      this.createClone();
      this.stage.vars.song = 2;
      yield* this.wait(2.3);
      this.createClone();
      yield* this.wait(2.4);
      this.createClone();
      yield* this.wait(2.4);
      this.createClone();
      yield* this.wait(2.3);
      this.createClone();
      yield* this.wait(0.5);
      this.createClone();
      yield* this.wait(2);
      this.createClone();
      yield* this.wait(2.4);
      this.createClone();
      yield* this.wait(2.4);
      this.createClone();
      yield* this.wait(2.3);
      this.createClone();
    }
  }

  *startAsClone6() {
    this.visible = true;
    this.effects.brightness = -100;
    this.size = 30;
    this.goto(-130, 225);
    this.costume = this.random(1, 4);
    while (!(this.compare(this.y, -189) < 0)) {
      this.y += this.toNumber(this.stage.vars.speed);
      yield;
    }
    this.effects.ghost = 0;
    for (let i = 0; i < 5; i++) {
      this.y += this.toNumber(this.stage.vars.speed);
      this.effects.ghost += 10;
      yield;
    }
    this.broadcast("bad:");
    for (let i = 0; i < 5; i++) {
      this.y += this.toNumber(this.stage.vars.speed);
      this.effects.ghost += 10;
      yield;
    }
    this.effects.ghost = 100;
    this.deleteThisClone();
  }

  *whenIReceiveBad() {
    if (this.toNumber(this.stage.vars.health) === 0) {
      /* TODO: Implement stop other scripts in sprite */ null;
    }
  }

  *startAsClone7() {
    this.effects.ghost = 100;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    this.effects.ghost = 0;
  }

  *startAsClone8() {
    while (true) {
      if (this.touching(this.sprites["Action"].andClones())) {
        this.y -= 3;
      }
      yield;
    }
  }
}
