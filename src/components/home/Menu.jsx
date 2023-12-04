import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import toast from "react-hot-toast";
import { FaCartShopping } from "react-icons/fa6";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToCartHandler = () => {
    navigate("/cart");
    window.scrollTo(0, 0);
  };

  const addToCardHandler = (itemNum) => {
    switch (itemNum) {
      case 1:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 2:
        dispatch({ type: "vegCheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 3:
        dispatch({ type: "burgerWithFriesIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;

      default:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
    }
  };

  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title="Cheese Burger"
          delay={0.1}
          handler={addToCardHandler}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={500}
          title="Veg Cheese Burger"
          delay={0.5}
          handler={addToCardHandler}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={1800}
          title="Cheese Burger with French Fries"
          delay={0.8}
          handler={addToCardHandler}
        />
      </div>

      <div className="div_center">
        <button onClick={goToCartHandler} id="goToCartBtn">
          <FaCartShopping /> Go To Cart
        </button>
        <div style={{ clear: "both" }}></div>
      </div>
    </section>
  );
};

export default Menu;
