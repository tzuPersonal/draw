/* eslint-disable no-param-reassign */
let canvas;
let isDrawing = false;
let x = 0;
let y = 0;

export default function getCanvas(target) {
  canvas = target;
}

const waitGetCanvas = () => new Promise((resolve) => {
  window.setTimeout(() => {
    console.log(canvas);
    if (!canvas) {
      resolve(waitGetCanvas());
    } else {
      resolve();
    }
  });
});

const drawLine = (context, x1, y1, x2, y2) => {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  console.log(x2, y2);
  context.stroke();
  context.closePath();
};

const draw = async () => {
  await waitGetCanvas();
  const ctx = canvas.getContext('2d');
  canvas.addEventListener('mousedown', (e) => {
    console.log(e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
  });
  canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) { return; }
    console.log(e.offsetX, e.offsetY);
    drawLine(ctx, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  });
  window.addEventListener('mouseup', () => {
    if (isDrawing) {
      x = 0;
      y = 0;
      isDrawing = false;
    }
  });
};
draw();
