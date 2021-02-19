var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,585);

    //create 4 different surfaces
    surface1 = createSprite(740,580,180,30);
    surface1.shapeColor = "blue";

    surface2 = createSprite(500,580,180,30);
    surface2.shapeColor = "orange";

    surface3 = createSprite(250,580,180,30);
    surface3.shapeColor = "purple";

    surface4 = createSprite(50,580,180,30);
    surface4.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite(random(20,750));
    box.shapeColor = "white";
    box.scale = 0.3;
    box.velocityX = 3;
    box.velocityY = 3;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
     box.shapeColor ="blue";
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor ="orange";
       }

       if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor ="purple";
        box.velocityX = 0;
        box.velocityY = 0;
        music.play();
       }

       if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor ="green";
       }
       
    drawSprites();
}
