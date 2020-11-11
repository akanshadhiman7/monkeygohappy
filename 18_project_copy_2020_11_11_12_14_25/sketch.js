
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var obstacleGroup,bananaGroup;
var iground;
var background,backgroundImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 backgroundImage = loadImage("jungle.jpg");
}



function setup() {
  createCanvas(600,500);
  
  background = createSprite(200,200,20,20);
  background.addImage(backgroundImage);
  background.velocityX = -5;
  
  
monkey = createSprite(200,200,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  iground = createSprite(450,378,1000,10);
  iground.visible = false;
  
  
 bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
 
  
  if(keyDown("space")) {
    monkey.velocityY = -5;
    
  }
  monkey.velocityY =monkey.velocityY+.1;
  monkey.collide(iground);
  
   if (background.x < 0){
   background.x = background.width/4;
  }
  
  if(monkey.isTouching(bananaGroup)) {
    score = score+10;
    bananaGroup.destroyEach();
  
  }
  switch(score){
    case 10: monkey.scale=0.12;
      break;
      case 20: monkey.scale=0.14;
      break;
      case 30: monkey.scale=0.16;
      break;
      case 40: monkey.scale=0.18; 
      break;
      default: break; 
  }
  
  
  if (monkey.isTouching(obstacleGroup)) {
    bananaGroup.destroyEach();
    obstacleGroup.destroyEach();
    bananaGroup.setVelocityXEach(0);
     obstacleGroup.setVelocityXEach(0);
    fill("red");
   stroke("red");
   textSize(40);
   text("GAME OVER",100,225);
  reset()
  
   
  }
  
  banana();
  
  obstacle();

drawSprites();
  fill("red");
  textSize(25);
  text("score:"+score,360,30);
}
function obstacle() {
  if(frameCount%300===0) {
 var obstacle = createSprite(400,338,30,30);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
  obstacle.x = Math.round(random(500,600));
    obstacleGroup.add(obstacle);
    obstacle.velocityX=-4;
    lifetime=300;
  }
}
function banana() {
   if(frameCount%100===0) {
 var  banana = createSprite(450,220,20,20);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.y = Math.round(random(0,200));
      bananaGroup.add(banana );
     banana.velocityX=-4;
     lifetime = 200;
}}




