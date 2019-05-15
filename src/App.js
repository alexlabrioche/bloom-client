import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Global from "./Global";

// import Containers For react Router
import Home from "./components/layouts/Home";
import Navigation from "./components/layouts/Navigation";
import Footer from "./components/layouts/Footer";
import Deputies from "./components/layouts/deputies/Deputies";
import DeputyProfile from "./components/layouts/deputies/DeputyProfile";
import Laws from "./components/layouts/laws/Laws";
import LawDetails from "./components/layouts/laws/LawDetails";
import Parties from "./components/layouts/parties/Parties";
import PartyDetails from "./components/layouts/parties/PartyDetails";
import Groups from "./components/layouts/groups/Groups";
import GroupDetails from "./components/layouts/groups/GroupDetails";
import admin from "./components/admin";

const AppContainer = styled.div`
  color: ${Global.color.body};
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: lightgray;
`;
class App extends React.Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/deputes" component={Deputies} />
          <Route exact path="/deputes/:name" component={DeputyProfile} />
          <Route exact path="/lois" component={Laws} />
          <Route exact path="/lois/:name" component={LawDetails} />
          <Route exact path="/partis" component={Parties} />
          <Route exact path="/partis/:name" component={PartyDetails} />
          <Route exact path="/groupes" component={Groups} />
          <Route exact path="/groupes/:name" component={GroupDetails} />
          <Route exact path="/admin" component={admin} />
          <Footer />
        </AppContainer>
      </Router>
    );
  }
}

export default App;
