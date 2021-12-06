let canvas;

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
  }, 1000 * 1);
});

const draw = async () => {
  await waitGetCanvas();
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 10, 100);
};

draw();
