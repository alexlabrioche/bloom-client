import React from "react";
import BackButton from "../../core/admin/BackButton";

class GroupsList extends React.Component {
  render() {
    return (
      <div>
        <BackButton />

        <div className="pt-5 container">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Partis</th>
                  <th scope="col">Mettre à jour</th>
                  <th scope="col">Supprimer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>PPE</td>
                  <td>député 1, député2</td>
                  <td>
                    <i class="fas fa-user" />
                  </td>
                  <td>
                    <i class="fas fa-times-circle" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Alliance libre</td>
                  <td>député 1, député2</td>
                  <td>
                    <i class="fas fa-user" />
                  </td>
                  <td>
                    <i class="fas fa-times-circle" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Groupe de la libèrté et de la démocratie directe</td>
                  <td>député 1, député2</td>
                  <td>
                    <i className="fas fa-user" />
                  </td>
                  <td>
                    <i className="fas fa-times-circle" />
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="button" className="btn btn-outline-primary btnGroup">
              {" "}
              Ajouter un Député
            </button>
          </div>
          <div />
        </div>
      </div>
    );
  }
}

export default GroupsList;
