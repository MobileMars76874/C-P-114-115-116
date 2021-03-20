Nose_x = 0;
Nose_y = 0;

function preload(){
img = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
canvas = createCanvas(300, 300);
canvas.position(530, 100);
Video = createCapture(VIDEO);
Video.size(300, 300);
Video.hide();

poseNet = ml5.poseNet(Video, model_loaded);
poseNet.on("pose", gopose);
}

function model_loaded(){
console.log("model loaded!");
}

function gopose(results){
if(results.length > 0){
console.log(results);
Nose_x = results[0].pose.nose.x - 40;
Nose_y = results[0].pose.nose.y;
}
}

function draw(){
image(Video, 0, 0, 300, 300);

image(img, Nose_x, Nose_y, 80, 35);
}

function C_I(){
save("Clown filtered image.jpg");
}