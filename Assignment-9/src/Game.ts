import { Application, Graphics, Sprite, Text, TextStyle } from "pixi.js";
export class Game extends Application {
  constructor(opts: any) {
    super(opts);
    this.preload(
      [
        { name: "unchecked", url: "assets/unchecked.png" },
        { name: "checked", url: "assets/checked.png" },
      ],
      this.onLoad.bind(this)
    );
  }
  preload(list: any[], cb: () => {}): void {
    this.loader.add(list);
    this.loader.load(cb);
  }
  onLoad(): void {


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
  
  const ls = new Text('Language Selected', style);
  ls.x = 580;
  ls.y = 375;
  ls.buttonMode = true;
  ls.interactive = true;
  ls.visible = false;
  this.stage.addChild(ls);

  const lns = new Text('Language Not Selected', style);
  lns.x = 580;
  lns.y = 375;
  lns.buttonMode = true;
  lns.interactive = true;
 
  this.stage.addChild(lns);


  const unchecked = new Sprite(this.loader.resources["unchecked"].texture);
  unchecked.buttonMode = true;
  unchecked.interactive = true;
  unchecked.x = 500
  unchecked.y = 400;
  unchecked.scale.set(1);
  unchecked.anchor.set(0.5);
  this.stage.addChild(unchecked);
  unchecked.on("pointerup", () => {
    unchecked.visible = false
    checked.visible = true
    ls.visible = true
    lns.visible = false
  });

  const checked = new Sprite(this.loader.resources["checked"].texture);
    checked.buttonMode = true;
    checked.interactive = true;
    checked.x = 500
    checked.y = 400;
    checked.visible = false
    checked.scale.set(1);
    checked.anchor.set(0.5);
    this.stage.addChild(checked);
    checked.on("pointerup", () => {
      unchecked.visible = true
      checked.visible = false
      lns.visible = true
      ls.visible = false
    
    });



 

  


      
    }
  }

