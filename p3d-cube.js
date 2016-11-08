var sketchMeta = {
	name:"p3d cube",
	originalUrl:"https://www.khanacademy.org/computer-programming/p3d/2452976244",
	author:"DillingerLee",
	authorUrl:"https://www.khanacademy.org/profile/musicalglass/projects",
};




with( KP )
{
//-----------------------------

/* Left Drag to Move X & Y
Right Drag to Zoom */

var externals;

var cube = ({
    x:200, y:200, z:0,
    rotation:{
        x:0, y:0, z:0
    }
});

var grfx3D = createGraphics(width, height, P3D);

try{
    //grfx3D.colorMode(HSB);
    grfx3D.lights();
    //grfx3D.shininess(0.5);
}catch(e){ println(e); }


draw = function() {
background(0);

// Draw Normal Rectangle over background
fill(255, 255, 0);
rect(100, 100, 80, 80);

// Superimpose 3D object using opaque background for 3D Image
grfx3D.background(0,0,0,0);

grfx3D.pushMatrix();

if(mouseIsPressed){
    if(mouseButton === LEFT){
        cube.x += mouseX - pmouseX;
        cube.y += mouseY - pmouseY;
    }
    if(mouseButton === RIGHT){
        cube.z += mouseY - pmouseY;
    }
}else{
    cube.rotation.y += (mouseX - pmouseX)/60;
    cube.rotation.z += (mouseY - pmouseY)/60;
}

grfx3D.translate(cube.x, cube.y, cube.z);

//grfx.rotateX(0.5);
grfx3D.rotateY(cube.rotation.y);
grfx3D.rotateZ(cube.rotation.z);

grfx3D.fill(200);
grfx3D.stroke(50);
grfx3D.box(100, 50, 50); // Draw 3D Cube (width, height, depth)

grfx3D.popMatrix();

image(grfx3D, 0, 0);

};

//-----------------------------
}