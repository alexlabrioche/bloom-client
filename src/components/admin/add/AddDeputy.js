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

import BackButton from "../../core/admin/BackButton";
import FieldSelector from "../../core/admin/FieldSelector";
import PictureUploader from "../../core/admin/PictureUploader";

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

class AddDeputy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      parties: [],
      image: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // this.setFormApi = this.setFormApi.bind(this);
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

  handleUpload(evt) {
    const picture = evt.target.files[0];
    this.setState({
      picture
    });
  }

  // handleClick() {
  //   const { image } = this.state;
  //   const formValues = this.formApi.getState().values;
  //   console.log("newDeputy", formValues);
  //   console.log("image", image);
  //   const newDeputy = {
  //     data: formValues,
  //     image: image
  //   };
  //   const url = `${Config.server}/api/deputies/add`;
  //   axios.post(url, newDeputy).then(res => {
  //     console.log("onSubmit upload OK res:", res);
  //   });
  // }

  // setFormApi(formApi) {
  //   this.formApi = formApi;
  // }

  onSubmit(formState) {
    console.info("@onSubmit formState", formState);
    const { image } = this.state;
    const newDeputy = new FormData();
    newDeputy.append("image", image, image.name);
    newDeputy.append("data", JSON.stringify(formState));

    const url = `${Config.server}/api/deputies/add`;
    axios.post(url, newDeputy).then(res => {
      console.log("onSubmit upload OK res:", res);
    });
  }
  render() {
    const { groups, parties, image } = this.state;
    console.info(image);
    return (
      <Container className="container">
        <Form
          // getApi={this.setFormApi}
          onSubmit={formState => this.onSubmit(formState)}
        >
          {/* <PictureUploader
            label="Photo de profil :"
            handleUpload={this.handleUpload}
          /> */}
          <Label>
            Example file input
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

          <Label>
            Nom complet:
            <Text field="name" type="text" />
          </Label>

          <Label>
            Taux de participation:
            <Text field="participationRate" type="number" />
          </Label>

          <Label>
            Prise de poste :
            <DateInput
              field="mandateFrom"
              showMonthYearPicker
              dateFormat="MM/yyyy"
            />
          </Label>

          <Label>
            Fin du mandat :
            <DateInput
              field="mandateTo"
              showMonthYearPicker
              dateFormat="MM/yyyy"
            />
          </Label>

          <Label>
            Parti :
            <Select field="party">
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
            <Select field="group">
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
            Résumé :
            <TextArea field="resume" />
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

export default AddDeputy;
