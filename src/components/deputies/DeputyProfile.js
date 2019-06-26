import React from "react";

import { ProfileContainer } from "./styles";

import DeputyHeader from "./DeputyHeader";
import DeputyNotationDetail from "./DeputyNotationDetail";
import CollapseCategories from "./CollapseCategories";

class DeputyProfile extends React.Component {
  render() {
    const { deputy, finalNote, votes, categories } = this.props;
    return (
      <ProfileContainer className="container">
        <DeputyHeader deputy={deputy} finalNote={finalNote} />
        <DeputyNotationDetail />
        {categories.length > 0 && (
          <CollapseCategories categories={categories} votes={votes} />
        )}
      </ProfileContainer>
    );
  }
}

export default DeputyProfile;
