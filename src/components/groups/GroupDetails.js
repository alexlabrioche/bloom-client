import React from "react";
import styled from "styled-components";

import Api from "../../utils/Api";
import Config from "../../Config";

import DeputyCard from "../core/front/DeputyCard";
import MobileDeputyCard from "../core/front/MobileDeputyCard";

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
    font-size: 3rem;
    text-align: center;
  }
  .header-description {
    margin-top: 2rem;
    height: 12rem;
    overflow: auto;
  }
`;
class GroupDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      group: {},
      deputies: []
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.name;
    const group = await Api.getGroup(id);
    const allDeputies = await Api.getDeputies();
    const deputies = allDeputies.deputies;
    this.setState({
      group,
      deputies
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
    const { group, deputies, mobileView } = this.state;
    return (
      <Container className="container">
        <div className="header row">
          <div className="header-img-container offset-3 col-6 offset-md-0 col-md-4 col-lg-3">
            <img
              className="header-img"
              src={`${Config.server}/${group.picture}`}
              alt={group.slug}
            />
          </div>
          <div className="header-text-container col-12 col-md-8 col-lg-9">
            <h3 className="header-title">{group.name}</h3>
            <p className="header-description">{group.description}</p>
          </div>
        </div>

        <div className="content container">
          <div className="row">
            {deputies.map((deputy, index) => {
              return mobileView
                ? this.renderMobile(deputy, index)
                : this.renderDesktop(deputy, index);
            })}
          </div>
        </div>
      </Container>
    );
  }
}

export default GroupDetails;
