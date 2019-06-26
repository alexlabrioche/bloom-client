import React from "react";

class NotationDetail extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="legend d-flex row">
          {/* <h5 className="legend-title col-2">Légende :</h5> */}
          <p className="legend-content protect col-12 col-md-4">
            Vote protecteur
          </p>
          <p className="legend-content absence col-12 col-md-4">
            Absence/Abstention
          </p>
          <p className="legend-content destruct col-12 col-md-4">
            Vote destructeur
          </p>
        </div>
      </div>
    );
  }
}

export default NotationDetail;
