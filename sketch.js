var mask, mImg, mGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ob, obImg, obGroup;
var score = 0;
var bg, bgImg;
var fc;
var man, manImg;


function preload(){
  mImg = loadImage("/Images/mask1.png");
  obImg = loadImage("/Images/ob.png");
  manImg = loadAnimation("Images/m1.png","Images/m2.png","Images/m3.png","Images/m4.png");
 // bgImg = loadImage("/Images/bg.png");
}

function setup(){
  createCanvas(windowWidth-300, windowHeight);
  /*mask = createSprite(width/2, height/2 + 250, 40,40);
  mask.addImage(m1Img);
  mask.scale = 0.5;*/


  man = createSprite(width/2, height/2+250, 40,40);
  man.addAnimation("xyz",manImg);


 /* bg = createSprite(width/2, height/2, 40,40);
  bg.addImage(bgImg);
  bg.scale = 6;*/

  obGroup = new Group();
  mGroup = new Group();
}

function draw(){
  background("yellow");
  man.velocityX = 0;
  if(gameState === PLAY){
    score = score+Math.round(getFrameRate()/60);
    spawnOb();
    spawnMask();
    if(man.isTouching(obGroup)){
      obGroup.setVelocityYEach = 30;
    }
    if(keyDown("LEFT_ARROW")){
      man.velocityX = -8;
    }

    if(keyDown("RIGHT_ARROW")){
      man.velocityX = 8;
    }
    


  }


  drawSprites();
  textSize(25);
  fill("black");
  text("Score is "+score, 900,100);
}

function spawnOb(){
  var x  = Math.round(1,4);
  switch(x){
    case 1: x = 35;
    break;
    case 2: x = 30;
    break;
    case 3: x = 20;
    break;
    case 4: x = 15;
    break;
    default: break;
  }
  if (frameCount % x === 0) {
    var ob = createSprite(50,0,40,10);
    ob.x = Math.round(random(50,windowWidth-400));
    ob.addImage(obImg);
    ob.scale = 0.15;
    ob.velocityY = 7;
    ob.lifetime = height/7;
    obGroup.add(ob);
  }
}

function spawnMask(){
  if(frameCount%300  === 0){
    mask = createSprite(50,0,40,10);
    mask.x  = Math.round(random(50, windowWidth-400));
    mask.velocityY  = 4;
    mask.addImage(mImg);
    mask.scale = 0.5;
    mGroup.add(mask);
  }
}