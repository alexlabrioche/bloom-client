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
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     message: ""
  //   };
  // }

  // async deleteEntry(type, _id) {
  //   let itemTodelete = "";
  //   if (type === "deputy") {
  //     itemTodelete = await Api.deleteDeputy(_id);
  //   }
  //   if (type === "group") {
  //     itemTodelete = await Api.deleteGroup(_id);
  //   }
  //   if (type === "party") {
  //     itemTodelete = await Api.deleteParty(_id);
  //   }
  //   if (type === "category") {
  //     itemTodelete = await Api.deleteCategory(_id);
  //   }
  //   if (type === "law") {
  //     itemTodelete = await Api.deleteLaw(_id);
  //   }
  //   if (type === "vote") {
  //     itemTodelete = await Api.deleteVote(_id);
  //   }
  //   const message = itemTodelete.msg;
  //   console.info("itemTodelete", itemTodelete);
  //   this.setState({
  //     message
  //   });
  // }

  render() {
    const { _id, type, deleteEntry } = this.props;
    // console.log("@ DeleteButton this.props", this.props);
    return (
      <Container>
        <button
          className="btn"
          onClick={() => {
            deleteEntry(type, _id);
          }}
        >
          <i className="far fa-trash-alt" />
        </button>
      </Container>
    );
  }
}

export default DeleteButton;
