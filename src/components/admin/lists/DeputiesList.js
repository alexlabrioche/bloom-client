import React from "react";

import Api from "../../../utils/Api";
import List from "../../core/admin/List";

class DeputiesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deputies: []
    };
  }

  async componentDidMount() {
    const deputies = await Api.getDeputies();
    this.setState({
      deputies: deputies.deputies
    });
  }

  render() {
    const { deputies } = this.state;
    return (
      <div>
        <div className="pt-5 container">
          <List data={deputies} type="deputy" />
        </div>
      </div>
    );
  }
}

export default DeputiesList;
