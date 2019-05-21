import React from "react";
import Api from "../../utils/Api";
import PictureCard from "../core/front/PictureCard";
import MobilePictureCard from "../core/front/MobilePictureCard";
import styled from "styled-components";
// import PartyDetails from "../parties/PartyDetails";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

class Parties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: [],
      mobileView: ""
    };
  }
  async componentDidMount() {
    const parties = await Api.getParties();
    window.addEventListener("resize", this.handleScreenSize.bind(this));
    this.handleScreenSize();
    this.setState({
      parties
    });
  }
  handleScreenSize() {
    const { mobileView } = this.state;
    const screenSize = window.innerWidth <= 760;
    mobileView !== screenSize &&
      this.setState({
        mobileView: screenSize
      });
  }
  renderDesktop(party, index) {
    return (
      <div className="my-3 col-md-4 col-lg-3" key={index}>
        <PictureCard {...party} uri="partis" />
      </div>
    );
  }
  renderMobile(party, index) {
    return (
      <div className="my-3 col-12" key={index}>
        <MobilePictureCard {...party} uri="partis" />
      </div>
    );
  }
  render() {
    const { parties, mobileView } = this.state;
    // console.log("PARTIES", this.state.parties);
    // console.log("mobileView", mobileView);

    return (
      <Container className="pt-5 container">
        <div className="row">
          {parties.map((party, index) => {
            // console.log(party.name);
            // console.log(party._id);
            return mobileView
              ? this.renderMobile(party, index)
              : this.renderDesktop(party, index);
            // <div>{party.name}</div>;
          })}
        </div>
      </Container>
    );
  }
}

export default Parties;
