import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Global from "../../Global";

const NavContainer = styled.nav`
  height: ${Global.height.navigation};
  background: ${Global.color.light};
  width: 100%;
  display: flex;
  align-items: center;
  i {
    font-size: ${Global.font.size.body};
    padding-right: 5px;
    align-self: center;
  }
  .nav-item {
    display: flex;
  }
  .nav-link {
    color: ${Global.color.body};
    text-decoration: none;
  }
  .bloom-link {
    color: ${Global.color.body};
    text-decoration: none;
    padding-left: 200px;
    display: flex;
  }
  .title {
    font-size: ${Global.font.size.header};
    color: ${Global.color.body};
    text-decoration: none;
    padding: 0 10px;
    display: flex;
  }
`;

class Navigation extends React.Component {
  render() {
    return (
      <NavContainer>
        <Link className="title" to="/admin">
          ADMIN
        </Link>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span>
              <i className="far fa-address-card" />
              Nouveau
            </span>
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/admin/ajouter/parti">
              Parti politique
            </Link>
            <Link className="dropdown-item" to="/admin/ajouter/groupe">
              Groupe politique
            </Link>
            <Link className="dropdown-item" to="/admin/ajouter/categorie">
              Texte de loi
            </Link>
            <Link className="dropdown-item" to="/admin/ajouter/loi">
              Amendement
            </Link>
            <Link className="dropdown-item" to="/admin/ajouter/depute">
              Député
            </Link>
            <Link className="dropdown-item" to="/admin/ajouter/vote">
              vote
            </Link>
          </div>
        </li>
        <Link className="bloom-link navlink" to="/">
          BLOOM
        </Link>
      </NavContainer>
    );
  }
}

export default withRouter(Navigation);
