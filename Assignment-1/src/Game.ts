import {Application, Sprite} from 'pixi.js';
export class Game extends Application{
    constructor(opts:any) {
        super(opts);
        this.preload([
            {name:'car', url:'assets/car.png'},
        ], this.onLoad.bind(this));
    }
    preload(list:any[], cb:()=>{}):void {
        this.loader.add(list);
        this.loader.load(cb);
    }
    onLoad():void {
        const car = new Sprite(this.loader.resources['car'].texture);
        car.x = 300;
        car.y = 100;
        car.scale.set(0.7)
        this.stage.addChild(car);
    }
}
