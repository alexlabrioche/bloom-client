import React from "react";
import BackButton from "../../core/admin/BackButton";

class CategoriesList extends React.Component {
  render() {
    return (
      <div>
        <BackButton />
        <div className="pt-5 container">
          <div className="col-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nom</th>
                  <th scope="col">sous-Catégories</th>
                  <th scope="col">Mettre à jour</th>
                  <th scope="col">Supprimer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Poissons</td>
                  <td>non</td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Pêches</td>
                  <td>électriques, grands fonds</td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Fonds marins</td>
                  <td>Non</td>
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>

            <button type="button" class="btn btn-outline-primary button center">
              {" "}
              + Ajouter une Catégorie
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriesList;
