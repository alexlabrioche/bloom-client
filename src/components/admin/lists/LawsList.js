import React from "react";

import Api from "../../../utils/Api";
import List from "../../core/admin/List";

class LawsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      laws: []
    };
  }

  async componentDidMount() {
    const laws = await Api.getLaws();
    this.setState({
      laws
    });
  }

  render() {
    const { laws } = this.state;
    return (
      <div>
        <div className="pt-5 container">
          <List data={laws} type="law" />
        </div>
      </div>
    );
  }
}

export default LawsList;
