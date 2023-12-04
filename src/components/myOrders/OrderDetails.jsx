import React from "react";
import { useSelector } from "react-redux";

const OrderDetails = () => {
  const {
    cartItems: { cheeseBurger, vegCheeseBurger, burgerWithFries },
    shippingInfo,
    paymentMethod,
    subTotal,
    shippingCharges,
    tax,
    total,
    orderId,
  } = useSelector((state) => state.database.cart);

  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const todayDate = `${date < 10 ? "0" + date : date}-${
    month < 10 ? "0" + month : month
  }-${year}`;

  const codDate = new Date(new Date().setDate(date + 5)).getDate();
  const deliverDate = `${codDate < 10 ? "0" + codDate : codDate}-${
    month < 10 ? "0" + month : month
  }-${year}`;

  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>

        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address-</b>
            {shippingInfo.street}, {shippingInfo.city}, {shippingInfo.pincode},{" "}
            {shippingInfo.state}
          </p>
        </div>

        <div>
          <h1>Contact</h1>
          <p>
            <b>Name-</b>
            {shippingInfo.name}
          </p>
          <p>
            <b>Phone-</b>
            {shippingInfo.phoneNum}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status-</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At-</b>
            {todayDate}
          </p>
          <p>
            <b>Delivery Expected By-</b>
            {deliverDate}
          </p>
        </div>

        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method-</b>
            {paymentMethod}
          </p>
          <p>
            <b>Payment Reference-</b>#{orderId}
          </p>

          {paymentMethod === "Online" && (
            <p>
              <b>Paid At-</b>
              {todayDate}
            </p>
          )}
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total-</b>₹{subTotal}
          </p>
          <p>
            <b>Shipping Charges-</b>₹{shippingCharges}
          </p>
          <p>
            <b>Tax-</b>₹{tax}
          </p>
          <p>
            <b>Total</b>₹{total}
          </p>
        </div>

        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{cheeseBurger.quantity}</span> x{" "}
              <span>{cheeseBurger.price}</span>
            </div>
          </div>
          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{vegCheeseBurger.quantity}</span> x{" "}
              <span>{vegCheeseBurger.price}</span>
            </div>
          </div>
          <div>
            <h4>Burger Fries</h4>
            <div>
              <span>{burgerWithFries.quantity}</span> x{" "}
              <span>{burgerWithFries.price}</span>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Total
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              ₹ {subTotal}
            </div>
          </div>
          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Total (ShippingCharges + Tax)
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              ₹ {total}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
