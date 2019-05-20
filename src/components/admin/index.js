import React from "react";
import DeputiesList from "./lists/DeputiesList";
import CategoriesList from "./lists/CategoriesList";
import LawsList from "./lists/LawsList";
import GroupsList from "./lists/GroupsList";
import PartiesList from "./lists/PartiesList";
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
  constructor(props) {
    super(props);
    this.state = {
      activeList: "deputies"
    };
  }

  setActiveList(activeList) {
    this.setState({
      activeList
    });
  }
  render() {
    const { activeList } = this.state;
    return (
      <Container className="py-5 container">
        <ul className="list-group list-group-horizontal">
          <li
            className={
              activeList === "deputies"
                ? "text-primary list-group-item"
                : "list-group-item"
            }
            onClick={() => this.setActiveList("deputies")}
          >
            Députés
          </li>
          <li
            className={
              activeList === "laws"
                ? "text-primary list-group-item"
                : "list-group-item"
            }
            onClick={() => this.setActiveList("laws")}
          >
            Lois
          </li>
          <li
            className={
              activeList === "categories"
                ? "text-primary list-group-item"
                : "list-group-item"
            }
            onClick={() => this.setActiveList("categories")}
          >
            Catégories de lois
          </li>
          <li
            className={
              activeList === "parties"
                ? "text-primary list-group-item"
                : "list-group-item"
            }
            onClick={() => this.setActiveList("parties")}
          >
            Partis
          </li>
          <li
            className={
              activeList === "groups"
                ? "text-primary list-group-item"
                : "list-group-item"
            }
            onClick={() => this.setActiveList("groups")}
          >
            Groupes
          </li>
        </ul>
        {activeList === "deputies" && <DeputiesList />}
        {activeList === "laws" && <LawsList />}
        {activeList === "categories" && <CategoriesList />}
        {activeList === "parties" && <PartiesList />}
        {activeList === "groups" && <GroupsList />}
      </Container>
    );
  }
}

export default Create;
