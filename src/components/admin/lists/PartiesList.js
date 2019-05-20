import React from "react";

import Api from "../../../utils/Api";

import List from "../../core/admin/List";

class PartiesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: []
    };
  }

  async componentDidMount() {
    const parties = await Api.getParties();
    this.setState({
      parties
    });
  }
  render() {
    const { parties } = this.state;
    return (
      <div>
        <div className="pt-5 container">
          <List data={parties} type="parti" />
        </div>
      </div>
    );
  }
}

export default PartiesList;
