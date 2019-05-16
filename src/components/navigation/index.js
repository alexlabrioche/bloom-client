import React from "react";
import { withRouter } from "react-router-dom";
import Admin from "./Admin";
import Public from "./Public";

class NavigationSwitch extends React.Component {
  render() {
    if (this.props.location.pathname.substr(0, 6) === "/admin") {
      return <Admin {...this.props} />;
    }
    return <Public {...this.props} />;
  }
}

export default withRouter(NavigationSwitch);
