function preload() {
  // put preload code here
}

var myVagalume = [];

var myLuna = {};

var point;

var b = 102;

var g = 0;

var r = 0;

var cloud1;
var cloud2;
var cloud3;
var cloud4;
var cloud5;
var cloud6;
var cloud7;
var cloud8;
var cloud9;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);


  myLuna = new Luna(200, 150, 80);

  cloud1 = new Clouds(500, 150, 70);
  cloud2 = new Clouds(560, 150, 100);
  cloud3 = new Clouds(620, 150, 70);
  cloud4 = new Clouds(800, 350, 70);
  cloud5 = new Clouds(860, 350, 100);
  cloud6 = new Clouds(920, 350, 70);
  cloud7 = new Clouds(200, 550, 70);
  cloud8 = new Clouds(260, 550, 100);
  cloud9 = new Clouds(320, 550, 70);


  var number = 100;
  for (var i = 0; i < number; i++) {
    //var x = 20+ 100*i;
    myVagalume[i] = new Vagalume(random(0, width), random(0, height), random(5, 20));
  }
  point = new Vagalume(400, 200, 10);

}

function draw() {
  // put drawing code here


  background(r, g, b);

  myLuna.show();
  cloud1.show();
  cloud2.show();
  cloud3.show();
  cloud4.show();
  cloud5.show();
  cloud6.show();
  cloud7.show();
  cloud8.show();
  cloud9.show();
  cloud1.move();
  cloud2.move();
  cloud3.move();
  cloud4.move();
  cloud5.move();
  cloud6.move();
  cloud7.move();
  cloud8.move();
  cloud9.move();

  point.x = mouseX;
  point.y = mouseY;
  point.show();


  for (var j = 0; j < myVagalume.length; j++) {
    myVagalume[j].show();
    myVagalume[j].move();


    if (dist(point.x, point.y, myVagalume[j].x, myVagalume[j].y) < point.diameter + myVagalume[j].diameter) {
      b = b - 1;
      r = r + 1;
      g = g + 1;

      for (b = 102; b < 200; b++) {

      }

      myLuna.color = myLuna.color * 1;

      myVagalume[j].diameter = 0;
      myVagalume[j].color = '#ffffff';
    }

  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function Vagalume(_x, _y, _d) {
  this.x = _x;
  this.y = _y;
  this.diameter = _d;
  this.speed = 2;
  this.color = '#ffff00';


  this.show = function() {
    strokeWeight(5);
    stroke('#ffff66');
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
  }

  this.move = function() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }


}

function Luna(_x, _y, _d) {
  this.x = _x;
  this.y = _y;
  this.diameter = _d;
  this.color = '#ffffcc';

  this.show = function() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
  }
}

function Clouds(_x, _y, _d) {
  this.x = _x;
  this.y = _y;
  this.diameter = _d;
  this.color = color(225, 225, 208);
  this.speed = 2;

  var yDir = 1;
  var xDir = 1;

  this.show = function() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
  }

  this.move = function() {
    this.x += this.speed * xDir;
    if (this.x > width || this.x < 0) {
      xDir = xDir * -1;
    }
  }


}
