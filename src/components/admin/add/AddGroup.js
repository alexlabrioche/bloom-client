import React from "react";
import styled from "styled-components";
import { Form, Text, TextArea } from "informed";
import Api from "../../../utils/Api";

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
class AddGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
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
    const newGroup = new FormData();

    newGroup.append("image", image, image.name);
    newGroup.append("data", JSON.stringify(formState));

    Api.addGroup(newGroup);
  }

  render() {
    return (
      <Container>
        <Form onSubmit={formState => this.onSubmit(formState)}>
          <Label>
            Nom du Groupe :
            <Text field="name" type="text" />
          </Label>

          <Label>
            Description :
            <TextArea field="description" />
          </Label>

          <Label>
            Photo :
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

          <button type="submit" className="btn btn-outline-secondary">
            Ajouter
          </button>
        </Form>
      </Container>
    );
  }
}

export default AddGroup;
