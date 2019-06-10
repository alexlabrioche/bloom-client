import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  .list-group {
    justify-content: center;
  }
  li:hover {
    cursor: pointer;
  }
`;
class Create extends React.Component {
  render() {
    return (
      <Container className="py-5 container">
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">
            <Link to="/admin/ajouter/depute">Député</Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/ajouter/loi">loi</Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/ajouter/categorie">catégorie de loi</Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/ajouter/parti">parti politique</Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/ajouter/groupe">groupe politique</Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/ajouter/vote">vote</Link>
          </li>
        </ul>
      </Container>
    );
  }
}

export default withRouter(Create);
