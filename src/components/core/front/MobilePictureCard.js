import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Config from "../../../Config";
import Global from "../../../Global";

const Container = styled.div`
  border: none;
  .link {
    color: ${Global.color.body};
    &:hover {
      text-decoration: none;
    }
  }
  .card-title {
    padding: 0.5rem;
    text-align: center;
  }
  .card-img {
    height: 5rem;
    object-fit: cover;
    z-index: 1;
    border-radius: 0 0 3px 3px;
  }
`;

function MobilePictureCard(props) {
  const { name, slug, picture, _id } = props;
  return (
    <Container className="card">
      <Link to={`/groupes/${_id}`} className="link">
        <div className="card">
          <h6 className="card-title">{name}</h6>
          <img
            src={`${Config.server}/${picture}`}
            className="card-img"
            alt={slug}
          />
        </div>
      </Link>
    </Container>
  );
}

export default MobilePictureCard;
