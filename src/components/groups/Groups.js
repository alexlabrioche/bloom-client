import React from "react";
import styled from "styled-components";
import Api from "../../utils/Api";
import PictureCard from "../core/front/PictureCard";
import MobilePictureCard from "../core/front/MobilePictureCard";
// import GroupDetails from "./GroupDetails";
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      mobileView: ""
    };
  }
  async componentDidMount() {
    const groups = await Api.getGroups();
    this.setState({
      groups
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
  renderDesktop(group, index) {
    return (
      <div className="my-3 col-md-4 col-lg-3" key={index}>
        <PictureCard {...group} uri="groupes" />
      </div>
    );
  }
  renderMobile(group, index) {
    return (
      <div className="my-1 col-12" key={index}>
        <MobilePictureCard {...group} uri="groupes" />
      </div>
    );
  }

  render() {
    const { groups, mobileView } = this.state;
    console.info("mobileView", mobileView);
    return (
      <Container className="pt-5 container">
        <div className="row">
          {groups.map((group, index) => {
            return mobileView
              ? this.renderMobile(group, index)
              : this.renderDesktop(group, index);
          })}
        </div>
      </Container>
    );
  }
}

export default Groups;
