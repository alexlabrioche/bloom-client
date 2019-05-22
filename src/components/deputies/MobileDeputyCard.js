import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Config from "../../Config";
import Global from "../../Global";
import Note from "../core/front/Note";

const Container = styled.div`
  border: none;
  height: 7rem;
  .link {
    color: ${Global.color.body};
    &:hover {
      text-decoration: none;
    }
  }
  .card-title {
    padding-top: 0.5rem;
    align-self: center;
  }
  .card-img {
    border-radius: 10px;
    padding: 0.5rem;
    object-fit: cover;

    height: 7rem;
  }
  .card-img-container {
  }
  .card-text {
    color: ${Global.color.primary};
    /* text-align: center; */
    font-size: 0.8rem;
  }
  .note-container {
    align-self: center;
    font-size: 20px;
  }
`;

function MobilePictureCard(props) {
  const { name, slug, picture, _id, party } = props;
  console.log("@Mobile props", props);
  return (
    <Container className="card">
      <Link to={`/deputes/${_id}`} className="link">
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
    </Container>
  );
}

export default MobilePictureCard;
