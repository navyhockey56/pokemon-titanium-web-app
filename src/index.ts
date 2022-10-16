import * as PIXI from 'pixi.js';

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new PIXI.Application({
    width: 1250,
    height: 800
});

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

//const texture = PIXI.Texture.from('./assets/christmas-rs.png');
const texture = PIXI.Texture.from(require('./assets/christmas-rs.png').default)
let sprite = new PIXI.Sprite(texture);
sprite.height = 15;
sprite.width = 15;

sprite.x = 250;
sprite.y = 250;

app.stage.addChild(sprite);
