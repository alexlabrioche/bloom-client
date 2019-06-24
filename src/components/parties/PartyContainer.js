import React from "react";
import Api from "../../utils/Api";
import GetGrade from "../../utils/GetGrade";

import ProfileLoader from "../core/front/ProfileLoader";
import PartyProfile from "./PartyProfile";

class PartyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      party: {},
      deputies: [],
      partyGrade: 0
    };
  }

  async componentDidMount() {
    this.handleScreenSize();
    const slug = this.props.match.params.slug;
    const party = await Api.getPartyBySlug(slug);
    const deputies = await this.getDeputiesFromCurrentParty();
    const votes = await Api.getVotes();
    this.setState({
      isLoading: false,
      party,
      deputies
    });
    const partyGrade = this.getPartyGrade(deputies, votes);
    this.setState({
      partyGrade
    });
  }

  async componentDidUpdate() {
    const slug = this.props.match.params.slug;
    const stateSlug = this.state.party.slug;
    if (slug !== stateSlug) {
      const deputies = await this.getDeputiesFromCurrentParty();
      const party = await Api.getPartyBySlug(slug);
      const votes = await Api.getVotes();
      const partyGrade = this.getPartyGrade(deputies, votes);
      this.setState({
        party,
        deputies,
        partyGrade
      });
    }
  }
  async getDeputiesFromCurrentParty() {
    const slug = this.props.match.params.slug;
    const allDeputies = await Api.getDeputies();
    const deputies = allDeputies.filter(deputy => {
      if (deputy.party === null) {
        deputy.party = {};
      }
      return deputy.party.slug === slug && deputy;
    });
    return deputies;
  }
  getPartyGrade(deputies, votes) {
    const deputiesGrade = [];
    deputies.forEach(deputy => {
      const id = deputy._id;
      const grade = GetGrade(id, votes);
      deputiesGrade.push(grade);
    });
    const partyGrade =
      deputiesGrade.reduce((a, b) => a + b, 0) / deputiesGrade.length || 0;
    return partyGrade;
  }

  handleScreenSize() {
    const { mobileView } = this.state;
    const screenSize = window.innerWidth <= 760;
    mobileView !== screenSize &&
      this.setState({
        mobileView: screenSize
      });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="container">
        <ProfileLoader isLoading={isLoading} />
        <PartyProfile {...this.state} />
      </div>
    );
  }
}

export default PartyContainer;
