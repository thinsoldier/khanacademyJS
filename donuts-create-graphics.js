var sketchMeta = {
	name:"reusable-donut-via-creategraphics",
	originalUrl:"https://www.khanacademy.org/computer-programming/reusable-donut-via-creategraphics/5350912500563968",
	author:"thinsoldier",
	authorUrl:"https://www.khanacademy.org/profile/thinsoldier/projects",
};



with( KP )
{
//-----------------------------

// Create Graphics Buffer
var ctx = createGraphics(260, 245, JAVA2D);
// Begin filling Object with stuff
{
ctx.beginDraw();
ctx.background(0,0,0,0);
ctx.translate(-70,-70);
ctx.strokeWeight(5);
ctx.stroke(168, 92, 0); // donut

// shadow
ctx.fill(168, 92, 0);
ctx.ellipse(215, 226, 206, 167);
ctx.filter(BLUR, 6);

ctx.fill(209, 161, 111);
ctx.ellipse(199, 206, 206, 167); 

ctx.stroke(207, 91, 114);
ctx.fill(255, 181, 181);
ctx.ellipse(199, 189, 208, 160);

// donut hole
ctx.fill(209, 161, 111);
ctx.ellipse(202, 182, 69, 41);
ctx.stroke(125, 175, 250);
ctx.line(265, 179, 273, 181); // blue sprinkles
ctx.line(169, 140, 161, 144);
ctx.line(131, 218, 138, 212);
ctx.line(220, 237, 218, 228);
ctx.stroke(197, 140, 250);
ctx.line(232, 128, 242, 133); // purple sprinkles
ctx.line(141, 174, 148, 168);
ctx.line(160, 218, 167, 212);
ctx.line(259, 217, 256, 225);
ctx.stroke(255, 255, 255);
ctx.line(244, 213, 236, 210); // white sprinkles
ctx.line(129, 162, 126, 153);
ctx.line(176, 244, 168, 238);
ctx.line(206, 129, 199, 134);
ctx.stroke(255, 87, 168);
ctx.line(281, 201, 272, 202); // pink sprinkles
ctx.line(122, 199, 125, 189);
ctx.line(203, 219, 194, 222);
ctx.line(261, 149, 252, 156);
ctx.stroke(250, 242, 87);
ctx.line(261, 196, 249, 198); // yellow sprinkles
ctx.line(158, 194, 149, 189);
ctx.line(197, 250, 191, 241);
ctx.line(218, 143, 229, 146);
}
// Stop filling Object with stuff
ctx.endDraw();

// wooden table
{
background(143, 90, 26); // wooden table

strokeWeight(5); //wood grains row 1
stroke(107, 59, 28);
line(54, 30, -7, 30); 
line(85, 30, 67, 30); 
line(200, 30, 102, 30); 
line(309, 30, 280, 30); 
line(405, 30, 330, 30); 

line(120, 80, 23, 80); //wood grains row 2
line(348, 80, 298, 80);
line(409, 80, 369, 80);

line(51, 130, -10, 130); //wood grains row 3
line(381, 130, 298, 130);

line(72, 180, 15, 180); //wood grains row 4
line(407, 180, 367, 180);

line(120, 230, -3, 230); //wood grains row 5
line(409, 230, 369, 230);

line(51, 280, -10, 280); //wood grains row 6
line(381, 280, 298, 280);
line(83, 284, 150, 284);

line(51, 330, -10, 330); //wood grains row 7
line(410, 330, 339, 330);
line(83, 330, 196, 330);

line(23, 380, 104, 380); //wood grains row 8
line(126, 380, 156, 380);
line(187, 380, 318, 380);
line(347, 380, 423, 380);   
}

// Use the reusable image as many times as you like
image( ctx, -53, 15);
image( ctx, 184, 156);
image( ctx, -14, 101);
image( ctx, 137, 57);
image( ctx, 13, 13);


//-----------------------------
}