var originalUrl = "https://www.khanacademy.org/computer-programming/3d-wave-using-p3d/6064202091593728";

with( KP )
{
//-----------------------------

/**
 * I saw a Program that enabled 3D graphics through P3D, 
 * so I decided to create a program using the 3D graphics
 * library myself.
 * 
 * Credit to user musicalglass for figuring out how to 
 * use P3D:
 * https://www.khanacademy.org/cs/p3d/2452976244
 * 
 * The program is inspired by a Processing applet written 
 * on by Jared Counts openprocessing.org, you can find his 
 * isometric 2D version of this program here:
 * http://www.openprocessing.org/sketch/5671
 */

var g3d,init = false;

var setup = function(){
    g3d = createGraphics(width, height, P3D);
    
    try{
        g3d.lights();
    }catch(e){
        debug(e);
    }
    
    g3d.colorMode(RGB);
    g3d.noStroke();
    
    g3d.shininess(1);
    g3d.pointLight(255,255,255,100,400,100);
    
    init = true;
};

var s = 10;
var draw = function(){
    if(!this.loadPixels){
        return;
    }else if(!init){
        setup();
    }
    g3d.background(143,180,217,255); 

	g3d.camera(cos(frameCount)*200,-150,sin(frameCount)*300,0,0,0,0,1,0);

	var x,y,z;
    for(x=-s;x<s;x++){
        for(z=-s;z<s;z++){
            y = floor(s*2*cos((0.55*sqrt(x*x+z*z)-frameCount/12.5)*180/PI));
            
            g3d.fill(120, 120, 120);
            g3d.pushMatrix();
            
            g3d.translate(x*10,y/2,z*10);
            
            g3d.box(10,y-s*2+0.1,10);
            
            g3d.popMatrix();
        }
    }
    
    image(g3d,0,0,width,height);
};

//-----------------------------
}