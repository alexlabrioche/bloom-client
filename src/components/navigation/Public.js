import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Global from "../../Global";
import Api from "../../utils/Api";

import Dropdown from "../core/front/Dropdown.js";

const NavContainer = styled.nav`
  height: ${Global.height.navigation};
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 3px solid #5973e8;
  background: white;
  box-shadow: 3px 3px 5px 0px rgba(230, 227, 230, 1);
  .link {
    color: ${Global.color.primary};
    text-decoration: none;
    padding: 0 10px;
  }
  .title {
    font-size: ${Global.font.size.header};
  }
`;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      parties: [],
      deputies: []
    };
  }
  async componentDidMount() {
    const groups = await Api.getGroups();
    const parties = await Api.getParties();
    const deputies = await Api.getDeputies();
    this.setState({
      groups,
      parties,
      deputies: deputies.deputies
    });
  }
  render() {
    const { parties, groups, deputies } = this.state;
    return (
      <NavContainer>
        <Link className="link title" to="/">
          BLOOM
        </Link>
        <Dropdown list={deputies} uriLink="/deputes">
          Nos députés
        </Dropdown>
        <Dropdown list={parties} uriLink="/partis">
          Partis nationaux
        </Dropdown>
        <Dropdown list={groups} uriLink="/groupes">
          Groupes Européens
        </Dropdown>

        <Link
          style={{ marginLeft: "300px" }}
          className="link navlink"
          to="/admin"
        >
          ADMIN
        </Link>
      </NavContainer>
    );
  }
}

export default withRouter(Navigation);
