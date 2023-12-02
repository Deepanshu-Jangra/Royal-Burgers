import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import me from "../../assets/founder.jpg";
import { MdDashboard } from "react-icons/md";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const options = {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const logoutHandler = () => {
    dispatch({ type: "authFail" });
    toast.success("Logout Successfully!");
    navigate("/login");
    window.scrollTo(0, 0);
  };

  return (
    <section className="profile">
      <main>
        <motion.img src={me} alt="User" {...options} />

        <motion.h5 {...options} transition={{ delay: 0.3 }}>
          Deepanshu
        </motion.h5>

        <motion.div {...options} transition={{ delay: 0.5 }}>
          <Link
            to="/admin/dashboard"
            style={{
              borderRadius: 0,
              backgroundColor: "#333",
              color: "white",
            }}
          >
            <MdDashboard /> Dashboard
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Link to="/myorders">Orders</Link>
        </motion.div>

        <motion.button
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={logoutHandler}
        >
          Logout
        </motion.button>
      </main>
    </section>
  );
};

export default Profile;
