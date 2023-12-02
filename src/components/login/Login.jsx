import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const loginHandler = () => {
    dispatch({ type: "authSuccess" });
    toast.success("Login Successfully!");
    navigate("/me");
    window.scrollTo(0, 0);
  };

  return (
    <section className="login">
      <motion.button
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        onClick={loginHandler}
      >
        Login with Google
        <FcGoogle />
      </motion.button>
    </section>
  );
};

export default Login;
