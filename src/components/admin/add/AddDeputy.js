import React from "react";
import axios from "axios";

class AddDeputy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      participationRate: "",
      selectedFile: {}
    };
    // this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
    event.preventDefault();
    // console.info("onSubmit Clicked!!!!!");
    const { name, participationRate, selectedFile } = this.state;
    const newDeputy = { name, participationRate, selectedFile };
    // console.info("onSubmit newDeputy", newDeputy);
    const url = "http://localhost:4000/api/deputies/add";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newDeputy)
    })
      .then(res => res.json())
      .then(deputy =>
        console.info("@AddDeputy onSubmit deputy added to Db", deputy)
      )
      .catch(err => console.info("onSubmit error", err));
  }

  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
    axios
      .post("http://localhost:4000/api/deputies/add", fd, {
        onUploadProgress: ProgressEvent => {
          console.log(
            "Upload Progress : " +
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%"
          );
        }
      })
      .then(res => {
        console.log(res);
      });
  };

  render() {
    const { name, participationRate, selectedFile } = this.state;
    console.info("@AddDeputy state name: ", name);
    console.info("@AddDeputy state participationRate: ", participationRate);
    console.info("@AddDeputy state selectedFile: ", selectedFile);
    return (
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
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={evt => this.onSubmit(evt)}
          >
            Valider
          </button>
        </form>
        <div>
          <input
            type="file"
            className="form-control-file"
            id="selectedFile"
            onChange={this.fileSelectedHandler}
          />

          <button onClick={this.fileUploadHandler}>Upload Image</button>
        </div>
      </div>
    );
  }
}

export default AddDeputy;
