import React from "react";
import { motion } from "framer-motion";
import founder from "../../assets/founder.jpg";

const Founder = () => {
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

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={founder} alt="Founder" height={200} width={200} />
        <h3>Deepanshu Jangra</h3>
        <p>
          Hey, Everyone I am Deepanshu Jangra, the founder of Royal Burgers.
          <br />
          Our aim is to create the most tasty burger on planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
