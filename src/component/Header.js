import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import Module from "./Module";
import ReduxForm from "./ReduxForm";
import { motion } from "framer-motion";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.menu = React.createRef();
  }

  showModule() {
    if (this.state.open) {
      return <Module open={this.clickNav} renderNav={this.renderNav} />;
    }
  }

  clickNav = () => {
    this.setState({ open: false });
  };

  renderNav() {
    return (
      <React.Fragment>
        <NavLink to="/technology">Technology</NavLink>
        <NavLink to="/sports">Sports</NavLink>
        <NavLink to="/health">Health</NavLink>
      </React.Fragment>
    );
  }

  render() {
    const { location } = this.props;

    const shouldTransparent = ["/", "/search"].includes(location.pathname);
    return (
      <div
        className="header-nav padding-all"
        style={{
          backgroundColor: shouldTransparent
            ? "transparent"
            : "rgb(29, 29, 30)",
          position: shouldTransparent ? "absolute" : "relative",
          width: "100%",
        }}
      >
        <Link to="/" className="nav-title">
          <motion.p
            animate={{ y: 0 }}
            initial={{ y: -250 }}
            transition={{
              delay: 1.5,
              duration: 1,
              type: "spring",
              stiffness: 120,
            }}
          >
            新聞網站
          </motion.p>
        </Link>

        <nav className="nav">{this.renderNav()}</nav>

        <div className="nav-right">
          <ReduxForm />
        </div>

        <div
          ref={this.menu}
          className="menu"
          onClick={() => {
            this.menu.current.classList.contains("menu-open")
              ? this.menu.current.classList.remove("menu-open")
              : this.menu.current.classList.add("menu-open");
            this.setState({ open: !this.state.open });
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {this.showModule()}
      </div>
    );
  }
}
export default withRouter(Header);
