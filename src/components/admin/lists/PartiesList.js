import React from "react";
import BackButton from "../../core/admin/BackButton";

class PartiesList extends React.Component {
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
                  <th scope="col">Députés</th>
                  <th scope="col">Mettre à jour</th>
                  <th scope="col">Supprimer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Les verts</td>
                  <td>député 1,député2</td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Les republicains</td>
                  <td>député 1,député2</td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>République en marche</td>
                  <td>député 1,député2</td>
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
            <button type="button" class="btn btn-outline-primary button center">
              {" "}
              + Ajouter un parti
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PartiesList;
