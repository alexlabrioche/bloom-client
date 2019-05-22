import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Config from "../../../Config";
import Global from "../../../Global";
import Note from "./Note";

// import

const Container = styled.div`
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.01);
    box-shadow: 2px 2px 4px 0px rgba(230, 230, 230, 1);
  }
  .link {
    color: ${Global.color.body};
    &:hover {
      text-decoration: none;
    }
  }
  .card-img-top {
    height: 12rem;
    object-fit: cover;
  }
  .card-body {
    height: 8rem;
    overflow: auto;
  }
  .card-title {
    height: 3rem;
    font-size: 1.5rem;
    text-align: center;
  }
  .card-text {
    color: ${Global.color.primary};
    text-align: center;
    font-size: 0.8rem;
  }
  .card-gauge {
    text-align: center;
  }
  .footer {
    text-align: right;
    background: white;
    padding: 0.6rem;
    color: ${Global.color.disabled};
    transition: 0.2s ease;
    .footer-icon {
      margin-left: 0.5rem;
    }
    &:hover {
      color: ${Global.color.accent};
    }
  }
  .card-note-container {
    font-weight: 600;
    font-size: 35px;
    text-align: center;
  }
`;

function DeputyCard(props) {
  console.log("<< deputyCard props", props);
  const { name, slug, picture, _id, party } = props;
  let deputyParty = "Sans étiquette";
  if (party !== undefined) {
    deputyParty = party.name;
  }
  return (
    <Container className="card">
      <Link to={`/deputes/${_id}`} className="link">
        <img
          className="card-img-top"
          src={`${Config.server}/${picture}`}
          alt={slug}
        />
        <div className="card-body">
          <h6 className="card-title">{name}</h6>
          <p className="card-text">{deputyParty}</p>
        </div>
        <div className="card-note-container">
          <Note _id={_id} />
        </div>
        <div className="footer">
          <small>
            Plus d'infos
            <i className="footer-icon fas fa-user" />
          </small>
        </div>
      </Link>
    </Container>
  );
}

export default DeputyCard;
