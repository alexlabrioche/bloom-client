// import React from "react";
// import styled from "styled-components";
// import Api from "../../utils/Api";
// import Config from "../../Config";

// const Container = styled.div`
//   .card-img {
//     object-fit: cover;
//     height: 12rem;
//     border-radius: 3px 3px 0 0;
//   }
//   .card-body {
//     height: 10rem;
//     overflow: auto;
//   }
// `;
// class PartyDetails extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       party: []
//     };
//   }
//   async componentDidMount() {
//     const id = this.props.match.params.name;
//     console.log("party id", id);
//     const party = await Api.getParty(id);
//     console.log("party", party);
//     this.setState({
//       party
//     });
//   }
//   render() {
//     const { party } = this.state;
//     console.log("party", this.state.party);
//     return (
//       <Container className="pt-5 container">
//         <div className="card text-center">
//           <img
//             className="card-img"
//             src={`${Config.server}/${party.picture}`}
//             alt={party.slug}
//           />
//           <div className="card-body">
//             <h3 className="card-title">{party.name}</h3>
//             <p className="card-text">{party.description}</p>
//           </div>
//         </div>
//       </Container>
//     );
//   }
// }

// export default PartyDetails;
import React from "react";
import styled from "styled-components";

import Api from "../../utils/Api";
import Config from "../../Config";

import DeputyCard from "../deputies/DeputyCard";
import MobileDeputyCard from "../deputies/MobileDeputyCard";

const Container = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  background: white;
  border-radius: 4px;
  border: 1px solid rgba(230, 230, 230, 1);
  .header {
    padding-top: 1rem;
    overflow: auto;
  }
  .header-img {
    border-radius: 4px;
    height: auto;
    width: 100%;
  }
  .header-title {
    font-size: 3rem;
    text-align: center;
  }
  .header-description {
    margin-top: 2rem;
    height: 12rem;
    overflow: auto;
  }
`;
class PartyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      party: {},
      deputies: []
    };
  }

  // Version Async Await + Api
  async componentDidMount() {
    const slug = this.props.match.params.slug;
    console.log("slug", slug);
    const party = await Api.getPartyBySlug(slug);
    this.setState({
      party
    });
  }

  async componentDidUpdate() {
    const id = this.props.match.params.name;
    const currentId = this.state.party._id;
    if (id !== currentId) {
      const party = await Api.getParty(id);
      this.setState({
        party
      });
    }
  }

  handleScreenSize() {
    const { mobileView } = this.state;
    const screenSize = window.innerWidth <= 760;
    mobileView !== screenSize &&
      this.setState({
        mobileView: screenSize
      });
  }
  renderDesktop(deputy, index) {
    return (
      <div className="my-3 col-md-6 col-lg-4" key={index}>
        <DeputyCard {...deputy} />
      </div>
    );
  }
  renderMobile(deputy, index) {
    return (
      <div className="my-1 col-12" key={index}>
        <MobileDeputyCard {...deputy} />
      </div>
    );
  }

  render() {
    const { party, deputies, mobileView } = this.state;
    console.log("@ PartyProfile party: ", party);
    if (party === {}) {
      return <p>Chargement...</p>;
    }
    return (
      <Container className="container">
        <div className="header row">
          <div className="header-img-container offset-3 col-6 offset-md-0 col-md-4 col-lg-3">
            <img
              className="header-img"
              src={`${Config.server}/${party.picture}`}
              alt={party.slug}
            />
          </div>
          <div className="header-text-container col-12 col-md-8 col-lg-9">
            <h3 className="header-title">{party.name}</h3>
            <p className="header-description">{party.description}</p>
          </div>
        </div>

        <div className="main-content container">
          <div className="row">
            {deputies.map((deputy, index) => {
              return mobileView
                ? this.renderMobile(deputy, index)
                : this.renderDesktop(deputy, index);
            })}
          </div>
        </div>
      </Container>
    );
  }
}

export default PartyProfile;
