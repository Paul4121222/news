import React, { useEffect, useState } from "react";
import { mainPage } from "../action";
import { connect } from "react-redux";
import Slider from "./Slider";
import Footer from "./Footer";
import FlipCard from "./FlipCard";
import coverImage from "../assets/cover.jpg";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

const New = ({ item, mainPage }) => {
  const [coverScrollY, setCoverScrollY] = useState(0);
  const animation = useAnimation(); //建立動畫控制器

  const { ref: inViewRef, inView } = useInView({ threshold: 0.3 });

  const title = "Breaking News, Global Perspective";
  const desc1 = "Stay informed with the latest news from around the world.";
  const desc2 =
    "Breaking stories, in-depth analysis, and expert insights - all in one place.";

  useEffect(() => {
    const handleScroll = () => {
      setCoverScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    mainPage();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      console.log(2);
      //動畫應由start觸發
      animation.start("visible");
    }
  }, [inView, animation]);

  return (
    <div>
      <div
        style={{
          height: "calc(100vh)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100vh",
            zIndex: -1,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${coverImage})`,
            backgroundSize: "cover",
            backgroundPosition: `center ${coverScrollY * 0.5}px`,
          }}
        />
        <div
          style={{
            color: "#ffd231",
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: "2.5rem",
            whiteSpace: "pre-wrap",
            padding: "0 20px",
          }}
        >
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>

      <div style={{ padding: "40px 80px", background: "#1d1d1e" }}>
        <div
          ref={inViewRef}
          style={{ fontSize: "3rem", fontWeight: 700, lineHeight: 1.3 }}
        >
          {desc1.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={"initial"}
              animate={animation}
              variants={{
                hidden: {
                  color: "#333",
                },
                visible: {
                  color: "#fff",
                  transition: { duration: 0.5, delay: index * 0.5 },
                },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>

      {item.length ? (
        <FlipCard list={[item[9], item[5], item[6], item[7], item[8]]} />
      ) : null}
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    item: state.newTheme,
  };
};
export default connect(mapStateToProps, { mainPage })(New);
