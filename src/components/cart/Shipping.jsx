import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { State } from "country-state-city";
import useInput from "../../hooks/use-input";
import { useDispatch, useSelector } from "react-redux";

const isNotEmpty = (value) => value.trim() !== "";
const isSixChar = (value) => value.length === 6;
const isPhoneNum = (value) => value.length === 10;

const Shipping = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { subTotal } = useSelector((state) => state.cart);

  useEffect(() => {
    if (subTotal === 0) {
      navigate("/cart");
    }
    window.scrollTo(0, 0);
  }, [subTotal, navigate]);

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
    value: enteredStreet,
    setIsTouched: setStreetIsTouched,
    isValid: streetIsValid,
    isInvalid: streetIsInvalid,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreetInput,
  } = useInput((value) => isNotEmpty(value));
  const {
    value: enteredCity,
    setIsTouched: setCityIsTouched,
    isValid: cityIsValid,
    isInvalid: cityIsInvalid,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput((value) => isNotEmpty(value));
  const {
    value: enteredState,
    setIsTouched: setStateIsTouched,
    isValid: stateIsValid,
    isInvalid: stateIsInvalid,
    valueChangeHandler: stateChangeHandler,
    inputBlurHandler: stateBlurHandler,
    reset: resetStateInput,
  } = useInput((value) => isNotEmpty(value));
  const {
    value: enteredPincode,
    setIsTouched: setPincodeIsTouched,
    isValid: pincodeIsValid,
    isInvalid: pincodeIsInvalid,
    numChangeHandler: pincodeChangeHandler,
    inputBlurHandler: pincodeBlurHandler,
    reset: resetPincodeInput,
  } = useInput((value) => isSixChar(value));
  const {
    value: enteredPhoneNum,
    setIsTouched: setPhoneNumIsTouched,
    isValid: phoneNumIsValid,
    isInvalid: phoneNumIsInvalid,
    numChangeHandler: phoneNumChangeHandler,
    inputBlurHandler: phoneNumBlurHandler,
    reset: resetPhoneNumInput,
  } = useInput((value) => isPhoneNum(value));

  let formIsValid = false;
  if (
    nameIsValid &&
    streetIsValid &&
    cityIsValid &&
    stateIsValid &&
    pincodeIsValid &&
    phoneNumIsValid
  ) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    setNameIsTouched(true);
    setStreetIsTouched(true);
    setCityIsTouched(true);
    setStateIsTouched(true);
    setPincodeIsTouched(true);
    setPhoneNumIsTouched(true);

    if (!formIsValid) {
      return;
    }
    dispatch({
      type: "addShippingInfo",
      payload: {
        enteredName,
        enteredStreet,
        enteredCity,
        enteredState,
        enteredPincode,
        enteredPhoneNum,
      },
    });
    localStorage.setItem(
      "shippingInfo",
      JSON.stringify({
        enteredName,
        enteredStreet,
        enteredCity,
        enteredState,
        enteredPincode,
        enteredPhoneNum,
      })
    );

    navigate("/confirmorder");

    resetNameInput();
    resetStreetInput();
    resetCityInput();
    resetStateInput();
    resetPincodeInput();
    resetPhoneNumInput();
  };

  const nameControlClasses = `control ${nameIsInvalid ? "invalid" : ""}`;
  const streetControlClasses = `control ${streetIsInvalid ? "invalid" : ""}`;
  const cityControlClasses = `control ${cityIsInvalid ? "invalid" : ""}`;
  const stateControlClasses = `control ${stateIsInvalid ? "invalid" : ""}`;
  const pincodeControlClasses = `control ${pincodeIsInvalid ? "invalid" : ""}`;
  const phoneNumControlClasses = `control ${
    phoneNumIsInvalid ? "invalid" : ""
  }`;

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form onSubmit={confirmHandler}>
          <div className={nameControlClasses}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              required
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
          </div>
          <div className={streetControlClasses}>
            <label htmlFor="address">Street</label>
            <input
              type="text"
              placeholder="Enter Street"
              required
              value={enteredStreet}
              onChange={streetChangeHandler}
              onBlur={streetBlurHandler}
            />
          </div>
          <div className={cityControlClasses}>
            <label>City</label>
            <input
              type="text"
              placeholder="Enter City"
              required
              value={enteredCity}
              onChange={cityChangeHandler}
              onBlur={cityBlurHandler}
            />
          </div>

          <div className={stateControlClasses}>
            <label>State</label>
            <select
              required
              value={enteredState}
              onChange={stateChangeHandler}
              onBlur={stateBlurHandler}
            >
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry("IN").map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>

          <div className={pincodeControlClasses}>
            <label htmlFor="pincode">Pincode</label>
            <input
              type="text"
              maxLength={6}
              placeholder="Enter Pincode"
              required
              value={enteredPincode}
              onChange={pincodeChangeHandler}
              onBlur={pincodeBlurHandler}
            />
          </div>
          <div className={phoneNumControlClasses}>
            <label>Phone No.</label>
            <input
              type="text"
              maxLength={10}
              placeholder="Enter Phone No."
              required
              value={enteredPhoneNum}
              onChange={phoneNumChangeHandler}
              onBlur={phoneNumBlurHandler}
            />
          </div>

          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
