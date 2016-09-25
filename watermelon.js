var originalUrl = "https://www.khanacademy.org/computer-programming/spin-off-of-project-whats-for-dinner/5377013071347712";

with( KP )
{
//-----------------------------

/*
I guess it's too light of a meal to be dinner, but I'm craving
watemelon and thought the color scheme would look pretty!

EDIT: Wow, I didn't think this silly little drawing would get so much attention!
I only worked a little bit on it! My contest entry took 6 days to make and it only has 4 upvotes!
I didn't want to do this, but I see I have no choice - look at my other program please!
It's right here: https://www.khanacademy.org/computer-programming/going-ghost/5705898782752768
*/

background(186, 145, 20); // wooden table
ellipse(200, 200, 350, 350); // plate
ellipse(200, 200, 300, 300); 

//This is the code for the watermelon
var slice = function() {
    noStroke();
    //Shadow
    fill(0, 0, 0, 50);
    arc(195, 166, 245, 245, 20, 200);
    
    //Dark green
    fill(61, 163, 70);
    arc(210, 157, 250, 250, 20, 200);
    
    //Light green
    fill(195, 275, 201);
    arc(220, 160, 230, 230, 20, 200);
    
    //Red
    fill(255, 61, 61);
    arc(225, 161, 200, 200, 20, 200);
    
    //Seeds
    fill(33, 0, 0);
    strokeWeight(2);
    stroke(0, 0, 0, 40);
    ellipse(145, 150, 7, 10);
    ellipse(184, 163, 7, 10);
    ellipse(223, 176, 7, 10);
    ellipse(263, 189, 7, 10);
    ellipse(300, 201, 7, 10);
    ellipse(160, 184, 7, 10);
    ellipse(200, 196, 7, 10);
    ellipse(241, 208, 7, 10);
    ellipse(279, 219, 7, 10);
    ellipse(174, 215, 7, 10);
    ellipse(214, 227, 7, 10);
    ellipse(254, 238, 7, 10);
};
 
//I want two slices, so I draw it twice and rotate/translate it
//Bottom slice
rotate(5);
translate(10, 30);
slice();
//Top slice
rotate(-30);
translate(-56, 3);
slice();


//-----------------------------
}