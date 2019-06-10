import React from "react";
import styled from "styled-components";
import Global from "../../Global";
import bloomGif from "../../img/Animation_ok_Bloom.gif";
import { withRouter } from "react-router-dom";

const Container = styled.footer`
  /* position: fixed; */
  background-color: white;
  margin-top: 5rem;
  left: 0;
  bottom: 0;
  right: 0;
  font-family: ${Global.font.title};
  font-size: ${Global.font.size.caption};
  border-bottom: solid 4px ${Global.color.accent};
  padding-left: 10px;
  padding-bottom: 5px;
  img {
    width: 300px;
    animation: floating1 4s ease-in-out 0s infinite alternate;
  }
  @keyframes floating1 {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(12%);
    }
    100% {
      transform: translateY(0);
    }
  }
  .mentions-legales {
    margin-bottom: 7px;
  }
`;

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.location.pathname.match("/admin")) {
      return null;
    }
    return (
      <Container className="container-fluid">
        <div class="row">
          <div class="col-12 text-center">
            <a
              href="https://www.bloomassociation.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img class="img-float1" src={bloomGif} alt="poulpe de bloom" />
            </a>
          </div>
          <div class="col-12 text-center mentions-legales">
            <a href="https://www.bloomassociation.org/mentions-legales/">
              Mentions Légales
            </a>{" "}
            | <a href="https://www.bloomassociation.org/contact/">Contact</a>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <p class="signature">
              &copy; {new Date().getFullYear()} Vianney Guesdon-Vennerie et Alex
              Baker
            </p>
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(Footer);
