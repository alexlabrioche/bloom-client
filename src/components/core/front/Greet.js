import React from "react";
import styled from "styled-components";
import Global from "../../../Global";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  transition: 0.2s ease;
  font-weight: 300;
  cursor: pointer;
  span {
    font-weight: 700;
    color: royalblue;
  }
  .greet-text {
    padding-top: 15px;
    height: 40px;
  }
  .greet-icon {
    font-size: 2rem;
    color: royalblue;
    width: 40px;
    height: 40px;
    margin-right: 5px;
    animation: far 2.8s linear 0s infinite;
  }
  a {
    color: ${Global.color.body};
    font-weight: 400;
  }
  @keyframes far {
    0% {
      transform: scale(1);
    }
    18% {
      transform: scale(1);
    }
    20% {
      transform: scale(0.85);
    }
    22% {
      transform: scale(0.9);
      opacity: 1;
    }
    28% {
      transform: scale(1.2);
      opacity: 0.6;
    }
    38% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }
`;

class Greet extends React.Component {
  render() {
    const { twitter } = this.props;
    console.log("@ GREET twitter", twitter);
    return (
      <Container>
        <div className="greet-icon">
          <i className="fas fa-bullhorn" />
        </div>
        <a
          href={`https://twitter.com/share?url=https://europeennes.bloomassociation.org&screen_name=${twitter}&text=Bravo%20pour%20votre%20travail%20acharné%20pour%20protéger%20l'océan!`}
          className="twitter-mention-button"
          data-show-count="false"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="greet-text">
            <span> Féliciter </span> sur Twitter : @{twitter}
          </p>
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
      </Container>
    );
  }
}

export default Greet;
