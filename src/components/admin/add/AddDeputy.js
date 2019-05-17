import React from "react";
import BackButton from "../../core/admin/BackButton";

class AddDeputy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      participationRate: "",
      picture: ""
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
    const { name, participationRate, picture } = this.state;
    const newDeputy = { name, participationRate, picture };
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

  render() {
    const { name, participationRate } = this.state;
    console.info("@AddDeputy state name: ", name);
    console.info("@AddDeputy state participationRate: ", participationRate);
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
              <input type="file" className="form-control-file" id="picture" />
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

export default AddDeputy;
