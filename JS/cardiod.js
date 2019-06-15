let r; 
let factor = 0; 
let rSlider;
let gSlider; 
let bSlider;


function setup(){
    createCanvas(windowWidth, windowHeight);
    r = height/2 - 16;
    rSlider = createSlider(0, 255, 100, 30);
    gSlider = createSlider(0,255,50,30); 
    bSlider = createSlider(0,255,50,30)
}

function getVector(index, total){
    const angle = map(index % total, 0, total, 0, TWO_PI);
    const v = p5.Vector.fromAngle(angle + PI);
    v.mult(r);
    return v;
}

function draw(){
    let rVal = rSlider.value(); 
    let gVal = gSlider.value();
    let bVal = bSlider.value();  
    background(0);
    const total = 200;
    factor += 0.015; 

    translate(width / 2, height / 2);
    //stroke(255, 150);
    stroke(rVal,gVal,bVal); 
    strokeWeight(2);
    noFill();
    //fill(rVal,gVal,bVal); 
    ellipse(0, 0, r * 2);

    strokeWeight(2);
    for (let i = 0; i < total; i++) {
        const a = getVector(i,total);
        const b = getVector(i * factor,total);
        line(a.x, a.y, b.x, b.y); 
    }
}