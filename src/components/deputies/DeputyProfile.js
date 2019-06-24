import React from "react";

import { ProfileContainer } from "./style";

import DeputyHeader from "./DeputyHeader";
import DeputyNotationDetail from "./DeputyNotationDetail";
import CollapseCategories from "./CollapseCategories";
import FlipCard from "./FlipCard";

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
        <div className="main-content container">
          <div className="row">
            {votes.map((vote, index) => {
              console.info("VOTE", vote);
              return (
                <div className="mt-3 col-md-6 col-lg-4" key={index}>
                  <FlipCard {...vote} />
                </div>
              );
            })}
          </div>
        </div>
      </ProfileContainer>
    );
  }
}

export default DeputyProfile;
