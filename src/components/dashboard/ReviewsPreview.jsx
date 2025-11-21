// src/components/dashboard/ReviewsPreview.jsx
import React from "react";

const reviews = [
  { id: 1, name: "Priya K.", text: "Excellent driving dynamics and build quality. Love the interiors.", rating: 5 },
  { id: 2, name: "Mark L.", text: "Very smooth purchase process. After-sales could be better.", rating: 4 },
  { id: 3, name: "Ana G.", text: "Comfortable and refined. The tech stack is superb.", rating: 5 }
];

export default function ReviewsPreview() {
  return (
    <div>
      <h4 style={{ margin: 0, color: "#333", fontWeight: 600 }}>Recent Reviews</h4>
      <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 12 }}>
        {reviews.map((r) => (
          <div key={r.id} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <div style={{
              width: 44, height: 44, borderRadius: 10,
              background: "#eee", display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 700, color: "#555"
            }}>
              {r.name.split(" ").map(n => n[0]).slice(0,2).join("")}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontWeight: 600 }}>{r.name}</div>
                <div style={{ color: "#00C8B5" }}>{'★'.repeat(r.rating)}</div>
              </div>
              <div style={{ color: "#555", marginTop: 6 }}>{r.text}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 12 }}>
        <a href="#reviews" style={{ color: "#00C8B5", fontWeight: 600, textDecoration: "none" }}>Read all reviews →</a>
      </div>
    </div>
  );
}
