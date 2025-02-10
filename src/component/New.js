import React from "react";
import { mainPage } from "../action";
import { connect } from "react-redux";
import Slider from "./Slider";
import Footer from "./Footer";
import FlipCard from "./FlipCard";
import coverImage from "../assets/cover.jpg";
import { motion } from "framer-motion";
class New extends React.Component {
  state = {
    coverScrollY: 0,
  };

  handleScroll = () => {
    this.setState({ coverScrollY: window.scrollY });
  };

  componentDidMount() {
    this.props.mainPage();
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    if (this.props.item.length === 0) {
      return <div>loading</div>;
    }
    const title = "Breaking News, Global Perspective";
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
              backgroundPosition: `center ${this.state.coverScrollY * 0.5}px`,
            }}
          />
          <div
            style={{
              color: "#ffd231",
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: "2.5rem",
              whiteSpace: "pre",
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

        <FlipCard
          list={[
            this.props.item[9],
            this.props.item[5],
            this.props.item[6],
            this.props.item[7],
            this.props.item[8],
          ]}
        />
        <Slider
          list={[
            this.props.item[0],
            this.props.item[1],
            this.props.item[2],
            this.props.item[3],
            this.props.item[4],
          ]}
        />

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.newTheme,
  };
};
export default connect(mapStateToProps, { mainPage })(New);
