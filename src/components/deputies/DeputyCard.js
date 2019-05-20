import React from "react";
import Config from "../../Config";
import styled from "styled-components";

const Container = styled.div`
  height: 450px;
  transition: transform 0.3s;
  :hover {
    transform: scale(1.05);
  }
  img {
    object-fit: cover;
  }
  .image-container {
    height: 300px;
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
    const { name, picture } = this.props;
    console.log("name", name);
    console.log("picture", picture);
    return (
      <Container className="card col-12 col-md-6 col-lg-3 text-center my-2 mx-2">
        <div className="image-container">
          <img
            src={`${Config.server}/${picture}`}
            className="card-img-top"
            alt={`${name}`}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6>Candidat 2019 - Liste : PS - Place Publique</h6>
          <p className="card-text">
            Alliance Progressiste des Socialistes et Démocrates
          </p>
          <p className="stat-medium">11/20</p>
          <a href="andrieu.html" className="btn btn-secondary">
            ses votes
          </a>
          <p className="invisible">
            eric éric andrieu SD PS alliance progressiste des socialistes et
            démocrates parti socialiste PS
          </p>
        </div>
      </Container>
    );
  }
}

export default DeputyCard;
