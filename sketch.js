let retroFont;
function preload() {
  retroFont = loadFont('fonts/digital-7 (mono).ttf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
}

function draw() {
	background(0);
	translate(width / 2, height / 2);
	rotate(-90);
  let scaleMap = map(width, 0, displayWidth, 0.3, 2);
  scale(scaleMap);
  // scale(1)

	let hr = hour();
	let mn = minute();
	let sc = second();  

  hoursText = hr % 12;
  minutesText = mn > 9 ? mn : '0' + mn;
  secondsText = sc > 9 ? sc : '0' + sc;

  hourColor = color(150, 255, 100);
  minuteColor = color(150, 100, 255);
  secondColor = color(255, 100, 150);

	
	let secondAngle = map(sc, 0, 60, 0, 360);
  clockArm(secondColor, secondAngle, 300, 100, 7);


	let minuteAngle = map(mn, 0, 60, 0, 360);
  clockArm(minuteColor,minuteAngle, 280, 75, 7);

	let hourAngle = map(hr % 12, 0, 12, 0, 360);
  clockArm(hourColor, hourAngle, 260, 50, 7);

	stroke(255);
	point(0, 0);

  clockText();
  
}

function clockArm(color, angle, size, armLength, weight) {
  strokeWeight(weight);
  stroke(color);
  noFill();
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color;
	arc(0, 0, size, size, 0, angle);	

	push();
	rotate(angle);
	stroke(color);
	line(0, 0, armLength, 0);
	pop();
}

function clockText() {
  rotate(90);
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color(255);
	fill(255);
	noStroke();  
  textFont(retroFont);
  textAlign(CENTER, CENTER);
  textSize(50)
	text(hoursText + ':' + minutesText + ':' + secondsText, 0, 200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




