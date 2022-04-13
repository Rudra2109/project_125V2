function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses) 
}

function modelLoaded() {
    console.log('PoseNet Is Initializad!');
}

difference = 0;
rightWristX = 0;
leftWristX = 0;

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(result);
        
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWrist);

        console.log("leftWristX = " + leftWristX + "rightWristX = "+ rightWristX + "difference = " + difference);

    }
}
function draw() {
    background('#969A97');
    
    document.getElementById("font_size").innerHTML = "width And Height of a text will be-" + difference+"px";
    Fill('#F90093');
    stroke('#F90093');
}

    


