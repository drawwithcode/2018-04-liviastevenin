function preload() {
  // put preload code here
  song =  loadSound('addons/fireflies.mp3');
}

var myVagalume = [];

var myLuna = {};

var point;

var b = 102;

var g = 0;

var r = 0;

var bl = 208;

var myclouds = [];

var song;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

song.play();


  myLuna = new Luna(200, 150, 80);

  var cloud1 = new Clouds(500, 150, 70);
  var cloud2 = new Clouds(560, 150, 100);
  var cloud3 = new Clouds(620, 150, 70);
  var cloud4 = new Clouds(800, 350, 70);
  var cloud5 = new Clouds(860, 350, 100);
  var cloud6 = new Clouds(920, 350, 70);
  var cloud7 = new Clouds(200, 550, 70);
  var cloud8 = new Clouds(260, 550, 100);
  var cloud9 = new Clouds(320, 550, 70);

  myclouds.push(cloud1);
  myclouds.push(cloud2);
  myclouds.push(cloud3);
  myclouds.push(cloud4);
  myclouds.push(cloud5);
  myclouds.push(cloud6);
  myclouds.push(cloud7);
  myclouds.push(cloud8);
  myclouds.push(cloud9);

  //var numberc = 9;
  // for (var i = 0; i < numberc; i++) {
  //   //var x = 20+ 100*i;
  //   myclouds[i] = new Clouds(500, 150, 70);
  // }

  var number = 100;
  for (var i = 0; i < number; i++) {
    //var x = 20+ 100*i;
    myVagalume[i] = new Vagalume(random(0, width), random(0, height), random(5, 15));
  }

  point = new Vagalume(400, 200, 10);

}



function draw() {
  // put drawing code here


  background(r, g, b);

  textSize(26);
  textAlign(LEFT);
  var s = 'Catch the fireflies!';
  noStroke();
  fill(255);
  text(s, width/2, height-100, 250, 250);

  myLuna.show();

  point.x = mouseX;
  point.y = mouseY;
  point.show();

  for (var j = 0; j < myclouds.length; j++) {
    myclouds[j].show();
    myclouds[j].move();

  }

    for (var j = 0; j < myVagalume.length; j++) {
      myVagalume[j].show();
      myVagalume[j].move();


      if (dist(point.x, point.y, myVagalume[j].x, myVagalume[j].y) < point.diameter + myVagalume[j].diameter) {
        b = b - 5;
        r += 5;
        g += 5;

        for (b = 102; b < 180; b+=3) {

        }



        myLuna.color = '#ffff1a';

        myVagalume.splice(j,1);


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

      pop();
      noStroke();
      fill('#ffffff');
      ellipse(this.x-5, this.y-10, this.diameter/2,this.diameter/3);
      ellipse(this.x+5, this.y-10, this.diameter/2,this.diameter/3);
      push();

      strokeWeight(6);
      stroke('#ffff99');
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
    this.color = color(255, 255, bl);

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
