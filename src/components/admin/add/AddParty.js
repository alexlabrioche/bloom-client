import React from "react";
import { Form, Text, TextArea } from "informed";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";

import Api from "../../../utils/Api";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Label = styled.h6`
  width: 30rem;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

class AddParty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ name, value }) {
    this.setState({
      [name]: value
    });
  }

  onSubmit(formState) {
    console.info("formState", formState);

    const { image } = this.state;

    const newParty = new FormData();
    newParty.append("image", image, image.name);
    newParty.append("data", JSON.stringify(formState));

    Api.addParty(newParty);
  }

  render() {
    return (
      <Container className="container">
        <Form onSubmit={formState => this.onSubmit(formState)}>
          <Label>
            Nom du parti:
            <Text
              field="name"
              type="text"
              className="form-control form-control-sm"
            />
          </Label>
          <Label>
            Description :
            <TextArea
              field="description"
              className="form-control form-control-sm"
            />
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
