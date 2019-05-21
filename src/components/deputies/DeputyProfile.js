import React from "react";
import styled from "styled-components";

import Api from "../../utils/Api";
import Config from "../../Config";

// import DeputyCard from "../core/front/DeputyCard";
// import MobileDeputyCard from "../core/front/MobileDeputyCard";

const Container = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  background: white;
  border-radius: 4px;
  border: 1px solid rgba(230, 230, 230, 1);
  .header {
    padding-top: 1rem;
    overflow: auto;
  }
  .header-img {
    border-radius: 4px;
    height: auto;
    width: 100%;
  }
  .header-title {
    font-size: 4rem;
    text-align: center;
  }
  .header-description {
    margin-top: 2rem;
    height: 12rem;
    overflow: auto;
  }
`;
class DeputyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deputy: {}
      // deputies: []
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.name;
    const deputy = await Api.getDeputy(id);
    this.setState({
      deputy
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
  // renderDesktop(deputy, index) {
  //   return (
  //     <div className="my-3 col-md-6 col-lg-4" key={index}>
  //       <DeputyCard {...deputy} />
  //     </div>
  //   );
  // }
  // renderMobile(deputy, index) {
  //   return (
  //     <div className="my-1 col-12" key={index}>
  //       <MobileDeputyCard {...deputy} />
  //     </div>
  //   );
  // }
  render() {
    const { deputy, deputies, mobileView } = this.state;

    return (
      <Container className="container">
        <div className="header row">
          <div className="header-img-container offset-3 col-6 offset-md-0 col-md-4 col-lg-3">
            <img
              className="header-img"
              src={`${Config.server}/${deputy.picture}`}
              alt={deputy.slug}
            />
          </div>
          <div className="header-text-container col-12 col-md-8 col-lg-9">
            <h3 className="header-title">{deputy.name}</h3>
            <p className="header-description">{deputy.description}</p>
          </div>
        </div>
      </Container>
    );
  }
}

export default DeputyProfile;
