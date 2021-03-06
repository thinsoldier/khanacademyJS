var originalUrl = null;

var GW = 100;
with( khanProcessing() )
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
for(var i = 0; i < 5; i++) { randomDrop(); } // The randomDrop function uses random().

var characterX = 0;
var characterY = 0;

var img1 = getWebImage("img/pardoart.net.jpg");
var img2 = getWebImage("img/devastator_funk_by_pacman23.png");
//println(img2.width);
image( img2, 0,0, img2.width*0.3, img2.height*0.3);
img2 = get(0,0,img2.width*0.3, img2.height*0.3);
println(img2.width);


draw = function() {
	
    image( img1,0,0, width, height);

image(img2, 209, 0, GW, img2.height);

    // 5. Make it so that when the user clicks, a new drop is added to the array. 
    if(mouseIsPressed){ randomDrop(); }
    
    
    //-----------------------------
    // 4. Make other things rain, like snowflakes (using more shape commands) or avatars (using the image commands). 
    characterY += 0.05;
    var y = Math.sin( characterY ) * 50 + 100;
    var y2 = Math.sin( characterY+0.5 ) * 40 + 100;
    
    image(img2, characterX + (209*2), y);
		image(img2, characterX + 209, y2);
		image(img2, characterX, y);
    image(img2, characterX - 209, y2);
    image(img2, characterX - (209*2), y);
    image(img2, characterX - (209*3), y2);
		image(img2, characterX - (209*4), y);
		image(img2, characterX - (209*5), y2);
    
    characterX+=1.33;
    
    if( characterX > 1045 ){ characterX = 0 - img2.width; println('!!'); }
    //-----------------------------
    
    
    
    for (var i = 0; i < xPositions.length; i+=1) 
    {
        // 4. Make other things rain, like snowflakes (using more shape commands) or avatars (using the image commands). 
        image(getWebImage("img/comment.png"), xPositions[i], -60 + yPositions[i], 20, 20);
        
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