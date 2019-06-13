import React from "react";

class NotationDetail extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="legend d-flex row">
          <h5 className="legend-title col-2">Légende :</h5>
          <p className="legend-content protect col-3">
            Carte Verte = Vote protecteur
          </p>
          <p className="legend-content absence col-3">
            Carte Grise = Absence/Abstention
          </p>
          <p className="legend-content destruct col-3">
            Carte Rouge = Vote destructeur
          </p>
        </div>
      </div>
    );
  }
}

export default NotationDetail;
