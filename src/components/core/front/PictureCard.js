import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Config from "../../../Config";
import Global from "../../../Global";

const Container = styled.div`
  transition: 0.4s ease;
  &:hover {
    transform: scale(1.01);
  }
  .link {
    color: ${Global.color.body};
    &:hover {
      text-decoration: none;
    }
  }
  .card-img-top {
    height: 8rem;
    object-fit: cover;
  }
  .card-body {
    height: 8rem;
    overflow: auto;
  }
  .footer {
    text-align: right;
    background: white;
    color: ${Global.color.disabled};
    padding: 0.6rem;
    transition: 0.2s ease;
    .footer-icon {
      margin-left: 0.5rem;
    }
    &:hover {
      color: ${Global.color.accent};
    }
  }
`;

function PictureCard(props) {
  const { name, description, slug, picture, _id } = props;
  return (
    <Container className="card">
      <Link to={`/groupes/${_id}`} className="link">
        <img
          className="card-img-top"
          src={`${Config.server}/${picture}`}
          alt={slug}
        />
        <div className="card-body">
          <h6 className="card-title">{name}</h6>
          <p className="card-text">{description}</p>
        </div>
        <div className="footer">
          <small>
            Plus d'infos
            <i className="footer-icon far fa-address-card" />
          </small>
        </div>
      </Link>
    </Container>
  );
}

export default PictureCard;
