import React from "react";
import axios from "axios";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import Api from "../../../utils/Api";
import Config from "../../../Config";

import BackButton from "../../core/admin/BackButton";
import FieldSelector from "../../core/admin/FieldSelector";
import PictureUploader from "../../core/admin/PictureUploader";
import Button from "../../core/admin/Button";
import Input from "../../core/admin/Input";

class AddDeputy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      parties: [],
      group: "",
      party: "",
      name: "",
      participationRate: "",
      picture: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleDateFrom = this.handleDateFrom.bind(this);
    this.handleDateTo = this.handleDateTo.bind(this);
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
  handleDateFrom(date) {
    this.setState({
      mandateFrom: date
    });
  }
  handleDateTo(date) {
    this.setState({
      mandateTo: date
    });
  }

  handleUpload(evt) {
    const picture = evt.target.files[0];
    this.setState({
      picture
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const {
      name,
      participationRate,
      picture,
      group,
      party,
      mandateFrom,
      mandateTo
    } = this.state;
    const url = `${Config.server}/api/deputies/add`;
    const deputy = new FormData();
    deputy.append("image", picture, picture.name);
    deputy.append("name", name);
    deputy.append("participationRate", participationRate);
    deputy.append("group", group);
    deputy.append("party", party);
    deputy.append("mandateFrom", mandateFrom);
    deputy.append("mandateTo", mandateTo);
    axios.post(url, deputy).then(res => {
      console.log("onSubmit upload OK res:", res);
    });
  }
  render() {
    const {
      name,
      participationRate,
      parties,
      groups,
      mandateFrom,
      mandateTo
      // group,
      // party
    } = this.state;
    return (
      <div>
        <div className="pt-5 container">
          <form className="offset-lg-3 col-lg-6 col-12">
            <Input
              label="Nom complet :"
              name="name"
              value={name}
              type="text"
              placeholder="nom du député"
              handleChange={this.handleChange}
            />
            <Input
              label="Taux de participation :"
              name="participationRate"
              type="number"
              value={participationRate}
              placeholder="nombre uniquement"
              handleChange={this.handleChange}
            />
            <PictureUploader
              label="Photo de profil :"
              handleUpload={this.handleUpload}
            />
            <FieldSelector
              label="Groupe zer :"
              data={groups}
              name="group"
              handleChange={this.handleChange}
            />
            <FieldSelector
              label="Parti banks zer :"
              data={parties}
              name="party"
              handleChange={this.handleChange}
            />
            <div className="row">
              <div className="col-6">
                <div>Prise de poste :</div>
                <DatePicker
                  selected={this.state.mandateFrom}
                  onChange={this.handleDateFrom}
                  showMonthYearPicker
                  name="mandateFrom"
                  dateFormat="MM/yyyy"
                />
              </div>
              <div className="col-6">
                <div>Fin de Mandat :</div>
                <DatePicker
                  selected={this.state.mandateTo}
                  onChange={this.handleDateTo}
                  showMonthYearPicker
                  name="mandateTo"
                  dateFormat="MM/yyyy"
                />
              </div>
            </div>
            <Button
              label="Enregistrer le député"
              className="my-5 btn btn-outline-primary"
              onSubmit={this.onSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddDeputy;
