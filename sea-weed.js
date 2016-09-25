var originalUrl = "https://www.khanacademy.org/computer-programming/sea-weed-v3/5192150699606016";

with( KP )
{
//-----------------------------

// Initially you will probably see the error "lerpColor is not a function".
// Just click restart.
// Click on canvas to restart also.
//var mouseClicked = function(){ Program.restart(); };

//-----------------------------
// Reusable Seaweed Object Definition //
//-----------------------------
var SeaWeed = function( baseX, baseY, H, offset, colorBase, colorTip ) {
    
    baseY = baseY -24 ;
    
    // Cause the height to grow from bottom of canvas
    H = H * 0.00920 * -1;
    
    if(!offset){ this.offset = 0; } else { this.offset = offset; }
    
    // useful for animating waviness
    this.offsetSpeed = -1; 

    // base color
    var from = null;
    if(!colorBase){ from = color(2, 48, 20); }
    else { from = colorBase; }
    
    // tip color
    var to = null;
    if(!colorTip){ to = color(0, 255, 120, 0); }
    else { to = colorTip; }

    noStroke();

    var flip = ( ceil(random(0,2)) % 2 === 1 );
    flip = false;

    this.render = function()
    {
        for( var i = 0; i <100; i+=1 ) {
            
            var colorq = lerpColor(from, to, i*0.0077);
            
            fill(colorq);
            
            var waveCenter = baseX;
            
            // more/less hills/valleys in the sine wave
            var waveSpacing_multiplier = 8; 
            
            // adjust hills/valleys along the length of the sine wave without changing how many there are.
            var waveSpacing_offset = this.offset;
            
            var waveSpacing = sin( i * waveSpacing_multiplier + waveSpacing_offset );
            
            var waveRange = 12;
            
            // random flip
            if( flip ) { waveRange *= -1; }
            
            var X = waveSpacing * waveRange + waveCenter;
            
            var Y = baseY + (i*H) + 0;
            
            // Draw leaf using ellipses that get smaller and move up with each loop iteration.
            ellipse( X , Y, 5, 50 + (i*-0.43) );
        }
    };
};
//-----------------------------


//-----------------------------
// This Program
//-----------------------------

// Array that holds all SeaWeed plants.
var weeds = [];

// 1 custom plant.
var weed = new SeaWeed( 124, 400, 400, 0, color(66, 3, 3), color(230, 255, 0) );

// Store it.
weeds.push( weed );

// Loop to generate many random plants.
for( var i = 0; i<5; i++ ) {
    var obj = new SeaWeed( random(20,365), random(410,450), random(121,425), random(1,300)  );
    obj.offsetSpeed = random( -2, -5 );
    weeds.push( obj );
}

draw = function() {
    background(58, 108, 133);
    for( var x in weeds )
    { 
        var current = weeds[x];
        current.offset += current.offsetSpeed;
        current.render();
    }
};

//-----------------------------
}