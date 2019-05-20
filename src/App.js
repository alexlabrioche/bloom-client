import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Global from "./Global";

// import Containers For react Router
import Home from "./components/Home";
import Navigation from "./components/navigation";
// import Footer from "./components/Footer";

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
import Delete from "./components/admin/Delete";

import AddDeputy from "./components/admin/add/AddDeputy";
import AddLaw from "./components/admin/add/AddLaw";
import AddParty from "./components/admin/add/AddParty";
import AddGroup from "./components/admin/add/AddGroup";
import AddVote from "./components/admin/add/AddVote";
import AddLawCategory from "./components/admin/add/AddLawCategory";

import EditDeputy from "./components/admin/edit/EditDeputy";
import EditLaw from "./components/admin/edit/EditLaw";
import EditParty from "./components/admin/edit/EditParty";
import EditGroup from "./components/admin/edit/EditGroup";
import EditVote from "./components/admin/edit/EditVote";
import EditLawCategory from "./components/admin/edit/EditLawCategory";

import DeputiesList from "./components/admin/lists/DeputiesList";
import PartiesList from "./components/admin/lists/PartiesList";
import GroupsList from "./components/admin/lists/GroupsList";
import VotesList from "./components/admin/lists/VotesList";
import LawsList from "./components/admin/lists/LawsList";
import CategoriesList from "./components/admin/lists/CategoriesList";

const AppContainer = styled.div`
  color: ${Global.color.body};
  min-height: 100vh;
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
          <Route exact path="/admin/deputes" component={DeputiesList} />
          <Route exact path="/admin/partis" component={PartiesList} />
          <Route exact path="/admin/groupes" component={GroupsList} />
          <Route exact path="/admin/votes" component={VotesList} />
          <Route exact path="/admin/lois" component={LawsList} />
          <Route exact path="/admin/categories" component={CategoriesList} />

          <Route exact path="/admin/creer" component={Create} />
          <Route exact path="/admin/ajouter/depute" component={AddDeputy} />
          <Route exact path="/admin/ajouter/loi" component={AddLaw} />
          <Route exact path="/admin/ajouter/parti" component={AddParty} />
          <Route exact path="/admin/ajouter/groupe" component={AddGroup} />
          <Route
            exact
            path="/admin/ajouter/categorie"
            component={AddLawCategory}
          />
          <Route exact path="/admin/ajouter/vote" component={AddVote} />

          <Route
            exact
            path="/admin/modifier/depute/:id"
            component={EditDeputy}
          />
          <Route exact path="/admin/modifier/loi/:id" component={EditLaw} />
          <Route exact path="/admin/modifier/parti/:id" component={EditParty} />
          <Route
            exact
            path="/admin/modifier/groupe/:id"
            component={EditGroup}
          />
          <Route
            exact
            path="/admin/modifier/categorie/:id"
            component={EditLawCategory}
          />
          <Route exact path="/admin/modifier/vote/:id" component={EditVote} />
          <Route exact path="/admin/supprimer/:type/:id" component={Delete} />

          {/* <Footer /> */}
        </AppContainer>
      </Router>
    );
  }
}

export default App;
