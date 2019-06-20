import React from "react";
import Api from "../../utils/Api";
import GetGrade from "../../utils/GetGrade";

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
    this.handleScreenSize();
    const slug = this.props.match.params.slug;
    const group = await Api.getGroupBySlug(slug);
    const deputies = await this.getDeputiesFromCurrentGroup();
    const votes = await Api.getVotes();
    this.setState({
      isLoading: false,
      group,
      deputies
    });
    const groupGrade = this.getGroupGrade(deputies, votes);
    this.setState({
      groupGrade
    });
  }
  async componentDidUpdate() {
    const slug = this.props.match.params.slug;
    const currentSlug = this.state.group.slug;
    if (slug !== currentSlug) {
      const deputies = await this.getDeputiesFromCurrentGroup();
      const group = await Api.getGroupBySlug(slug);
      const votes = await Api.getVotes();
      const groupGrade = this.getGroupGrade(deputies, votes);
      this.setState({
        group,
        deputies,
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
  getGroupGrade(deputies, votes) {
    const deputiesGrade = [];
    deputies.forEach(deputy => {
      const id = deputy._id;
      const grade = GetGrade(id, votes);
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
