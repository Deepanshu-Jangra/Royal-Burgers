import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoFastFoodOutline } from "react-icons/io5";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [cartIsHighlighted, setCartIsHighlighted] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }
    setCartIsHighlighted(true);

    const timer = setTimeout(() => {
      setCartIsHighlighted(false);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  const cartBumpClass = cartIsHighlighted ? "bump" : "";

  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <Link to="/" className="brandIcon">
          <IoFastFoodOutline />
        </Link>
      </motion.div>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart" activeClassName="active" className={cartBumpClass}>
          <FiShoppingCart />
        </NavLink>

        <NavLink
          to={isAuthenticated ? "/me" : "/login"}
          activeClassName="active"
        >
          {isAuthenticated ? <FaUser /> : <FiLogIn />}
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
