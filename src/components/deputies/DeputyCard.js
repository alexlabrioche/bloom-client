import React from "react";
import Config from "../../Config";

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
      <div
        className="card-container col-12 col-md-6 col-lg-3 text-center PS SD"
        data-percentage="11.16"
        data-alphabetical="80"
      >
        <div className="card">
          <img
            src={`${Config.server}${picture}`}
            className="card-img-top"
            alt={`${name}`}
          />
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
        </div>
      </div>
    );
  }
}

export default DeputyCard;
