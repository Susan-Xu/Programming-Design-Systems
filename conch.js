function setup() {
  createCanvas(600, 400);
  background(255);
  
  push();
  translate(width/2, height*0.4);
  rotate(radians(67));
  fill(0);
  noStroke();
  
  var numPoints = 10;
  var spacing = -TWO_PI/numPoints;
  var radius = height*0.3;
  var gap = radius/numPoints/2;
  
  // shape of SHARP: Couch
  beginShape();
  var x_prev = -radius;
  var y_prev = 0;
  vertex(x_prev,y_prev);
  
  // outline
  for (var i=1; i<=numPoints; i++) {
    var x = -cos(i*spacing) * radius;
    var y = sin(i*spacing) * radius;
    quadraticVertex((x_prev+x)/2/(i+2),(y+y_prev)/2/(i+2),x,y);
    radius -= gap; 
    x_prev = x;
    y_prev = y;
  }
  
  // contour (holes)
  beginContour();
  radius = 0;
  for (var i=numPoints; i>=0; i--) {
    var x = -cos(i*spacing) * radius;
    var y = sin(i*spacing) * radius;
    quadraticVertex(0,0,x,y);
    radius += gap;
  }
  endContour();

  endShape(CLOSE);
  




  // draw splash (shape of WET)
  pop();
  push();
  translate(width/2,height*0.9);
  rotate(-PI/2);
  fill(0);
  
  var theta_ol_gap = atan(2*sqrt(3))/7;
  var theta_pt_gap = PI/3/7;
  var a = 15;
  var r_ol = sqrt(13)*a*2;
  var r_pt = 4*a;
  
  beginShape();
  	vertex(-height*0.1,-width*0.5);
  	vertex(0,-width*0.5);
    vertex(0,-a*sqrt(3));
    //vertex(a,-2*a*sqrt(3));
    for (var i=-5; i<7; i+=2) {
      
      var r_ol1 = r_ol+randomGaussian(0,r_ol/8);

      bezierVertex(cos((i-3)*theta_ol_gap)*r_ol1+randomGaussian(0,r_ol/8),
        sin((i-3)*theta_ol_gap)*r_ol1+randomGaussian(0,r_ol/8), 
        cos((i+1)*theta_ol_gap)*r_ol1, sin((i+1)*theta_ol_gap)*r_ol1, 
        cos(i*theta_pt_gap)*r_pt-a, sin(i*theta_pt_gap)*r_pt);

      if (r_ol == sqrt(13)*a*2) {
        r_ol /= 4;
      } else {
        r_ol *= 4;
      }
    }
    
          bezierVertex(cos((i-3)*theta_ol_gap)*r_ol+randomGaussian(0,r_ol/8),
            sin((i-3)*theta_ol_gap)*r_ol+randomGaussian(0,r_ol/8), 
            cos((i+1)*theta_ol_gap)*r_ol, sin((i+1)*theta_ol_gap)*r_ol, 
            0, a*sqrt(3));

		vertex(0,width*0.5);
  	vertex(-height*0.1,width*0.5);
  
  endShape(CLOSE);
  
}
