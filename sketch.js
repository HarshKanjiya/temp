var points = []
var mult = 0.005


var r1;
var r2;
var g1;
var g2;
var b1;
var b2;

function setup(){
    createCanvas(windowWidth,windowHeight)
    background(255)
    angleMode(DEGREES)
    noiseDetail(1)

    var density = 0
    if(width > 1000)
    {
        density = 60
    }
    else
    {
        density = 30
    }
    var spacing = width/density

    for(x = 0; x < width; x += spacing)
    {
        for(y = 0; y < height; y += spacing)
        {
            var p = new createVector(x + random(-20,20), y + random(-20,20))
            points.push(p)
        }
    }

    r1 = random(255)
    r2 = random(255)
    g1 = random(255)
    g2 = random(255)
    b1 = random(255)
    b2 = random(255)

    mult = random(0.002, 0.01)
}

function draw(){
    noStroke()
    for(i = 0; i< points.length; i++)
    {
        var r = map(points[i].x, 0, width, r1, r2)
        var g = map(points[i].x, 0, width, g1, g2)
        var b = map(points[i].x, 0, width, b1, b2)
        var alpha = map(dist(width/2, height/2, points[i].x, points[i].y), 0,600,400,0)

        fill(r, g, b, alpha)
        var angle = map( noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)
        points[i].add(createVector(cos(angle), sin(angle)))


        if( dist(width/2,height/2, points[i].x, points[i].y) < 600 )
        {
            ellipse(points[i].x, points[i].y,1)
        }
    }
}
