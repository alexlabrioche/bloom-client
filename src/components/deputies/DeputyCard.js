import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Config from "../../Config";
import Global from "../../Global";
import Note from "../core/front/Note";

import { DeputyCardContainer } from "./style";

function DeputyCard(props) {
  const { name, slug, picture, _id, party } = props;
  let deputyParty = "Sans étiquette";
  if (party !== undefined && party !== null) {
    deputyParty = party.name;
  }
  return (
    <DeputyCardContainer className="card">
      <Link to={`/depute/${slug}`} className="link">
        <img
          className="card-img-top"
          src={`${Config.server}/${picture}`}
          alt={slug}
        />
        <div className="card-body">
          <h6 className="card-title">{name}</h6>
          <p className="card-text">{deputyParty}</p>
        </div>
        <div className="card-note">
          <Note _id={_id} />
        </div>
        {/* <div className="footer">
          <small>
            Plus d'infos
            <i className="footer-icon fas fa-user" />
          </small>
        </div> */}
      </Link>
    </DeputyCardContainer>
  );
}

export default DeputyCard;
