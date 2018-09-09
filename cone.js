function setup() {
  createCanvas(400, 400)

  // set up b&w background 
  background(255);
  fill(0);
  noStroke();
  rect(0, 0, 400, 200);
  
  // set up for drops (the main curveture)
  var dropSize1 = random(30, 70);
  var dropSize2 = random(30, 70);
  var dropCenter = 0;
  var droppie = 0.2;
  
  for (i = 0; i <= 10; i += 1) {
    var dropDepth = random(100)+200;
    var depth = 200;
    var size = dropSize1;
    
    // downward black drop
    if (i % 2 == 0) {
      fill(0);
      while (depth <= dropDepth) {
        ellipse(dropCenter, depth, size);
        depth += 1;
        size += droppie;
      }
      
      // white reflection on black
      fill(255);
      size = size*0.35;
      for (var theta=0; theta <= PI/2; theta+=PI/60) {
        ellipse(dropCenter+size*cos(theta), dropDepth+size*sin(theta), 3);
      }
      
    } else {
      // upward white drops
      fill(255);
      while (depth >= 400-dropDepth) {
        ellipse(dropCenter, depth, size);
        depth -= 1;
        size += droppie;
      }
    }
    dropCenter += (dropSize1 + dropSize2) / 2;
    dropSize1 = dropSize2;
    dropSize2 = random(30, 70);
  }



  // draw cone pattern (square)
  stroke(0);
  noFill();
  rotate(PI / 4);
  var coneWidth = 50;
  var displacement = 5;
  
  for (var i = -300; i <= 300; i += coneWidth) {
    for (var j = 600; j >= 0; j -= coneWidth) {
      
      // draw outline square
      if (random(1)>0) {
      	strokeWeight(2);
      	rect(j, i, coneWidth, coneWidth);
      }
      
      // random draw thinner square
      if (random(1)>0.1) {
      	strokeWeight(1);
      	rect(j, i, coneWidth-displacement, coneWidth-displacement);
      }
    }
  }
  
  rotate(-PI / 4);
  
//   fill(255);
//   textSize(48);
//   textFont('Georgia');
//   text('Ice Cream', 90, 60);
  
  
//   fill(0);
//   textSize(12);
//   textFont('Georgia');
//   text('Susan', 340, 390);
  


}