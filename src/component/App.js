import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import history from "../history";
import Header from "./Header";
import New from "./New";
import Sports from "./Sports";
import Health from "./Health";
import Search from "./Search";
import { getMainPage } from "../action";

class App extends React.Component {
  componentDidMount() {
    this.props.getMainPage();
  }

  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          {/* <CSSTransition
            in={this.state.show}
            classNames="fade"
            timeout={1000}
            unmountOnExit
          >
            <div className="overlap"></div>
          </CSSTransition> */}

          <Header />
          <Switch>
            <Route path="/" exact component={New} />
            <Route path="/sports" exact component={Sports} />
            <Route path="/health" exact component={Health} />
            <Route path="/search" exact component={Search} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default connect(
  () => {},
  (dispatch) => ({
    getMainPage: () => dispatch(getMainPage()),
  })
)(App);
