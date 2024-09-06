import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contect = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1 className="text-center mt-5">CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https:/www.google.com" target="_black" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https:/www.facebook.com" target="_black" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https:/www.linkedin.com" target="_black" className="items">
            <FaLinkedin className="icons" />
          </a>
          <a
            href="https://github.com/geeta2000"
            target="_black"
            className="items"
          >
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https:/www.gmail.com" target="_black" className="items">
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contect;
