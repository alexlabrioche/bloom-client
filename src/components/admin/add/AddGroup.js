import React from "react";
// import axios from "axios";
import BackButton from "../../core/admin/BackButton";

class AddGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      picture: ""
    };
    this.handleChange = this.handleChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange({ name, value }) {
    // console.info(value);
    this.setState({
      [name]: value
    });
  }
  // onSubmit(event) {
  //   // console.info("onSubmit Clicked");
  //   event.preventDefault();
  //   const { name, description, picture } = this.state;
  //   const url = "http://localhost:4000/api/groups";
  //   const groups = new FormData();
  //   groups.append("name", name);
  //   groups.append("description", description);
  //   groups.append("picture", picture);
  //   axios.post(url, groups).then(res => {
  //     console.log("onSubmit upload OK res:", res);
  //   });
  // }

  render() {
    // const { name, description, picture } = this.state;
    // console.log("AddGroup state name: ", name);
    // console.log("AddGroup state description: ", description);
    // console.log("AddGroup state picture: ", picture);
    return (
      <div>
        <BackButton />
        <div className="pt-5 offset-lg-3 col-lg-6 col-12 container">
          <form>
            <div className="form-group">
              <label htmlFor="name">Nom du groupe</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder=""
                onChange={event =>
                  this.handleChange({ name: "name", value: event.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="Description">Description</label>
              <input
                type="text"
                className="form-control"
                id="Description"
                placeholder=""
                onChange={event =>
                  this.handleChange({
                    name: "description",
                    value: event.target.value
                  })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="picture">télécharger une photo</label>
              <input
                type="file"
                className="form-control-file"
                id="picture"
                onChange={event =>
                  this.handleChange({
                    name: "picture",
                    value: event.target.value
                  })
                }
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={evt => this.onSubmit(evt)}
            >
              Valider
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddGroup;
