import React from "react";
import Config from "../../Config";
import styled from "styled-components";
import Note from "./Note";
import Gauge2 from "./Gauge2";
// import { Link } from "react-router-dom";

const Container = styled.div`
  height: 450px;
  transition: transform 0.3s;
  :hover {
    transform: scale(1.04);
  }
  img {
    object-fit: cover;
    height: 200px;
  }
  .btn-secondary {
    background-color: #4c6784;
  }
  .btn-secondary:hover {
    background-color: #e31c67;
    border: 1px solid #e31c67;
  }
`;

class DeputyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, picture, party, group, _id } = this.props;
    // console.log("name", name);
    // console.log("picture", picture);
    // console.log("_id", _id);
    return (
      <Container className="card col-12 col-md-6 col-lg-3 text-center my-2 mx-2">
        <img src={`${Config.server}/${picture}`} alt={`${name}`} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="d-none d-md-block">{party.name}</h6>
          <p className="card-text d-none d-md-block">{group.name}</p>
          <Note _id={_id} />
          <Gauge2 _id={_id} />
          {/* <Link to="/deputes/:id">ses votes</Link> */}
        </div>
      </Container>
    );
  }
}

export default DeputyCard;
