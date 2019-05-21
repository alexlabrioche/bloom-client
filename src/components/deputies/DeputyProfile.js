import React from "react";
import styled from "styled-components";

import Api from "../../utils/Api";
import Config from "../../Config";

import FlipCard from "../core/front/FlipCard";

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
      deputy: {},
      votes: []
    };
  }

  async componentDidMount() {
    window.addEventListener(
      "handleScreenSize",
      this.handleScreenSize.bind(this)
    );
    this.handleScreenSize();
    const id = this.props.match.params.name;
    const deputy = await Api.getDeputy(id);
    const allVotes = await Api.getVotes();
    const votes = allVotes.filter(vote => {
      return vote.deputy._id === id && vote;
    });
    this.setState({
      deputy,
      votes
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
  renderDesktop(vote, index) {
    return (
      <div className="my-3 col-md-6 col-lg-4" key={index}>
        <FlipCard {...vote} />
      </div>
    );
  }
  renderMobile(vote, index) {
    return (
      <div className="my-1 col-12" key={index}>
        MOBILE FLIP CARD
      </div>
    );
  }
  render() {
    const { deputy, votes, mobileView } = this.state;
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
          <div className="header-content col-12 col-md-8 col-lg-6">
            <h3 className="header-title">{deputy.name}</h3>
            <p className="header-description">{deputy.description}</p>
          </div>
          <div className="header-gauge offset-3 col-6 offset-md-0 col-md-4 col-lg-3">
            <div>
              GAUGE
              <br />
              GAUGE
              <br />
              GAUGE
            </div>
          </div>
        </div>

        <div className="main-content container">
          <div className="row">
            {votes.map((vote, index) => {
              return mobileView
                ? this.renderMobile(vote, index)
                : this.renderDesktop(vote, index);
            })}
          </div>
        </div>
      </Container>
    );
  }
}

export default DeputyProfile;
