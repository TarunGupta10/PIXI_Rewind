import {
  Application,
  Sprite,
  Text,
  Container,
  Loader,
  LoaderResource,
  Graphics,
} from "pixi.js";
import { gsap } from "gsap";
import { sound } from "@pixi/sound";
import * as particles from "@pixi/particle-emitter";
import { Dict } from "@pixi/utils";
export class Game extends Application {
  constructor(opts: any) {
    super(opts);
    this.preload(
      [
        { name: "downarrow", url: "assets/downarw.png" },
        { name: "uparrow", url: "assets/uparw.png" },
      ],
      this.onLoad.bind(this)
    );
  }
  preload(list: any[], cb: () => {}): void {
    this.loader.add(list);
    this.loader.load(cb);
  }
  onLoad(): void {
    const graphics1 = new Graphics();
    graphics1.lineStyle(2, 0x000000, 1);
    graphics1.beginFill(0xff0000);
    graphics1.drawRect(650, 150, 200, 40);
    graphics1.endFill();
    graphics1.interactive = true
    graphics1.buttonMode = true
    graphics1.visible = false
    this.stage.addChild(graphics1);
    graphics1.on("pointerup", () => {
      graphics1.beginFill(0xff0000)
      graphics1.drawRect(0,0,innerWidth,innerHeight)
      graphics1.endFill();
      downarrow.visible = true
      uparrow.visible = false
    });

    const graphics2 = new Graphics();
    graphics2.lineStyle(2, 0x000000, 1);
    graphics2.beginFill(0x0000ff);
    graphics2.drawRect(650, 190, 200, 40);
    graphics2.endFill();
    graphics2.interactive = true
    graphics2.buttonMode = true
    graphics2.visible = false
    this.stage.addChild(graphics2);
    graphics2.on("pointerup", () => {
      graphics2.beginFill(0x0000ff)
      graphics2.drawRect(0,0,innerWidth,innerHeight)
      graphics2.endFill();
      downarrow.visible = true
      uparrow.visible = false
    });


    const graphics3 = new Graphics();
    graphics3.lineStyle(2, 0x000000, 1);
    graphics3.beginFill(0x00ff00);
    graphics3.drawRect(650, 230, 200, 40);
    graphics3.endFill();
    graphics3.interactive = true
    graphics3.buttonMode = true
    graphics3.visible = false
    this.stage.addChild(graphics3);
    graphics3.on("pointerup", () => {
      graphics3.beginFill(0x00ff00)
      graphics3.drawRect(0,0,innerWidth,innerHeight)
      graphics3.endFill();
    });

   

    const graphics = new Graphics();
    graphics.lineStyle(2, 0x000000, 1);
    graphics.beginFill(0xffffff);
    graphics.drawRect(650, 100, 200, 40);
    graphics.endFill();
    graphics.interactive = true
    graphics.buttonMode = true
    this.stage.addChild(graphics);
    graphics.on("pointerup", () => {
      graphics1.visible = true
      graphics2.visible = true
      graphics3.visible = true
      downarrow.visible = false
      uparrow.visible = true
      graphics.interactive = true
    graphics.buttonMode = true
    });

    const downarrow = new Sprite(this.loader.resources["downarrow"].texture);
    downarrow.x = 825;
    downarrow.y = 117;
    downarrow.scale.set(0.5);
    downarrow.anchor.set(0.5);
    this.stage.addChild(downarrow);

    const uparrow = new Sprite(this.loader.resources["uparrow"].texture);
    uparrow.x = 825;
    uparrow.y = 120;
    uparrow.scale.set(0.5);
    uparrow.anchor.set(0.5);
    uparrow.visible  = false
    this.stage.addChild(uparrow);
  }
}
