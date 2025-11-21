import "./LandingPage.css";
import HologramRobot from "./HologramRobot";

export default function LandingPage() {
  return (
    <section className="landing">
      <div className="landing-container">

        {/* Tagline */}
        <h1 className="landing-title">
          Converse with Your Data. <span>Predict the Future.</span> Achieve More.
        </h1>

        {/* Sub-text / Sub-points */}
        <p className="landing-subtext">
          Eliminate SQL: Query your database and live streams using plain English—no coding needed.
        </p>
        <p className="landing-subtext">
          Real-Time Foresight: Detect anomalies & forecast trends with ML-powered predictions (<span className="highlight">≤ 2.1% error</span>).
        </p>
        <p className="landing-subtext">
          Unified Orchestration: Manage PostgreSQL + Kafka pipelines in one single platform.
        </p>
        <p className="landing-subtext">
          Proactive Guidance: Get personalized recommendations from your AI Data Assistant.
        </p>

      </div>
      <HologramRobot size={450} />
    </section>
  );
}
