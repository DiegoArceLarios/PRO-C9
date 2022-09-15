var red,green,yellow,blue,black,white,brown,pink,purple;

function setup() {
  createCanvas(400,400);

  red = createSprite(100,100,50,50)
  green = createSprite(200,100,50,50)
  yellow = createSprite(300,100,50,50)
  blue = createSprite(100,200,50,50)
  black = createSprite(200,200,50,50)
  white = createSprite(300,200,50,50)
  brown = createSprite(100,300,50,50)
  pink = createSprite(200,300,50,50)
  purple = createSprite(300,300,50,50)

  red.shapeColor = "red";
  green.shapeColor = "green";
  yellow.shapeColor = "yellow";
  blue.shapeColor = "blue";
  black.shapeColor = "black";
  white.shapeColor = "white";
  brown.shapeColor = "brown";
  pink.shapeColor = "pink";
  purple.shapeColor = "purple";
}

function draw() 
{

  // escribir el código para cambiar el color del fondo 
  if(keyDown("1")){
    background("red");
  }
  if(keyDown("2")){
    background("green");
  }
  if(keyDown("3")){
    background("yellow");
  }
  if(keyDown("4")){
    background("blue");
  }
  if(keyDown("5")){
    background("black");
  }
  if(keyDown("6")){
    background("white");
  }
  if(keyDown("7")){
    background("brown");
  }
  if(keyDown("8")){
    background("pink");
  }
  if(keyDown("9")){
    background("purple");
  }




  
  drawSprites();
}

