import React from "react";
import { connect } from "react-redux";
import { NavLink, Link, withRouter } from "react-router-dom";
import Module from "./Module";
import ReduxForm from "./ReduxForm";
import { motion } from "framer-motion";
import { cleanNewsList } from "../action";

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

  changePath = () => {
    this.props.cleanNewsList();
  };

  renderNav() {
    return (
      <React.Fragment>
        <NavLink to="/technology" onClick={this.changePath}>
          Technology
        </NavLink>
        <NavLink to="/sports" onClick={this.changePath}>
          Sports
        </NavLink>
        <NavLink to="/health" onClick={this.changePath}>
          Health
        </NavLink>
      </React.Fragment>
    );
  }

  render() {
    const { location } = this.props;

    const shouldTransparent = ["/"].includes(location.pathname);
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
        <Link to="/" className="nav-title" onClick={this.changePath}>
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
            NEWS
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
export default withRouter(
  connect(
    () => ({}),
    (dispatch) => ({
      cleanNewsList: () => dispatch(cleanNewsList()),
    })
  )(Header)
);
