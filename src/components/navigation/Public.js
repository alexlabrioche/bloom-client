import React from "react";
import { Link, withRouter } from "react-router-dom";

import styled, { css } from "styled-components";
import Global from "../../Global";
import Api from "../../utils/Api";

import SearchField from "./SearchField";

const NavContainer = styled.nav`
  height: ${Global.height.navigation};
  position: fixed;
  margin-bottom: 2rem;
  background: ${Global.color.lightBackground};
  z-index: 1000;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(230, 230, 230, 1);
  transition: box-shadow 0.2s ease-in-out;
  ${props =>
    props.isScrolled &&
    css`
      box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.2);
    `}
  /* border-top: 3px solid ${Global.color.secondAccent}; */
  .link {
    color: ${Global.color.primary};
    text-decoration: none;
    padding: 0 10px;
    margin-right: 1rem;
  }
  .title {
    font-size: ${Global.font.size.header};
    color: ${Global.color.primary};
  }
`;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      parties: [],
      deputies: [],
      searchOptions: [],
      selectedOption: null
    };
    this.handleSearchField = this.handleSearchField.bind(this);
  }
  async componentDidMount() {
    const groups = await Api.getGroups();
    const parties = await Api.getParties();
    const deputies = await Api.getDeputies();
    const searchOptions = this.setSearchOptions(groups, parties, deputies);
    this.setState({
      groups,
      parties,
      deputies,
      searchOptions
    });
  }
  setSearchOptions(groups, parties, deputies) {
    const partiesOptions = [];
    const groupsOptions = [];
    const deputiesOptions = [];
    parties.map(party =>
      partiesOptions.push({
        value: party.slug,
        label: party.name,
        uri: "parti"
      })
    );
    groups.map(group =>
      groupsOptions.push({
        value: group.slug,
        label: group.name,
        uri: "groupe"
      })
    );
    deputies.map(deputy =>
      deputiesOptions.push({
        value: deputy.slug,
        label: deputy.name,
        uri: "depute"
      })
    );
    const searchOptions = [
      {
        label: "Groupes Européens",
        options: groupsOptions
      },
      {
        label: "Partis Nationaux",
        options: partiesOptions
      },
      {
        label: "Députés",
        options: deputiesOptions
      }
    ];
    return searchOptions;
  }

  handleSearchField(selectedOption) {
    console.log(`handleSearchField selectedOption:`, selectedOption);
    if (selectedOption !== null) {
      this.props.history.push(`/${selectedOption.uri}/${selectedOption.value}`);
      this.setState({
        selectedOption
      });
    }
    if (selectedOption === null) {
      this.setState({
        selectedOption
      });
    }
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    const { selectedOption, searchOptions } = this.state;
    const { isScrolled } = this.props;
    return (
      <NavContainer isScrolled={isScrolled}>
        <Link className="link title" to="/">
          BLOOM
        </Link>
        <SearchField
          selectedOption={selectedOption}
          options={searchOptions}
          handleChange={this.handleSearchField}
          placeholder={"Rechercher un groupe, un parti, ou un député..."}
        />
        <Link
          style={{ marginLeft: "500px" }}
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
