import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue && validateValue(enteredValue);
  const valueIsInvalid = isTouched && !valueIsValid;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  function numChangeHandler(e) {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setEnteredValue(e.target.value);
    }
  }

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    setIsTouched,
    isValid: valueIsValid,
    isInvalid: valueIsInvalid,
    valueChangeHandler,
    numChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
