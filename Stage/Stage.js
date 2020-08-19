import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("back", "./Stage/costumes/back.png", { x: 480, y: 360 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenstageclicked)
    ];

    this.vars.veri = 1;

    this.watchers.veri = new Watcher({
      label: "veri",
      style: "normal",
      visible: true,
      value: () => this.vars.veri,
      x: 434,
      y: -110
    });
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.keyPressed("any")) {
        this.vars.veri = 0;
      }
      yield;
    }
  }

  *whenstageclicked() {
    this.vars.veri += 1;
  }
}
