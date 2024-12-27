import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By CodeWithHaider.</div>
      <div>
        <Link to={"https://www.facebook.com/obektohridoyer.kota/ "} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/@AshrafHaiderMini--"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/muhammad-ashraf-haider-a626572b7/ "} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/muhammad_ashraf_haider/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;