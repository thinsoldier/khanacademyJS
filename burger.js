var sketchMeta = {
	name:"#Viralburger",
	originalUrl:"https://www.khanacademy.org/computer-programming/viralburger/6501465134465024",
	author:"JoeTran",
	authorUrl:"https://www.khanacademy.org/profile/jtran88/projects",
};



with( KP )
{
//-----------------------------


noStroke();
background(201, 161, 80);
    
    //background shading
    fill(189, 154, 83);
    quad(79, 163, 755, -11, -14, -9, -6, 340); 
    quad(194, -220, 991, 669, 207, -21, -235, 99);
    
    fill(179, 142, 68);
    quad(47, 157, 426, -12, 14, -54, -36, 261);
    quad(-1111119, -234, 918, 45, 54, -290, -72, 233);
    fill(168, 135, 70);
    quad(-58, 145, 354, -5, -5, 9, -42, 184);
    fill(163, 128, 62);
    quad(-230, 135, 354, -15, -66, -61, -84, 184);
    fill(150, 121, 66);
    quad(-138, 61, 241, -15, -66, -61, -84, 184);
    
    fill(189, 154, 83);
    quad(547, 402, 88, 537, -85, 275, 161, 384);
    
    //shadows
    
    fill(0, 0, 0,25);
    ellipse(201,288,300,85);
    ellipse(99,230,161,39);
    
    //drink
    //a mug
    
    fill(242, 241, 228);
    ellipse(77,222,108,25);
    rect(23,122,108,100);
    fill(217, 217, 186);
    ellipse(77,123,107,16);
    
    fill(235, 234, 223);
    ellipse(48,173,77,78);
    fill(0, 0, 0,2);
    ellipse(48,173,69,63);
    ellipse(48,173,60,63);
    fill(242, 241, 228);
    ellipse(53,173,62,60);
    rect(55,132,34,84);
    stroke(235, 234, 223);
    strokeWeight(10);
    point(51,139);
    point(51,207);
    noStroke();
    fill(255, 255, 255,60);
    quad(127,133,128,223,110,224,110,138);
    
    //plate
    fill(254, 255, 235);
    ellipse(200,271,298,84);
    fill(0, 0, 0,10);
    ellipse(200,264,224,73);
    ellipse(200,263,255,79);
    ellipse(200,264,207,72);
    
    //food
    //bottom bun
    fill(224, 158, 36);
    ellipse(200, 275, 170,38);
    rect(113,246,173,38,100); //main base of burger
    fill(130, 100, 15,20);//darker shade
    ellipse(200,279,167,27);
    fill(224, 158, 36);
    ellipse(200,274,169,22);//coverup
    ellipse(200,251,160,23);//cover top
    fill(250, 255, 99,50);//lighter shade
    ellipse(200,251,160,23);
    
    //sauce
    fill(255, 244, 189);
    ellipse(200,246,151,18);
    stroke(255, 244, 189);
    strokeWeight(10);
    line(138,246,135,261);
    line(261,245,267,256);
    line(222,246,227,270);
    line(159,242,167,261);
    line(188,248,193,276);
    strokeWeight(5);
    line(198,244,192,270);
    line(171,246,168,259);
    line(191,264,179,248);
    line(226,265,213,243);
    line(137,258,149,243);
    line(265,255,251,245);
    line(229,256,232,248);
    noStroke();// so it will not affect the code below
    
    //vegetables
    fill(68, 140, 64);
    ellipse(141,242,38,5);
    fill(57, 156, 50);
    ellipse(258,244,38,5);
    fill(57, 156, 50);
    ellipse(162,244,38,9);
    fill(51, 138, 44);
    ellipse(179,238,41,8);
    fill(51, 138, 44);
    ellipse(231,247,41,8);
    fill(52, 173, 41);
    ellipse(187,246,48,11);
    fill(48, 163, 38);
    ellipse(217,239,51,5);
    fill(44, 153, 34);
    ellipse(233,237,51,8);
    fill(47, 173, 33);
    ellipse(157,237,51,5);
    fill(41, 148, 30);
    ellipse(219,244,51,5);
    fill(30, 128, 19);
    ellipse(253,240,51,7);
    
    //beef
    fill(128, 53, 18);
    rect(120,213,161,19,10);
    fill(117, 61, 19);
    ellipse(200,230,155,16);
    fill(128, 53, 18);
    ellipse(200,221,154,19);
    fill(143, 64, 27);
    ellipse(200,214,151,9);
    
    //cheese!
    fill(255, 208, 0);
    quad(128,210,292,211,234,226,108,213);
    
    //tomatoe slices
    fill(194, 29, 29);
    ellipse(165,210,76,11);
    rect(127,202,76,7);
    fill(204, 129, 129);
    ellipse(165,202,78,5);
    
    fill(199, 32, 32);
    ellipse(237,211,76,11);
    rect(199,203,76,7);
    fill(201, 127, 127);
    ellipse(236,203,78,5);
    
    fill(207, 30, 30);
    ellipse(206,212,74,11);
    rect(168,204,76,7);
    fill(204, 130, 130);
    ellipse(206,205,78,5);
    
    //more sauce!
    fill(235, 40, 40);
    ellipse(200,198,141,11);
    
    stroke(235, 40, 40);
    strokeWeight(10);
    line(131,206,133,197);
    line(268,195,270,218);
    line(269,206,258,203);
    line(160,203,163,194);
    line(216,203,214,208);
    strokeWeight(5);
    line(160,203,184,200);
    line(218,206,258,191);
    line(256,206,236,191);
    line(211,203,202,199);
    strokeWeight(6);
    line(268,215,272,218);
    line(274,215,267,208);
    noStroke();
    
    //top bun
    fill(224, 158, 36);
    ellipse(200,192,155,10);
    rect(114,161,170,31,25);
    ellipse(200,167,166,58);
    fill(255, 234, 0,25);
    ellipse(200,151,136,22);
    ellipse(200,145,94,13);
    fill(130, 100, 15,15);
    ellipse(200,190,157,14);
    fill(224, 158, 36);
    ellipse(200,182,159,20);
    
    //sesame seeds
    stroke(230, 208, 67);
    strokeWeight(4);
    point(146,146);
    point(251,159);
    point(208,142);
    point(183,154);
    point(215,167);
    point(157,167);
    point(270,167);
    point(126,160);
    


//-----------------------------
}