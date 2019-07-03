import React from "react";
import { EncourageElm } from "./Styles";

class Encourage extends React.Component {
  render() {
    const { twitter } = this.props;
    console.log("@ Encourage twitter", twitter);
    return (
      <EncourageElm
        href={`https://twitter.com/share?url=https://europeennes.bloomassociation.org&screen_name=${twitter}&text=Encore%un%effort%pour%20pour%20protéger%20l'océan!`}
        className="twitter-mention-button"
        data-show-count="false"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="icon">
          <i className="fas fa-bullhorn" />
        </div>
        <p className="text">Encourager sur Twitter</p>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
      </EncourageElm>
    );
  }
}

export default Encourage;
