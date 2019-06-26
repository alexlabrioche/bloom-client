import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Config from "../../Config";
import Global from "../../Global";
import Note from "../core/front/Note";

import { MobileDeputyCardContainer } from "./styles";

function MobilePictureCard(props) {
  const { name, slug, picture, _id, party } = props;
  // console.log("@Mobile props", props);
  return (
    <MobileDeputyCardContainer className="card">
      <Link to={`/depute/${slug}`} className="link">
        <div className="row no-gutters">
          <div className="card-img-container col-4">
            <img
              src={`${Config.server}/${picture}`}
              className="card-img"
              alt={slug}
            />
          </div>
          <div className="col-6">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{party.name}</p>
            </div>
          </div>
          <div className="col-2 note-container">
            <Note _id={_id} />
          </div>
        </div>
      </Link>
    </MobileDeputyCardContainer>
  );
}

export default MobilePictureCard;
