import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Config from "../../../Config";
import Global from "../../../Global";

const Container = styled.div`
  border: none;
  height: 3rem;
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
    border-radius: 3px 0 0 3px;
    overflow: hidden;
  }
  .card-img-container {
    object-fit: cover;
    overflow: hidden;
  }
`;

function MobilePictureCard(props) {
  const { name, slug, picture, _id, uri } = props;
  return (
    <Container className="card">
      <Link to={`/${uri}/${_id}`} className="link">
        <div className="row no-gutters">
          <div className="card-img-container col-4">
            <img
              src={`${Config.server}/${picture}`}
              className="card-img"
              alt={slug}
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
            </div>
          </div>
        </div>
      </Link>
    </Container>
  );
}

export default MobilePictureCard;
