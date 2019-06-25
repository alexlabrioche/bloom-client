import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Api from "../../../utils/Api";

import Global from "../../../Global";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    const { id, deleteEntry } = this.props;
    return (
      <Container>
        <button
          className="btn"
          onClick={() => {
            deleteEntry(id);
          }}
        >
          <i className="far fa-trash-alt" />
        </button>
      </Container>
    );
  }
}

export default DeleteButton;
