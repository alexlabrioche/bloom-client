import React from "react";
import BackButton from "../../core/admin/BackButton";

class DeputiesList extends React.Component {
  render() {
    return (
      <div>
        <BackButton />
        <div class="container">
          <div class="pt-5 col-12 ">
            <table class="table">
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
                  <td />
                  <td />
                  <td>
                    <i class="fas fa-user" />
                  </td>
                  <td>
                    <i class="fas fa-times-circle" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td />
                  <td />
                  <td>
                    <i class="fas fa-user" />
                  </td>
                  <td>
                    <i class="fas fa-times-circle" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td />
                  <td />
                  <td>
                    <i class="fas fa-user" />
                  </td>
                  <td>
                    <i class="fas fa-times-circle" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <button type="button" class="btn btn-outline-primary ">
              {" "}
              Ajouter un Député
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeputiesList;
