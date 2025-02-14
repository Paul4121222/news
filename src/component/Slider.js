import RSlider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const Card = ({ item }) => {
  return (
    <motion.div className="slider-item" whileHover={{ scale: 1.05 }}>
      <img src={item.image} alt="" />

      <motion.div
        initial="initial"
        whileHover="hover"
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          padding: "20px",
        }}
      >
        <motion.h2
          style={{ color: "#fff" }}
          variants={{
            initial: { y: "-100%", opacity: 0 },
            hover: { y: 0, opacity: 1 },
          }}
        >
          {item.title}
        </motion.h2>
      </motion.div>
    </motion.div>
  );
};

const Slider = React.memo(
  ({ list, showCount = 5 }) => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: showCount,
      slidesToScroll: 1,
    };

    return (
      <div className="slider-container">
        <RSlider {...settings}>
          {list.map((item, index) => {
            return <Card item={item} key={index} />;
          })}
        </RSlider>
      </div>
    );
  },
  (preProps, nextProps) => {
    return JSON.stringify(preProps) === JSON.stringify(nextProps);
  }
);

export default Slider;
