import React from "react";
import { Link, withRouter } from "react-router-dom";

class Create extends React.Component {
  render() {
    return (
      <div>
        <h3>Create new</h3>
        <div>
          <Link to="/admin/create/deputy">Député</Link>
        </div>
        <div>
          <Link to="/admin/create/law">loi</Link>
        </div>
        <div>
          <Link to="/admin/create/law-category">catégorie de loi</Link>
        </div>
        <div>
          <Link to="/admin/create/party">parti politique</Link>
        </div>
        <div>
          <Link to="/admin/create/group">groupe politique</Link>
        </div>
        <div>
          <Link to="/admin/create/vote">vote</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Create);
