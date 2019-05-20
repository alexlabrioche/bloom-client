import React from "react";

import { Form, Option, Select } from "informed";
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

class AddVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deputies: [],
      laws: []
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  async componentDidMount() {
    const deputies = await Api.getDeputies();
    const laws = await Api.getLaws();
    this.setState({
      deputies: deputies.deputies,
      laws
    });
  }

  onSubmit(formState) {
    console.info("formState", formState);
    const newVote = new FormData();
    newVote.append("data", JSON.stringify(formState));

    Api.addVote(newVote);
  }

  render() {
    const { deputies, laws } = this.state;
    return (
      <Container className="container">
        <Form onSubmit={formState => this.onSubmit(formState)}>
          <Label>
            Député :
            <Select field="deputy">
              <Option value="" disabled>
                Choisir un député
              </Option>
              {deputies.map((deputy, index) => {
                return (
                  <Option value={deputy._id} key={index}>
                    {deputy.name}
                  </Option>
                );
              })}
            </Select>
          </Label>

          <Label>
            Loi :
            <Select field="law">
              <Option value="" disabled>
                Choisir une loi
              </Option>
              {laws.map((law, index) => {
                return (
                  <Option value={law._id} key={index}>
                    {law.name}
                  </Option>
                );
              })}
            </Select>
          </Label>
          <Label>
            Statut du vote :
            <Select field="decision">
              <Option value="" disabled>
                Selectionnez une valeur
              </Option>
              <Option value="abstention">Abstention</Option>
              <Option value="absence">Absence</Option>
              <Option value="for">Pour</Option>
              <Option value="against">Contre</Option>
            </Select>
          </Label>
          <button type="submit" className="btn btn-outline-secondary">
            Ajouter
          </button>
        </Form>
      </Container>
    );
  }
}

export default AddVote;
