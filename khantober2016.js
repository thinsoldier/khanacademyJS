var sketchMeta = {
	name:"My Khantober 2016 Programs",
	originalUrl:"https://www.khanacademy.org/computer-programming/my-khantober-2016-programs/6123948871843840",
	author:"Chester Banks",
	authorUrl:"https://www.khanacademy.org/profile/chesterbanks/projects",
	canvas:{size:600}
};



with( KP )
{
//-----------------------------

/**
 * From square ninjas and minefields to robot monkeys and ski slopes, Khantober was a blast! Here's a recap of my four #Khantober2016 projects:
 * 
 * BLOCK NINJA 2
    Released: October 4 2016
    Basic description: A game where you have to tap multiple ninjas to make them jump over obstacles.
    Votes: 192
    
 * KNIGHT MONKEY
    Released: October 11 2016
    Basic description: A monkey-themed mashup of capture the flag and tower defense.
    Votes: 192
    
 * COVER OF DARKNESS
    Released: October 18 2016
    Basic description: A game where you have to make it through a minefield without stepping on mines or getting caught in the searchlight.
    Votes: 231

 * DESCENT
    Released: October 25 2016
    Basic description: A game where you ski down mountains while avoiding rocks and trees.
    Votes: 130
*/

var images = {
    bg: function(){
        noStroke();
        for(var i = 0; i < height; i += 20){
            fill(lerpColor(color(12, 37, 66), color(0, 0, 0), i / height));
            rect(0, i, width, 20);
        }
        
        for(var i = 0; i < 200; i ++){
            fill(255, 255, 255, random(255));
            ellipse(random(width), random(height), random(5), random(5));
        }
        
        
        fill(249, 252, 226);
        pushMatrix();
        translate(-10, -10);
        beginShape();
        vertex(319, 53);
        bezierVertex(266, 101, 298, 153, 376, 114);
        bezierVertex(317, 112, 307, 102, 321, 53);
        endShape(CLOSE);
        popMatrix();
        
        fill(15, 48, 13);
        beginShape();
        vertex(59, 400);
        bezierVertex(280, 372, 272, 277, 445, 400);
        endShape(CLOSE);
        fill(23, 74, 21);
        beginShape();
        vertex(341, 400);
        bezierVertex(40, 350, 32, 304, -40, 400);
        endShape(CLOSE);
        
        noStroke();
        fill(255, 255, 0, 50);
        //triangle(50, 400, 250, 400, 500, 0);
        //triangle(150, 400, 350, 400, -100, 0);
        
        filter(BLUR, 2);
        
        return get(0, 0, width, height);
    },
    light1: function(){
        noStroke();
        fill(255, 255, 0, 50);
        triangle(50, 400, 250, 400, 500, 0);
        
        filter(BLUR, 2);
        
        return get(0, 0, 400, 400);
    },
    light2: function(){
        noStroke();
        fill(255, 255, 0, 50);
        triangle(150, 400, 350, 400, -100, 0);
        
        filter(BLUR, 2);
        
        return get(0, 0, 400, 400);
    },
    
    BN2: function(){
        textFont(createFont("HelveticaNeue-CondensedBold")); // If you don't have this font, change it to Impact, I suppose
        textAlign(CENTER, CENTER);
        
        strokeWeight(10);
        for (var i = 0; i <= height; i +=10) {
            stroke(lerpColor(color(0, 25, 46), color(94, 120, 153), i/height));
            line(0, i, height, i);
        }
        pushMatrix();
        scale(1);
        translate(0, -60);
        scale(1, 1.5);
        fill(255, 255, 255);
        textSize(100);
        text('BLOCK', 200, 110);
        textSize(120);
        text('NINJA', 200, 189);
        textSize(387);
        pushMatrix();
        translate(200, 300);
        scale(1.8, 0.6);
        text('2', 0, 0);
        popMatrix();
        popMatrix();
        
        pushMatrix();
        translate(120, 600);
        rotate(-5);
        scale(3.5, 5);
        noStroke();
        fill(245);
        rect(-27, -27, 54, 54);
        fill(45);
        rect(-25, -25, 50, 50);
        fill(204, 70, 70);
        rect(-25, -15, 50, 15);
        fill(45);
        rect(-9, -12, 10, 10);
        rect(5, -12, 10, 10);
        popMatrix();
        
        return get(0, 0, 400, 600);
    },
    KM: function(){
        textAlign(CENTER, CENTER);
    textFont(createFont('Arial Black'));
        
        noStroke();
        for(var i = 0; i < height; i += 20){
            fill(lerpColor(color(46, 199, 82), color(49, 179, 212), i / height));
            rect(0, i, width, 20);
        }
    
        noStroke();
        for(var i = 0; i < width; i += 20){
            for(var j = 0; j < height; j += 20){
                fill(0, 0, 0, noise(i + noise(j, 1.1)*(sin(frameCount/10)*15), 1.1)*90);
                rect(i, j, 20, 20);
            }
        }
        pushMatrix();
        translate(width / 2, height / 2);
        rotate(13);
        fill(0, 0, 0, 30);
        textSize(55);
        text("KNIGHT MONKEY", 7, 6);
        fill(255, 255, 255);
        text("KNIGHT MONKEY", 0, 0);
        textSize(15);
        text('|| CHESTER BANKS || KHANTOBER 2016 ||', 0, 40);
        popMatrix();
        
        noStroke();
        triangle(-400, 0, 600, 0, 600, 200);
        triangle(0, 400, 0, 600, 1000, 600);
        
        pushMatrix();
        translate(200, 550);
        rotate(15);
        scale(1.5);
        strokeWeight(2);
        fill(227, 143, 143);
        stroke(79, 45, 20);
        ellipse(-14, 0, 10, 10);
        ellipse(14, 0, 10, 10);
        noFill();
        stroke(0, 0, 0, 60);
        arc(0, 0, 30, 30, -195, -161);
        arc(0, 0, 30, 30, -18, 16);
        noStroke();
        fill(77, 46, 23);
        ellipse(0, 0, 30, 30);
        fill(0, 0, 0, 30);
        arc(0, 0, 30, 30, -90, 90);
        fill(168, 134, 89);
        ellipse(-5, 0, 15, 15);
        ellipse(5, 0, 15, 15);
        ellipse(0, 5, 15, 15);
        fill(43, 43, 43);
        ellipse(-5, 0, 5, 5);
        ellipse(5, 0, 5, 5);
        fill(43, 43, 43, 100);
        ellipse(-1.5, 4, 2, 2);
        ellipse(1.5, 4, 2, 2);
        stroke(45);
        noFill();
        strokeWeight(1);
        line(-1, 8, 3, 8);
        noStroke();
        fill(59, 51, 42);
        bezier(-15, 2, -12, 24, 14, 17, 15, 3);
        bezier(-15, -1, -12, -23, 14, -17, 15, -2);
        fill(0, 0, 0, 30);
        bezier(-15, 2, -9, 18, -8, 17, 4, 3);
        bezier(-15, -1, -12, -23, 14, -17, 7, -2);
        popMatrix();
        
        pushMatrix();
        translate(100, 530);
        rotate(-5);
        scale(3.5);
        strokeWeight(2);
        fill(227, 143, 143);
        stroke(130, 75, 33);
        ellipse(-14, 0, 10, 10);
        ellipse(14, 0, 10, 10);
        noFill();
        stroke(0, 0, 0, 60);
        arc(0, 0, 30, 30, -195, -161);
        arc(0, 0, 30, 30, -18, 16);
        noStroke();
        fill(130, 76, 33);
        ellipse(0, 0, 30, 30);
        fill(0, 0, 0, 30);
        arc(0, 0, 30, 30, -90, 90);
        fill(232, 189, 132);
        ellipse(-5, 0, 15, 15);
        ellipse(5, 0, 15, 15);
        ellipse(0, 5, 15, 15);
        fill(43, 43, 43);
        ellipse(-5, 0, 5, 5);
        ellipse(5, 0, 5, 5);
        fill(43, 43, 43, 100);
        ellipse(-1.5, 4, 2, 2);
        ellipse(1.5, 4, 2, 2);
        stroke(45);
        noFill();
        strokeWeight(1);
        arc(0, 7, 7, 5, 0, 180);
        popMatrix();
        
        pushMatrix();
        translate(510, 80);
        scale(3.5);
        strokeWeight(2);
        fill(158, 158, 158);
        stroke(128, 128, 128);
        ellipse(-14, 0, 10, 10);
        ellipse(14, 0, 10, 10);
        noFill();
        stroke(0, 0, 0, 60);
        arc(0, 0, 30, 30, -195, -161);
        arc(0, 0, 30, 30, -16, 15);
        noStroke();
        fill(128);
        ellipse(0, 0, 30, 30);
        fill(0, 0, 0, 30);
        arc(0, 0, 30, 30, -90, 90);
        fill(94);
        ellipse(-5, 0, 15, 15);
        ellipse(5, 0, 15, 15);
        ellipse(0, 5, 15, 15);
        fill(128);
        ellipse(-5, 0, 5, 5);
        ellipse(5, 0, 5, 5);
        fill(94);
        arc(0, -4, 20, 8, 0, 180);
        fill(43, 43, 43, 100);
        ellipse(-1.5, 4, 2, 2);
        ellipse(1.5, 4, 2, 2);
        stroke(128);
        noFill();
        strokeWeight(1);
        arc(0, 7, 7, 5, 0, 180);
        popMatrix();
        
        return get(0, 0, 600, 600);
    },
    COD: function(){
        textFont(createFont("HelveticaNeue-CondensedBold")); // If you don't have this font, change it to Impact, I suppose
        textAlign(CENTER, CENTER);
        image(images.bg, 0, 0);
        image(images.light1, 30 + sin(frameCount*2)*30, 10);
        image(images.light2, -30 + sin(-frameCount*2)*30, 10);
        
        pushMatrix();
        translate(200, 200);
        fill(255, 255, 255);
        textAlign(LEFT, CENTER);
        textSize(70);
        textLeading(50);
        text('COVER\nOF\nDARKNESS', -165, 0);
        textSize(15);
        text('|| CHESTER BANKS || KHANTOBER 2016 ||', -162, 86);
        textAlign(CENTER, CENTER);
        popMatrix();
        
        return get(0, 0, 400, 400);
    },
    D: function(){
        rectMode(CENTER);
        textAlign(CENTER, CENTER);
        textFont(createFont('Avenir Bold'));
        
        noStroke();
        background(250);
        fill(213, 237, 242);
        ellipse(300, 300, 450, 450);
        
        fill(235, 196, 77, 20);
        for(var i = 200; i < 300; i += 20){
            ellipse(390, 360, i, i);
        }
        fill(235, 196, 77);
        ellipse(390, 360, 200, 200);
        
        fill(37, 161, 199);
        rect(381, 447, 200, 30, 30);
        
        pushMatrix();
        translate(-55, 120);
        scale(1, 0.7);
        fill(88, 197, 219);
        triangle(200, 450, 350, 450, 275, 250);
        fill(235);
        beginShape();
        vertex(275, 250);
        vertex(250, 315);
        vertex(260, 305);
        vertex(265, 315);
        vertex(270, 310);
        vertex(275, 320);
        vertex(285, 305);
        vertex(290, 315);
        vertex(294, 310);
        vertex(300, 315);
        endShape();
        fill(0, 0, 0, 20);
        triangle(275, 450, 200, 450, 275, 250);
        popMatrix();
        
        fill(88, 197, 219);
        triangle(200, 450, 350, 450, 275, 250);
        fill(235);
        beginShape();
        vertex(275, 250);
        vertex(250, 315);
        vertex(260, 305);
        vertex(265, 315);
        vertex(270, 310);
        vertex(275, 320);
        vertex(285, 305);
        vertex(290, 315);
        vertex(294, 310);
        vertex(300, 315);
        endShape();
        fill(0, 0, 0, 20);
        triangle(275, 450, 200, 450, 275, 250);
        
        fill(181, 221, 235);
        pushMatrix();
        translate(505, 167);
        scale(-1, 0.8);
        beginShape();
        vertex(1, 335);
        bezierVertex(46, 157, 90, 316, 192, 335);
        endShape(CLOSE);
        popMatrix();
        
        fill(221, 235, 240);
        pushMatrix();
        translate(245, 100);
        beginShape();
        vertex(1, 335);
        bezierVertex(46, 157, 90, 316, 192, 335);
        endShape(CLOSE);
        popMatrix();
        
        fill(250);
        pushMatrix();
        translate(98, 100);
        beginShape();
        vertex(1, 306);
        bezierVertex(46, 181, 72, 285, 126, 330);
        bezierVertex(221, 277, 289, 386, 370, 351);
        bezierVertex(354, 392, 210, 515, 62, 392);
        endShape(CLOSE);
        popMatrix();
        
        fill(247, 247, 247);
        ellipse(150, 300, 35, 35);
        ellipse(130, 300, 25, 25);
        ellipse(170, 295, 20, 20);
        ellipse(183, 300, 15, 15);
        ellipse(300, 300, 30, 30);
        ellipse(280, 298, 25, 25);
        ellipse(317, 302, 15, 15);
        ellipse(420, 350, 30, 30);
        ellipse(403, 350, 15, 15);
        ellipse(437, 352, 18, 18);
        
        fill(0, 0, 0, 10);
        arc(300, 300, 500, 500, -270, -90);
        
        noFill();
        stroke(250);
        strokeWeight(51);
        ellipse(300, 300, 500, 500);
        
        textSize(70);
        fill(0, 0, 0, 10);
        for(var i = 0; i < 360; i += 30){
            text('D E S C E N T', 300 + sin(i)*5, 203 + cos(i)*5);
        }
        fill(255, 255, 255);
        text('D E S C E N T', 300, 200);
        textSize(19);
        fill(0, 0, 0, 40);
        text('chester banks || khantober 2016 || click to begin', 300, 245);
        
        return get(0, 0, 600, 600);
    },
    
    txt1: function(){
        textAlign(CENTER, CENTER);
        textFont(createFont('Arial Black'), 25);
        
        fill(255, 255, 255);
        text('Which was your favorite?', 300, 550);
        
        textSize(15);
        text('Comment in the Tips & Thanks below!', 300, 570);
        
        return get(0, 0, 300, 600);
    },
    txt2: function(){
        textAlign(CENTER, CENTER);
        textFont(createFont('Arial Black'), 25);
        
        fill(0);
        text('Which was your favorite?', 300, 550);
        
        textSize(15);
        text('Comment in the Tips & Thanks below!', 300, 570);
        
        return get(300, 0, 300, 600);
    },
};

var vars = {
    BN: 600,
    KM: 600,
    CD: 600,
    DE: 600,
};

var thumb = function(x, y, title, link, favs){
    this.x = x;
    this.y = y;
    this.title = title;
    this.favs = favs;
    this.link = link;
    
    this.trans = 205;
};
var thumbs = [
    new thumb(0, 0, 'Block Ninja 2', 'https://www.khanacademy.org/computer-programming/block-ninja-2-khantober/6071219690274816', 19),
    new thumb(300, 0, 'Knight Monkey', 'https://www.khanacademy.org/computer-programming/knight-monkey-khantober/6397323504582656', 26),
    new thumb(0, 300, 'Cover of Darkness', 'https://www.khanacademy.org/computer-programming/cover-of-darkness/6630618465107968', 7),
    new thumb(300, 300, 'Descent', 'https://www.khanacademy.org/computer-programming/descent-khantober/6379968292519936', 14),
];
thumb.prototype.draw = function() {
    if(this.title === 'Block Ninja 2'){
        image(images.BN2, this.x, this.y, 300, 300);
    } else if (this.title === 'Knight Monkey'){
        image(images.KM, this.x, this.y, 300, 300);
    } else if(this.title === 'Cover of Darkness'){
        image(images.COD, this.x, this.y, 300, 300);
    } else if (this.title === 'Descent'){
        image(images.D, this.x, this.y, 300, 300);
    }
    
    fill(this.title === 'Block Ninja 2' || this.title === 'Cover of Darkness' ? color(235) : color(45));
    textAlign(LEFT, CENTER);
    textFont(createFont('HelveticaNeue-CondensedBold'), 15);
    text('\u2764 ' + this.favs, this.x + 265, this.y + 287);
    
    if(mouseX > this.x && mouseX < this.x + 300 && mouseY > this.y && mouseY < this.y + 300 && this.trans > 3){
        textAlign(CENTER, CENTER);
        fill(this.title === 'Block Ninja 2' || this.title === 'Cover of Darkness' ? color(235, 235, 235, 200) : color(45, 45, 45, 200));
        text('Click for link', this.x + 150, this.y + 280);
    }
};

mouseReleased = function(){
    for(var i in thumbs){
        if(mouseX > thumbs[i].x && mouseX < thumbs[i].x + 300 && mouseY > thumbs[i].y && mouseY < thumbs[i].y + 300 && thumbs[i].trans > 3){
            println(thumbs[i].link);
        }
    }
};

draw = function() {
    for(var i in images){
        if (typeof images[i] !== "object") {
            colorMode(RGB, 255);
            background(0, 0, 0, 0);
            images[i] = images[i]();
        }
    }
    
    background(255);
    for(var i in thumbs){
        thumbs[i].draw();
    }
    image(images.txt1, 0, 0);
    image(images.txt2, 300, 0);
    
    image(images.D, 0, -600 + vars.DE, 600, 600);
    image(images.COD, 0, 600 - vars.CD, 600, 600);
    image(images.KM, -600 + vars.KM, 0, 600, 600);
    image(images.BN2, 600 - vars.BN, 0, 600, 600);
    
    if(frameCount > 20){
        vars.BN /= 1.2;
    }
    if(vars.BN < 1){
        vars.KM /= 1.2;
    }
    if(vars.KM < 1){
        vars.CD /= 1.2;
    }
    if(vars.CD < 1){
        vars.DE /= 1.2;
    }
};

println(width);


//-----------------------------
}