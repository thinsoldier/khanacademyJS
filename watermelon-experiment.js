var originalUrl = "https://www.khanacademy.org/computer-programming/using-get-v6-mask/4633084460400640";

with( KP )
{
//-----------------------------

// This technique struggles at higher framerates.
frameRate(30);

// http://processingjs.org/reference/PImage/
// http://processingjs.org/reference/PImage_mask_/

// Draws a watermelon slice. Returns a pimg.
var getSliceColor = function() {
    noStroke();
    // give canvas completely transparent background
    background(0, 0, 0, 0);
    // draw slice on transparent background    
    //Shadow
    fill(222, 222, 222);
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

/* 
It would be much easier if there was a way to extract the alpha channel automatically created by getSliceColor. 
And then adjust its brightness/darkness.
*/

// Draws a black and grey shape that exactly matches the watermelon slice. Returns a pimg.
var getSliceMask = function( alpha ) {
    if(alpha > 1 ){alpha = 1.00;}
    if(alpha < 0 ){alpha = 0.00;}
    if(alpha === undefined){ alpha = 0.5; }
    
    noStroke();
    // give canvas completely transparent background
    background(0, 0, 0, 0);
    // draw slice on transparent background
    
    // solid bg for debugging
    //background(0, 179, 255);
    
    //Shadow
    fill(100 * alpha);
    arc(195, 166, 245, 245, 20, 200);
    
    // Main slice body
    fill(255 * alpha);
    arc(210, 157, 250, 250, 20, 200);
    arc(220, 160, 230, 230, 20, 200);
    arc(225, 161, 200, 200, 20, 200);
    
    fill(33, 0, 0);
    strokeWeight(2);
    stroke(0, 0, 0, 40);
    // capture and return what was drawn as an independant image
    // MASK MUST BE EXACTLY THE SAME SIZE AS THE IMAGE IT WILL BE USED TO MASK.
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

var slice = getSliceColor();
var opacity = 0;
var opacityDirection = 0.01; // also rate of change

draw = function() {
    // MASK MUST BE EXACTLY THE SAME SIZE AS THE IMAGE IT WILL BE USED TO MASK.
    // Update slice image's mask with varying opacity.
    slice.mask(getSliceMask(opacity));
    
    // Update opacity value.
    opacity += opacityDirection;
    // Reverse opacity direction when we hit the minimum or maximum.
    if( opacity > 1 || opacity < 0 ){ opacityDirection *= -1; }
    
    drawBackground();
    
    imageMode(CENTER);
    image(slice, 200+sin(frameCount)*100, 200+cos(frameCount)*100);
    
    point(200,200);
};

//-----------------------------
}