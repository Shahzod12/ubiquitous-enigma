quick_draw_data_set=["tiger","glass"]
random_number=Math.floor((Math.random()*quick_draw_data_set.length)+1)
sketch=quick_draw_data_set[random_number]
document.getElementById("sketch_name").innerHTML="sketch to be drawn"+sketch
timer_counter=0
timer_check=""
drawn_sketch=""
answer_holder=""
score=0

function updateCanvas() {
    background("white")
    random_number=Math.floor((Math.random()*quick_draw_data_set.length)+1)
sketch=quick_draw_data_set[random_number]
document.getElementById("sketch_name").innerHTML="sketch to be drawn"+sketch
}
function preload()
{
    classifier=ml5.imageClassifier('DoodleNet')
}
function setup() {
canvas=createCanvas(280, 280)
canvas.center()
background("white")    
canvas.mouseReleased(classifyCanvas)
}
function draw() {   
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    check_sketch()
    if(drawn_sketch==sketch){
        answer_holder="set"
        score++
        document.getElementById('score').innerHTML="score"+score
    }
    }


function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}
function gotResult(error, results) {
    if (error) {
    console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'Label: '+ drawn_sketch;
    
    
    document.getElementById('confidence').innerHTML = 'Confidence: ' +Math.round(results[0].confidence * 100) + "%";
    
    }
function check_sketch() {
timer_counter++
}