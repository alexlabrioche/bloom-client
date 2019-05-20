import React from "react";
import BackButton from "../../core/admin/BackButton";

class AddLaw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      subTitle: "",
      protect: Boolean,
      commencment: Date,
      resume: "",
      fullText: "",
      link: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ name, value }) {
/*     console.info(value);
 */    this.setState({
    [name]: value
  });
  }
  render() {
    const { title, subTitle, protect, commencement, resume, fullText, link } = this.state;
    console.log('title', title);
    /* console.log('subTitle', subTitle);
    console.log('protect', protect);
    console.log('commencement', commencement);
    console.log('resume', resume);
    console.log('fullText', fullText);
    console.log('link', link); */
    return (
      <div>
        <BackButton />
        <div className="pt-5 offset-lg-4 col-lg-4 col-12 container">
          <div>
            <form className="formSize">
              <div className="form-group mt-3">
                <div className="input-group mb-2 mr-sm-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text" />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Protège ou détruit"
                    onChange={event =>
                      this.handleChange({ name: "protect", value: event.target.value })
                    }
                  />
                </div>
                <div className="input-group mb-2 mr-sm-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text" />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Titre"
                    onChange={event =>
                      this.handleChange({ name: "title", value: event.target.value })
                    }
                  />
                </div>
                <div className="input-group mb-2 mr-sm-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text" />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Sous-Titre"
                    onChange={event =>
                      this.handleChange({ name: "subTitle", value: event.target.value })
                    }
                  />
                </div>
                <div className="input-group mb-2 mr-sm-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text" />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Lien externe"
                    onChange={event =>
                      this.handleChange({ name: "link", value: event.target.value })
                    }
                  />
                </div>
                <div className="input-group mb-2 mr-sm-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text" />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Date d'entréé en vigueur"
                    onChange={event =>
                      this.handleChange({ name: "commencement", value: event.target.value })
                    }
                  />
                </div>
                <div className="input-group mb-2 mr-sm-2">
                  <input
                    type="text"
                    className="form-control pb-4"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Résumé"
                    onChange={event =>
                      this.handleChange({ name: "resume", value: event.target.value })
                    }
                  />
                </div>
                <div className="input-group mb-2 mr-sm-2">
                  <label htmlFor="exampleFormControlTextarea1" />
                  <textarea
                    className="form-control"
                    placeholder="Texte complet"
                    id="inlineFormInputGroupUsername2"
                    rows="3"
                    onChange={event =>
                      this.handleChange({ name: " fullText", value: event.target.value })
                    }
                  />
                </div>
                <div className="form-row mt-3">
                  <div className="col-lg-4 col-12">
                    <select class="form-control" >
                      <option>Catégories</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Ajouter
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddLaw;
