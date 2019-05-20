import React from "react";
import axios from "axios";
import {
  Form,
  Text,
  Option,
  Select,
  TextArea,
  RadioGroup,
  Radio,
  asField
} from "informed";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";

import Api from "../../../utils/Api";
import Config from "../../../Config";
// import BackButton from "../../core/admin/BackButton";

const Container = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
`;

const Label = styled.h6`
  margin-top: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

class AddParty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      picture: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ name, value }) {
    // console.info(value);
    this.setState({
      [name]: value
    });
  }
  render() {
    const { name, description, picture } = this.state;
    console.log("AddParty state name: ", name);
    console.log("AddParty state description: ", description);
    console.log("AddPartystate picture: ", picture);
    return (
      <Container className="container">
        <Form onSubmit={formState => this.onSubmit(formState)}>
          <Label>
            Nom du parti:
            <Text field="name" type="text" />
          </Label>
          <Label>
            Description :
            <TextArea field="Description" />
          </Label>
          <Label>
            Photo:
            <input
              type="file"
              onChange={event =>
                this.handleChange({
                  name: "image",
                  value: event.target.files[0]
                })
              }
            />
          </Label>
          <button
            type="submit"
            className="btn btn-outline-secondary"
            // onClick={this.handleClick}
          >
            Ajouter
          </button>
        </Form>
      </Container>
    );
  }
}

export default AddParty;
