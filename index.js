import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Watermelon from "./Watermelon/Watermelon.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Watermelon: new Watermelon({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 2,
    size: 200,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
