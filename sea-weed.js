var originalUrl = "https://www.khanacademy.org/computer-programming/sea-weed/6611710808031232";

with( KP )
{
//-----------------------------

// Click on canvas to re-run
//var mouseClicked = function(){ Program.restart(); };

var SeaWeed = function( baseX, baseY, H, offset, colorBase, colorTip ) {
    
    baseY = baseY -24 ;
    
    // Cause the height to grow from bottom of canvas
    H = H * 0.00233 * -1;
    
    if(!offset){ offset = 0; }

    // base color
    var from = null;
    if(!colorBase){ from = color(2, 48, 2, 100); }
    else { from = colorBase; }
    
    // tip color
    var to = null;
    if(!colorTip){ to = color(0, 255, 140, 0); }
    else { to = colorTip; }

    noStroke();

    var flip = ( ceil(random(0,2)) % 2 === 1 );

    for( var i = 0; i <400; i+=1 ) {
        
        var colorq = lerpColor(from, to, i*0.0025);
        
        fill(colorq);
        
        var waveCenter = baseX;
        
        // more/less hills/valleys in the sine wave
        var waveSpacing_multiplier = 1.76; 
        
        // adjust hills/valleys along the length of the sine wave without changing how many there are.
        var waveSpacing_offset = offset;
        
        var waveSpacing = sin( i * waveSpacing_multiplier + waveSpacing_offset );
        
        var waveRange = 12;
        
        // random flip
        if( flip ) { waveRange *= -1; }
        
        var X = waveSpacing * waveRange + waveCenter;
        
        var Y = baseY + (i*H);
        
        // Draw leaf using ellipses that get smaller and move up with each loop iteration.
        ellipse( X , Y, 5, 50 + (i*-0.11) );
    }
};


background(47, 61, 69);

var weeds = [];
for( var i = 0; i<15; i++ ) {
   SeaWeed( random(20,365), 400, random(121,385), random(1,300)  );
}

new SeaWeed( 200, 400, 340, 250, color(168, 0, 0, 80), color(230, 255, 0, 0) );

//-----------------------------
}