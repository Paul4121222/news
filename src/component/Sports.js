import React, { Suspense } from "react";
import { connect } from "react-redux";
import { newsList } from "../action";
import Theme from "./Theme";
import axios from "../axios";
import Footer from "./Footer";
class Sports extends React.Component {
  componentDidMount() {
    this.props.newsList("sports");
  }
  render() {
    return (
      <React.Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <Theme theme={this.props.newTheme} title="sports" />
        </Suspense>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newTheme: state.newTheme,
    form: state.form,
  };
};
export default connect(mapStateToProps, { newsList })(Sports);
