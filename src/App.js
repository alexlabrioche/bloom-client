import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Global from "./Global";

// import Containers For react Router
import Home from "./components/Home";
import Navigation from "./components/navigation";
import Footer from "./components/Footer";

import Deputies from "./components/deputies/Deputies";
import DeputyProfile from "./components/deputies/DeputyProfile";
import Laws from "./components/laws/Laws";
import LawDetails from "./components/laws/LawDetails";
import Parties from "./components/parties/Parties";
import PartyDetails from "./components/parties/PartyDetails";
import Groups from "./components/groups/Groups";
import GroupDetails from "./components/groups/GroupDetails";

import Admin from "./components/admin";
import Create from "./components/admin/Create";

import AddDeputy from "./components/admin/add/AddDeputy";
import AddLaw from "./components/admin/add/AddLaw";
import AddCategory from "./components/admin/add/AddLawCategory";
import AddParty from "./components/admin/add/AddParty";
import AddGroup from "./components/admin/add/AddGroup";
import AddVote from "./components/admin/add/AddVote";

import DeputiesList from "./components/admin/lists/DeputiesList";
import PartiesList from "./components/admin/lists/PartiesList";
import GroupsList from "./components/admin/lists/GroupsList";
import VotesList from "./components/admin/lists/VotesList";
import LawsList from "./components/admin/lists/LawsList";
import CategoriesList from "./components/admin/lists/CategoriesList";

const AppContainer = styled.div`
  color: ${Global.color.body};
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: whitesmoke;
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

          {/********** ADMIN ROUTES **********/}
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/deputies" component={DeputiesList} />
          <Route exact path="/admin/parties" component={PartiesList} />
          <Route exact path="/admin/groups" component={GroupsList} />
          <Route exact path="/admin/votes" component={VotesList} />
          <Route exact path="/admin/laws" component={LawsList} />
          <Route exact path="/admin/categories" component={CategoriesList} />
          <Route exact path="/admin/create" component={Create} />
          <Route exact path="/admin/create/deputy" component={AddDeputy} />
          <Route exact path="/admin/create/law" component={AddLaw} />
          <Route exact path="/admin/create/category" component={AddCategory} />
          <Route exact path="/admin/create/party" component={AddParty} />
          <Route exact path="/admin/create/group" component={AddGroup} />
          <Route exact path="/admin/create/vote" component={AddVote} />
          <Footer />
        </AppContainer>
      </Router>
    );
  }
}

export default App;
