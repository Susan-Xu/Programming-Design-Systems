function setup() {
  createCanvas(600, 400);

  bgColor = color(220); 	// background color
  txColor = color(30);		// text color
  grid = 80;	// grid width and height
  gutter = 40;	// spacing between text
  skSize = 24;	// stroke size

  background(bgColor);
  strokeWeight(skSize);
  translate(90, 110);
  
  var a = {
    'semiCircle': [createVector(1, 1)], // the center of semi circle
    'circle': [createVector(1, 2)], // the center of circle
    'line': [ // the two ends of one line
      [createVector(2, 1), createVector(2, 3)]
    ]
  };

  var f = {
    'semiCircle': [createVector(1, 1)], // the center of semi circle
    'circle': [], // the center of circle
    'line': [ // the two ends of one line
      [createVector(0, 1), createVector(0, 3)],
      [createVector(0, 2), createVector(1, 2)]
    ]
  };

  var t = {
    'semiCircle': [createVector(1, 2)], // the center of semi circle
    'circle': [], // the center of circle
    'line': [ // the two ends of one line
      [createVector(0, 0), createVector(0, 2)],
      [createVector(0, 1), createVector(1, 1)]
    ]
  };


  // the spelling of a word
  var character = [f, a, t];
  
  // loop through each letter
  character.forEach(function(letter) {
    // semi-circle
    letter.semiCircle.forEach(function(center) {
      noFill();
      stroke(txColor);
      offset = (center.x - 1) * HALF_PI + (2 - center.y) * PI;
      strokeCap(PROJECT);
      arc(center.x * grid, center.y * grid,
          grid * 2, grid * 2,
          0 + offset, PI + offset);
      strokeCap(ROUND);
      
//         ellipse(center.x * grid, center.y * grid, grid * 2);
//         push();        
//         fill(bgColor);
//         noStroke();
//         rect(-skSize / 2, (2 - center.y) * grid, grid * 2 + skSize * 2, grid * 2);
//         pop();
      
    });

    // circle
    letter.circle.forEach(function(center) {
      ellipse(center.x * grid, center.y * grid, grid * 2);
    });

    // line
    letter.line.forEach(function(pos) {
      line(pos[0].x * grid, pos[0].y * grid, pos[1].x * grid, pos[1].y * grid);
    });

    // move to the next letter
    translate(grid * 2 + gutter, 0);

  });

}