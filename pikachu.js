var sketchMeta = {
	name:"Pikachu (SSB4 Rendition)",
	originalUrl:"https://www.khanacademy.org/computer-programming/pikachu-ssb4-rendition/6314067105021952",
	author:"DY (darryl-yeo.com)",
	authorUrl:"https://www.khanacademy.org/profile/darrylyeo/projects",
};




with( KP )
{
//-----------------------------

// If you click Pikachu, you just might get zapped!

/**
 * Pikachu from Pokémon, as seen in Super Smash Bros for Wii U/Nintendo 3DS.
 * by DY
 * 
 * Project revived from: www.khanacademy.org/cs/pikachu/5756780312264704
 * 
 * Reference Image: http://www.smashbros.com/images/character/pikachu/main.png
 * 
 * Programming Experience: 24 months+  |  Understanding of Intro to JS Course: 100%  |  Non-Summer of Scripting Student
 */

// Conveniently, Pikachu is bilaterally symmetrical. Axis of symmetry x = 173

/**
 * For those interested, I have many more programs like this.
 * Check out the "Well-Known Characters" tag:
 * www.khanacademy.org/cs/all-programs/6171340237307904
 */





mouseClicked = function(){
    if(mouseX > 340 && mouseX < 390 && mouseY > 340 && mouseY < 390){
        println("Created by DY (darryl-yeo.com)\n\nCheck out all my programs at www.khanacademy.org/cs/all-programs/6171340237307904");
    }
};

var mouseIsOver;

mouseOver = function(){mouseIsOver = true; mouseMoved();};
mouseOut = function(){mouseIsOver = false; mouseMoved();};




// Sets a default yellow fill and thin gray stroke, unless the "apply" parameter is false.
var pikachuYellow = function(apply){
    if(apply){return;}
    fill(255, 220, 0);
    /*
    fill(0, 0, 0, 0);
    fill(lerpColor(
        color(0, 0, 0, 50),
        color(255, 220, 0),
        mouseX/ 400//sin(frameCount) * 0.5 + 0.5
    ));
    */
    stroke(97, 79, 24);
    strokeWeight(0.12);
};

//Draws Pikachu, or a glowing outline if "outline" is true. In the outline, some body parts are not included, and pikachuYellow() will not set a fill or stroke.
var pikachu = function(outline){
    pushMatrix();
    //translate(0, -10);
    
    /*
    background(255, 254, 252);
    
    for(var y = 250; y < 400; y += 3){
        stroke(lerpColor(
            color(255, 254, 252),
            color(255, 179, 0),
            (y - 250) / (400 - 250)
        ));
        line(0, y, width, y);
    }
    */
    
    // *Bzzzzt!*
    if(outline){
        stroke(lerpColor(
            color(255, 255, 255, 200),
            color(255, 227, 84, 100),
            random()
        ));
        strokeWeight(random(5, 9));
        strokeJoin(ROUND);
    }
    
    //Tail
    pikachuYellow(outline);
    beginShape();
    vertex(235, 267);
    vertex(260, 269);
    vertex(253, 240);
    vertex(296, 244);
    vertex(284, 193);
    vertex(336, 196);
    bezierVertex(346, 183, 358, 154, 366, 132);
    bezierVertex(339, 133, 276, 143, 243, 154);
    vertex(262, 217);
    vertex(232, 222);
    vertex(240, 255);
    vertex(232, 256);
    vertex(237, 266);
    endShape();
    
    if(!outline){
        //Tail Mark
        fill(168, 78, 0);
        beginShape();
        vertex(235, 267);
        vertex(260, 269);
        vertex(253, 243);
        vertex(253, 249);
        vertex(248, 244);
        vertex(248, 251);
        vertex(243, 244);
        vertex(243, 248);
        vertex(238, 241);
        vertex(238, 246);
        vertex(240, 255);
        vertex(232, 256);
        endShape();
    }
    
    pikachuYellow(outline);
    
    //Right Foot
    beginShape();
    vertex(127, 337);
    bezierVertex(124, 339, 123, 342, 123, 347);
    vertex(125, 346);
    vertex(126, 349);
    vertex(127, 347);
    vertex(130, 349);
    bezierVertex(137, 346, 145, 345, 145, 336);
    endShape();
    
    //Left Foot
    beginShape();
    vertex(219, 337);
    bezierVertex(222, 339, 223, 342, 223, 347);
    vertex(221, 346);
    vertex(220, 349);
    vertex(219, 347);
    vertex(216, 349);
    bezierVertex(209, 346, 201, 345, 201, 336);
    endShape();
    
    //Body
    beginShape();
    vertex(120, 201);
    vertex(116, 241);
    bezierVertex(113, 259, 106, 288, 106, 297);
    bezierVertex(106, 320, 114, 330, 122, 334);
    bezierVertex(141, 346, 162, 324, 173, 328);
    bezierVertex(184, 324, 205, 346, 224, 334);
    bezierVertex(232, 330, 240, 320, 240, 297);
    bezierVertex(240, 288, 233, 259, 230, 242);
    vertex(226, 201);
    endShape();
    
    if(!outline){
        //Hand Shadows
        fill(100, 100, 100, 100);fill(0, 0, 0, 13);
        noStroke();
        pushMatrix();
        translate(140, 252);
        rotate(-22);
        for(var i = 0.6; i <= 1; i += 0.04){
            ellipse(-2, 0, i * 45, i * 75);
        }
        //ellipse(0, 0, 48, 72);
        popMatrix();
        
        pushMatrix();
        translate(206, 252);
        rotate(22);
        for(var i = 0.6; i <= 1; i += 0.04){
            ellipse(2, 0, i * 45, i * 75);
        }
        popMatrix();
    }
    
    //Chest
    /*fill(255, 220, 0);
    noStroke();
    quad(123, 203, 223, 203, 185, 270, 161, 270);*/
    
    //Right Hand
    pikachuYellow(outline);
    beginShape();
    vertex(120, 198);
    bezierVertex(106, 253, 123, 265, 147, 283);
    vertex(150, 281);
    vertex(152, 282);
    vertex(154, 280);
    vertex(157, 280);
    vertex(158, 278);
    vertex(161, 276);
    vertex(160, 274);
    vertex(161, 273);
    bezierVertex(166, 267, 156, 241, 141, 220);
    endShape();
    
    //Left Hand
    beginShape();
    vertex(226, 198);
    bezierVertex(240, 253, 223, 265, 199, 283);
    vertex(196, 281);
    vertex(194, 282);
    vertex(192, 280);
    vertex(189, 280);
    vertex(188, 278);
    vertex(185, 276);
    vertex(186, 274);
    vertex(185, 273);
    bezierVertex(180, 267, 190, 241, 205, 220);
    endShape();
    
    if(!outline){
        //Head Shadow
        fill(0, 0, 0, 6);
        noStroke();
        for(var i = 0; i <= 1; i += 0.04){
            ellipse(173, 190, i * 115, i * 80);
        }
    }
    
    //Head
    pikachuYellow(outline);//noStroke();
    beginShape();
    vertex(75, 63);
    bezierVertex(85, 65, 116, 80, 138, 108);
    bezierVertex(156, 94, 192, 93, 209, 108);
    bezierVertex(225, 96, 267, 88, 281, 89);
    vertex(272, 113);
    bezierVertex(262, 117, 242, 122, 223, 123);
    bezierVertex(238, 155, 240, 182, 224, 200);
    bezierVertex(198, 224, 148, 224, 122, 200);
    bezierVertex(104, 187, 114, 138, 123, 123);
    bezierVertex(106, 113, 92, 106, 80, 93);
    bezierVertex(70, 83, 71, 74, 75, 63);
    endShape();
    
    if(!outline){
        //Chin Shadow
        noFill();
        strokeWeight(9);
        for(var i = 0.8; i <= 1; i += 0.02){
            stroke(0, 0, 0, (i - 0.7) * 10);
            arc(173, 148, i * 190, i * 140, 56.5, 124.5);
        }
    }
    
    //Right Ear
    if(!outline){
        fill(24, 27, 12);
    }
    beginShape();
    vertex(75, 63);
    bezierVertex(70, 60, 59, 56, 49, 56);
    bezierVertex(56, 74, 71, 87, 81, 95);
    bezierVertex(75, 85, 72, 74, 75, 63);
    endShape();
    
    //Left Ear
    beginShape();
    vertex(281, 89);
    bezierVertex(289, 87, 299, 88, 307, 90);
    bezierVertex(296, 103, 287, 108, 272, 113);
    bezierVertex(277, 104, 278, 101, 280, 89);
    endShape();
    
    if(!outline){
        //Eyes
        stroke(37, 6, 6);
        strokeWeight(20);
        //Right
        point(140, 154);
        //Left
        point(206, 154);
        
        //Pupils
        stroke(254, 255, 223);
        strokeWeight(9);
        //Right
        point(142, 150);
        //Left
        point(204, 150);
        
        //Nose
        noFill();
        stroke(0);
        strokeWeight(1.5);
        arc(173, 166, 6, 3, 45, 135);
        
        //Mouth
        stroke(184, 138, 88);
        strokeWeight(1);
        bezier(154, 179, 159, 189, 169, 178, 173, 179);
        bezier(192, 179, 187, 189, 177, 178, 173, 179);
        
        //Cheeks
        fill(255, 0, 0);
        noStroke();
        translate(123, 179);
        rotate(-18);
        ellipse(0, 0, 22, 36);
        rotate(18);
        translate(-123, -179);
        translate(223, 179);
        rotate(18);
        ellipse(0, 0, 22, 36);
        rotate(-18);
        translate(-223, -179);
    }
    
    popMatrix();
};

draw = function() {
    background(255, 179, 0);

    //Shadow
    fill(0, 0, 0, 10);
    noStroke();
    for(var i = 0; i < 10; i++){
        ellipse(173, 347, i * 20, i * 2.5);
    }
    
    //Click for a shock.
    if(mouseIsPressed){
        pikachu(true);
        /*
        if(floor(random(10)) !== 0){
            pikachu();
        }
        */
    }//else{
        pikachu();
    //}
    
    if(mouseIsOver){
        if(mouseX > 340 && mouseX < 390 && mouseY > 340 && mouseY < 390){
            noFill();
            stroke(255);
            strokeWeight(1);
            rect(337, 337, 55, 55);
            cursor(HAND);
        }else if(!mouseIsPressed){
            fill(255);
            noStroke();
            //ellipse(mouseX, mouseY, 8, 8);
            cursor(ARROW);
        }
        
        if(!mouseIsPressed){
            stroke(0, 0, 0, 50);
            strokeWeight(1);
            line(173, 0, 173, 400);
            
            fill(255);
            textAlign(LEFT, BOTTOM);
            text(mouseX + ", " + mouseY, 10, 390);
            textAlign(CENTER, CENTER);
            text(173, 173, 370);
        }
    }
    
    //DY Logo
    {
    pushMatrix();
    translate(340, 340);
    scale(1/8, 1/8);
    noStroke();
    fill(0, 174, 255, 50);
    rect(0, 0, 400, 400);
    fill(212, 89, 208);
    triangle(249, 200, 200, 125, 200, 275);
    strokeWeight(6);
    fill(84, 194, 109);
    stroke(158, 38, 38);
    bezier(50, 50, 275, 60, 275, 340, 50, 350);
    line(50, 51, 50, 349);
    strokeWeight(5);
    stroke(81, 81, 173);
    line(150, 50, 248, 197);
    line(350, 50, 250, 200);
    line(150, 350, 250, 200);
    noStroke();
    fill(255, 208, 66, 150);
    triangle(170, 50, 330, 50, 250, 170);
    fill(255, 188, 117, 150);
    triangle(350, 70, 170, 350, 350, 350);
    popMatrix();
    }
};

//mouseMoved();


/*
var a = function(x, y){
    pushStyle();
    fill(255, 0, 0);
    ellipse(x, y, 2, 2);
    popStyle();
};*/


/*var shapes = [
    [
    new V(75, 63),
    new BV(95, 68, 116, 80, 138, 108),
    new BV(156, 94, 192, 93, 209, 108),
    new BV(225, 96, 267, 85, 281, 89),
    new V(272, 114),
    new BV(262, 117, 242, 123, 227, 124),
    new BV(238, 155, 240, 182, 227, 200),
    new BV(208, 224, 148, 223, 122, 200),
    new BV(104, 187, 114, 138, 123, 123),
    new BV(106, 113, 92, 106, 80, 93),
    new BV(70, 83, 71, 74, 75, 63)
    ],
    [
    new V(75, 63),
    new BV(66, 57, 59, 56, 49, 57),
    new BV(56, 74, 71, 89, 81, 95),
    new BV(75, 85, 72, 74, 75, 63)
    ],
    [
    new V(281, 89),
    new BV(289, 87, 299, 88, 307, 90),
    new BV(296, 103, 287, 108, 272, 113),
    new BV(277, 104, 278, 101, 280, 88)
    ]
];*/
/*var shapes = [
    [
    new V(239, 257),
    new V(262, 260),
    new V(255, 231),
    new V(298, 235),
    new V(286, 184),
    new V(338, 187),
    new BV(348, 174, 360, 145, 368, 123),
    new BV(333, 122, 278, 134, 245, 145),
    new V(264, 208),
    new V(234, 213),
    new V(242, 246),
    new V(234, 247),
    new V(239, 257)
    ]
];*/
/*var shapes = [
    [
    new V(121, 197),
    new BV(106, 253, 123, 267, 148, 283),
    new V(150, 281),
    new V(152, 283),
    new V(154, 280),
    new V(157, 280),
    new V(158, 277),
    new V(161, 278),
    new BV(166, 267, 156, 241, 141, 220)
    ]
];*/


//-----------------------------
}