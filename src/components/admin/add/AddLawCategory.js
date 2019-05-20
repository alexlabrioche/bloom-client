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
<<<<<<< HEAD
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
=======
    this.state = {
      categories: []
    };
>>>>>>> bed4d4fd0990669e6ea3cf3e92c22477bfef48ca
  }

  onSubmit(formState) {
    console.info("formState", formState);

    const newCategory = new FormData();
    newCategory.append("data", JSON.stringify(formState));

    Api.addCategory(newCategory);
  }
  render() {
    return (
<<<<<<< HEAD
      <div>
        <BackButton />
        <div className="pt-5 offset-lg-4 col-lg-4 col-12 container">
          <div>
            <form className="formSize">
              <div className="form-group mt-3">
                <div className="input-group mb-2 mr-sm-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text" />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Protège ou détruit"
                  />
                </div>
                <div className="input-group mb-2 mr-sm-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text" />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Titre"
                  />
                </div>
                <div className="input-group mb-2 mr-sm-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text" />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Sous-Titre"
                  />
                </div>
                <div className="input-group mb-2 mr-sm-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text" />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Lien externe"
                  />
                </div>
                <div className="input-group mb-2 mr-sm-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text" />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Date d'entréé en vigueur"
                  />
                </div>
                <div className="input-group mb-2 mr-sm-2">
                  <input
                    type="text"
                    className="form-control pb-4"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Résumé"
                  />
                </div>
                <div className="input-group mb-2 mr-sm-2">
                  <label htmlFor="exampleFormControlTextarea1" />
                  <textarea
                    className="form-control"
                    placeholder="Texte complet"
                    id="inlineFormInputGroupUsername2"
                    rows="3"
                  />
                </div>
                <div className="form-row mt-3">
                  <div className="col-lg-4 col-12">
                    <select class="form-control">
                      <option>Catégories</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Ajouter
              </button>
            </form>
          </div>
        </div>
      </div>
=======
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
>>>>>>> bed4d4fd0990669e6ea3cf3e92c22477bfef48ca
    );
  }
}

export default AddLawCategory;
