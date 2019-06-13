import React from "react";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";

import MenuDropdown from "./MenuDropdown";

import Global from "../../Global";

const Container = styled.div`
  .bm-burger-button {
    position: fixed;
    width: 32px;
    height: 25px;
    left: 115px;
    top: 14px;
  }

  .bm-burger-bars {
    background: ${Global.color.primary};
    border-radius: 5px;
    transition: 0.2s;
  }

  .bm-burger-bars-hover {
    background: ${Global.color.secondary};
  }

  .bm-cross-button {
    height: 28px;
    width: 28px;
  }

  .bm-cross {
    background: ${Global.color.primary};
  }

  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    top: 0;
  }

  .bm-menu {
    background: ${Global.color.background};
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  .bm-morph-shape {
    fill: #373a47;
  }

  .bm-item-list {
    padding-top: 3rem;
    /* display: flex;
    flex-direction: column; */
  }

  .bm-item {
    display: inline-block;
  }

  .bm-overlay {
    top: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  .menu-item {
    padding-top: 3rem;
  }
`;

class BurgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
    return <div>Hello</div>;
  }

  render() {
    const { deputiesOptions, groupsOptions, partiesOptions } = this.props;
    return (
      <Container>
        <Menu
          disableAutoFocus
          // isOpen
          width={360}
        >
          <MenuDropdown
            className="menu-item"
            options={deputiesOptions}
            placeholder="Députés..."
          />
          <MenuDropdown
            className="menu-item"
            options={partiesOptions}
            placeholder="Partis..."
          />
          <MenuDropdown
            className="menu-item"
            options={groupsOptions}
            placeholder="Groupes..."
          />
        </Menu>
      </Container>
    );
  }
}

export default BurgerMenu;
