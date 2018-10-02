function setup() {
    createCanvas(300, 400);				// vary me
    noStroke();
    colorMode(HSB);
    
    var column = 2;
    var row = 3;
    var margin = width/20;
    var colWidth = width / column;
    var rectWidth = colWidth/1.5;
    
    // ratio of column height
    ratio = [4, 3, 3];						// vary me
    
    var sum = ratio.reduce((a, b) => a + b, 0);
    colHeight = ratio.map(x => x / sum);
    
    
    // color
    var y = 0;
    for (var i = 0; i <= row; i++) {
      var h = 6 - 8*i;
      var s = 82 - 4*i;
      var b = 88 - 10*i;
      fill(h % 360, s, b);
      rect(0,y,width,colHeight[i]*height);
      y += colHeight[i]*height;
    }
    
    // blocks
    push();         
    fill(220);
    translate(colWidth,colHeight[0]*height/2);
    for (var j = 0; j < row; j++) {
      var ht = colHeight[j]*height;
      if (j == 0) {
          rect(-rectWidth-margin,-ht/8,rectWidth,ht/4);
        fill(30);
        rect(0,-ht/4,rectWidth,ht*3/8);
      } else if (j == 1) {
        rect(0,-ht/5,rectWidth,ht*0.567);
          rect(-rectWidth*0.7-margin,ht/6,rectWidth*0.7,ht/5);
      } else {
        rect(0,-ht*0.4,rectWidth,ht*2/3);
          rect(-rectWidth*0.7-margin,0,rectWidth*0.7,ht*0.267);
        rect(-rectWidth*0.3-margin,-ht*0.4,rectWidth*0.3,ht/6);
      }
      translate(0,(colHeight[j]+colHeight[j+1])/2*height);
    }
    
  }
  
  
