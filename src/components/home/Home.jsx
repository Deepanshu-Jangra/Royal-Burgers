import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";
import { FaCrown } from "react-icons/fa6";

const Home = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  const crownOptions = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <section className="home">
        <div>
          <motion.div {...crownOptions} transition={{ delay: 0.6 }}>
            <FaCrown />
          </motion.div>
          <motion.h1 {...options}>Royal Burgers</motion.h1>
          <motion.p {...options} transition={{ delay: 0.2 }}>
            Welcome to our kingdom of delicious burgers!
          </motion.p>
        </div>

        <motion.a
          href="#menu"
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Explore Menu
        </motion.a>
      </section>

      <Founder />

      <Menu />
    </>
  );
};

export default Home;
