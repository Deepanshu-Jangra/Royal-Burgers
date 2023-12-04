import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ConfirmOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [payMethod, setPayMethod] = useState("");
  const [warningTxt, setWarningText] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const {
    cartItems,
    subTotal,
    tax,
    shippingCharges,
    total,
    shippingInfo,
    paymentMethod,
  } = useSelector((state) => state.cart);

  const radioClickHandler = (e) => {
    setPayMethod(e.currentTarget.querySelector("input").value);
    setIsTouched(false);
  };

  let formIsValid = false;
  if (payMethod && payMethod.trim() !== "") {
    dispatch({ type: "addPaymentMethod", payload: payMethod });
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    setIsTouched(true);

    if (!formIsValid) {
      setWarningText("Please select a payment method!");
      return;
    }

    const orderId = `OD${Math.floor(Math.random() * 199999999)}`;

    dispatch({
      type: "sendCartData",
      payload: {
        cartItems,
        subTotal,
        tax,
        shippingCharges,
        total,
        shippingInfo,
        paymentMethod,
        orderId,
      },
    });
    dispatch({ type: "calculateTotalQty" });

    toast.success("Order Placed Successfully!");
    navigate("/paymentsuccess");
    dispatch({ type: "resetPaymentMethod" });
  };

  return (
    <section className="confirmOrder">
      <main>
        <h1>Confirm Order</h1>
        <form onSubmit={submitHandler}>
          <div onClick={radioClickHandler}>
            <label>Cash on Delivery</label>
            <input
              type="radio"
              name="payment"
              value="Cash on delivery"
              checked={paymentMethod === "Cash on delivery"}
            />
          </div>
          <div onClick={radioClickHandler}>
            <label>Online</label>
            <input
              type="radio"
              name="payment"
              value="Online"
              checked={paymentMethod === "Online"}
            />
          </div>

          {isTouched && (
            <p style={{ color: "rgb(255, 187, 0)" }}>{warningTxt}</p>
          )}

          <button type="submit">Place Order</button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
