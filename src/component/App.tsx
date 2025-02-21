import React, { Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import Header from "./Header";
import New from "./New";
import Category from "./Category";
import Theme from "./Theme";
import Spinner from "./Spinner";
import Footer from "./Footer";

const App = () => {
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
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/" exact component={New} />
            <Route path="/technology" exact component={Category} />
            <Route path="/sports" exact component={Category} />
            <Route path="/health" exact component={Category} />
            <Route path="/search" exact component={Theme} />
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </React.Fragment>
  );
};

export default App;
