let canvas;
let ctx;
let appWidth;
let appHeight;

let colors = ['#ff00a2','#00baff','#ff6c00']; //try three colors!

// called by NOOPBOT on window.onload
function start_app() {

  // size canvas to window
  sizeCanvas();

  //set up a ticker to refresh page automatically.
  let speed = 200; // how often screen refreshes, in milliseconds.
  let ticker = NOOPBOT_TICK_SETUP(draw, speed);

  //fire a draw event.
  draw();

  //redraw when canvas is clicked.
  canvas.addEventListener('click', draw);
}

function sizeCanvas() {
  appWidth = window.innerWidth;
  appHeight = window.innerHeight;
  canvas = document.getElementById('canvas');
  ctx = NOOPBOT_SETUP_CANVAS( { canvas: canvas, bgColor:'#f1f1f1' });
}

function draw() {
  //get the data!
  NOOPBOT_FETCH({
    API: 'directbot',
    count: 54,
    distance: NOOPBOT_RANDOM(8,32),
    width: appWidth,
    height: appHeight,
    pattern: 'invader'
  }, drawSet);
}

function drawSet(responseJson) {

  let { directions } = responseJson;
  directions.forEach(function(direction) {
    drawDirection(ctx, direction);
  })
}

function drawDirection(ctx, direction) {

  ctx.strokeStyle = NOOPBOT_DECIDE(colors);
  ctx.lineWidth = NOOPBOT_RANDOM(1,1);

  // draw the point
  ctx.beginPath();
  let pointA = direction.coordinates.a;
  let pointB = direction.coordinates.b;

  ctx.moveTo(pointA.x, pointA.y);
  ctx.lineTo(pointB.x, pointB.y);

  ctx.stroke()

}

// listen if browser changes size.
window.onresize = function(event){
  sizeCanvas();
  draw();
};
