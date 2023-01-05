import { useState } from "react";

export function useForm(formComponents) {
  // const formComponents = [<UserForm/>, <ReviewForm/>, <Thanks/>]

  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(i, e) {
    if (e) e.preventDefault();

    if (i < 0 || i >= formComponents.length) return;

    setCurrentStep(i);
  }

  return {
    currentStep,
    currentComponent: formComponents[currentStep],
    changeStep,
  };
}