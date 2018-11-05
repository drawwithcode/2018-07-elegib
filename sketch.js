
var capture;
var mic;
var click = 0;
var press = 0;
var polaroid;
var snap = 0;

function preload() {
  polaroid = loadImage ('./assets/polaroid.png ');
  polaroid0 = loadImage ('./assets/polaroid0.png ');
  polaroid1 = loadImage ('./assets/polaroid1.png ');
  polaroid2 = loadImage ('./assets/polaroid2.png ');
  polaroid3 = loadImage ('./assets/polaroid3.png ');
}

function setup() {

createCanvas(windowWidth, windowHeight);

capture = createCapture(VIDEO);
capture.size(640,480);
capture.hide();
mic = new p5.AudioIn();
mic.start();

}



function draw() {
background(0);

var myImage = capture.loadPixels();
var volume = mic.getLevel();

imX = myImage.width
imY = myImage.height;
noFill();
textSize(25);

if(click == 0) {
    image(polaroid, width/2 - imX/2-30, 200-30, imX+60, imY+300);
}
else if (click == 1) {
  press = 1;
  image(polaroid0,width/2 - imX/2-30, 200-30, imX+60, imY+300);
  image(myImage, width/2 - imX/2, 200, imX, imY);
  }

else if(click == 2) {
  image(polaroid1 ,width/2 - imX/2-30, 200-30, imX+60, imY+300);
  press = 2;
  for (var x = 10; x < imX; x += 10) {
    for (var y = 10; y < imY; y += 10) {
    var myPixel = myImage.get(x, y);
    var imB = brightness(myPixel);
    fill(myPixel);
    noStroke();
    var suono = volume * 2;
    var raggio = 2+100 * imB / 255* suono;
    ellipse(x + width/2-imX/2, y +200  , raggio);}}
    noFill();


}

else if (click == 3) {
  image(polaroid2 ,width/2 - imX/2-30, 200-30, imX+60, imY+300);
  press = 3;
  noTint();
for (var x = 10; x < imX; x += 10) {
  for (var y = 10; y < imY; y += 10) {
  var myPixel = myImage.get(x, y);
  var imS = saturation(myPixel);
  fill(255);
  noStroke();
  var lato =  imS / 10;
  rect(x + width/2-imX/2, y +200  , lato, lato);}}
}

else if ( click = 4) {
  press = 0;
  colorMode( RGB);
  noTint();
  image(polaroid3 ,width/2 - imX/2-30, 200-30, imX+60, imY+300);
  colorMode(HSB);
  var filtro = 10 + volume*1000
  tint(filtro, 100, 100);
  image(myImage, width/2 - imX/2, 200, imX, imY);
  colorMode( RGB);
  noTint();

}


}

function mousePressed() {if(press == 0) {click = 1}; if(press == 1) {click = 2}; if(press == 2) {click = 3}; if(press ==3) {click = 4}}
