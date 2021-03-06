var sketchMeta = {
	name:"animal attack",
	originalUrl:"https://www.khanacademy.org/computer-programming/spin-off-of-project-animal-attack/5652289920565248",
	author:"thinsoldier",
	authorUrl:"https://www.khanacademy.org/profile/thinsoldier/projects",
};


with( KP )
{
//-----------------------------

frameRate(24);

var bodyX = 200; // 200
var bodyY = 220; // 220
var scaleBase = 1.0;
var bodyW = 124 * scaleBase; // 124


var mouseReporter = function()
{
    fill(255, 0, 0);
    text('x:'+mouseX+' y:'+mouseY, mouseX, mouseY);
    //var mymath = mouthW;
    //text(mymath,mouseX, mouseY+20);
};

var color1 = color(240, 209, 36);
var color2 = color(219, 188, 33);
var color3 = color(209, 176, 8);

draw = function() {
    
var bodyH = bodyW*0.85484; // 106
var earX = bodyW/2.82; //46-ish √
var earY = bodyY - bodyH/3.14;//186-ish √
var earW = bodyW/2.48; // 50
var earH = bodyW/2.06666; //60
var earPeak = 125;
var earLobe = 335;

var eyeX = bodyW/2.8837; // 43-ish
var eyeY = bodyY - bodyH/3.2121; // 33-ish
var eyeW = bodyW/3.4444; //36-ish
var eyeH = bodyW/3.1; // 40-ish

var mouthY = bodyY + bodyH/5.0; // 242
var mouthW = bodyW/2.0328; // 61
var mouthH = bodyW/3.1; // 40

var noseX = bodyX - 0; // 200 but relative to body width
var noseY = bodyY + bodyH/5;
var noseW = bodyW/2;
var noseH = bodyH/2.65; // +40 relative to body height √
    
    background(207, 254, 255);
    stroke(0, 0, 0);
    fill(color1);
    ellipse(bodyX, bodyY, bodyW, bodyH); // head
    fill(color2);
    ellipse(noseX, noseY, noseW, noseH); // nose
    fill(color1);
    arc(bodyX-earX,earY,earW,earH,earPeak,earLobe); // left ear
    arc(bodyX+earX,earY,earW,earH,180-earLobe,180-earPeak); // right ear
    fill(219, 184, 7);
    noStroke();
    
    arc(bodyX-eyeX, eyeY, eyeW, eyeH, -14, 308);
    arc(bodyX+eyeX, eyeY, eyeW, eyeH, -14, 308);
    fill(color3);
    
    arc(bodyX+0, mouthY, mouthW, mouthH,180, 360); // mouth shadow
    mouseReporter();
    bodyW++;
};


//-----------------------------
}