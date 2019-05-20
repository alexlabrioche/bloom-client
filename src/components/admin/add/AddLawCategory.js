import React from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
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

class AddLawCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
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
    // const { name, title, subtitle, description, picture } = this.state;
    // console.log("AddParty state name: ", name);
    return (
      <Container className="container">
        <Form onSubmit={formState => this.onSubmit(formState)}>
          <Label>
            Nom :
            <Text field="Nom" type="text" />
          </Label>
          <Label>
            Description :
            <TextArea field="Description" />
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

export default AddLawCategory;
