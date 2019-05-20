import React from "react";

import Api from "../../../utils/Api";

import List from "../../core/admin/List";

class GroupsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: []
    };
  }

  async componentDidMount() {
    const groups = await Api.getGroups();
    this.setState({
      groups
    });
  }
  render() {
    const { groups } = this.state;
    return (
      <div>
        <div className="pt-5 container">
          <List data={groups} type="group" />
        </div>
      </div>
    );
  }
}

export default GroupsList;
