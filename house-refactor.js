var originalUrl = "";

var sketchMeta = {
	name:"Day and Night Animation - Build-a-House",
	originalUrl:"https://www.khanacademy.org/computer-programming/day-and-night-animation-build-a-house/5706035909230592",
	author:"KiddOhNo",
	authorUrl:"https://www.khanacademy.org/profile/KiddOhNo/projects",
};


with( KP )
{
//-----------------------------

// Based on: 

var a = 1; //cloud position
var l = 1; //light change
var c = 0; //color + sun y
var p = 0; //sun x

var cloud_position = a;
var light_change = l;
var color_time_of_day = c;
var sun_x = p;

drawStars = function()
{
	fill(107+c, 107+c, 107+c);
	ellipse(90, 50, 2, 2);
	ellipse(224, 88, 2, 2);
	ellipse(60, 171, 2, 3);
	ellipse(259, 52, 2, 2);
	ellipse(331, 50, 2, 2);
	ellipse(347, 119, 2, 2);
	ellipse(357, 204, 3, 3);
	ellipse(282, 35, 2, 2);
	ellipse(140, 91, 2, 2);
	ellipse(40, 23, 2, 2);
	ellipse(31, 121, 3, 3);
}

drawClouds = function()
{
	fill(255-2*c, 255-2*c, 255-2*c);
	ellipse( a % 600 - 87, 97, 50, 50);
	ellipse( a % 600 -65, 105, 59, 35);
	ellipse( a % 600- 102, 109, 59, 26);
	fill(242-2*c, 242-2*c, 242-2*c);
	ellipse( a % 600- 84, 120, 71, 6);
	
	
	fill(255-2*c, 255-2*c, 255-2*c);
	ellipse(a % 900- 351, 70, 50, 50);
	ellipse(a % 900- 346, 81, 81, 35);
	ellipse(a % 900- 312, 80, 59, 35);
	fill(242-2*c, 242-2*c, 242-2*c);
	ellipse(a % 900- 335, 94, 81, 9);
}

drawHouse = function()
{
	//house top
	fill(252-c, 225-c, 199-c);
	rect(100, 200, 200, 100);

	//siding
	stroke(148-c, 148-c, 148-c);
	for ( var i = 0; i < 50; i+=4) {
			var lineY = 200 + (i);
			line(100, lineY, 232, lineY);
	}
	noStroke();

	//house bottom
	fill(108-c, 115-c, 105-c);
	rect(100, 250, 117, 50);


	//door
	fill(255-c, 255-c, 255-c);
	rect(183, 228, 30, 52);
	fill(153-c, 153-c, 153-c);
	rect(186, 233, 24, 47);
	fill(193+0.5*c, 230+0.5*c, 235-0.5*c);
	rect(188, 234, 20, 14);
	fill(242-c, 220-c, 24-c);
	ellipse(206, 257, 5, 5);

	//stairs
	stroke(168-c, 168-c, 168-c);
	fill(107-c, 107-c, 107-c);
	rect(177, 290, 40, 10);
	rect(177, 280, 40, 10);
	noStroke();

	

	//bay
	fill(250-c, 211-c, 175-c);
	rect(217, 200, 25, 100);
	fill(252-c, 225-c, 199-c);
	rect(242, 200, 33, 100);
	fill(250-c, 211-c, 175-c);
	rect(275, 200, 25, 100);

	stroke(145-c, 145-c, 145-c);
	for ( var i = 0; i < 82; i+=4) {
			var lineY = 200 + (i);
			line(299, lineY, 214, lineY);
	}
	noStroke();

	//windows
	fill(255-c, 255-c, 255-c);
	rect(247, 224, 23, 47);
	fill(193+0.5*c, 230+0.5*c, 235-0.5*c);
	rect(250, 227, 17, 41);


	//roof

	fill(107-c, 104-c, 107-c);
	triangle(94, 200, 160, 200, 157, 140);

	rect(157, 140, 80,60);
	fill(255-c, 255-c, 255-c);
	triangle(153, 200, 308, 200, 236, 139);
	fill(245-c, 211-c, 179-c);
	triangle(158, 200, 304, 200, 236, 143);
	fill(255-c, 255-c, 255-c);
	rect(220, 159, 17, 17);
	fill(193+0.5*c, 230+0.5*c, 235-0.5*c);
	rect(222, 161, 13, 13);

	//bay roof
	fill(255-c, 255-c, 255-c);
	triangle(213, 200, 304, 200, 260, 163);
	fill(115-c, 115-c, 115-c);
	triangle(217, 200, 300, 200, 260, 166);

	//deck
	fill(255-c, 255-c, 255-c);
	rect(100, 290, 77, 10);



	for ( var i = 0; i < 77; i+=18) {
			var rectX = 100 + (i);
			rect(rectX, 270, 5, 20);
	}

	rect(100, 200, 5, 65);
	rect(171, 200, 5, 65);
	rect(154, 200, 5, 65);
	rect(100, 265, 77, 5);

	fill(184-c, 184-c, 184-c);
	rect(157, 122, 23, 53);
	fill(212-c, 212-c, 212-c);
	rect(156, 122, 25, 8);
	fill(201-c, 201-c, 201-c);
	rect(156, 119, 25, 8);
} // end drawHouse

drawRoad = function()
{
	// roadside
	fill(214-c, 214-c, 214-c);
	rect(-1, 305, 401, 11);
	rect(-1, 368, 401, 19);
	
	//road
	fill(94-c, 94-c, 94-c);
	rect(-1, 316, 401, 52);
	
	// stripes
	for ( var i = 0; i < 400; i+=65) {
			var rectX = -7 + (i);
			fill(209-c, 205-c, 84-c);
			rect(rectX, 337, 41, 3);
	}
}


draw = function() {
    
  background(149-c, 208-c, 214-c);

  noStroke();
  
	// Draw Sun
  fill(255, 238, 0);
  ellipse(200+p, 50+3*c, 50, 50);
	
	// Draw stars in the sky if the sun is past a certain point in its cycle.
	// Uses the color_time_of_day global variable.
  if ( c > 50 ) { drawStars(); 	}
  
	// Draw Clouds. Uses the cloud_position global variable.
  drawClouds();
  
	// Draw ground
  fill(58-c, 117-c, 30-c);
  rect(-2, 260, 402, 143);
	
	drawHouse();
	drawRoad();
	
	// Update all variables relevant to animation:
 
	// Update the cloud position variable.
	a += 8.5;
 
 	// Update the light_change adjustment based on the current position of the sun.
	if (c < 0)   { l = +0.5; }
	if (c > 150) { l = -0.5; }

	// Update the color based on the light_change adjustment
	c += l;
  
	// Update the variable used for the x position of the sun based on the color/y position of sun.
  if ( c < 75) { p += 2.5; }
  if ( c > 75) { p -= 2.5; }
}

//-----------------------------
} // end of with env