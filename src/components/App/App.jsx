import { Pendulum } from "@components/Pendulum";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "@/constants";
import { useState } from "react";

function App() {
  const [isSimulation, setIsSimulation] = useState(false);
  const [gravity, setGravity] = useState(9.8);
  const [ropeLength, setRopeLength] = useState(1.5);
  const [acceleration, setAcceleration] = useState(-10);

  const handleChangeGravity = (e) => {
    e.preventDefault();
    setGravity(parseInt(e.target.value));
  };
  const handleChangeRopeLength = (e) => {
    e.preventDefault();
    setRopeLength(parseInt(e.target.value));
  };
  const handleChangeAcceleration = (e) => {
    setAcceleration(parseInt(e.target.value));
  };
  const toggleSimulation = () => setIsSimulation(!isSimulation);

  return (
    <div className="main-container">
      <Pendulum
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        isSimulation={isSimulation}
        gravity={gravity}
        acceleration={acceleration}
        ropeLength={ropeLength}
      />
      <button onClick={toggleSimulation}>
        {isSimulation ? "Остановить" : "Запустить"}
      </button>
      <label htmlFor="gravity-range">
        Гравитация:
        <input
          type="range"
          value={gravity}
          onChange={handleChangeGravity}
          min="0.5"
          max="50"
        />
      </label>
      <label htmlFor="length-range">
        Длина подвеса:
        <input
          type="range"
          value={ropeLength}
          onChange={handleChangeRopeLength}
          min="0.5"
          max="10"
        />
      </label>
      <label htmlFor="gravity-range">
        Начальное положение:
        <input
          type="range"
          value={acceleration}
          onChange={handleChangeAcceleration}
          onInput={handleChangeAcceleration}
          min="-160"
          max="160"
        />
      </label>
    </div>
  );
}

export { App };
