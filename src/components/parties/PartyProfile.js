import React from "react";
import { PartyContainer } from "./style";

import PartyHeader from "./PartyHeader";
import DeputiesList from "../deputies/DeputiesList";

class PartyProfile extends React.Component {
  render() {
    const { party, deputies, mobileView, partyGrade } = this.props;
    return (
      <PartyContainer className="container">
        <PartyHeader party={party} finalNote={partyGrade} />
        <DeputiesList deputies={deputies} mobileView={mobileView} />
      </PartyContainer>
    );
  }
}

export default PartyProfile;
