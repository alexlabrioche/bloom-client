import React from "react";
import styled from "styled-components";

import Api from "../../utils/Api";
import GetGrade from "../../utils/GetGrade";

import Header from "../main/Header";
import DeputiesList from "./DeputiesList";

const Container = styled.div`
  padding-top: 4rem;
`;
class DeputiesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deputies: [],
      isHighestNote: false,
      isSurnameFirst: true,
      isFirstNameFirst: false
    };
  }
  async componentDidMount() {
    const allDeputies = await Api.getDeputies();
    const votes = await Api.getVotes();
    const deputies = allDeputies.map(deputy => {
      const deputyNote = GetGrade(deputy._id, votes);
      return Object.assign({}, deputy, { note: deputyNote });
    });

    // By default the deputies will be sorted by Alphabetical order
    this.setState({
      deputies: deputies.sort((a, b) => a.surname.localeCompare(b.surname))
    });
    window.addEventListener("resize", this.handleScreenSize.bind(this));
    this.handleScreenSize();
  }

  handleScreenSize() {
    const { mobileView } = this.state;
    const screenSize = window.innerWidth <= 760;
    mobileView !== screenSize &&
      this.setState({
        mobileView: screenSize
      });
  }

  toggleNote = () => {
    const { deputies, isHighestNote } = this.state;
    let newDeputies = deputies;
    if (isHighestNote) {
      newDeputies = deputies.sort((a, b) => a.note - b.note);
    } else {
      newDeputies = deputies.sort((a, b) => b.note - a.note);
    }
    this.setState({
      deputies: newDeputies,
      isHighestNote: !isHighestNote
    });
  };

  toggleSurname = () => {
    const { deputies, isSurnameFirst } = this.state;
    let newDeputies = deputies;
    if (isSurnameFirst) {
      newDeputies = deputies.sort((a, b) => b.surname.localeCompare(a.surname));
    } else {
      newDeputies = deputies.sort((a, b) => a.surname.localeCompare(b.surname));
    }
    this.setState({
      deputies: newDeputies,
      isSurnameFirst: !isSurnameFirst
    });
  };

  toggleFirstName = () => {
    const { deputies, isFirstNameFirst } = this.state;
    let newDeputies = deputies;
    if (isFirstNameFirst) {
      newDeputies = deputies.sort((a, b) =>
        b.firstName.localeCompare(a.firstName)
      );
    } else {
      newDeputies = deputies.sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
    }
    this.setState({
      deputies: newDeputies,
      isFirstNameFirst: !isFirstNameFirst
    });
  };

  render() {
    const { deputies, mobileView } = this.state;
    return (
      <Container className="container">
        <div className="row">
          <Header />
          <button onClick={this.toggleSurname}>trier par Nom de famille</button>
          <button onClick={this.toggleFirstName}>trier par Prénom</button>
          <button onClick={this.toggleNote}>trier par Note</button>

          <DeputiesList deputies={deputies} mobileView={mobileView} />
        </div>
      </Container>
    );
  }
}

export default DeputiesContainer;
