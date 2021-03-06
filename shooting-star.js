var sketchMeta = {
	name:"shooting-star.js",
	originalUrl:"",
	author:"thinsoldier",
	authorUrl:"https://www.khanacademy.org/profile/thinsoldier/projects",
};


with( KP )
{
//-----------------------------

frameRate(60);
noStroke();

mouseClicked = function() {
    // Restart the program whenever the user clicks the mouse
    Program.restart();
};


var makeStarField = function(){
    var out = [];
    for(var i=0; i< 140; i++)
    {
        // x, y, radius, opacity, visual Group.
        var obj = {
                    x:random(0,width), y:random(0,height), // current x and y
                    r:random(1,3), o:ceil(random(9,90)), // Radius , Opacity
                    vg:ceil(random(0,4)), // Visual Group 
                };
        out.push(obj);
    }
    var custom = {x:200,y:200,r:9,o:255,vg:2,unique:true};
    out.push(custom);
    return out;
};
var starField = makeStarField();

var normalizeMouse = function( value ){
    return (value - 200) * 0.02;
};

var hypoteneuse = function( x1,y1, x2,y2)
{
	var a = x1 - x2
	var b = y1 - y2
	var c = Math.sqrt( a*a + b*b );
	return c;
}

var drawBG = function(){
    background(29, 40, 115);
    var S = starField;
    noStroke();
    for(var i=0; i<starField.length; i++)
    {
        var star = S[i];
        
        fill(255, 255, 255, S[i].o );
        ellipse(star.x, star.y, star.r, star.r);
				
				// grid lines to track the unique star
				if(star.unique)
				{
					strokeWeight(1);
					stroke(255);
					line(star.x, 0, star.x, height);
					line(0, star.y, width, star.y);
				}
        
        star.x -= star.vg * normalizeMouse( mouseX );
        if( star.x < 0  ) { star.x = 400 + star.x; }
        else if(star.x > 400) { star.x = 0 - star.x; }
        
        star.y += star.vg * normalizeMouse( mouseY ) * -1;
        if(star.y < 0){ star.y = 400 + star.y; }
        else if( star.y > 400  ){ star.y = 0 - star.y;}
    }
		
		// Increase stroke weight based on the distance from the mouse to the center of the screen.
		var distance = hypoteneuse( width/2, height/2, mouseX, mouseY );
		text(distance, 10, 10);
		strokeWeight( distance / 30 );
		
		// Draw line from middle of the screen to the mouse to indicate control of speed.
		line( width/2, height/2, mouseX, mouseY );
		
};



draw = function() {
    drawBG();
};

//-----------------------------
}
