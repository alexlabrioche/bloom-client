import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import Greet from "../core/front/Greet";
import Shout from "../core/front/Shout";
import Gauge from "../core/front/Gauge";

import Config from "../../Config";
import Global from "../../Global";

const Container = styled.div`
  .header {
    background: white;
    padding: 1rem;
    border-bottom: 1px solid rgba(230, 230, 230, 1);
    z-index: 10;
  }
  .header-img-container {
    height: 14rem;
    width: 16rem;
    padding: 1rem;
    overflow: auto;
  }
  .header-img {
    border-radius: 2px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .header-title {
    font-size: 2.6rem;
    font-weight: 300;
    text-align: center;
    color: ${Global.color.accent};
    transition: 0.3s ease;
  }
  .header-gauge-legend {
    font-size: 14px;
    text-align: center;
    margin-top: -20px;
  }
`;

class DeputyHeader extends React.Component {
  greetOrShoutDeputy(note, twitter) {
    if (note >= 50) {
      return <Greet note={note} twitter={twitter} />;
    } else {
      return <Shout note={note} twitter={twitter} />;
    }
  }

  render() {
    const { deputy, finalNote } = this.props;
    console.log("@DEPUTY HEADER deputy.twitter", deputy.twitter);
    return (
      <Container>
        <div className="header row">
          <div className="offset-2 col-4 offset-lg-0 col-lg-3">
            <div className="header-img-container ">
              <img
                className="header-img"
                src={`${Config.server}/${deputy.picture}`}
                alt={deputy.slug}
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="header-content">
              <div className="header-title">{deputy.name}</div>
              <p className="scrolled header-description">
                Groupe au Parlement Européen :{" "}
                <Link to={`/groupes/${deputy.group.slug}`}>
                  {deputy.group.name}
                </Link>
              </p>
              <p className="scrolled header-description">
                Parti National :{" "}
                <Link to={`/partis/${deputy.party.slug}`}>
                  {deputy.party.name}
                </Link>
              </p>
              <p className="scrolled header-description">
                {deputy.description}
              </p>
              <div className="scrolled">
                {this.greetOrShoutDeputy(finalNote, deputy.twitter)}
              </div>
            </div>
          </div>
          <div className="offset-3 offset-lg-0 col-3">
            <div className="scrolled header-gauge">
              <Gauge finalNote={finalNote} />
              <p className="scrolled header-gauge-legend">
                % de votes protecteur de l'océan
              </p>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default DeputyHeader;
