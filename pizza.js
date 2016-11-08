var sketchMeta = {
	name:"pizza",
	originalUrl:"https://www.khanacademy.org/computer-programming/dinner-time/5006482035441664",
	author:"Piyush",
	authorUrl:"https://www.khanacademy.org/profile/psp09ful/projects",
};




with( KP )
{
//-----------------------------

/*
This is a 2.5D picture based on "Project: What's for Dinner?"

(P.S. It has some day and night lighting transitions.)

*/

/**
 * Over 250 Votes! I had no idea it'd be such a hit; Thanks everyone!!!! :D
   ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼
   ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲
*/

var contrast; //For day and night lighting. :)
var Minute = -1;
var DrawImg;

draw = function(){     // The picture is redrawn with any changes in lighting
    
    if(hour()>=20 || hour()<=5){
        contrast = 0.3;
    }
    else if(hour()>=6 && hour()<=7){
        contrast = 0.3 + ((hour() - 6)* 60 + minute()) * (1 - 0.3) / 120;
    }
    else if(hour()>=17 && hour()<=19){
        contrast = 1 - ((hour() - 17) * 60 + minute()) * (1 - 0.3) / 180;
    }
    else{
        contrast = 1;
    }
    /*
        1 is the default and the maximum value for 'contrast'
        and it changes with time (using the hour() and minute() functions above)
    
        We'll multiply 'contrast' with the
        parameters of every fill and stroke command
        to decrease the contrast (or brightness) as required.
    
        So say we have a fill command as:
    
            fill(100*contrast, 100*contrast, 100*contrast);
    
        At daytime, the value of contrast will be 1,
        hence the command simplifies to:
    
            fill(100, 100, 100);
    
        Which is its maximum possible brightness.
        But say at some time in the evening (or morning) we
        have contrast = 0.5;
    
        The command then simplifies to:
    
            fill(50, 50, 50);
    
        Which is half as much bright.
    */
    if(Minute !== minute()){
        DrawImg();
        Minute = minute();
    }
};

DrawImg = function(){
    background(186*contrast, 145*contrast, 20*contrast); // Wooden table
    
    noStroke();                 // PLATE SHADOW
    fill(114*(contrast+0.1), 90*(contrast+0.1), 12*(contrast+0.1));
    ellipse(195, 265, 360, 100);
    ellipse(120, 280, 200, 80);
    
    fill(114*(contrast+0.1), 90*(contrast+0.1), 12*(contrast+0.1));                     // CUP SHADOW
    ellipse(125, 155, 120, 50);
    quad(125, 148, 125, 162, 200, 162, 200, 148);
    ellipse(200, 155, 12, 12);
    stroke(0, 0, 0);
    
    line(0, 70, 400, -10);      // TABLE DETAILS
    line(0, 170, 400, 90);
    line(0, 270, 400, 190);
    line(0, 370, 400, 290);
    line(0, 470, 400, 390);
    
    stroke(93*contrast, 73*contrast, 10*contrast);
    
    line(200, 85, 350, 50);
    line(25, 95, 200, 60);
    
    line(150, 195, 300, 160);
    line(210, 155, 360, 120);
    
    line(120, 330, 380, 280);
    line(0, 300, 200, 250);
    
    line(170, 358, 400, 310);
    line(120, 400, 360, 350);
    
    stroke(0, 0, 0);
    noStroke();
    
    fill(180*contrast, 180*contrast, 180*contrast);
    ellipse(200, 260, 330, 90);     // PLATE
    ellipse(200, 250, 350, 100);
    fill(215*contrast, 215*contrast, 215*contrast);
    ellipse(200, 250, 300, 80);
    fill(245*contrast, 245*contrast, 245*contrast);
    ellipse(200, 252, 270, 70);
    
        // PIZZA
    
        // Pizza shadow
    fill(117*(contrast+0.1), 117*(contrast+0.1), 117*(contrast+0.1));
    
    beginShape();
    vertex(280, 206);
    vertex(265, 214);
    vertex(255, 221);
    vertex(160, 286);
    vertex(190, 287);
    vertex(280, 224);
    vertex(284, 215);
    vertex(300, 208);
    endShape();
    
    fill(147*(contrast+0.1), 147*(contrast+0.1), 147*(contrast+0.1));
    
    beginShape();
    vertex(255, 221);
    vertex(160, 286);
    vertex(190, 287);
    vertex(280, 224);
    endShape();
    
    
    fill(110*(contrast+0.1), 110*(contrast+0.1), 110*(contrast+0.1));
    
    beginShape();
    vertex(265, 214);
    vertex(255, 221);
    vertex(280, 224);
    vertex(284, 215);
    endShape();
    
        // Pizza body
    fill(255*contrast, 185*contrast, 100*contrast);
    quad(150, 265, 150, 295, 290, 200, 300, 180);   // Side portion
    fill(255*contrast, 220*contrast, 130*contrast);
    triangle(50, 230, 150, 265, 300, 180);      // Top triangular portion
    fill(255*contrast, 210*contrast, 120*contrast);
    ellipse(50, 235, 30, 50);                   // Crust (Rear) Portion
    quad(50, 210, 150, 245, 150, 295, 50, 260);
    fill(255*contrast, 195*contrast, 120*contrast);
    ellipse(150, 270, 30, 50);
    fill(200*contrast, 70*contrast, 70*contrast);                  // Tomato slice (or whatever)
    ellipse(170, 230, 60, 20);
    
    //stroke(0, 0, 0);
    
    fill(200*contrast, 200*contrast, 200*contrast);        // CUP HANDLE
    ellipse(180, 105, 70, 70);
    fill(160*contrast, 160*contrast, 160*contrast);
    ellipse(180, 105, 65, 65);
    fill(186*contrast, 145*contrast, 20*contrast);         
    ellipse(180, 105, 50, 50);
    
    fill(180*contrast, 180*contrast, 180*contrast);        // CUP BODY
    ellipse(130, 150, 90, 40);
    quad(80, 50, 180, 50, 175, 150, 85, 150);
    fill(200*contrast, 200*contrast, 200*contrast);        // Cup top
    ellipse(130, 50, 100, 40);
    fill(120*contrast, 120*contrast, 120*contrast);
    ellipse(130, 50, 90, 35);
    
    fill(230*contrast, 230*contrast, 230*contrast);        // Cup Body Shine
    quad(160, 75, 158, 162, 170, 153, 175, 65);
};


//-----------------------------
}