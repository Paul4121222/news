import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import Header from "./Header";
import New from "./New";
import Sports from "./Sports";
import Health from "./Health";
import Theme from "./Theme";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history} basename="/news">
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
            <Route path="/search" exact component={Theme} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
