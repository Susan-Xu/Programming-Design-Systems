/* 
This code use a js Library from Rune Madson
Find more info about rune.js at http://runemadsen.github.io/rune.js/
and more about EasyGrid: https://github.com/runemadsen/easygrid
*/

function setup() {
  createCanvas(300, 400);
  background(200);
  noStroke();
  colorMode(HSB);
  
  // color grid
  var grid = new EasyGrid({
    x: 0,
    y: 0,
    width: width,
    height: height,
    gutter: 0,
    columns: 2,
    rows: 3
  });
  
  // text grid
  var gridT = new EasyGrid({
    x: 20,
    y: 20,
    width: width - 40,
    height: height - 40,
    gutter: 10,
    columns: 2,
    rows: 3
  });
  
  // put in colors
	colorArray = [];
  for (var i = 0; i < 3; i++) {
    var h = 366 - 8*i;
    var s = 82 - 4*i;
    var b = 88 - 10*i;
    colorArray.push(color(h % 360, s, b));
  }
  
  // fill the color grid
  for (var i=0; i < grid.modules.length; i++) {
    var odd = floor(i / 2);
    fill(colorArray[odd]);
    g = grid.modules[i];
    rect(g.x, g.y, g.width, g.height);
    
    // outline
    // noFill();
    // stroke(100,100,100);
    // d = gridT.modules[i];
    // rect(d.x, d.y, d.width, d.height);
    // fill(colorArray[odd]);
    // noStroke();
  }
  

  // use the text grid
  fill(220);
  var ht = gridT.state.moduleHeight;
  var wd = gridT.state.moduleWidth;
  var gt = gridT.state.gutter;
  translate(wd + gt + gridT.state.x,
            ht/2 + gridT.state.y);
  
  for (var i=0; i < gridT.modules.length; i++) {
    if (i == 0) {
    	rect(-wd/1.3-gt,-ht/8,wd/1.3,ht/4);
      fill(30);
    } else if (i == 1) {
      rect(0,-ht/4,wd,ht*3/8);
    } else if (i == 2) {
      rect(-wd*0.7-gt,ht/6,wd*0.7,ht/5);
    } else if (i == 3) {
    	rect(0,-ht/5,wd,ht*0.567);
    } else if (i == 4) {
    	rect(-wd*0.7-gt,0,wd*0.7,ht*0.267);
      rect(-wd*0.3-gt,-ht*0.4,wd*0.3,ht/6);
    } else {
    	rect(0,-ht*0.4,wd,ht*2/3);
    }
    
    if ((i % 2) == 1) {
      translate(0,ht+gt);
    }
  }
}
