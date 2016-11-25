var sketchMeta = {
	name:"reflect",
	originalUrl:"https://www.khanacademy.org/computer-programming/reflect/4725427132",
	author:"Chester Banks",
	authorUrl:"https://www.khanacademy.org/profile/chesterbanks/projects",
};


with( KP )
{
//-----------------------------

imageMode(CENTER);
rectMode(CENTER);

background(0, 0, 0, 0);
pushMatrix();
translate(200, 300);
scale(1, -1);
image(getImage("avatars/leafers-tree"), 0, 15, 200, 200);
popMatrix();

var pics = [];
for(var i = 0; i < 400; i+=2) {
    pics.push(get(0, i, 400, 2));
}

var num;
noStroke();
draw = function() {
    background(30, 62, 87);
    image(getImage("avatars/leafers-tree"), 200, 116, 200, 200);
    fill(140, 205, 255);
    rect(200, 300, 400, 200);
    num = 0;
    for(var i = 0; i < 400; i+=2) {
        image(pics[num], 200+sin(i+frameCount*3)*10, i);
        num++;
    }
    fill(140, 205, 255, 100);
    rect(200, 300, 400, 200);
    for(var i = 200; i < 400; i += 5){
        fill(0, 0, 0, i/2 - 100);
        rect(200, i, 400, 5);
    }
};


//-----------------------------
}