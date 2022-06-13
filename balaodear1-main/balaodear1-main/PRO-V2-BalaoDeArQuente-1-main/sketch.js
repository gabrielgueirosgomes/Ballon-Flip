var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop, obsTop1, obsTop2
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3


function preload(){
bgImg = loadImage ("assets/bg.png")
balloonImg = loadAnimation ("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png")
}

function setup(){

//imagem de plano de fundo
  bg = createSprite (165, 485, 1, 1)
  bg.addImage(bgImg)
  bg.scale = 1.3
//criando canto superior e inferior
bottomGround = createSprite (200, 390, 800, 20)
bottomGround.visible = false;

topGround = createSprite (200, 10, 800, 20)
topGround.visible = false;
      
//criando o balão     
  balloon = createSprite (100, 200, 20, 50)
  balloon.addAnimation("balão", balloonImg)
  balloon.scale = 0.2

}

function draw() {
  
  background("black");
        
          //fazendo o balão de ar quente pular
          
          if(keyDown("space")&& balloon.y >= 100) {
            balloon.velocityY = -12;
        }
          //adicionando gravidade
          balloon.velocityY = balloon.velocityY + 0.8
   
        drawSprites();
        
}
