import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { useSelector } from "react-redux";

const MyOrders = () => {
  const navigate = useNavigate();
  const { total, paymentMethod, orderId, totalQty } = useSelector(
    (state) => state.database.cart
  );
  const { isOrdered } = useSelector((state) => state.database);

  useEffect(() => {
    if (!isOrdered) {
      navigate("/confirmorder");
    }
    window.scrollTo(0, 0);
  }, [isOrdered, navigate]);

  // const arr = [1, 2, 3, 4];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {/* {arr.map((i) => ( */}
            <tr /*key={i}*/>
              <td>{orderId}</td>
              <td>Processing</td>
              <td>{totalQty}</td>
              <td>₹{total}</td>
              <td>{paymentMethod}</td>
              <td>
                <Link to={`/order/${orderId}`}>
                  <AiOutlineEye />
                </Link>
              </td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
