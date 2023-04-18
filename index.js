import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import TheDance from "./TheDance/TheDance.js";
import Arrow from "./Arrow/Arrow.js";
import Action from "./Action/Action.js";
import Score from "./Score/Score.js";
import Health from "./Health/Health.js";
import Intro from "./Intro/Intro.js";
import Song from "./Song/Song.js";
import _1 from "./_1/_1.js";
import Gameover from "./Gameover/Gameover.js";
import Winner from "./Winner/Winner.js";
import Beat from "./Beat/Beat.js";
import Black1 from "./Black1/Black1.js";
import _2 from "./_2/_2.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  TheDance: new TheDance({
    x: 100,
    y: 0,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Arrow: new Arrow({
    x: -130,
    y: -219,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 3
  }),
  Action: new Action({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Score: new Score({
    x: 150,
    y: -110,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false,
    layerOrder: 12
  }),
  Health: new Health({
    x: -151,
    y: 146,
    direction: 90,
    costumeNumber: 3,
    size: 500,
    visible: true,
    layerOrder: 4
  }),
  Intro: new Intro({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Song: new Song({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  _1: new _1({
    x: -90,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10
  }),
  Gameover: new Gameover({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  Winner: new Winner({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  Beat: new Beat({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 2,
    size: 109.99999999999999,
    visible: false,
    layerOrder: 7
  }),
  Black1: new Black1({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 13
  }),
  _2: new _2({
    x: 90,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
