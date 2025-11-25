import React, { useState } from "react";

export default function ConfirmSetup({ profession, tables, onBack }) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleCreate = async () => {
    setLoading(true);

    const username = localStorage.getItem("username");

    const res = await fetch("http://localhost:8080/api/tables/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        username,
        tables,
      }),
    });

    setLoading(false);

    if (res.ok) {
      setDone(true);
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1200);
    }
  };

  return (
    <div className="onboarding-step">
      <h2>Confirm Setup</h2>

      <p>
        We will create <strong>{tables.length}</strong> tables for your
        profession.
      </p>

      {loading && <p>Creating tables...</p>}
      {done && <p>Done! Redirecting...</p>}

      {!loading && !done && (
        <div className="onboarding-buttons">
          <button onClick={onBack}>Back</button>
          <button onClick={handleCreate}>Finish Setup</button>
        </div>
      )}
    </div>
  );
}
