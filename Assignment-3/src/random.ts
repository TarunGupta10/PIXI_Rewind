import { Application, Container, Sprite } from "pixi.js";
export class Game extends Application {
  constructor(opts: any) {
    super(opts);
    this.preload(
      [
        { name: "forward", url: "assets/forwardbtn.png" },
        { name: "pk", url: "assets/pkwl7.png" },
        { name: "pk1", url: "assets/pkwl9.jpg" },
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
    const bgContainer = new Container();

    bgContainer.x = 0;
    bgContainer.y = 0;
    this.stage.addChild(bgContainer);

    const background = [
      "assets/bg1.jpg",
      "assets/bg2.jpg",
      "assets/bg3.jpg",
      "assets/bg4.jpg",
    ];

    const bgarr: any[] = [];

    for (let i = 0; i < 20; i++) {
      const item = Sprite.from(background[i % background.length]);
      item.x = innerWidth;
      item.y = innerHeight;
      item.anchor.set(0.5);
      bgContainer.addChild(item);
      bgarr.push(item);
  }

  let count = 0;

  this.ticker.add(() => {
    for (let i = 0; i < bgarr.length; i++) {
    // rotate each item
        const item = bgarr[i];
        item.rotation += 0.1;
    }

    count += 0.01;

    // swap the buffers ...
    const temp = renderTexture;
    renderTexture = renderTexture2;
    renderTexture2 = temp;

    // set the new texture
    outputSprite.texture = renderTexture;

    // twist this up!
    stuffContainer.rotation -= 0.01;
    outputSprite.scale.set(1 + Math.sin(count) * 0.2);

    // render the stage to the texture
    // the 'true' clears the texture before the content is rendered
    app.renderer.render(app.stage, {
        renderTexture: renderTexture2,
        clear: false,
    });

    //   this.ticker.add(() => {
    //     postition += 10;
    //     bg.x = -(postition * 0.6);
    //     bg.x %= 1286;
    //     if (bg.x < 0) {
    //         bg.x += 1286;
    //     }
    //     bg.x -= 0;

    //     bg2.x = -(postition * 0.6) + 1286;
    //     bg2.x %= 1286 * 2;
    //     if (bg2.x < 0) {
    //         bg2.x += 1286 * 2;
    //     }
    //     bg2.x -= 1286;

    //     bg3.x = -(postition * 0.6) + 2572;
    //     bg3.x %= 1286 * 2;
    //     if (bg3.x < 0) {
    //         bg3.x += 1286 * 2;
    //     }
    //     bg3.x -= 1286;
    // });

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
      backward.visible = true;
      backward.buttonMode = true;
      backward.interactive = true;
    });
  }
}
