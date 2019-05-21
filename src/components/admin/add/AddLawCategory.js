import React from "react";
import { Form, Text, TextArea } from "informed";
import styled from "styled-components";

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

class AddLawCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  onSubmit(formState) {
    console.info("formState", formState);

    const newCategory = new FormData();
    newCategory.append("data", JSON.stringify(formState));

    Api.addCategory(newCategory);
  }
  render() {
    return (
      <Container className="container">
        <Form onSubmit={formState => this.onSubmit(formState)}>
          <Label>
            Nom :
            <Text field="name" type="text" />
          </Label>
          <Label>
            Description :
            <TextArea field="description" />
          </Label>
          <button type="submit" className="btn btn-outline-secondary">
            Ajouter
          </button>
        </Form>
      </Container>
    );
  }
}

export default AddLawCategory;
