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

import "react-datepicker/dist/react-datepicker.css";

import Api from "../../../utils/Api";
import Config from "../../../Config";
// import BackButton from "../../core/admin/BackButton";
const DateInput = asField(
  ({ fieldState: { value }, fieldApi: { setTouched, setValue }, ...props }) => (
    <DatePicker
      onFocus={() => setTouched(true)}
      onChange={date => setValue(date)}
      selected={value}
      {...props}
    />
  )
);

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

class AddLaw extends React.Component {
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
            Title:
            <Text field="title" type="text" />
          </Label>
          <Label>
            Subtitle:
            <TextArea field="Subtitle" />
          </Label>
          <Label>
            Description :
            <TextArea field="Description" />
          </Label>
          <Label>
            Texte complet :
            <TextArea field="Texte complet" />
          </Label>
          <Label>
            Date de prise de poste :
            <DateInput
              field="mandateFrom"
              showMonthYearPicker
              dateFormat="MM/yyyy"
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
          <RadioGroup field="protect">
            <Label>
              Protège <Radio value="true" />
            </Label>
            <Label>
              Détruit <Radio value="false" />
            </Label>
          </RadioGroup>
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
export default AddLaw;
