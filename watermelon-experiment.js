var originalUrl = "https://www.khanacademy.org/computer-programming/using-get/6737139485245440";

with( KP )
{
//-----------------------------


var slice = function() {
    noStroke();
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
};

var setup = function(){
// give canvas completely transparent background
background(250, 155, 250,0);
// draw slice on transparent background
slice();
// capture what was drawn as an independant image
var sliceLayer = get(72,114,257,175);

var output = {slice:sliceLayer};
return output;
};

var layers = setup();
//-----------------------------



/*
I guess it's too light of a meal to be dinner, but I'm craving
watemelon and thought the color scheme would look pretty!
*/

fill(255);
background(186, 145, 20); // wooden table
ellipse(200, 200, 350, 350); // plate
ellipse(200, 200, 300, 300); 

//This is the code for the watermelon

//I want two slices, so I draw it twice and rotate/translate it
//Bottom slice
rotate(5);
image( layers.slice, 82, 145 );
//Top slice
rotate(-30);
translate(-63, 37);
image( layers.slice, 72, 114 );

//-----------------------------
}