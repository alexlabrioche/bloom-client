import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transition: 0.2s ease;
  font-weight: 300;
  cursor: pointer;
  span {
    font-weight: 700;
    color: royalblue;
  }
  &:hover {
    color: royalblue;
    font-weight: 700;
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
    return (
      <Container>
        <div className="greet-icon">
          <i class="far fa-grin-wink" />
        </div>
        <p className="greet-text">
          <span> Féliciter </span> sur Twitter
        </p>
      </Container>
    );
  }
}

export default Greet;
