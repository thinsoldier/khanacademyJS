var originalUrl = "https://www.khanacademy.org/computer-programming/compass/5061508998496256";

with( KP )
{
//-----------------------------

var compassColor = color(158, 138, 104);
var compassColor2 = color(217, 207, 200);
var compassColor3 = color(64, 58, 48);
var backgroundColor = color(44, 55, 71);

var Compass = function(x,y,s,t){
    this.x = x || 0;
    this.y = y || 0;
    this.s = s || 200;
    
    this.rRim1 = this.s/2*0.99;
    this.rRim2 = this.s/2*0.9465;
    
    // Radii for the compass
    this.r1 = this.s/2*0.938;
    this.r2 = this.s/2*0.902;
    this.r3 = this.s/2*0.82;
    this.r4 = this.s/2*0.80;
    this.r5 = this.s/2*0.62;
    this.r6 = this.s/2*0.28;
    this.r7 = this.s/2*0.265;
    this.r8 = this.s/2*0.17;
    this.r9 = this.s/2*0.155;
    this.r10 = this.s/2*0.16;
    this.r11 = this.s/2*0.12;
    
    // Radii for the Needle
    this.rN1 = this.s/2*0.85;
    this.rN2 = this.s/2*0.56;
    this.rN3 = this.s/2*0.13;
    this.rN4 = this.s/2*0.62;
    this.rN5 = this.s/2*0.09;
    
    // Button variables
    this.but1x = this.x-this.s/2;
    this.but1y = this.y-this.s*5/7.5;
    this.but1w = this.s/4;
    this.but1h = this.s/5;
    
    this.but2x = this.x+this.s/4;
    this.but2y = this.y-this.s*5/7.5;
    this.but2w = this.s/4;
    this.but2h = this.s/5;
    
    // variables used in the following for loops for calculating positions of shapes
    var i, j, i2, j2, i3, j3, theta;
    
    this.ticks = [];
    for(theta=0;theta<360;theta+=2){
        i = cos(theta);
        j = sin(theta);
        this.ticks.push([i*this.r1 + this.x, j*this.r1 + this.y, i*this.r2 + this.x, j*this.r2 + this.y]);
    }
    
    this.middleBars = [];
    for(theta=12.75; theta<372.75; theta+=360/16){
        i = cos(theta);
        j = sin(theta);
        this.middleBars.push([this.x + i*this.r5, this.y + j*this.r5]);
    }
    
    this.firstTriangles = [];
    for(theta = 22.5; theta<360; theta += 360/8){
        i = cos(theta);
        j = sin(theta);
        i2 = cos(theta-90);
        j2 = sin(theta-90);
        i3 = cos(theta+90);
        j3 = sin(theta+90);
        this.firstTriangles.push([this.r5*i+this.x, this.r5*j+this.y, this.r11/2*i2+this.x, this.r11/2*j2+this.y, this.r11/2*i3+this.x, this.r11/2*j3+this.y]);
    }
    
    this.secondTriangles = [];
    for(theta = 45; theta<405; theta += 360/4){
        i = cos(theta);
        j = sin(theta);
        i2 = cos(theta-90);
        j2 = sin(theta-90);
        i3 = cos(theta+90);
        j3 = sin(theta+90);
        this.secondTriangles.push([this.r5*i+this.x, this.r5*j+this.y, this.r11/2*i2+this.x, this.r11/2*j2+this.y, this.r11/2*i3+this.x, this.r11/2*j3+this.y]);
    }
    
    this.innerBars = [];
    for(theta=0; theta<360; theta+=360/16){
        i = cos(theta);
        j = sin(theta);
        this.innerBars.push([this.x + i * this.r5, this.y + j * this.r5]);
    }
    
    this.thirdTriangles = [];
    for(theta = 0; theta<360; theta += 360/4){
        i = cos(theta);
        j = sin(theta);
        i2 = cos(theta-90);
        j2 = sin(theta-90);
        i3 = cos(theta+90);
        j3 = sin(theta+90);
        this.thirdTriangles.push([this.r5*i, this.r5*j, this.r11/2*i2+this.x, this.r11/2*j2+this.y, this.r11/2*i3+this.x, this.r11/2*j3+this.y]);
    }
};

Compass.prototype._drawCompassRim = function(){
    strokeWeight(2);
    stroke(0);
    fill(compassColor3);
    ellipse(this.x, this.y, this.rRim1*2, this.rRim1*2);
    fill(compassColor2);
    ellipse(this.x, this.y, this.rRim2*2, this.rRim2*2);
};

Compass.prototype._drawInnerRings = function(){
    strokeWeight(1);
    fill(compassColor);
    ellipse(this.x,this.y,this.r2*2,this.r2*2);
    fill(compassColor2);
    ellipse(this.x,this.y,this.r3*2,this.r3*2);
    fill(compassColor);
    ellipse(this.x,this.y,this.r4*2,this.r4*2);
    ellipse(this.x,this.y,this.r5*2,this.r5*2);
    fill(0, 0, 0);
    ellipse(this.x,this.y,this.r10*2,this.r10*2);
};

Compass.prototype._drawTicks = function(){
    strokeWeight(1);
    for(var i=0; i<this.ticks.length; i++){
        line(this.ticks[i][0],
             this.ticks[i][1],
             this.ticks[i][2],
             this.ticks[i][3]);
    }
};

Compass.prototype._drawMiddleBars = function(){
    for(var i=0; i<this.middleBars.length; i++){
        line(this.x, this.y, this.middleBars[i][0], this.middleBars[i][1]);
    }
};

Compass.prototype._drawFirstTriangles = function(){
    stroke(0, 0, 0);
    for(var i=0; i<this.firstTriangles.length; i++){
        var t = this.firstTriangles[i];
        fill(0, 0, 0);
        triangle(t[0], t[1], t[2], t[3], this.x, this.y);
        fill(compassColor2);
        triangle(t[0], t[1], this.x, this.y, t[4], t[5]);
    }
};

Compass.prototype._drawMiddleRings = function(){
    fill(compassColor2);
    ellipse(this.x,this.y,this.r6*2,this.r6*2);
    fill(compassColor);
    ellipse(this.x,this.y,this.r7*2,this.r7*2);
};

Compass.prototype._drawSecondTriangles = function(){
    stroke(0, 0, 0);
    for(var i=0; i<this.secondTriangles.length; i++){
        var t = this.secondTriangles[i];
        fill(0, 0, 0);
        triangle(t[0], t[1], t[2], t[3], t[4], t[5]);
    }
};

Compass.prototype._drawInnerBars = function(){
    for(var i=0; i<this.innerBars.length; i++){
        line(this.x, this.y, this.innerBars[i][0], this.innerBars[i][1]);
    }
};

Compass.prototype._drawMiddleInnerRings = function(){
    fill(compassColor2);
    ellipse(this.x,this.y,this.r8*2,this.r8*2);
    fill(compassColor);
    ellipse(this.x,this.y,this.r9*2,this.r9*2);
};

Compass.prototype._drawThirdTriangles = function(){
    stroke(0, 0, 0);
    fill(compassColor2);
   // debug(this.thirdTriangles);
    for(var i=0; i<this.thirdTriangles.length; i++){
        var t = this.thirdTriangles[i];
        for(var j=8; j>0; j--){
            triangle(t[0]/8*j + this.x, t[1]/8*j + this.y, t[2], t[3], t[4], t[5]);    
        }
    }
};

Compass.prototype._drawNumbers = function(){
    translate(this.x,this.y);
    fill(0, 0, 0);
    for(var theta=0;theta<360;theta+=20){
        rotate(theta);
        text(theta,0,-(this.r2 + this.r3)/2);
        rotate(-theta);
    }
    translate(-this.x,-this.y);
};

Compass.prototype._drawCardinalDirections = function(){
    textFont(createFont("times", 20),20);
    text("N",0+this.x,-(this.r4+this.r5)/2+this.y);
    text("S",0+this.x,(this.r4+this.r5)/2+this.y);
    text("W",-(this.r4+this.r5)/2+this.x,0+this.y);
    text("E",(this.r4+this.r5)/2+this.x,0+this.y);
};

Compass.prototype._drawCenterCircles = function(){
    fill(compassColor2);
    ellipse(this.x,this.y,this.r10,this.r10);
    ellipse(this.x,this.y,this.r11,this.r11);
};

Compass.prototype._drawCompass = function(x,y,s){
    textAlign(CENTER, CENTER);
    textSize(this.s/30);
    this._drawCompassRim();
    this._drawInnerRings();
    this._drawTicks();
    this._drawMiddleBars();
    this._drawFirstTriangles();
    this._drawMiddleRings();
    this._drawSecondTriangles();
    this._drawInnerBars();
    this._drawMiddleInnerRings();
    this._drawThirdTriangles();
    this._drawNumbers();
    this._drawCardinalDirections();
    this._drawCenterCircles();
};

Compass.prototype.draw = function() {
     this._drawCompass();
};

background(backgroundColor);
var compass = new Compass(200, 200, 350);
compass.draw();


//-----------------------------
}