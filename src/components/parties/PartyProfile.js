import React from "react";
import styled from "styled-components";

import Api from "../../utils/Api";
import Config from "../../Config";

import DeputyCard from "../deputies/DeputyCard";
import MobileDeputyCard from "../deputies/MobileDeputyCard";

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
class PartyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      party: {},
      deputies: []
    };
  }

  async componentDidMount() {
    this.handleScreenSize();
    const slug = this.props.match.params.slug;
    const party = await Api.getPartyBySlug(slug);
    const deputies = await this.getDeputiesFromCurrentParty();
    this.setState({
      isLoading: false,
      party,
      deputies
    });
  }

  async componentDidUpdate() {
    const slug = this.props.match.params.slug;
    const currentSlug = this.state.party.slug;
    const deputies = await this.getDeputiesFromCurrentParty();
    if (slug !== currentSlug) {
      const party = await Api.getPartyBySlug(slug);
      this.setState({
        party,
        deputies
      });
    }
  }
  async getDeputiesFromCurrentParty() {
    const slug = this.props.match.params.slug;
    const allDeputies = await Api.getDeputies();
    const deputies = allDeputies.deputies.filter(deputy => {
      return deputy.party.slug === slug && deputy;
    });
    return deputies;
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
    const { party, deputies, mobileView, isLoading } = this.state;
    console.log("@ PartyProfile party: ", party);
    if (isLoading === true) {
      return (
        <p className="container pt-5 display-4 text-center">Chargement...</p>
      );
    }
    return (
      <Container className="container">
        <div className="header row">
          <div className="header-img-container offset-3 col-6 offset-md-0 col-md-4 col-lg-3">
            <img
              className="header-img"
              src={`${Config.server}/${party.picture}`}
              alt={party.slug}
            />
          </div>
          <div className="header-text-container col-12 col-md-8 col-lg-9">
            <h3 className="header-title">{party.name}</h3>
            <p className="header-description">{party.description}</p>
          </div>
        </div>

        <div className="main-content container">
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

export default PartyProfile;
