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
  }
  .link {
    color: ${Global.color.body};
    text-decoration: none;
    padding: 0 10px;
    display: flex;
  }
  .title {
    font-size: ${Global.font.size.header};
  }
`;

class Navigation extends React.Component {
  render() {
    return (
      <NavContainer>
        <Link className="link title" to="/admin">
          ADMIN
        </Link>
        <Link className="link navlink" to="/admin/create">
          <i className="material-icons">add_box</i>
          <span>Créer</span>
        </Link>
        <Link className="link navlink" to="/">
          BLOOM
        </Link>
      </NavContainer>
    );
  }
}

export default withRouter(Navigation);
