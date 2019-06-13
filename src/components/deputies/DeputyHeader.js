import React from "react";
import { DeputyHeaderContainer } from "./style";

import { Link } from "react-router-dom";

import Greet from "../core/front/Greet";
import Shout from "../core/front/Shout";
import Gauge from "../core/front/Gauge";

import Config from "../../Config";

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
      <DeputyHeaderContainer>
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

              {deputy.group !== undefined && (
                <p className="scrolled header-description">
                  Groupe au Parlement Européen :{" "}
                  <Link to={`/groupe/${deputy.group.slug}`}>
                    {deputy.group.name}
                  </Link>
                </p>
              )}

              {deputy.party !== undefined && (
                <p className="scrolled header-description">
                  Parti National :{" "}
                  <Link to={`/parti/${deputy.party.slug}`}>
                    {deputy.party.name}
                  </Link>
                </p>
              )}

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
      </DeputyHeaderContainer>
    );
  }
}

export default DeputyHeader;
