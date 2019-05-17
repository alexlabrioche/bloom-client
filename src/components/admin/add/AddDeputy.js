import React from "react";
import axios from "axios";
import BackButton from "../../core/admin/BackButton";
import FieldSelector from "../../core/admin/FieldSelector";
import PictureUploader from "../../core/admin/PictureUploader";
import Button from "../../core/admin/Button";
import Input from "../../core/admin/Input";

class AddDeputy extends React.Component {
  constructor(props) {
    super(props);
    const year = new Date().getFullYear();
    const month = 1;
    this.years = Array.from(new Array(25), (val, index) => index - 10 + year);
    this.months = Array.from(new Array(12), (val, index) => index + month);
    this.state = {
      name: "",
      participationRate: "",
      selectedFile: {},
      allGroups: [],
      allParties: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  componentDidMount() {
    this.getGroups();
    this.getParties();
  }
  getGroups() {
    const url = "http://localhost:4000/api/groups/";
    axios.get(url).then(groups => {
      console.info("@addDeputy getGroups groups", groups);
      return this.setState({
        allGroups: groups.data
      });
    });
  }
  getParties() {
    const url = "http://localhost:4000/api/parties/";
    axios.get(url).then(parties => {
      console.info("@addDeputy getParties parties", parties);
      return this.setState({
        allParties: parties.data
      });
    });
  }

  handleChange({ name, value }) {
    this.setState({
      [name]: value
    });
  }

  onSubmit(event) {
    // console.info("onSubmit Clicked!");
    event.preventDefault();
    const { name, participationRate, selectedFile } = this.state;
    const url = "http://localhost:4000/api/deputies/add";
    const deputy = new FormData();
    deputy.append("image", selectedFile, selectedFile.name);
    deputy.append("name", name);
    deputy.append("participationRate", participationRate);
    axios.post(url, deputy).then(res => {
      console.log("onSubmit upload OK res:", res);
    });
  }

  handleUpload(evt) {
    const selectedFile = evt.target.files[0];
    console.log("handleUpload selectedFile", selectedFile);
    this.setState({
      selectedFile
    });
  }

  renderDates() {
    console.info("renderMonth");
    return (
      <div className="my-2 row">
        <div className="col-3">
          <select
            className="form-control"
            id="group"
            onChange={e =>
              this.handleChange({ name: "party", value: e.target.value })
            }
          >
            {this.months.map((month, index) => {
              return (
                <option key={`month${index}`} value={month}>
                  {month}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-3">
          <select
            className="form-control"
            id="year"
            onChange={e =>
              this.handleChange({ name: "party", value: e.target.value })
            }
          >
            {this.years.map((year, index) => {
              return (
                <option key={`year${index}`} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }

  render() {
    const {
      name,
      participationRate,
      allParties,
      allGroups,
      selectedFile,
      groups,
      group,
      party
    } = this.state;
    console.info("@AddDeputy state name: ", name);
    console.info("@AddDeputy state participationRate: ", participationRate);
    console.info("@AddDeputy state selectedFile: ", selectedFile);
    console.info("@AddDeputy state group: ", group);
    console.info("@AddDeputy state party: ", party);
    return (
      <div>
        <BackButton />
        <div className="container">
          <form className="pt-5 offset-lg-3 col-lg-6 col-12">
            <Input
              label="Nom complet :"
              name="name"
              type="text"
              placeholder="nom du député"
              handleChange={this.handleChange}
            />

            <Input
              label="Taux de participation :"
              name="participationRate"
              type="number"
              placeholder="10"
              handleChange={this.handleChange}
            />

            <PictureUploader
              label="Photo de profil"
              handleUpload={this.handleUpload}
            />

            <FieldSelector
              label="Groupe zer :"
              data={allGroups}
              name="group"
              handleChange={this.handleChange}
            />

            <FieldSelector
              label="Parti banks zer :"
              data={allParties}
              name="party"
              handleChange={this.handleChange}
            />

            <div>Prise de poste :</div>
            {this.renderDates()}
            <div>Fin de mandat :</div>
            {this.renderDates()}

            <Button
              label="Enregistrer le député"
              onSubmit={this.onSubmit}
              className="my-5 btn btn-primary"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddDeputy;
