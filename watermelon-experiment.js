var originalUrl = "https://www.khanacademy.org/computer-programming/animated-transparency-using-get-and-tint-finally/5862903248453632";

with( KP )
{
//-----------------------------

// This technique struggles at higher framerates, but not as bad as earlier attempts.
frameRate(30);

// IF YOU DON'T SEE THE TRANSPARENCY ANIMATION, OR IF IT NEVER GETS TO 100% OPACITY,
// KICKSTART IT ON LINE 81 !!!
// THE TINT FUNCTION IS BUGGY.

// http://processingjs.org/reference/PImage/
// http://processingjs.org/reference/tint_/

// Draws a watermelon slice.
var getSlice = function() {
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
    var pimg = get(72,114,257,175);
    // erase before returning
    background(0, 0, 0, 0);
    return pimg;
};

var drawBackground = function(){
 noFill();
stroke(77, 77, 77);
strokeWeight(10);
rect(72,114,257,175);   
};

var slice = getSlice();
var opacity = 0;
var opacityDirection = 0.01; // also rate of change

imageMode(CENTER);

draw = function() {
    background(255, 255, 255);
    
    drawBackground();
    
    // Update opacity value.
    opacity += opacityDirection;
    // Reverse opacity direction when we hit the minimum or maximum.
    if( opacity > 1 || opacity < 0 ){ opacityDirection *= -1; }
    
    var tintalpha = 255*opacity;
    
    // tint() is buggy.
    // start without tint alpha, wait a while, then enable tint alpha usage and it should work.
    if( frameCount > 60 )
    { tint(255,255,255, tintalpha); }
    else {
        tint(255,255,255, 255); // enable then disable to kickstart animation
    }
    
    image(slice, 200+sin(frameCount)*100, 200+cos(frameCount)*100);
    
    point(200,200);
};

//-----------------------------
}