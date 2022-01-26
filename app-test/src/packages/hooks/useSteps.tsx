import { useState } from "react";

export default function useSteps(size: number) {
  const [step, setStep] = useState(0);

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const nextStep = () => {
    setStep((step + 1) % size);
  };

  return { step, setStep, prevStep, nextStep };
}
