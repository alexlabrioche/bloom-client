import React from "react";
import styled from "styled-components";
import Api from "../../utils/Api";
import Config from "../../Config";

const Container = styled.div`
  .card-img {
    object-fit: cover;
    height: 12rem;
    border-radius: 3px 3px 0 0;
  }
  .card-body {
    height: 10rem;
    overflow: auto;
  }
`;
class PartyDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      party: []
    };
  }
  async componentDidMount() {
    const id = this.props.match.params.name;
    console.log("party id", id);
    const party = await Api.getParty(id);
    console.log("party", party);
    this.setState({
      party
    });
  }
  render() {
    const { party } = this.state;
    console.log("party", this.state.party);
    return (
      <Container className="pt-5 container">
        <div className="card text-center">
          <img
            className="card-img"
            src={`${Config.server}/${party.picture}`}
            alt={party.slug}
          />
          <div className="card-body">
            <h3 className="card-title">{party.name}</h3>
            <p className="card-text">{party.description}</p>
          </div>
        </div>
      </Container>
    );
  }
}

export default PartyDetails;
