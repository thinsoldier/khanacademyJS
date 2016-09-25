var originalUrl = "https://www.khanacademy.org/computer-programming/using-get-v3/4853774314242048";

with( KP )
{
//-----------------------------

var setupSlice = function() {
    noStroke();
    // give canvas completely transparent background
    background(0, 0, 0, 0);
    // draw slice on transparent background    
    //Shadow
    fill(0, 0, 0, 50);
    arc(195, 166, 245, 245, 20, 200);
    
    //Dark green
    fill(61, 163, 70);
    arc(210, 157, 250, 250, 20, 200);
    
    //Light green
    fill(195, 275, 201);
    arc(220, 160, 230, 230, 20, 200);
    
    //Red
    fill(255, 61, 61);
    arc(225, 161, 200, 200, 20, 200);
    
    //Seeds
    fill(33, 0, 0);
    strokeWeight(2);
    stroke(0, 0, 0, 40);
    ellipse(145, 150, 7, 10);
    ellipse(184, 163, 7, 10);
    ellipse(223, 176, 7, 10);
    ellipse(263, 189, 7, 10);
    ellipse(300, 201, 7, 10);
    ellipse(160, 184, 7, 10);
    ellipse(200, 196, 7, 10);
    ellipse(241, 208, 7, 10);
    ellipse(279, 219, 7, 10);
    ellipse(174, 215, 7, 10);
    ellipse(214, 227, 7, 10);
    ellipse(254, 238, 7, 10);
    // capture and return what was drawn as an independant image
    return get(72,114,257,175);
};

var setupPlate = function() {
    fill(255);
    stroke(210, 208, 237);
    ellipse(200, 200, 350, 350); // plate
    ellipse(200, 200, 300, 300);
    return get(24, 24, 352, 352);
};

var layers = {slice:setupSlice(), plate:setupPlate()};

var slice = function( x, y ){
    imageMode(CORNER);
    image( layers.slice, x, y );
};
var plate = function( x, y ){
    imageMode(CENTER);
    image( layers.plate, x, y );
};
//-----------------------------

var transparently = function( imgdata, x, y, opacity ){
   var i = imgdata,
    w=i.width,h=i.height,x,y,f,
    g=createGraphics(w,h,'P2D'); //make another drawing board
g.beginDraw();
g.background(255, 255, 255, 0); //fill it with a transparent color
g.image(i); //draw the image on it
g.loadPixels();
var p=g.imageData.data; //p[] now contains the pixel data of g, in RGBARGBA... format
for(var j=p.length-1;j>0;j-=4){ //loop backwards through the pixel data by fours
    p[j]*=opacity; //multiply opacity byte
}
g.updatePixels(); //put pixel data back into g
g.endDraw();
image(g,x,y);
};



var render = function(){

fill(255);
background(186, 145, 20); // wooden table
plate(200,200);


//Bottom slice
rotate(5);
slice( 82, 145 );
//Top slice
rotate(-30);
translate(-63, 37);
slice( 72, 114 );
resetMatrix();
};

var opacity = 0;
var opacityDirection = 0.01;
draw= function() {
    render();
    transparently(layers.slice, 213, 200, opacity);
    opacity += opacityDirection;
    if( opacity > 1 || opacity < 0 ){ opacityDirection *= -1; }
};

//-----------------------------
}