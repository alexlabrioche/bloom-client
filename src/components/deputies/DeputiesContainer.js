import React from "react";
import styled from "styled-components";

import Api from "../../utils/Api";
// import getGrade from "../../utils/GetGrade";

import Header from "../main/Header";
import DeputiesList from "./DeputiesList";

const Container = styled.div`
  padding-top: 4rem;
`;
class DeputiesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deputies: []
    };
  }
  async componentDidMount() {
    const deputies = await Api.getDeputies();
    this.setState({
      deputies
    });
    window.addEventListener("resize", this.handleScreenSize.bind(this));
    this.handleScreenSize();
  }

  handleScreenSize() {
    const { mobileView } = this.state;
    // Set ScreenSize to true or false
    const screenSize = window.innerWidth <= 760;
    mobileView !== screenSize &&
      this.setState({
        mobileView: screenSize
      });
  }
  render() {
    const { deputies, mobileView } = this.state;
    return (
      <Container className="container">
        <div className="row">
          <Header />
          <DeputiesList deputies={deputies} mobileView={mobileView} />
        </div>
      </Container>
    );
  }
}

export default DeputiesContainer;
