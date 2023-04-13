function setup() {
    video = createCapture(VIDEO);
    video.size(600, 600);

    canvas = createCanvas(550, 550);
    canvas.position(850,130);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function modelLoaded() {
    console.log('poseNet is Initialized!')
}
function draw() {
    background('#16f9c6');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}