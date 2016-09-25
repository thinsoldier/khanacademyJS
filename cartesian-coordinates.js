var originalUrl = 'https://www.khanacademy.org/computer-programming/cartesian-coordinates/1164729546';

with( KP )
{
//-----------------------------

// <Description> Display mouse position using Cartesian coordinates, where +Y is Up. </Description> 

var OFFSET = 200;
var cartesianX;
var cartesianY;
var flippedY;

// Move 0, 0 to from top left corner to Center
translate(OFFSET, OFFSET); 

// Begin Game Loop
draw = function() {
// Clear the Screen White
background(255, 255, 255); 

cartesianX = mouseX - OFFSET;
cartesianY = mouseY - OFFSET; 

// draw the background grid
stroke(128, 255, 255);
for (var i=-200; i < 200 ; i = i + 10) {
    line(i, -200, i, 200);
    line(-200, i, 200, i);
}

stroke(0, 0, 0);
textSize(16);
// X & Y Markers
text("X", cartesianX + 4, 16);
ellipse(cartesianX, 0, 15, 1);
ellipse(cartesianX, 0, 1, 15);

text("Y", -14, cartesianY -4); 
ellipse(0,cartesianY, 1, 15);
ellipse(0,cartesianY, 15, 1);

// Draw Vertical and Horizontal lines
line(-200,0,200,0); // X axis
line(0,-200,0,200); // Y axis

fill(0, 0, 0); // Set the Text color to Black
textSize(12);

// Create a Cursor icon
stroke(0, 0, 0);
noCursor();
// Draw 4 Lines around Mouse Position
line(cartesianX, cartesianY-14, cartesianX, cartesianY-7); 
line(cartesianX, cartesianY+7, cartesianX, cartesianY+14); 
line(cartesianX-14, cartesianY, cartesianX-7, cartesianY );     
line(cartesianX+7, cartesianY, cartesianX+14, cartesianY ); 

// Draw a Point at Mouse Position(X, Y)
strokeWeight(4);
point(cartesianX, cartesianY); 
strokeWeight(1);

// Display Coordinates
text("Mouse Position X = "+ cartesianX, -190, -175); 
cartesianY *= -1; // Make Negative Positive, & Vice Versa
text("Mouse Position Y = " + cartesianY, -190, -155); 

// Display Numbers
text("150", 6, -150); 
text("100", 6, -100); 
text("50", 6, -50); 
text("0", 6, 0); 
text("-50", 6, 50); 
text("-100", 6, 100); 
text("-150", 6, 150); 

text("150", 150, 0); 
text("100", 100, 0); 
text("50", 50, 0); 
text("-50", -50, 0); 
text("-100", -100, 0); 
text("-150", -150, 0); 

}; // end Game Loop

// Tutorials in plain English by Dillinger

//-----------------------------
}