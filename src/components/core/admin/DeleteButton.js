import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Global from "../../../Global";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  i {
    color: ${Global.color.disabled};
    font-size: ${Global.font.size.header};
    text-decoration: none;
    transition: 0.3s ease;
  }
  i:hover {
    color: orangered;
  }
`;
class DeleteButton extends React.Component {
  render() {
    const { _id, type } = this.props;
    return (
      <Container>
        <Link to={`/admin/supprimer/${type}/${_id}`}>
          <i className="far fa-trash-alt" />
        </Link>
      </Container>
    );
  }
}

export default DeleteButton;
