var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d"); //c stads for content
/*

/******************** ANIMATIONS ****************************** */
circles();
function circles() {
  function Circle(x, y, dx, dy, rad) {
    //starts w/ capital letter so you know that it is an object
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = 10;

    this.draw = function () {
      c.beginPath();
      c.arc(this.x, this.y, this.rad, 0, Math.PI * 2, true);
      c.strokeStyle = "#E02F27";
      c.stroke();
      c.fillStyle = "#E02F27";
      c.fill();
    };
    this.update = function () {
      if (this.x > innerWidth - this.rad || this.x - this.rad < 0) {
        this.dx = -this.dx;
      }
      if (this.y > innerHeight - this.rad || this.y - this.rad < 0) {
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;
      this.draw();
    };
  }

  var circleArray = [];

  for (var i = 0; i < (innerWidth * innerHeight) / window.innerWidth / 3; i++) {
    var x = Math.random() + innerWidth / 2;
    var y = Math.random() + innerHeight / 2;
    var dx = (window.innerWidth / 100) * (Math.random() - 0.5); // either negative or positive
    var dy = (window.innerHeight / 100) * (Math.random() - 0.5);
    var rad = 5;
    circleArray.push(new Circle(x, y, dx, dy, rad));
  }
  console.log(circleArray);
  animateCircle();
  function animateCircle() {
    requestAnimationFrame(animateCircle); //takes another function as its argument creates loop
    c.clearRect(0, 0, window.innerWidth, window.innerHeight); //clears canvass each time you want to draw on top of it
    for (var i = 0; i < circleArray.length; i++) {
      circleArray[i].update(); //updates the circles
    }
    c.fillStyle = "White";
    c.fillRect(
      window.innerWidth / 2 - 200,
      window.innerHeight / 2 - 100,
      400,
      200
    );
    c.fillStyle = "black";
    c.font = "80px Times New Roman";
    c.fillText(
      "B.K.P.P.",
      window.innerWidth / 2 - 123,
      window.innerHeight / 2 + 15
    );
    c.font = "20px Times New Roman";
    c.fillText(
      "Welcome to the",
      window.innerWidth / 2 - 60,
      window.innerHeight / 2 - 70
    );
    c.fillText(
      "(Band Kids Peoples Party)",
      window.innerWidth / 2 - 100,
      window.innerHeight / 2 + 70
    );
  }
}
