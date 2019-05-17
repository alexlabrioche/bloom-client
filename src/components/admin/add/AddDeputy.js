import React from "react";
import axios from "axios";
import BackButton from "../../core/admin/BackButton";

class AddDeputy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      participationRate: "",
      selectedFile: {},
      groups: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.getGroups();
  }
  getGroups() {
    const url = "http://localhost:4000/api/groups/";
    axios.get(url).then(groups => {
      console.info("@addDeputy getGroups groups", groups);
      return this.setState({
        groups: groups.data
      });
    });
  }

  handleChange({ name, value }) {
    console.info(value);
    this.setState({
      [name]: value
    });
  }
  handleChangeName(evt) {
    console.info("handleChangeName", evt.target.value);
    this.setState({
      name: evt.target.value
    });
  }
  handleChangeRate(evt) {
    console.info("handleChangeRate", evt.target.value);
    this.setState({
      participationRate: evt.target.value
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

  fileSelectedHandler(evt) {
    const selectedFile = evt.target.files[0];
    console.log("fileSelectedHandler selectedFile", selectedFile);
    this.setState({
      selectedFile
    });
  }

  render() {
    const {
      name,
      participationRate,
      selectedFile,
      groups,
      fileSelectedHandler
    } = this.state;
    console.info("@AddDeputy state name: ", name);
    console.info("@AddDeputy state participationRate: ", groups);
    console.info("@AddDeputy state selectedFile: ", selectedFile);
    console.info("@AddDeputy state fileSelectedHandler: ", fileSelectedHandler);
    return (
      <div>
        <BackButton />
        <div className="container">
          <form className="pt-5 offset-lg-3 col-lg-6 col-12">
            <div className="form-group">
              <label htmlFor="name">Nom/Prénom</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="bertrand Dupont"
                onChange={event =>
                  this.handleChange({ name: "name", value: event.target.value })
                }
                // onChange={event => this.handleChangeName(event)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="participationRate">Taux de participation</label>
              <input
                type="number"
                className="form-control"
                id="participationRate"
                placeholder="20"
                onChange={event =>
                  this.handleChange({
                    name: "participationRate",
                    value: event.target.value
                  })
                }
                // onChange={e => this.handleChangeRate(e)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="picture">télécharger une photo</label>
              <input
                type="file"
                className="form-control-file"
                id="picture"
                onChange={event => this.fileSelectedHandler(event)}
              />
            </div>
            <div className="form-group">
              <label forhtml="group">Groupe :</label>
              <select className="form-control" id="group">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={evt => this.onSubmit(evt)}
            >
              Valider
            </button>
            {/* <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                Protège
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                Détruit
              </label>
            </div> */}
          </form>
        </div>
      </div>
    );
  }
}

export default AddDeputy;
