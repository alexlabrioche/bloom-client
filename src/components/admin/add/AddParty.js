import React from "react";
import BackButton from "../../core/admin/BackButton";

class AddParty extends React.Component {
  render() {
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="Description">Description</label>
              <input
                type="text"
                className="form-control"
                id="Description"
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="picture">télécharger une photo</label>
              <input type="file" className="form-control-file" id="picture" />
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
