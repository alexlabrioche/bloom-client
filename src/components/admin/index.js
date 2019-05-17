import React from "react";
import { Link, withRouter } from "react-router-dom";

class Create extends React.Component {
  render() {
    return (
      <div>
        <h3>Display lists</h3>
        <div>
          <Link to="/admin/deputies">Députés</Link>
        </div>
        <div>
          <Link to="/admin/laws">lois</Link>
        </div>
        <div>
          <Link to="/admin/categories">catégories de loi</Link>
        </div>
        <div>
          <Link to="/admin/parties">partis politique</Link>
        </div>
        <div>
          <Link to="/admin/groups">groupes politique</Link>
        </div>
        <div>
          <Link to="/admin/votes">votes</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Create);