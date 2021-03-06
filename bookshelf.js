var sketchMeta = {
	name:"bookshelf",
	originalUrl:"https://www.khanacademy.org/computer-programming/spin-off-of-project-bookshelf/5691752398848000",
	author:"thinsoldier",
	authorUrl:"https://www.khanacademy.org/profile/thinsoldier/projects",
};



with( khanProcessing() )
{
//-----------------------------

var books = [
    {
    title: "The Giver",
    author: 'John Doe',
    color: color(156, 22, 22),
    stars: 4,
    fav: false
    },
    {
    title: "Dark Tales",
    author: 'John Doe',
    color: color(10, 54, 32),
    stars: 3,
    fav: true 
    },
    {
    title: "New York City",
    author: 'John Doe',
    color: color(21, 52, 125),
    stars: 2,
    fav: false 
    },{
    title: "Mysterious Island",
    author: 'John Doe',
    color: color(71, 82, 36),
    stars: 5,
    fav: true 
    },{
    title: "Evil Specifications",
    author: 'John Doe',
    color: color(38, 46, 64),
    stars: 4,
    fav: false 
    },
    {
    title: "A Canticle For Leibowicz",
    author: 'John Doe',
    color: color(21, 59, 148),
    stars: 5,
    fav: true 
    },
    {
    title: "Hewlett Packard",
    author: 'John Doe',
    color: color(67, 97, 168),
    stars: 1,
    fav: false 
    },
    {
    title: "A Time of Joy",
    author: 'John Doe',
    color: color(217, 39, 205),
    stars: 3,
    fav: true 
    },
    {
    title: "Dark City",
    author: 'John Doe',
    color: color(105, 61, 15),
    stars: 4,
    fav: true 
    },
    {
    title: "Light City",
    author: 'John Doe',
    color: color(6, 150, 52),
    stars: 3,
    fav: false 
    },
    {
    title: "The Taker",
    author: 'John Doe',
    color: color(179, 6, 6),
    stars: 1,
    fav: false 
    },
    {
    title: "Batman\nBegins",
    author: 'John Doe',
    color: color(21, 52, 125),
    stars: 3,
    fav: false 
    },
];

textAlign(CENTER);

var drawShelf = function( y ){
    y = y-29;
    
    image( getImage("cute/ShadowNorth"), 0, y+-18 , 401, 221 );
    
    for( var i = 0; i < 380; i+=77 ){
    image( getImage("cute/WoodBlock"), i, y, 97, 50 );
    }
};

var drawOneBook = function(book, x, y){
    
    var bookWidth = 84;
    var bookHeight = 100;
    var bookCenterX = x + bookWidth/2;
    var bookCenterY = y + bookHeight/2;
    
    noStroke();

    if( book.fav){
        fill(17, 222, 55);
        var bookmarkOffsetX = x+bookWidth+ -20;
        var bookmarkOffsetY = y+bookHeight+ 0;
        quad(0+bookmarkOffsetX,0+bookmarkOffsetY,  
            19+bookmarkOffsetX,0+bookmarkOffsetY,  
            30+bookmarkOffsetX,10+bookmarkOffsetY,
            10+bookmarkOffsetX,10+bookmarkOffsetY);
    }
    
    image( getImage("cute/ShadowNorth"), x, y + bookHeight -13, 85, 46 );
    
    // book rect
    fill(book.color);
    rect(x, y, bookWidth, bookHeight);
    
    // draw title
    fill(240, 206, 175);
    textSize(12);
    text(book.title, x , y+10, bookWidth, 100);
    textSize(9);
    text(book.author, x , y+76, bookWidth, 100);
    
    // draw illustration
    var illusW = 45;
    var illusH = illusW;
    image( getImage("space/planet"), bookCenterX - illusW/2, bookCenterY-21, illusW, illusH);
    
    // draw stars
    for (var i = 0; i < book.stars; i++) {
        var starScale = 0.8;
        var starX = x + (bookWidth/2 - book.stars*10*starScale) + i * 20 *starScale;
        var starY = y + bookHeight -28 *starScale;
        image(getImage("cute/Star"), starX, starY, 20*starScale, 30*starScale);
    }
    
    image( getImage("cute/ShadowEast"), x-118, y-61, 201, 212);
    
};


var bookCase = function(){
    var shelfY = 120;
    var xInit = 12;
  var x = xInit;
  var y = 8;
  var row = 0;
  var bookOnRow = 0;
  for( var i = 0; i < books.length; i++)
  {
    if( bookOnRow === 0)
    {
      drawShelf(y+100);
    }
    
    drawOneBook(books[i],x,y);
    x+=97;
    bookOnRow++;
    if( bookOnRow > 3)
    {
       // drawShelf(y+100);
        bookOnRow = 0;
        y+=129;
        x = xInit;
    }
  }
};


var myBackground = function() {
    //image(getImage("space/background"),0,0);
    for( var x = 0; x<5; x++)
    {
        for (var y = 0; y < 5; y++){
        image( getImage("cute/StoneBlockTall"), -30 + 100*x, -12 + 84 * y);   
        }
    }
};


myBackground();
bookCase();

//-----------------------------
}