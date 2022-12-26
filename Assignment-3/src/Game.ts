import { Application, Sprite } from "pixi.js";
export class Game extends Application {
  constructor(opts: any) {
    super(opts);
    this.preload(
      [
        { name: "forward", url: "assets/forwardbtn.png" },
        { name: "bg1", url: "assets/bg1.jpg" },
        { name: "bg2", url: "assets/bg2.jpg" },
        { name: "backward", url: "assets/backwardbtn.png" },
      ],
      this.onLoad.bind(this)
    );
  }
  preload(list: any[], cb: () => {}): void {
    this.loader.add(list);
    this.loader.load(cb);
  }
  onLoad(): void {
    let postition = 0;
    const bg2 = new Sprite(this.loader.resources["bg2"].texture);
    bg2.x = innerWidth / 2;
    bg2.y = innerHeight / 2;
    bg2.visible = false;
    bg2.scale.set(0.3);
    bg2.anchor.set(0.5);
    this.stage.addChild(bg2);

    const bg1 = new Sprite(this.loader.resources["bg1"].texture);
    bg1.x = innerWidth / 2 - 10;
    bg1.y = innerHeight / 2 - 50;
    bg1.scale.set(0.5);
    bg1.anchor.set(0.5);
    this.stage.addChild(bg1);

    const backward = new Sprite(this.loader.resources["backward"].texture);
    backward.buttonMode = true;
    backward.interactive = true;
    backward.x = innerWidth / 2 - 700;
    backward.y = innerHeight / 2;
    backward.scale.set(1);
    backward.anchor.set(0.5);
    this.stage.addChild(backward);
    backward.on("pointerup", () => {
      backward.interactive = false;
      bg2.visible = false;
      bg1.visible = true;
      forward.visible = true;
      forward.buttonMode = true;
      forward.interactive = true;
    });

    const forward = new Sprite(this.loader.resources["forward"].texture);
    forward.buttonMode = true;
    forward.interactive = true;
    forward.x = innerWidth / 2 + 700;
    forward.y = innerHeight / 2;
    forward.scale.set(1);
    forward.anchor.set(0.5);
    this.stage.addChild(forward);
    forward.on("pointerup", () => {
      forward.interactive = false;
      bg1.visible = false;
      bg2.visible = true;

      //   postition += 10;
      //   bg1.x = -(postition * 0.6);
      //   bg1.x %= 1286;
      //   if (bg1.x < 0) {
      //       bg1.x += 1286;
      //   }
      //   bg1.x -= 0;
      //   bg2.x = -(postition * 0.6) + 1286;
      // bg2.x %= 1286 * 2;
      // if (bg2.x < 0) {
      //     bg2.x += 1286 * 2;
      // }
      // bg2.x -= 1286;
      backward.visible = true;
      backward.buttonMode = true;
      backward.interactive = true;
    });
  }
}
