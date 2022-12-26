import {
  Application,
  Sprite,
  Text,
  Container,
  Loader,
  LoaderResource,
} from "pixi.js";
import { gsap } from "gsap";
import { sound } from "@pixi/sound";
import * as particles from "@pixi/particle-emitter";
import { Dict } from "@pixi/utils";
export class Game extends Application {
  private spin: boolean;
  private sliceAngle = 360 / 7;
  constructor(opts: any) {
    super(opts);
    this.preload(
      [
        { name: "casinobg", url: "assets/casino3.jpg" },
        { name: "casinobg1", url: "assets/casino4.jpg" },
        { name: "jackpotlogo", url: "assets/jackpotlogo.png" },
        { name: "coin1", url: "assets/con1.png" },
        { name: "coin2", url: "assets/con3.png" },
        { name: "coin3", url: "assets/con4.png" },
        { name: "coin4", url: "assets/con5.png" },
        { name: "coin5", url: "assets/con6.png" },
      ],
      this.onLoad.bind(this)
    );
  }
  preload(list: any[], cb: () => {}): void {
    // this.loader.onComplete.add((l: Loader) => {
    //     setResources(l.resources);
    // });
    this.loader.add(list);
    this.loader.load(cb);
  }
  // jackpotpage(): void {
    
  //   setTimeout(() => {
  //     this.onLoad();
  //   }, 3000);
  // }

  onLoad(): void {

    const casinobg1 = new Sprite(this.loader.resources["casinobg1"].texture);
    casinobg1.x = 0;
    casinobg1.y = 0;
    casinobg1.visible = false
    casinobg1.scale.set(0.8);
    this.stage.addChild(casinobg1);

    const c = new Container();
    c.x = this.screen.width / 2;
    c.y = this.screen.height / 2 - 40;
    c.visible = false
    this.stage.addChild(c);
    const e = new particles.Emitter(c, {
      lifetime: {
        min: 0.25,
        max: 1.25,
      },
      frequency: 0.001,
      spawnChance: 1,
      particlesPerWave: 1,
      emitterLifetime: 0,
      maxParticles: 250,
      pos: {
        x: 0,
        y: 200,
      },
      addAtBack: false,
      behaviors: [
        {
          type: "alpha",
          config: {
            alpha: {
              list: [
                {
                  value: 0.3,
                  time: 0,
                },
                {
                  value: 1,
                  time: 0.2,
                },
                {
                  value: 0.8,
                  time: 1,
                },
              ],
            },
          },
        },
        {
          type: "scale",
          config: {
            scale: {
              list: [
                {
                  value: 0.001,
                  time: 0,
                },
                {
                  value: 0.1,
                  time: 0.4,
                },
                {
                  value: 0.02,
                  time: 1,
                },
              ],
            },
            minMult: 3,
          },
        },
        {
          type: "color",
          config: {
            color: {
              list: [
                {
                  value: "fb1010",
                  time: 0,
                },
                {
                  value: "ffffff",
                  time: 0.5,
                },
                {
                  value: "f5b830",
                  time: 1,
                },
              ],
            },
          },
        },
        {
          type: "moveSpeed",
          config: {
            speed: {
              list: [
                {
                  value: 400,
                  time: 0,
                },
                {
                  value: 200,
                  time: 1,
                },
              ],
              isStepped: false,
            },
          },
        },
        {
          type: "moveAcceleration",
          config: {
            accel: {
              x: 0,
              y: 2000,
            },
            minStart: 2000,
            maxStart: 2000,
            rotate: true,
          },
        },
        {
          type: "rotationStatic",
          config: {
            min: 260,
            max: 280,
          },
        },
        {
          type: "spawnShape",
          config: {
            type: "torus",
            data: {
              x: 0,
              y: 0,
              radius: 20,
            },
          },
        },
        {
          type: "animatedRandom",
          config: {
            anims: [
              {
                framerate: 24,
                loop: true,
                textures: ["coin1", "coin2", "coin3", "coin4", "coin5"],
              },
              {
                framerate: 24,
                loop: true,
                textures: ["coin5", "coin4", "coin3", "coin2", "coin1"],
              },
            ],
          },
        },
      ],
    });
    e.emit = true;
    this.ticker.add((delta: number) => {
      e.update(delta * 0.01);
    });

    function setResources(resources: Dict<LoaderResource>) {
      Error("Function not implemented.");
    }

    const casinobg = new Sprite(this.loader.resources["casinobg"].texture);
    casinobg.x = -75;
    casinobg.y = 0;
    casinobg.scale.set(0.22);
    this.stage.addChild(casinobg);

    const jackpotlogo = new Sprite(
      this.loader.resources["jackpotlogo"].texture
    );
    jackpotlogo.buttonMode = true;
    jackpotlogo.interactive = true;
    jackpotlogo.x = innerWidth / 2 - 300;
    jackpotlogo.y = innerHeight / 2 + 220;
    jackpotlogo.scale.set(1.5);
    jackpotlogo.anchor.set(0.5);
    this.stage.addChild(jackpotlogo);
    jackpotlogo.on("pointerup", () => {
      jackpotlogo.interactive = false;
      jackpotlogo.visible = false;
      casinobg.visible = false
      c.visible = true
      casinobg1.visible = true
      setTimeout(() => {
        c.visible = false
        casinobg1.visible = false
        jackpotlogo.interactive = true;
        jackpotlogo.visible = true;
        casinobg.visible = true
      }, 3000);
    });
  }
}
