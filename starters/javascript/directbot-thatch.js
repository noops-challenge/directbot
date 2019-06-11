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
  let speed = 100; // how often screen refreshes, in milliseconds.
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
    width: appWidth,
    height: appHeight,
    count: 75
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
  let pointSize = NOOPBOT_RANDOM(1,3);
  ctx.lineWidth = NOOPBOT_RANDOM(1,4);
  ctx.globalAlpha = Math.random();

  // draw the point
  ctx.beginPath();
  let point = NOOPBOT_DECIDE_POINT(appWidth, appHeight);
  ctx.moveTo(point.x, point.y);
  switch (direction.direction) {
    case "up":
      ctx.lineTo(point.x, point.y+direction.distance);
      break;
    case "down":
      ctx.lineTo(point.x, point.y-direction.distance);
      break;
    case "left":
      ctx.lineTo(point.x-direction.distance, point.y);
      break;
    case "right":
      ctx.lineTo(point.x+direction.distance, point.y);
      break;
  }

  ctx.stroke()

}

// listen if browser changes size.
window.onresize = function(event){
  sizeCanvas();
  draw();
};
