import React from "react";
import styled from "styled-components";

import DeputiesList from "./lists/DeputiesList";
import CategoriesList from "./lists/CategoriesList";
import LawsList from "./lists/LawsList";
import GroupsList from "./lists/GroupsList";
import PartiesList from "./lists/PartiesList";
import VotesList from "./lists/VotesList";

import AddDeputy from "./add/AddDeputy";
import AddGroup from "./add/AddGroup";
import AddLaw from "./add/AddLaw";
import AddLawCategory from "./add/AddLawCategory";
import AddParty from "./add/AddParty";
import AddVote from "./add/AddVote";

import Selector from "./Selector";
import ItemsSelector from "./ItemsSelector";

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
      activeList: "deputies",
      isActiveAdd: true,
      isActiveEdit: false,
      isActiveDelete: false
    };
    this.setActiveSelector = this.setActiveSelector.bind(this);
    this.setActiveList = this.setActiveList.bind(this);
  }
  setActiveSelector(state) {
    this.setState({
      isActiveAdd: state.add,
      isActiveEdit: state.edit,
      isActiveDelete: state.delete
    });
  }
  setActiveList(activeList) {
    this.setState({
      activeList
    });
  }

  renderAdd() {
    const { activeList } = this.state;
    return (
      <div>
        {activeList === "deputies" && <AddDeputy />}
        {activeList === "laws" && <AddLaw />}
        {activeList === "categories" && <AddLawCategory />}
        {activeList === "parties" && <AddParty />}
        {activeList === "groups" && <AddGroup />}
        {activeList === "votes" && <AddVote />}
      </div>
    );
  }
  renderEdit() {
    return (
      <div className="pt-5 container display-3" style={{ textAlign: "center" }}>
        Bientôt disponible
      </div>
    );
  }

  renderDelete() {
    const { activeList } = this.state;
    return (
      <div>
        {activeList === "deputies" && <DeputiesList />}
        {activeList === "laws" && <LawsList />}
        {activeList === "categories" && <CategoriesList />}
        {activeList === "parties" && <PartiesList />}
        {activeList === "groups" && <GroupsList />}
        {activeList === "votes" && <VotesList />}
      </div>
    );
  }
  render() {
    const { isActiveAdd, isActiveEdit, isActiveDelete } = this.state;
    return (
      <Container className="container">
        <Selector activeSelector={this.setActiveSelector} />
        <ItemsSelector activeList={this.setActiveList} />

        {isActiveAdd && this.renderAdd()}
        {isActiveEdit && this.renderEdit()}
        {isActiveDelete && this.renderDelete()}
      </Container>
    );
  }
}

export default Create;
