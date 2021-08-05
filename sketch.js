var iss, spacebg, shipIdle, shipLeft, shipRight, shipBoth, issImg, spacecraft;
var hasDocked = false;

function preload() {
  issImg = loadImage("images/iss.png");
  spacebg = loadImage("images/spacebg.jpg");
  shipIdle = loadImage("images/spacecraft1.png");
  shipBoth = loadImage("images/spacecraft2.png");
  shipLeft = loadImage("images/spacecraft3.png");
  shipRight = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(1600,800);

  spacecraft = createSprite(600, 500);
  spacecraft.addImage(shipIdle);
  spacecraft.scale = 0.4;

  iss = createSprite(600, 300);
  iss.addImage(issImg);
  iss.scale = 1.5;
}

function draw() {
  background(spacebg);  

  if(!hasDocked){

    spacecraft.x += random(-1, 1);

    if(keyDown(UP_ARROW)){
      spacecraft.y -= 2;
      spacecraft.addImage(shipBoth);
    }

    if(keyDown(LEFT_ARROW)){
      spacecraft.x -= 2;
      spacecraft.addImage(shipLeft);
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.x += 2;
      spacecraft.addImage(shipRight);
    }

    if(keyDown(DOWN_ARROW)){
      spacecraft.y += 2;
      spacecraft.addImage(shipBoth);
    }

    if(spacecraft.x > 497 && spacecraft.x < 500 && spacecraft.y > 477 && spacecraft.y < 480) {
      hasDocked = true;
      spacecraft.y -= 50;
    }

  }

  if(hasDocked === true){
    spacecraft.addImage(shipIdle);
    fill("yellow");
    textSize(32);
    text("You Docked The Ship!", 850, 250);
  }

  console.log(hasDocked, spacecraft.x, spacecraft.y, 477 - spacecraft.y)

  drawSprites();
}