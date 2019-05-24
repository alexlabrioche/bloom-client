import React from "react";
import styled from "styled-components";

import Api from "../../utils/Api";
import Algo100 from "../../utils/Algo100";

import DeputyHeader from "./DeputyHeader";
import FlipCard from "./FlipCard";

const Container = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  background: white;
  border-radius: 4px;
  border: 1px solid rgba(230, 230, 230, 1);
  .main-content {
    padding-top: 5rem;
    padding-bottom: 15rem;
  }
`;
class DeputyProfile extends React.Component {
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
    // const finalNote = await Algo100(id);
    // console.info("cmpDM finalNote", finalNote);
    this.setState({
      deputy,
      votes,
      isLoading: false
      // finalNote
    });
    this.getFinalNote(id);
  }
  async getFinalNote(id) {
    const finalNote = await Algo100(id);
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
      const finalNote = await Algo100(id);
      console.info("cmpDU finalNote", finalNote);
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
    const { deputy, finalNote, votes, isLoading } = this.state;
    if (isLoading === true) {
      return (
        <p className="container pt-5 display-4 text-center">Chargement...</p>
      );
    }
    if (deputy.group === null) {
      deputy.group = {};
    }
    if (deputy.party === null) {
      deputy.party = {};
    }
    return (
      <Container className="container">
        <DeputyHeader deputy={deputy} finalNote={finalNote} />

        <div className="main-content container">
          <div className="row">
            {votes.map((vote, index) => {
              return (
                <div className="mt-3 col-md-6 col-lg-4" key={index}>
                  <FlipCard {...vote} />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    );
  }
}

export default DeputyProfile;
