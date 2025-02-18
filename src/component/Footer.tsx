import React from "react";
import { motion } from "framer-motion";
class Footer extends React.Component {
  render() {
    return (
      <motion.div
        className="footer"
        animate={{
          background: ["#222", "#000", "#222"],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <div className="container">
          <img
            className="footer-img"
            src="https://images.vexels.com/media/users/3/142812/isolated/preview/992801ae3182fa95353e941cfcac9293-shield-logo-emblem-design.png"
            alt="圖片"
          ></img>

          <p>
            {new Date().getFullYear()} My News Website. All rights reserved.
          </p>
          <div className="social">
            <i
              className="fab fa-github"
              onClick={() => {
                window.open("https://github.com/Paul4121222/news", "_blank");
              }}
            ></i>
            <i
              className="far fa-file"
              onClick={() => {
                window.open(
                  "https://www.cake.me/s--dIRRzTIBmak4B7TVqTVI3w--/scs55647875",
                  "_blank"
                );
              }}
            ></i>
            <i
              className="far fa-file-alt"
              onClick={() => {
                window.open(
                  "https://pda.104.com.tw/profile/share/3DjF86pgsR13LvSCOQJq1khMRq6CQVrk",
                  "_blank"
                );
              }}
            ></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        <div className="copyright">Code by Paul</div>
      </motion.div>
    );
  }
}

export default Footer;
