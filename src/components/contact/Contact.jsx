import React from "react";
import { motion } from "framer-motion";
import burger from "../../assets/burger2.png";
import useInput from "../../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const Contact = () => {
  const {
    value: enteredName,
    setIsTouched: setNameIsTouched,
    isValid: nameIsValid,
    isInvalid: nameIsInvalid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => isNotEmpty(value));
  const {
    value: enteredEmail,
    setIsTouched: setEmailIsTouched,
    isValid: emailIsValid,
    isInvalid: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => isNotEmpty(value));
  const {
    value: enteredMsg,
    setIsTouched: setMsgIsTouched,
    isValid: msgIsValid,
    isInvalid: msgIsInvalid,
    valueChangeHandler: msgChangeHandler,
    inputBlurHandler: msgBlurHandler,
    reset: resetMsgInput,
  } = useInput((value) => isNotEmpty(value));

  let formIsValid = false;
  if (nameIsValid && emailIsValid && msgIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    setNameIsTouched(true);
    setEmailIsTouched(true);
    setMsgIsTouched(true);

    if (!formIsValid) {
      return;
    }
    console.log(enteredName, enteredEmail, enteredMsg);

    resetNameInput();
    resetEmailInput();
    resetMsgInput();
  };

  const invalidNameClass = nameIsInvalid ? "invalid" : "";
  const invalidEmailClass = emailIsInvalid ? "invalid" : "";
  const invalidMsgClass = msgIsInvalid ? "invalid" : "";

  return (
    <section className="contact">
      <motion.form
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        onSubmit={submitHandler}
      >
        <h2>Contact Us</h2>
        <input
          type="text"
          placeholder="Name"
          className={invalidNameClass}
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        <input
          type="email"
          placeholder="Email"
          className={invalidEmailClass}
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />

        <textarea
          placeholder="Message..."
          cols="30"
          rows="10"
          className={invalidMsgClass}
          value={enteredMsg}
          onChange={msgChangeHandler}
          onBlur={msgBlurHandler}
        ></textarea>

        <button type="submit">Send</button>
      </motion.form>

      <motion.div
        className="formBorder"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          initial={{ x: "50%", y: "-100vh", opacity: 0 }}
          animate={{ x: "50%", y: "-50%", opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <img src={burger} alt="Burger" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
