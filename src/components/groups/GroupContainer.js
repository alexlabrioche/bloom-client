import React from "react";
import Api from "../../utils/Api";
import GetGrade from "../../utils/GetGradeModified";

import ProfileLoader from "../core/front/ProfileLoader";
import GroupProfile from "./GroupProfile";

class GroupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      group: {},
      deputies: [],
      groupGrade: 0
    };
    window.addEventListener("resize", this.handleScreenSize.bind(this));
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    this.handleScreenSize();
    const slug = this.props.match.params.slug;
    const group = await Api.getGroupBySlug(slug);
    const deputies = await this.getDeputiesFromCurrentGroup();
    const votes = await Api.getVotes();
    const categories = await Api.getCategories();
    const laws = await Api.getLaws();
    const deputiesPlusGrade = deputies.map(deputy => {
      const id = deputy._id;
      const deputyNote = GetGrade(id, votes, categories, laws);
      console.log("deputyNote", deputyNote);
      // const deputyNote = GetGrade(id, votes);
      return Object.assign({}, deputy, { note: deputyNote });
    });
    console.info("cmpDM GROUP", deputiesPlusGrade.map(d => d.note));
    this.setState({
      isLoading: false,
      group,
      deputies: deputiesPlusGrade
    });
    const groupGrade = await this.getGroupGrade(deputies, votes);
    this.setState({
      groupGrade
    });
  }
  async componentDidUpdate() {
    window.scrollTo(0, 0);
    const slug = this.props.match.params.slug;
    const currentSlug = this.state.group.slug;
    if (slug !== currentSlug) {
      const deputies = await this.getDeputiesFromCurrentGroup();
      const group = await Api.getGroupBySlug(slug);
      const votes = await Api.getVotes();
      const categories = await Api.getCategories();
      const laws = await Api.getLaws();
      const deputiesPlusGrade = deputies.map(deputy => {
        const id = deputy._id;
        const deputyNote = GetGrade(id, votes, categories, laws);
        console.log("deputyNote", deputyNote);
        // const deputyNote = GetGrade(id, votes);
        return Object.assign({}, deputy, { note: deputyNote });
      });
      const groupGrade = await this.getGroupGrade(deputies, votes);
      console.info("getGroupGrade groupGrade", groupGrade);

      this.setState({
        group,
        deputies: deputiesPlusGrade,
        groupGrade
      });
    }
  }
  async getDeputiesFromCurrentGroup() {
    const slug = this.props.match.params.slug;
    const allDeputies = await Api.getDeputies();
    const deputies = allDeputies.filter(deputy => {
      if (deputy.group === null) {
        deputy.group = {};
      }
      return deputy.group.slug === slug && deputy;
    });
    return deputies;
  }
  async getGroupGrade(deputies, votes) {
    const laws = await Api.getLaws();
    const categories = await Api.getCategories();
    const deputiesGrade = [];
    deputies.forEach(deputy => {
      const id = deputy._id;
      const grade = GetGrade(id, votes, categories, laws);
      deputiesGrade.push(grade);
    });
    const groupGrade =
      deputiesGrade.reduce((a, b) => a + b, 0) / deputiesGrade.length || 0;
    return groupGrade;
  }

  handleScreenSize() {
    const { mobileView } = this.state;
    const screenSize = window.innerWidth <= 760;
    mobileView !== screenSize &&
      this.setState({
        mobileView: screenSize
      });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="container">
        <ProfileLoader isLoading={isLoading} />
        <GroupProfile {...this.state} />
      </div>
    );
  }
}

export default GroupContainer;
