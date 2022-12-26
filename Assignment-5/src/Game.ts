import { Application, Graphics, Sprite, Text, TextStyle } from "pixi.js";
export class Game extends Application {
  constructor(opts: any) {
    super(opts);
    this.preload(
      [
        { name: "googleicon", url: "assets/googleicon.png" },
        { name: "img1", url: "assets/img1.jpg" },
        { name: "img2", url: "assets/img2.jpg" },
        { name: "img3", url: "assets/img3.jpg" },
      ],
      this.onLoad.bind(this)
    );
  }
  preload(list: any[], cb: () => {}): void {
    this.loader.add(list);
    this.loader.load(cb);
  }
  onLoad(): void {

    const img1 = new Sprite(this.loader.resources["img1"].texture);
    img1.x = innerWidth / 2;
    img1.y = innerHeight / 2 + 100;
    img1.scale.set(0.15);
    img1.anchor.set(0.5);
    img1.visible = false
    this.stage.addChild(img1);

    const img2 = new Sprite(this.loader.resources["img2"].texture);
    img2.x = innerWidth / 2;
    img2.y = innerHeight / 2 + 100;
    img2.scale.set(0.15);
    img2.anchor.set(0.5);
    img2.visible = false
    this.stage.addChild(img2);

    const img3 = new Sprite(this.loader.resources["img3"].texture);
    img3.x = innerWidth / 2;
    img3.y = innerHeight / 2 + 100;
    img3.scale.set(0.15);
    img3.anchor.set(0.5);
    img3.visible = false
    this.stage.addChild(img3);

    const style = new TextStyle({
      fontFamily: 'Arial',
      fontSize: 36,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fill: ['#ffffff', '#00ff99'],
      stroke: '#4a1850',
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440,
      lineJoin: 'round',
  });
  
  const btnText = new Text('Text Button', style);
  btnText.x = 100;
  btnText.y = 50;
  btnText.buttonMode = true;
  btnText.interactive = true;
  btnText.visible = true;
  this.stage.addChild(btnText);
  btnText.on("pointerup", () => {
    img1.visible = true
    img2.visible = false
    img3.visible = false
  });



  const googleicon = new Sprite(this.loader.resources["googleicon"].texture);
    googleicon.buttonMode = true;
    googleicon.interactive = true;
    googleicon.x = 500
    googleicon.y = 80;
    googleicon.scale.set(1);
    googleicon.anchor.set(0.5);
    this.stage.addChild(googleicon);
    googleicon.on("pointerup", () => {
      img2.visible = true
      img1.visible = false
      img3.visible = false
    });


      const thing = new Graphics();
      const graphics = new Graphics();
      thing.x = 800;
      thing.y = 80;
      this.stage.addChild(thing);
      let count = 0;
      this.stage.on('pointerdown', () => {
        graphics.lineStyle(Math.random() * 30, Math.random() * 0xFFFFFF, 1);
        graphics.moveTo(Math.random() * 800, Math.random() * 600);
        graphics.bezierCurveTo(
            Math.random() * 800, Math.random() * 600,
            Math.random() * 800, Math.random() * 600,
            Math.random() * 800, Math.random() * 600,
          );
        });
        this.stage.addChild(graphics);
    
    this.ticker.add(() => {
        count += 0.1;
        thing.clear();
        thing.lineStyle(10, 0xff0000, 1);
        thing.beginFill(0xffFF00, 0.5);
        thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
        thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count) * 20);
        thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count) * 20);
        thing.lineTo(-120 + Math.cos(count) * 20, 100 + Math.sin(count) * 20);
        thing.lineTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
        thing.closePath();
        thing.rotation = count * 0.1;
    });
    thing.interactive=true;
    thing.buttonMode=true
    thing.scale.set(0.3)
    thing.on("pointerup", () => {
      img3.visible = true
      img2.visible = false
      img1.visible = false
    });
    }
  }

