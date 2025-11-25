import React from "react";

export default function TablePreview({ profession, tables, onNext, onBack }) {
  return (
    <div className="onboarding-step">
      <h2>Recommended tables for: {profession}</h2>

      <ul className="table-preview-list">
        {tables.map((t) => (
          <li key={t.name}>
            <strong>{t.name}</strong>
            <span>({t.columns.join(", ")})</span>
          </li>
        ))}
      </ul>

      <div className="onboarding-buttons">
        <button onClick={onBack}>Back</button>
        <button onClick={onNext}>Continue</button>
      </div>
    </div>
  );
}
