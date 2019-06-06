import React from "react";
import styled from "styled-components";

import Api from "../../utils/Api";

import DeputyCard from "./DeputyCard";
import MobileDeputyCard from "./MobileDeputyCard";
import Header from "../Header";
const Container = styled.div`
  /* display: flex;
  flex-direction: row; */
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
    // console.log("<<@deputiesContainer cDM", deputies.deputies);
    this.setState({
      deputies: deputies.deputies
    });
    window.addEventListener("resize", this.handleScreenSize.bind(this));
    this.handleScreenSize();
  }

  handleScreenSize() {
    const { mobileView } = this.state;
    const screenSize = window.innerWidth <= 760;
    mobileView !== screenSize &&
      this.setState({
        mobileView: screenSize
      });
  }
  renderDesktop(deputy, index) {
    return (
      <div className="my-3 col-md-6 col-lg-4" key={index}>
        <DeputyCard {...deputy} />
      </div>
    );
  }
  renderMobile(deputy, index) {
    return (
      <div className="my-1 col-12" key={index}>
        <MobileDeputyCard {...deputy} />
      </div>
    );
  }

  render() {
    const { deputies, mobileView } = this.state;
    // console.info("<< render Deputies deputies", deputies);
    return (
      <Container className="pt-5 container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          {deputies.map((deputy, index) => {
            return mobileView
              ? this.renderMobile(deputy, index)
              : this.renderDesktop(deputy, index);
          })}
        </div>
      </Container>
    );
  }
}

export default DeputiesContainer;
