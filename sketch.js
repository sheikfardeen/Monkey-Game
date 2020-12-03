var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime =0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,360);

  monkey = createSprite(100,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
}


function draw() {
background(1000);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime:" + survivalTime,250,50);
  
  if(keyDown("space")&& monkey.y >= 180) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  

if (ground.x < 600) {
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  
spawnbanana();
spawnobstacle();
drawSprites();
  
}

function spawnbanana() {
  if (frameCount % 80 === 0) {
    banana = createSprite(600,200,20,20);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.velocityX = -3;
    banana.lifetime=210;
    banana.scale = 0.1;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    FoodGroup.add(banana);
  }
  
}

function spawnobstacle() {
  
  if (frameCount % 300 === 0){
   obstacle = createSprite(600,340,20,20);
   obstacle.velocityX = -6;
   obstacle.scale = 0.2;
    
   obstacle.addImage(obstacleImage);
   
    obstacle.lifetime = 200;

    
    obstaclesGroup.add(obstacle);
  }
}



