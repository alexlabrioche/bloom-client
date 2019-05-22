import React from "react";
import styled from "styled-components";

import Api from "../../utils/Api";
import Algo100 from "../../utils/Algo100";
import Config from "../../Config";
import Gauge from "../core/front/Gauge";

import FlipCard from "./FlipCard";

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
      isLoading: true,
      deputy: {},
      finalNote: 0
      // deputies: []
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.name;
    const deputy = await Api.getDeputy(id);
    const finalNote = await Algo100(id);
    const allVotes = await Api.getVotes();
    const votes = allVotes.filter(vote => {
      return vote.deputy._id === id && vote;
    });
    this.setState({
      isLoading: false,
      deputy,
      finalNote,
      votes
    });
  }

  render() {
    const { deputy, finalNote, votes, mobileView } = this.state;
    // console.log("<<<<<<<<<<<<deputy", deputy);
    // console.log("<<<<<<<<<<<<deputy._id", deputy._id);
    if (this.state.isLoading === true) {
      return <p>Chargement...</p>;
    }

    console.info("DeputyProfile Render finalNote", finalNote);
    const id = this.props.match.params.name;
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
            <Gauge finalNote={finalNote} />
          </div>
        </div>

        <div className="main-content container">
          <div className="row">
            {votes.map((vote, index) => {
              return (
                <div className="col-md-6 col-lg-4" key={index}>
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
