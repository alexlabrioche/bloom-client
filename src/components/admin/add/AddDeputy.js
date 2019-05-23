import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Form, Text, Option, Select, asField } from "informed";
import styled from "styled-components";

import Api from "../../../utils/Api";

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
  display: flex;
  justify-content: center;
`;

const Label = styled.h6`
  width: 30rem;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

class AddDeputy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      parties: [],
      image: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  async componentDidMount() {
    const groups = await Api.getGroups();
    const parties = await Api.getParties();
    this.setState({
      groups,
      parties
    });
  }

  handleChange({ name, value }) {
    this.setState({
      [name]: value
    });
  }

  onSubmit(formState) {
    console.info("formState", formState);

    const { image } = this.state;

    const newDeputy = new FormData();
    newDeputy.append("image", image, image.name);
    newDeputy.append("data", JSON.stringify(formState));

    Api.addDeputy(newDeputy);
  }

  render() {
    const { groups, parties, image } = this.state;
    console.info(image);
    return (
      <Container className="container">
        <Form onSubmit={formState => this.onSubmit(formState)}>
          <Label>
            Nom complet:
            <Text
              className="form-control form-control-sm"
              field="name"
              type="text"
            />
          </Label>

          <Label>
            Taux de participation:
            <Text
              className="form-control form-control-sm"
              field="participationRate"
              type="number"
            />
          </Label>

          <Label>
            Parti :
            <Select className="form-control form-control-sm" field="party">
              <Option value="">...</Option>
              {parties.map((party, index) => {
                return (
                  <Option value={party._id} key={index}>
                    {party.name}
                  </Option>
                );
              })}
            </Select>
          </Label>

          <Label>
            Groupe :
            <Select className="form-control form-control-sm" field="group">
              <Option value="">...</Option>
              {groups.map((group, index) => {
                return (
                  <Option value={group._id} key={index}>
                    {group.name}
                  </Option>
                );
              })}
            </Select>
          </Label>

          <Label>
            Prise de poste :
            <DateInput
              field="mandateFrom"
              showMonthYearPicker
              dateFormat="MM/yyyy"
              className="form-control form-control-sm"
            />
          </Label>

          <Label>
            Fin du mandat :
            <DateInput
              field="mandateTo"
              showMonthYearPicker
              dateFormat="MM/yyyy"
              className="form-control form-control-sm"
            />
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

export default AddDeputy;
