import { useEffect, useRef } from "react";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "@/constants";

function Pendulum({
  isSimulation,
  gravity,
  acceleration,
  ropeLength,
  ...props
}) {
  const canvasRef = useRef(null);

  const weight = 6;
  const dragCoefficient = 1;
  let _acceleration = acceleration.valueOf();
  let velocity = 0;
  let lastT = 10;

  function draw(context, frameCount) {
    const dt = (frameCount - lastT) / 1000;
    lastT = frameCount;

    if (isSimulation) {
      _acceleration += dt * velocity;
      velocity +=
        dt *
        ((-gravity / ropeLength) * Math.sin(_acceleration) -
          ((dragCoefficient * ropeLength) / weight) *
            velocity *
            velocity *
            Math.sign(velocity));
    }

    const angle = _acceleration + Math.PI / 2;
    const size = Math.min(CANVAS_WIDTH, CANVAS_HEIGHT);
    const ox = CANVAS_WIDTH / 2;
    const rPend = size * 0.45 * Math.tanh(0.5 * ropeLength);
    const rBall = size * 0.05 * Math.tanh(0.5 * weight);
    const x = ox - rPend * Math.cos(angle);
    const y = rPend * Math.sin(angle) + 2;

    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // draw a ball
    context.beginPath();
    context.arc(x, y, rBall, 0, Math.PI * 2);
    context.fill();

    // draw a base and a string
    context.moveTo(0, 2);
    context.lineTo(CANVAS_WIDTH, 2);
    context.moveTo(ox, 0);
    context.lineTo(x, y);
    context.stroke();
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineWidth = 3;
    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      frameCount += 10;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} {...props} />;
}

export { Pendulum };
