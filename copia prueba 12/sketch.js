var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){

boyImg = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.PNG","Jake5.png");
pathImg = loadImage("path.png");
  //loadImage de path (camino)
  //loadAnimation de boy (niño)
 
}

function setup(){
  
  createCanvas(400,400);
path = createSprite(205,200,400,400);
path.addImage("nose",pathImg);
path.scale=1.2;
 //crear sprite de path (camino) 
//agregar imagen de path
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
//path.scale=1.2;

boy = createSprite(200,300,400,400);
boy.addAnimation("nose",boyImg);
boy.scale=1;
//crear sprite de boy (niño)
//agregar animación para boy
//boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(1,400,100,800);
leftBoundary.visible=false;
////establecer visibilidad como false (falso) para límite izquierdo

//crear right Boundary (límite derecho)
rightBoundary=createSprite(390,400,100,800);
rightBoundary.visible=false;
//establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background("black");
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
 boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
