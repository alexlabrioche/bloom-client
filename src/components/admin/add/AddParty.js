import React from "react";
// import axios from "axios";
import BackButton from "../../core/admin/BackButton";

class AddParty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      picture: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ name, value }) {
    // console.info(value);
    this.setState({
      [name]: value
    });
  }
  render() {
    const { name, description, picture } = this.state;
    console.log("AddParty state name: ", name);
    console.log("AddParty state description: ", description);
    console.log("AddPartystate picture: ", picture);
    return (
      <div>
        <BackButton />
        <div className="pt-5 offset-lg-3 col-lg-6 col-12 container">
          <form>
            <div className="form-group">
              <label htmlFor="name">Nom du parti</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder=" "
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
            <button type="button" className="btn btn-primary">
              Valider
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddParty;
