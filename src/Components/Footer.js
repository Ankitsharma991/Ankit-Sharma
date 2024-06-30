import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Ankit Sharma</h4>
      <div className="footerLinks">
        <a
          href="https://github.com/AnkitSharma991"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ankitsharma991/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailTo:sharmaa7861@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <GrMail />
        </a>
        <a
          href="https://leetcode.com/ankitsharma991/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
