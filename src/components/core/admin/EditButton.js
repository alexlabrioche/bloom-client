import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    color: mediumseagreen;
  }
`;
class EditButton extends React.Component {
  render() {
    const { _id } = this.props;
    return (
      <Container>
        <Link to={`/admin/modifier/depute/${_id}`}>
          <i className="far fa-edit" />
        </Link>
      </Container>
    );
  }
}

export default EditButton;
