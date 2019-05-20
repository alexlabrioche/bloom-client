import Config from "../Config";
import axios from "axios";

class Api {
  // DEPUTIES
  async getDeputy(id) {
    const url = `${Config.server}/api/deputies/${id}`;
    const deputy = await axios.get(url).then(deputy => deputy.data);
    return deputy;
  }
  async getDeputies() {
    const url = `${Config.server}/api/deputies/`;
    const deputies = await axios.get(url).then(deputies => deputies.data);
    return deputies;
  }
  async deleteDeputy(id) {
    const url = `${Config.server}/api/deputies/${id}`;
    const deputies = await axios.delete(url).then(deputies => deputies.data);
    return deputies;
  }
  addDeputy(deputy) {
    const url = `${Config.server}/api/deputies/add`;
    axios.post(url, deputy).then(res => {
      console.log("onSubmit upload OK");
    });
  }

  // GROUPS
  async getGroup(id) {
    const url = `${Config.server}/api/groups/${id}`;
    const group = await axios.get(url).then(group => group.data);
    return group;
  }
  async getGroups() {
    const url = `${Config.server}/api/groups`;
    const groups = await axios.get(url).then(groups => groups.data);
    return groups;
  }
  async deleteGroup(id) {
    const url = `${Config.server}/api/groups/${id}`;
    const group = await axios.delete(url).then(group => group.data);
    return group;
  }

  addGroup(group) {
    const url = `${Config.server}/api/groups/add`;
    axios.post(url, group).then(res => {
      console.log("onSubmit upload OK");
    });
  }

  // PARTIES
  async getParty(id) {
    const url = `${Config.server}/api/parties/${id}`;
    const party = await axios.get(url).then(party => party.data);
    return party;
  }
  async getParties() {
    const url = `${Config.server}/api/parties`;
    const parties = await axios.get(url).then(parties => parties.data);
    return parties;
  }
  async deleteParty(id) {
    const url = `${Config.server}/api/parties/${id}`;
    const party = await axios.delete(url).then(party => party.data);
    return party;
  }
  addParty(party) {
    const url = `${Config.server}/api/parties/add`;
    axios.post(url, party).then(res => {
      console.log("onSubmit upload OK");
    });
  }

  // LAWS
  async getLaw(id) {
    const url = `${Config.server}/api/laws/${id}`;
    const law = await axios.get(url).then(law => law.data);
    return law;
  }
  async getLaws() {
    const url = `${Config.server}/api/laws`;
    const laws = await axios.get(url).then(laws => laws.data);
    return laws;
  }
  async deleteLaw(id) {
    const url = `${Config.server}/api/laws/${id}`;
    const law = await axios.delete(url).then(law => law.data);
    return law;
  }
  addLaw(law) {
    const url = `${Config.server}/api/laws/add`;
    axios.post(url, law).then(res => {
      console.log("onSubmit upload OK");
    });
  }

  // CATEGORIES
  async getCategory(id) {
    const url = `${Config.server}/api/laws-categories/${id}`;
    const category = await axios.get(url).then(category => category.data);
    return category;
  }
  async getCategories() {
    const url = `${Config.server}/api/laws-categories`;
    const categories = await axios.get(url).then(categories => categories.data);
    return categories;
  }
  async deleteCategory(id) {
    const url = `${Config.server}/api/laws-categories/${id}`;
    const category = await axios.delete(url).then(category => category.data);
    return category;
  }
  addCategory(category) {
    const url = `${Config.server}/api/laws-categories/add`;
    axios.post(url, category).then(res => {
      console.log("onSubmit upload OK");
    });
  }

  // VOTES
  async getVote(id) {
    const url = `${Config.server}/api/votes/${id}`;
    const vote = await axios.get(url).then(vote => vote.data);
    return vote;
  }
  async getVotes() {
    const url = `${Config.server}/api/votes`;
    const votes = await axios.get(url).then(votes => votes.data);
    return votes;
  }
  async deleteVote(id) {
    const url = `${Config.server}/api/votes/${id}`;
    const vote = await axios.delete(url).then(vote => vote.data);
    return vote;
  }
  addVote(vote) {
    const url = `${Config.server}/api/votes/add`;
    axios.post(url, vote).then(res => {
      console.log("onSubmit upload OK");
    });
  }
}

export default new Api();