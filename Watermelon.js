import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Watermelon extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("watermelon-a", "./Watermelon/costumes/watermelon-a.svg", {
        x: 40.13434982299805,
        y: 27.860475540161133
      }),
      new Costume("watermelon-b", "./Watermelon/costumes/watermelon-b.svg", {
        x: 23.5,
        y: 28.5
      }),
      new Costume("watermelon-c", "./Watermelon/costumes/watermelon-c.svg", {
        x: 21.5,
        y: 16
      })
    ];

    this.sounds = [new Sound("Bite", "./Watermelon/sounds/Bite.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.size = 200;
  }

  *whenthisspriteclicked() {
    yield* this.startSound("Bite");
    this.broadcast("buymoney");
    this.costumeNumber += 1;
  }
}
