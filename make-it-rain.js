var sketchMeta = {
	name:"make it rain",
	originalUrl:"https://www.khanacademy.org/computer-programming/spin-off-of-project-make-it-rain/5372088720424960",
	author:"thinsoldier",
	authorUrl:"https://www.khanacademy.org/profile/thinsoldier/projects",
};


var originalUrl = "";

with( KP )
{
//-----------------------------

var xPositions = [];
var yPositions = [];
var colors     = [];


var randomDrop = function(){
    xPositions.push( random(1, width) );
    yPositions.push( random(1, height) );
    // 3. Make an array of colors, so that every drop is a different color. 
    colors.push( color(random(100,255), random(100,255), random(100,255)) );
};

// 6. Initialize the arrays using a for loop and random() function, at the beginning of the program. 
for(var i = 0; i < 25; i++) { randomDrop(); } // The randomDrop function uses random().

var characterX = 0;
var characterY = 0;

draw = function() {
    image(getImage("space/background"),0,0);

    // 5. Make it so that when the user clicks, a new drop is added to the array. 
    if(mouseIsPressed){ randomDrop(); }
    
    
    //-----------------------------
    // 4. Make other things rain, like snowflakes (using more shape commands) or avatars (using the image commands). 
    characterY += 0.05;
    var y = Math.sin( characterY ) * 50 + 100;
    var y2 = Math.sin( characterY+0.5 ) * 40 + 100;
    
    image(getImage("space/beetleship"), characterX, y);
    image(getImage("space/beetleship"), characterX - 400, y);
    image(getImage("space/beetleship"), characterX - 200, y2);
    image(getImage("space/beetleship"), characterX + 200, y2);
    
    characterX+=1.33;
    
    if( characterX > 400 ){ characterX = 0; }
    //-----------------------------
    
    
    
    for (var i = 0; i < xPositions.length; i+=1) 
    {
        // 4. Make other things rain, like snowflakes (using more shape commands) or avatars (using the image commands). 
        image(getImage("space/star"), xPositions[i], -60 + yPositions[i], 20, 20);
        
        noStroke();
        fill(colors[i]);
        ellipse(xPositions[i], yPositions[i], 7, 7);
        yPositions[i] += 2 + i*0.02;
        
        // 2. Make it so that the drops start back at the top once they've reached the bottom, using a conditional. 
        if(yPositions[i] > height + 50){ yPositions[i] = 0; }
    }
    
    
    
};

//-----------------------------
}