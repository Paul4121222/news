import React, { useEffect, useState, useRef, FC, RefObject } from "react";
import { connect } from "react-redux";
import Slider from "./Slider";
import coverImage from "../assets/cover.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { getMainPage } from "../action";
import { TRootState } from '../reducer';
import { ThunkDispatch } from "redux-thunk";
import {IGetMainPage} from '../action/interface';

interface INewProps  {
  getMainPage: () => void,
  list: ITheme
}

const New:FC<INewProps> = ({ list, getMainPage }) => {
  const [coverScrollY, setCoverScrollY] = useState(0);
  const scrollRef: RefObject<HTMLDivElement> = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "center center"],
  });

  const title = "Breaking News, Global Perspective";
  const desc1 = "Stay informed with the latest news from around the world.";
  const desc2 =
    "Breaking stories, in-depth analysis, and expert insights - all in one place.";

  const colorTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["#111", "#fff"]
  );
  const showCount = Math.floor((window.innerWidth - 60) / 250);

  useEffect(() => {
    const handleScroll = () => {
      setCoverScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    getMainPage();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

      <div
        style={{ padding: "110px 80px", background: "#1d1d1e" }}
        ref={scrollRef}
      >
        <div
          style={{
            fontSize: "3rem",
            fontWeight: 700,
            lineHeight: 1.3,
            textAlign: "center",
          }}
        >
          {desc1.split("").map((letter, index) => (
            <motion.span key={index} style={{ color: colorTransform }}>
              {letter}
            </motion.span>
          ))}
          <br />
          {desc2.split("").map((letter, index) => (
            <motion.span key={index} style={{ color: colorTransform }}>
              {letter}
            </motion.span>
          ))}
        </div>
      </div>

      <h2>精選新聞</h2>
      <Slider list={list.slice(0, 5)} showCount={showCount} />
    </div>
  );
};

const mapStateToProps = (state: TRootState) => {
  return {
    list: state.newTheme,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<TRootState, null, IGetMainPage>) => ({
  getMainPage: () => dispatch(getMainPage()),
});
export default connect(mapStateToProps, mapDispatchToProps)(New);
