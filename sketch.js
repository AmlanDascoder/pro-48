var canvas,wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wzll12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30, bg;
var w1, w2;
var mario;
var marioImg;
var wart;
var wartImg;
var wart1, wart1Img;
var blueShell;
var blueShell1;
var blueShellImg;
var mushroom1, mushroom2, mushroom3, mushroom4;
var mushroomImg;
var heart;
var heartImg;
var coin;
var coinImg;
var coin2;
var coin3;
var coin4;
var score=0;
var play;
play = 1;
var gameState = play;

var end;
end = 0;

var won = 2;



function preload() {
bg  = loadImage("bg.jpg")
w1 = loadImage("w1.png") 
marioImg = loadImage("Mario.png")
wartImg = loadImage("Wart.png")

blueShellImg = loadImage("blue shell.png")
mushroomImg = loadImage("mushroom.png");
heartImg = loadImage("heart.png")


w2 = loadImage("w2.png")
coinImg = loadImage("Coin.png")
}
function setup() {
  canvas = createCanvas(600,600);
  wall1 = createSprite(50,200,20,300);
  wall1.addImage(w1);
  wall1.scale = 0.4;
  wall1.setCollider("rectangle",0,0,60,300)

  wall2 = createSprite(120,200, 150, 20);
  wall2.addImage(w2);
  wall2.scale = 0.4;
  wall2.setCollider("rectangle",0,0,300,60)

  wall3 = createSprite(120,150, 20, 80);
  wall3.addImage(w1);
  wall3.scale = 0.4;
  wall3.setCollider("rectangle",0,0,60,300)

  wall4 = createSprite(235,120, 250, 20);
  wall4.addImage(w2);
  wall4.scale = 0.4;
  wall4.setCollider("rectangle",0,0,300,60)

  wall5 = createSprite(200,255, 20, 130);
  wall5.addImage(w1);
  wall5.scale = 0.4;
  wall5.setCollider("rectangle",0,0,60,300)

  wall6 = createSprite(260,150, 20, 80);
  wall6.addImage(w1);
  wall6.scale = 0.4;
  wall6.setCollider("rectangle",0,0,60,300)

  wall7 = createSprite(50,470,20, 130);
  wall7.addImage(w1);
  wall7.scale = 0.4;
  wall7.setCollider("rectangle",0,0,60,300)

  wall8 = createSprite(120,470, 150, 20);
  wall8.addImage(w2);
  wall8.scale = 0.3;
  wall8.setCollider("rectangle",0,0,300,60)

  wall9 = createSprite(120,420, 20, 250);
  wall9.addImage(w1);
  wall9.scale = 0.3; 
  wall9.setCollider("rectangle",0,0,60,300)

   wall10 = createSprite(190,450, 20, 60);
   wall10.addImage(w1);
  wall10.scale = 0.3;
  wall10.setCollider("rectangle",0,0,60,300)

   wall11 = createSprite(240,520, 100, 20); 
   wall11.addImage(w2);
  wall11.scale = 0.3;
  wall11.setCollider("rectangle",0,0,300,60)

   wall12 = createSprite(320,510, 20, 80);
   wall12.addImage(w1);
  wall12.scale = 0.3;
  wall12.setCollider("rectangle",0,0,60,300)


   wall13 = createSprite(360,480, 60, 20);
   wall13.addImage(w2);
  wall13.scale = 0.3;
  wall13.setCollider("rectangle",0,0,300,60)

   wall14 = createSprite(430,520, 20, 60);
   wall14.addImage(w1);
  wall14.scale = 0.3;
  wall14.setCollider("rectangle",0,0,60,300)

   wall15 = createSprite(490,480, 60, 20);
   wall15.addImage(w2);
  wall15.scale = 0.3;
  wall15.setCollider("rectangle",0,0,300,60)

   wall16 = createSprite(520,500, 20, 60);
   wall16.addImage(w1);
  wall16.scale = 0.3;
  wall16.setCollider("rectangle",0,0,60,300)

  wall17 = createSprite(350,480, 60, 20);
  wall17.addImage(w2);
  wall17.scale = 0.3;
  wall17.setCollider("rectangle",0,0,300,60)

  wall18 = createSprite(300, 300, 70, 20)
  wall18.addImage(w2);
  wall18.scale = 0.3;
  wall18.setCollider("rectangle",0,0,300,60)

  wall19 = createSprite(340, 325, 20, 70)
  wall19.addImage(w1);
  wall19.scale = 0.3;
  wall19.setCollider("rectangle",0,0,60,300)

  wall20 = createSprite(300, 350, 70, 20)
  wall20.addImage(w2);
  wall20.scale = 0.3;
  wall20.setCollider("rectangle",0,0,300,60)

  wall21 = createSprite(310, 370, 20, 30)
  wall21.addImage(w1);
  wall21.scale = 0.3;
  wall21.setCollider("rectangle",0,0,60,300)

  wall22 = createSprite(380, 180, 100, 20)
  wall22.addImage(w2);
  wall22.scale = 0.3;
  wall22.setCollider("rectangle",0,0,300,60)

  wall23 = createSprite(400, 270, 20, 160)
  wall23.addImage(w1);
  wall23.scale = 0.3;
  wall23.setCollider("rectangle",0,0,60,300)

  wall24 = createSprite(420, 140, 20, 80)
  wall24.addImage(w1);
  wall24.scale = 0.3;
  wall24.setCollider("rectangle",0,0,60,300)

  wall25 = createSprite(440, 100, 60, 20)
  wall25.addImage(w2);
  wall25.scale = 0.3;
  wall25.setCollider("rectangle",0,0,300,60)

  wall26 = createSprite(460, 320, 20, 70)
  wall26.addImage(w1);
  wall26.scale = 0.3;
  wall26.setCollider("rectangle",0,0,60,300)
  
  wall27 = createSprite(500, 295, 70, 20)
  wall27.addImage(w2);
  wall27.scale = 0.3;
  wall27.setCollider("rectangle",0,0,300,60)

  wall28 = createSprite(500, 240, 20, 100)
  wall28.addImage(w1);
  wall28.scale = 0.3;
  wall28.setCollider("rectangle",0,0,60,300)

  wall29 = createSprite(520,200, 50, 20)
  wall29.addImage(w2);
  wall29.scale = 0.3;
  wall29.setCollider("rectangle",0,0,300,60)

  wall30 = createSprite(500, 440, 20, 60)
  wall30.addImage(w1);
  wall30.scale = 0.3;
  wall30.setCollider("rectangle",0,0,60,300)

  mario = createSprite(50,310);
  mario.addImage(marioImg);
  mario.scale = 0.2;

  wart = createSprite(230, 470)
  wart.addImage(wartImg);
  wart.scale = 0.2;

  wart1 = createSprite(240, 260)
  wart1.addImage(wartImg);
  wart1.scale = 0.2;

  blueShell = createSprite(370, 130);
  blueShell.addImage(blueShellImg);
  blueShell.scale = 0.2;

  blueShell1 = createSprite(450, 430);
  blueShell1.addImage(blueShellImg);
  blueShell1.scale = 0.2;

  mushroom1 = createSprite(300, 220);
  mushroom1.addImage(mushroomImg);
  mushroom1.scale = 0.1;

  mushroom2 = createSprite(90, 140);
  mushroom2.addImage(mushroomImg);
  mushroom2.scale = 0.1;

  mushroom3 = createSprite(310, 440);
  mushroom3.addImage(mushroomImg);
  mushroom3.scale = 0.1;

  mushroom4 = createSprite(110, 510);
  mushroom4.addImage(mushroomImg);
  mushroom4.scale = 0.1;

  coin = createSprite(150, 240);
  coin.addImage(coinImg);
  coin.scale = 0.2;

  coin2 = createSprite(400, 335);
  coin2.addImage(coinImg);
  coin2.scale = 0.2;

  coin3 = createSprite(270, 550);
  coin3.addImage(coinImg);
  coin3.scale = 0.2;

  coin4 = createSprite(520, 70);
  coin4.addImage(coinImg);
  coin4.scale = 0.2;

wall1.debug = true;
wall2.debug = true;
wall3.debug = true;
wall4.debug = true;
wall5.debug = true;
wall6.debug = true;
wall7debug = true;
wall8.debug = true;
wall9.debug = true;
wall10.debug = true;
wall11.debug = true;
wall12.debug = true;
wall13.debug = true;
wall14.debug = true;
wall15.debug = true;
wall16.debug = true;
wall17.debug = true;
wall18.debug = true;
wall19.debug = true;
wall20.debug = true;
wall21.debug = true;
wall22.debug = true;
wall23.debug = true;
wall24.debug = true;
wall25.debug = true;
wall26.debug = true;
wall27.debug = true;
wall28.debug = true;
wall29.debug = true;
wall30.debug = true;



  heart = createSprite(random(20,250),random(200.400));
  heart.addImage(heartImg);
  heart.debug = true;
  heart.scale = 0.06;
  heart.velocityX = 1;
  heart.velocityY = 1;



  edges = createEdgeSprites();


  


  

}

  function draw() {
    
    if(gameState===play) {
      background(bg)
    
    if(keyDown("UP_ARROW")) {
      mario.y=mario.y-3;

    } 
    if(keyDown("DOWN_ARROW")) {
      mario.y=mario.y+3;

    } 
    if(keyDown("LEFT_ARROW")) {
      mario.x=mario.x-3;

    } 
    if(keyDown("RIGHT_ARROW")) {
      mario.x=mario.x+3;

    }
    if(mario.isTouching(coin)) {
      coin.destroy();
      score = score+25;
    }

    if(mario.isTouching(coin2)) {
      coin2.destroy();
      score = score+25;
    }
    if(mario.isTouching(coin3)) {
      coin3.destroy();
      score = score+25;
    }
    if(mario.isTouching(coin4)) {
      coin4.destroy();
      score = score+25;
    }

    if(mario.isTouching(mushroom1)) {
      mushroom1.destroy();
      score = score+50;
    }

    if(mario.isTouching(mushroom2)) {
      mushroom2.destroy();
      score = score+50;
    }

    if(mario.isTouching(mushroom3)) {
      mushroom3.destroy();
      score = score+50;
    }

    if(mario.isTouching(mushroom4)) {
      mushroom4.destroy();
      score = score+50;
    }

    if(mario.isTouching(blueShell)) {
      blueShell.destroy();
    gameState = end;
    }

    if(mario.isTouching(blueShell1)){
      blueShell1.destroy();
      gameState=end;

    }
    
    if(mario.isTouching(wart)) {
      wart.destroy();
      gameState = end;

    }

    if(mario.isTouching(wart1)) {
      wart1.destroy();
      gameState = end;

    }


mario.bounceOff(edges);
mario.bounceOff(wall1);
mario.bounceOff(wall2);
mario.bounceOff(wall3);
mario.bounceOff(wall4);
mario.bounceOff(wall5);
mario.bounceOff(wall6);
mario.bounceOff(wall7);
mario.bounceOff(wall8);
mario.bounceOff(wall9);
mario.bounceOff(wall10);
mario.bounceOff(wall11);
mario.bounceOff(wall12);
mario.bounceOff(wall13);
mario.bounceOff(wall14);
mario.bounceOff(wall15);
mario.bounceOff(wall16);
mario.bounceOff(wall17);
mario.bounceOff(wall18);
mario.bounceOff(wall19);
mario.bounceOff(wall20);
mario.bounceOff(wall21);
mario.bounceOff(wall22);
mario.bounceOff(wall23);
mario.bounceOff(wall24);
mario.bounceOff(wall25);
mario.bounceOff(wall26);
mario.bounceOff(wall27);
mario.bounceOff(wall28);
mario.bounceOff(wall29);
mario.bounceOff(wall30);


    
    

    heart.bounceOff(edges);
    heart.bounceOff(wall1);
    heart.bounceOff(wall2);
    heart.bounceOff(wall3);
    heart.bounceOff(wall3);
    heart.bounceOff(wall4);
    heart.bounceOff(wall5);
    heart.bounceOff(wall6);
    heart.bounceOff(wall7);
    heart.bounceOff(wall8);
    heart.bounceOff(wall9);
    heart.bounceOff(wall10);
    heart.bounceOff(wall11);
    heart.bounceOff(wall12);
    heart.bounceOff(wall13);
    heart.bounceOff(wall14);
    heart.bounceOff(wall15);
    heart.bounceOff(wall16);
    heart.bounceOff(wall17);
    heart.bounceOff(wall18);
    heart.bounceOff(wall19);
    heart.bounceOff(wall20);
    heart.bounceOff(wall21);
    heart.bounceOff(wall22);
    heart.bounceOff(wall23);
    heart.bounceOff(wall24);
    heart.bounceOff(wall25);
    heart.bounceOff(wall26);
    heart.bounceOff(wall27);
    heart.bounceOff(wall28);
    heart.bounceOff(wall29);
    heart.bounceOff(wall30);
if(mario.isTouching(heart)) {
  gameState = won;

}
    drawSprites();
  }
  else if(gameState == end) {
    background(0);
    fill("white")
    textSize(30);
    text("You Lost",200,200)
    text("Your Score :"+score,200, 300);
  }  
  else if(gameState == won) {
    background(0);
    fill("white")
    textSize(30);
    text("You Won",200,200)
    text("Your Score :"+score,200, 300);
  }  
  }
  
  
