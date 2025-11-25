import React, { useState } from "react";
import ProfessionSelect from "./ProfessionSelect";
import TablePreview from "./TablePreview";
import ConfirmSetup from "./ConfirmSetup";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [profession, setProfession] = useState(null);
  const [tables, setTables] = useState([]);

  return (
    <div className="onboarding-container">
      {step === 1 && (
        <ProfessionSelect
          onSelect={(prof, recommendedTables) => {
            setProfession(prof);
            setTables(recommendedTables);
            setStep(2);
          }}
        />
      )}

      {step === 2 && (
        <TablePreview
          profession={profession}
          tables={tables}
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
        />
      )}

      {step === 3 && (
        <ConfirmSetup
          profession={profession}
          tables={tables}
          onBack={() => setStep(2)}
        />
      )}
    </div>
  );
}
