import React from "react";
import styled from "styled-components";

import Api from "../../utils/Api";
import Algo100 from "../../utils/Algo100";
import Config from "../../Config";
import Gauge from "../core/front/Gauge";

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
      isLoading: true,
      deputy: {},
      finalNote: 0
      // deputies: []
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
    const finalNote = await Algo100(id);
    this.setState({
      isLoading: false,
      deputy,
      finalNote
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
    const { deputy, finalNote, deputies, mobileView } = this.state;
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
            <Gauge finalNote={finalNote} />
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
