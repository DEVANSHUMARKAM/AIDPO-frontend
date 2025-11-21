import "./HologramRobot.css";
import robotImg from "../assets/robot.png";

export default function HologramRobot({
  size = 220,
  slideInDelay = 300
}) {
  const style = { width: size + "px", maxWidth: "45vw" };

  return (
    <div
      className="hologram-root"
      style={{ ["--slide-delay"]: `${slideInDelay}ms` }}
    >
      <div className="hologram-stage" style={style}>
        <div className="hologram-glow"></div>

        <img src={robotImg} alt="Hologram Robot" className="hologram-img" />

        <div className="hologram-base"></div>
      </div>
    </div>
  );
}
