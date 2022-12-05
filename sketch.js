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
  translate(0, -50);
	rotate(-90);
  let scaleMap = map(width, 0, displayWidth, 0.3, 2);
  if (width < 800 ? scale(1) : scale(scaleMap));
  // scale(scaleMap);
  

	let hr = hour() % 12;
	let mn = minute();
	let sc = second();  
  let meridiem = hour() > 11 ? 'pm' : 'am';

  let hoursText = hr === 0 ? 12 : hr;
  let minutesText = mn > 9 ? mn : '0' + mn;
  let secondsText = sc > 9 ? sc : '0' + sc;

  let hourColor = color(150, 255, 100);
  let minuteColor = color(150, 100, 255);
  let secondColor = color(255, 100, 150);

	
	let secondAngle = map(sc, 0, 60, 0, 360);
  clockArm(secondColor, secondAngle, 300, 100, 7);


	let minuteAngle = map(mn, 0, 60, 0, 360);
  clockArm(minuteColor,minuteAngle, 280, 75, 7);

	let hourAngle = map(hr % 12, 0, 12, 0, 360);
  clockArm(hourColor, hourAngle, 260, 50, 7);

	stroke(255);
	point(0, 0);

  clockText(hoursText, minutesText, secondsText, meridiem);
  
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

function clockText(hours, minutes, seconds, meridiem) {
  rotate(90);
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color(255);
	fill(255);
	noStroke();  
  textFont(retroFont);
  textAlign(CENTER, CENTER);
  textSize(50)
  text(`${hours}:${minutes}:${seconds}`, -20, 200);
  textSize(30);
  text(`${meridiem}`, 100, 209)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




