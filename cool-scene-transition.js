var sketchMeta = {
	name:"Cool Scene Transition",
	originalUrl:"https://www.khanacademy.org/computer-programming/cool-scene-transition/4781484512",
	author:"Chester Banks",
	authorUrl:"https://www.khanacademy.org/profile/chesterbanks/projects",
};


with( KP )
{
//-----------------------------

textFont(createFont("IMPACT"));
textAlign(CENTER, CENTER);
rectMode(CENTER);
imageMode(CENTER);

image(getWebImage("img/space/background.png"), 200, 200, width, height);
var pics = [];
for(var i = 0; i < 425; i += 50){
    for(var j = 0; j < 425; j += 50){
        pics.push({
            img: get(i, j, 50, 50),
            x: i,
            y: j,
            r: 0,
            moving: false,
        });
    }
}

draw = function() {
    background(41, 41, 41);
    textSize(150);
    fill(255);
    text("HEY!", 200, 200);
    
    noStroke();
    fill(0, 0, 0, 50);
    for(var i in pics){
        pushMatrix();
        translate(pics[i].x+25, pics[i].y+25);
        rotate(pics[i].r);
        rect(5, 5, 50, 50);
        image(pics[i].img, 0, 0);
        popMatrix();
        if(pics[i].moving){
            pics[i].y += 5;
            pics[i].r += 5;
        }
        if(pics[i].y > 410){
            //pics.splice(i, 1);
        }
    }
    
    if(frameCount % 2 === 0){
        pics[floor(random(pics.length))].moving = true;
    }
};

//-----------------------------
}