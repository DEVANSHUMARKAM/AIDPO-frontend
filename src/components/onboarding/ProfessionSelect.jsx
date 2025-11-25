import React from "react";

const professions = [
  { id: "retail", label: "Retail Shop Owner" },
  { id: "freelancer", label: "Freelancer" },
  { id: "student", label: "Student" },
  { id: "trader", label: "Stock / Crypto Trader" },
  { id: "sales", label: "Sales Employee" },
];

export default function ProfessionSelect({ onSelect }) {
  // Predefined table templates for each profession
  const tableTemplates = {
    retail: [
      { name: "sales", columns: ["date", "amount", "category"] },
      { name: "inventory", columns: ["item", "quantity", "price"] },
      { name: "customers", columns: ["name", "phone", "city"] },
    ],
    freelancer: [
      { name: "clients", columns: ["name", "email", "budget"] },
      { name: "projects", columns: ["title", "deadline", "status"] },
      { name: "income", columns: ["date", "amount"] },
    ],
    student: [
      { name: "subjects", columns: ["name", "teacher"] },
      { name: "assignments", columns: ["title", "due_date", "status"] },
      { name: "schedule", columns: ["day", "time", "subject"] },
    ],
  };

  return (
    <div className="onboarding-step">
      <h2>Select your profession</h2>

      <div className="profession-grid">
        {professions.map((p) => (
          <button
            key={p.id}
            className="profession-card"
            onClick={() => onSelect(p.id, tableTemplates[p.id] || [])}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  );
}
