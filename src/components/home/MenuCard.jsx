import React from "react";
import { motion } from "framer-motion";
import { FaCartShopping } from "react-icons/fa6";

const MenuCard = ({ itemNum, burgerSrc, price, title, handler, delay = 0 }) => {
  return (
    <motion.div
      className="menuCard"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay,
      }}
    >
      <div>Item {itemNum}</div>
      <main>
        <img src={burgerSrc} alt={itemNum} />

        <h5>₹{price}</h5>

        <p>{title}</p>

        <button onClick={() => handler(itemNum)}>
          <FaCartShopping /> Add To Cart
        </button>
      </main>
    </motion.div>
  );
};

export default MenuCard;
