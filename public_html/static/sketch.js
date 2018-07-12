var ellipses = [];

function createEllipse(_Size = 15, _MaxAlpha = 255) {
    ellipses.push({
        X: random() * windowWidth,
        Y: random() * windowHeight,
        Alpha: _MaxAlpha,
        Size: _Size,
        Velocity: {
            X: -1.5 + random() * 3,
            Y: -1.5 + random() * 3
        }
    });
}

function setup() {
    createCanvas(windowWidth, windowHeight).parent(document.getElementById("p5Layer"));
}

function draw() {
    clear();
    fill(color(255, 255, 255, 32));
    noStroke();

    if (frameCount % 10 == 0)
        createEllipse(random() * 10, 128);
    if (frameCount % 5 == 0)
        createEllipse(random() * 5, 192);

    for (var i = ellipses.length - 1; i > -1; i--) {
        if (ellipses[i].Alpha > 0) {
            // Move based on velocity
            ellipses[i].X += ellipses[i].Velocity.X * 0.1;
            ellipses[i].Y += ellipses[i].Velocity.Y * 0.1;
            ellipses[i].Alpha -= 1;

            // Add size
            ellipses[i].Size *= 1.0105;

            // Set fill color
            fill(color(255, 255, 255, ellipses[i].Alpha));
            ellipse(ellipses[i].X, ellipses[i].Y, ellipses[i].Size, ellipses[i].Size);

        } else {
            ellipses.splice(i, 1);
        }
    }
}