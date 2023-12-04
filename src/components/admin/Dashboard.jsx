import React from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import { motion } from "framer-motion";
import Loader from "../layout/Loader";
import { useEffect } from "react";

ChartJS.register(Tooltip, ArcElement, Legend);

const loading = false;

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 230);
  }, []);

  const data = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data: [2, 3, 4],
        backgroundColor: [
          "rgba(255,255,255,0.1)",
          "rgba(78,63,176,0.2)",
          "rgba(245, 200, 77,0.3)",
        ],
        borderColor: [
          "rgb(255,255,255)",
          "rgb(78,63,176)",
          "rgb(245, 200, 77)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const Box = ({ value, title }) => (
    <div>
      <h3>
        {title === "Income" && "₹"}
        {value}
      </h3>
      <p>{title}</p>
    </div>
  );

  const options = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <section className="dashboard">
      {loading === false ? (
        <main>
          <article>
            <Box title="Users" value={213} />
            <Box title="Orders" value={23} />
            <Box title="Income" value={21300} />
          </article>

          <section>
            <motion.div {...options}>
              <Link to="/admin/orders">View Orders</Link>
              <Link to="/admin/users">View Users</Link>
            </motion.div>

            <aside>
              <Doughnut data={data} style={{ width: "fixed" }} />
            </aside>
          </section>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Dashboard;
