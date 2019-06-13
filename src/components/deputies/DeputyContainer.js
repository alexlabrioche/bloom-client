import React from "react";

import Api from "../../utils/Api";
import GetGrade from "../../utils/GetGrade";

import ProfileLoader from "../core/front/ProfileLoader";
import DeputyProfile from "./DeputyProfile";

class DeputyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      deputy: {},
      finalNote: 0,
      votes: []
    };
  }

  async componentDidMount() {
    const slug = this.props.match.params.slug;
    const deputy = await Api.getDeputyBySlug(slug);
    const votes = await this.getVotesFromCurrentDeputy();
    const id = deputy._id;
    this.setState({
      deputy,
      votes,
      isLoading: false
    });
    const finalNote = GetGrade(id, votes, 100);
    this.setState({
      finalNote
    });
  }

  async componentDidUpdate() {
    const slug = this.props.match.params.slug;
    const currentSlug = this.state.deputy.slug;
    const votes = await this.getVotesFromCurrentDeputy();
    if (slug !== currentSlug) {
      const deputy = await Api.getDeputyBySlug(slug);
      const id = deputy._id;
      const finalNote = GetGrade(id, votes, 100);
      this.setState({
        isLoading: false,
        finalNote,
        deputy,
        votes
      });
    }
  }

  async getVotesFromCurrentDeputy() {
    const slug = this.props.match.params.slug;
    const allVotes = await Api.getVotes();
    const votes = allVotes.filter(vote => {
      return vote.deputy.slug === slug && vote;
    });
    return votes;
  }

  render() {
    const { deputy, isLoading } = this.state;
    if (deputy.group === null) {
      deputy.group = {};
    }
    if (deputy.party === null) {
      deputy.party = {};
    }
    return (
      <div className="container">
        <ProfileLoader isLoading={isLoading} />
        <DeputyProfile {...this.state} />
      </div>
    );
  }
}

export default DeputyContainer;
