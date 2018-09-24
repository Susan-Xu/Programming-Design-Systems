function setup() {
    createCanvas(400, 600);
    colors = [];
    totalLayer = 5;
    noStroke();
    colorMode(HSL);
    
    h = random(50);
    s = random(40,70);
    l = 80;
    dh = random(3,8);;
    
    // backgound
    for (var i = 0; i < 200; i++) {
        fill(h,s,l+0.1*i);
      rect(0,i*4,width,4);
    }
    
    
    // mountains
    for (var i = 0; i < totalLayer; i++) {
      
      // setting color
      colors.push(color(h-dh*i,s,l-5*i));
      fill(colors[i]);
      
      // draw bezier shape
      beginShape();
      
          var x = 0;
        var dyLayer = (totalLayer-i-1)*70+5*(i**2);
          var y = 0.95*height-dyLayer;
          var dx = random(50,150);
          var dyRange = 20;
          var dy = random(2*dyRange)-dyRange+randomGaussian(0,dyRange);
          
          vertex(0,height);
      
            while (x < width) {
          beziery = abs(dy)+(totalLayer-i)*20;
            bezierVertex(x-dx*0.9,y+beziery,x-dx*0.1,y+beziery,x,y);
          dx = random(50,150);
          dy = random(2*dyRange)-dyRange+randomGaussian(0,dyRange);
          x += dx; 
          y += dy;
        }
      
          bezierVertex(x-dx*0.8,y+abs(dy)+10,x-dx*0.2,y+abs(dy)+10,x,y);
          vertex(width, height);
      
      endShape(CLOSE);
    }
  }
  
  