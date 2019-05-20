import React from "react";
import DatePicker from "react-datepicker";
import {
  Form,
  Text,
  TextArea,
  RadioGroup,
  Radio,
  asField,
  Select,
  Option
} from "informed";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";

import Api from "../../../utils/Api";
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
  async componentDidMount() {
    const categories = await Api.getCategories();
    this.setState({
      categories
    });
  }

  handleChange({ name, value }) {
    this.setState({
      [name]: value
    });
  }

  onSubmit(formState) {
    console.info("formState", formState);

    const newLaw = new FormData();
    newLaw.append("data", JSON.stringify(formState));

    Api.addLaw(newLaw);
  }
  render() {
    const { categories } = this.state;
    return (
      <Container className="container">
        <Form onSubmit={formState => this.onSubmit(formState)}>
          <Label>
            Titre :
            <Text field="name" />
          </Label>
          <Label>
            Amendement :
            <Text field="subTitle" />
          </Label>
          <Label>
            Lien externe sur la loi :
            <Text field="link" />
          </Label>

          <Label>
            Description :
            <TextArea field="description" />
          </Label>

          <Label>
            Texte complet :
            <TextArea field="fullText" />
          </Label>

          <Label>
            Date d'entrée en vigueur :
            <DateInput
              field="commencement"
              showMonthYearPicker
              dateFormat="MM/yyyy"
            />
          </Label>

          <Label>
            Catégorie :
            <Select field="category">
              <Option value="">...</Option>
              {categories.map((category, index) => {
                return (
                  <Option value={category._id} key={index}>
                    {category.name}
                  </Option>
                );
              })}
            </Select>
          </Label>

          <RadioGroup field="protect">
            <Label>
              Protège <Radio value="true" />
            </Label>
            <Label>
              Détruit <Radio value="false" />
            </Label>
          </RadioGroup>
          <button type="submit" className="btn btn-outline-secondary">
            Ajouter
          </button>
        </Form>
      </Container>
    );
  }
}
export default AddLaw;
