function setup() {
  createCanvas(400, 400);
  background(230, 230, 230);
  x = width / 2;
  y = height / 2;

  canvasX = width / 2;
  c = 0;
  steps = 0;
  sketchDone = false;

  input = select("#step-input");

  submitButton = select("#draw");
  submitButton.mousePressed(adjustSteps);
}

function draw() {
  noStroke();
  draw3d(steps);
}

function adjustSteps() {
  const name = input.value();
  steps = int(name);
  sketchDone = true;
}

function draw3d(input) {
  if (c < input) {
    x = x + random(-10, 10);
    y = y + random(-10, 10);

    drawPoint(x, y, 2, 255, 0, 0, 80, 5);
    drawPoint(x, y, 3, 0, 255, 255, 80, 5);
    drawPoint(x, y, 0, 0, 0, 0, 180, 7);

    c = c + 1;
  }


  if (c === input && sketchDone) {
    results = createElement("div", "3D drawing with " + input + " points");
    results.style("width", "50vw");
    results.style("text-align", "center");
    results.style("padding-top", "3vh");
    results.style("padding-bottom", "3vh");

    done = createButton("Do it again");
    done.mousePressed(refreshPage);
    done.style("margin-bottom", "5vh");
    noLoop();
  }
}


function drawPoint(x, y, step, R, G, B, alpha, d) {
  fill(R, G, B, alpha);

  if (x <= 0) {
    x = x + 10;
  }
  if (x >= width) {
    x = x - 10;
  }
  if (y <= 0) {
    y = y + 10;
    print("y out");
  }
  if (y >= height) {
    y = y - 10;
    print("y out");
  }

  circle(x, y + step * 4, d);
}

function refreshPage() {
  window.location.reload();
}