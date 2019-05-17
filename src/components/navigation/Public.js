import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Global from "../../Global";

const NavContainer = styled.nav`
  height: ${Global.height.navigation};
  background: ${Global.color.primary};
  width: 100%;
  display: flex;
  align-items: center;
  .link {
    color: white;
    text-decoration: none;
    padding: 0 10px;
  }
  .title {
    font-size: ${Global.font.size.header};
  }
`;

class Navigation extends React.Component {
  render() {
    return (
      <NavContainer>
        <Link className="link title" to="/">
          BLOOM
        </Link>
        <Link className="link navlink" to="/deputes">
          Députés
        </Link>
        <Link className="link navlink" to="/groupes">
          Groupes
        </Link>
        <Link className="link navlink" to="/partis">
          Partis
        </Link>
        <Link className="link navlink" to="/admin">
          ADMIN
        </Link>
      </NavContainer>
    );
  }
}

export default withRouter(Navigation);