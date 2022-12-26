import { Application, Sprite } from "pixi.js";
import { sound } from '@pixi/sound';
export class Game extends Application {
  constructor(opts: any) {
    super(opts);
    this.preload(
      [
        { name: "onbtn", url: "assets/onbtn1.png" },
        { name: "bg1", url: "assets/songbg.jpg" },
        { name: "offbtn", url: "assets/offbtn1.png" },
      ],
      this.onLoad.bind(this)
    );
  }
  preload(list: any[], cb: () => {}): void {
    this.loader.add(list);
    this.loader.load(cb);
  }
  onLoad(): void {
    const bg1 = new Sprite(this.loader.resources["bg1"].texture);
    bg1.x = innerWidth / 2 - 10;
    bg1.y = innerHeight / 2 - 50;
    bg1.scale.set(0.4);
    bg1.anchor.set(0.5);
    this.stage.addChild(bg1);


    const onbtn = new Sprite(this.loader.resources["onbtn"].texture);
    onbtn.buttonMode = true;
    onbtn.interactive = true;
    onbtn.visible = false
    onbtn.x = innerWidth / 2 + 500;
    onbtn.y = innerHeight / 2;
    onbtn.scale.set(1);
    onbtn.anchor.set(0.5);
    this.stage.addChild(onbtn);
    onbtn.on("pointerup", () => {
      sound.stop("sound1")
      onbtn.interactive = false;
      onbtn.visible = false;
      offbtn.visible = true;
      offbtn.buttonMode = true;
      offbtn.interactive = true;
    });

    const offbtn = new Sprite(this.loader.resources["offbtn"].texture);
    offbtn.buttonMode = true;
    offbtn.interactive = true;
    offbtn.x = innerWidth / 2 + 500;
    offbtn.y = innerHeight / 2;
    offbtn.scale.set(1);
    offbtn.anchor.set(0.5);
    this.stage.addChild(offbtn);
    offbtn.on("pointerup", () => {
      offbtn.interactive = false;
      sound.add("sound1","assets/sound1.mp3")
      sound.play("sound1")
      offbtn.visible = false
      onbtn.visible = true;
      onbtn.buttonMode = true;
      onbtn.interactive = true;
    });

    
  }
}
