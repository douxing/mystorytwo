import React from "react";
import Helmet from "react-helmet";
import "font-awesome/scss/font-awesome.scss";
import Navigation from "../components/Navigation";
import "./index.scss";
import "./global.scss";

export default class MainLayout extends React.Component {
  render () {
    const { children } = this.props;
    return (
      <Navigation>
        <div >
          { children() }
        </div>
      </Navigation>
    );
  }
}
