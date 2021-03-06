var sketchMeta = {
	name:"radial-gradient",
	originalUrl:"",
	author:"thinsoldier",
	authorUrl:"https://www.khanacademy.org/profile/thinsoldier/projects",
};

var originalUrl = null;

with( KP )
{
//-----------------------------

translate(200,200);
var startEllipse = 387;
var percentOfEllipse = 0;
var startColor = color(89, 0, 89);
var endColor = color(244, 255, 127);

var x = 0;
var y = 0;

for( var i=0; i<=100; i+=1)
{
    noFill();
    noStroke();
    var percentage = i/100;
    
    percentOfEllipse = startEllipse * percentage;
    
    var eSize = startEllipse - percentOfEllipse;
    
    var currentColor = lerpColor(startColor, endColor, percentage);
    fill(currentColor);
    

    ellipse(x,y,eSize,eSize);


    fill(255, 255, 255);
    rect(-182,-195,65,53);
    fill(255, 0, 0);
    println(percentage);
    text(percentage * 100 + " %", -175, -183);
    text(percentOfEllipse,-175,-166);
    
}


//-----------------------------
}