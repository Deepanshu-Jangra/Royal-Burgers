import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { isOrdered } = useSelector((state) => state.database);

  useEffect(() => {
    if (!isOrdered) {
      navigate("/confirmorder");
    }
  }, [isOrdered, navigate]);

  return (
    <section className="paymentSuccess">
      <main>
        <h1>Order Confirmed</h1>
        <p>Order Placed Successfully, You can check order status below</p>
        <Link to="/myorders">Check Status</Link>
      </main>
    </section>
  );
};

export default PaymentSuccess;
