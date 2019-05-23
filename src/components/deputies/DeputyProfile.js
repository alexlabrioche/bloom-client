import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    border-bottom: 1px solid rgba(230, 230, 230, 1);
    box-shadow: 0px 3px 5px 0px rgba(230, 227, 230, 1);
  }
  .header-img-container {
    border-radius: 4px;
    height: 14rem;
    width: 16rem;
    background-color: lightblue;
    overflow: auto;
  }
  .header-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .header-title {
    font-size: 3rem;
    text-align: center;
  }
  /* .header-description {
    margin-top: 2rem;
    height: 12rem;
    overflow: auto;
  } */
  .header-gauge-legend {
    font-size: 14px;
    text-align: center;
    margin-top: -15px;
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
    const slug = this.props.match.params.slug;
    const deputy = await Api.getDeputyBySlug(slug);
    const allVotes = await Api.getVotes();
    const votes = allVotes.filter(vote => {
      return vote.deputy.slug === slug && vote;
    });
    this.setState({
      deputy,
      votes
    });
    const id = this.state.deputy._id;
    const finalNote = await Algo100(id);
    console.log("<< finale Note", finalNote);
    this.setState({
      isLoading: false,
      finalNote
    });
  }

  render() {
    const { deputy, finalNote, votes, mobileView } = this.state;
    // console.log("<<<deputy", deputy);
    // console.log("<<<<<<<<<<<<deputy._id", deputy._id);
    if (this.state.isLoading === true) {
      return <p>Chargement...</p>;
    }

    console.info("DeputyProfile Render finalNote", finalNote);
    const id = this.props.match.params.name;
    return (
      <Container className="container">
        <div className="header row">
          <div className="offset-3 col-6 offset-md-0 col-md-4 col-lg-3">
            <div className="header-img-container ">
              <img
                className="header-img"
                src={`${Config.server}/${deputy.picture}`}
                alt={deputy.slug}
              />
            </div>
          </div>
          <div className="header-content col-12 col-md-8 col-lg-6">
            <h3 className="header-title">{deputy.name}</h3>
            <p className="header-description">
              Groupe au Parlement Européen :{" "}
              <Link to={`/groupes/${deputy.group.slug}`}>
                {deputy.group.name}
              </Link>
            </p>
            {/* <p className="header-description">
              Taux de présence aux séances de vote : {deputy.participationRate}%
            </p> */}
            <p className="header-description">
              Parti National :{" "}
              <Link to={`/partis/${deputy.party.slug}`}>
                {deputy.party.name}
              </Link>
            </p>
            <p className="header-description">{deputy.description}</p>
          </div>
          <div className="header-gauge offset-3 col-6 offset-md-0 col-md-4 col-lg-3">
            <Gauge finalNote={finalNote} />
            <p className="header-gauge-legend">
              % de votes protecteur de l'océan
            </p>
          </div>
        </div>

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
