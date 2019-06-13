import React from "react";
import { withRouter } from "react-router-dom";
import Admin from "./Admin";
import Public from "./Public";

class NavigationSwitch extends React.Component {
  state = {
    isScrolled: false
  };
  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = winScroll / height;
    if (scrolled > 0) {
      this.state.isScrolled === false &&
        this.setState({
          isScrolled: true
        });
    }
    if (scrolled === 0) {
      this.setState({
        isScrolled: false
      });
    }
  };
  render() {
    const { isScrolled } = this.state;
    if (this.props.location.pathname.substr(0, 6) === "/admin") {
      return <Admin {...this.props} />;
    }
    return <Public {...this.props} isScrolled={isScrolled} />;
  }
}

export default withRouter(NavigationSwitch);
