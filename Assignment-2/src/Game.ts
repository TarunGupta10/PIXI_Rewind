import { Application, Sprite } from "pixi.js";
export class Game extends Application {
  constructor(opts: any) {
    super(opts);
    this.preload(
      [
        { name: "start", url: "assets/start.png" },
        { name: "pk", url: "assets/pkwl7.png" },
        { name: "pk1", url: "assets/pkwl9.jpg" },
        { name: "closebtn", url: "assets/closebtn2.png" },
      ],
      this.onLoad.bind(this)
    );
  }
  preload(list: any[], cb: () => {}): void {
    this.loader.add(list);
    this.loader.load(cb);
  }
  onLoad(): void {
    const pk1 = new Sprite(this.loader.resources["pk1"].texture);
    pk1.x = innerWidth / 2;
    pk1.y = innerHeight / 2;
    pk1.visible = false;
    pk1.scale.set(0.8);
    pk1.anchor.set(0.5);
    this.stage.addChild(pk1);

   
    const pk = new Sprite(this.loader.resources["pk"].texture);
    pk.x = innerWidth / 2 - 10;
    pk.y = innerHeight / 2 - 50;
    pk.scale.set(0.5);
    pk.anchor.set(0.5);
    this.stage.addChild(pk);

     const closebtn = new Sprite(this.loader.resources["closebtn"].texture);
    closebtn.buttonMode = true;
    closebtn.interactive = true;
    closebtn.visible = false
    closebtn.x = innerWidth / 2 + 630;
    closebtn.y = innerHeight / 2 - 270;
    closebtn.scale.set(1);
    closebtn.anchor.set(0.5);
    this.stage.addChild(closebtn);
    closebtn.on("pointerup", () => {
      closebtn.visible = false;
      closebtn.interactive = false;
      pk1.visible = false;
      pk.visible = true;
      start.visible = true;
      start.buttonMode = true;
      start.interactive = true;
    });

    const start = new Sprite(this.loader.resources["start"].texture);
    start.buttonMode = true;
    start.interactive = true;
    start.x = innerWidth / 2 - 10;
    start.y = innerHeight / 2 + 280;
    start.scale.set(0.2);
    start.anchor.set(0.5);
    this.stage.addChild(start);
    start.on("pointerup", () => {
      start.visible = false;
      start.interactive = false;
      pk.visible = false;
      pk1.visible = true;
      closebtn.visible = true;
      closebtn.buttonMode = true;
      closebtn.interactive = true;
    });
  }
}
