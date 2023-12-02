import React from "react";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaCrown } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div>
        <FaCrown />
        <h2>Royal Burgers</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All rights received @royalburgers</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>
        <a href="http://github.com/Deepanshu-Jangra">
          <AiFillGithub />
        </a>
        <a href="http://linkedin.com/in/deepanshu-jangra-392308291">
          <AiFillLinkedin />
        </a>
        <a href="http://instagram.com/deepanshujangra_">
          <AiFillInstagram />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
