import React from "react";
import Api from "../../utils/Api";

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const type = this.props.match.params.type;
    let itemTodelete = "";
    if (type === "deputy") {
      itemTodelete = await Api.deleteDeputy(id);
    }
    if (type === "group") {
      itemTodelete = await Api.deleteGroup(id);
    }
    if (type === "party") {
      console.log("@Delete here, it's a partey");
      itemTodelete = await Api.deleteParty(id);
    }
    if (type === "category") {
      itemTodelete = await Api.deleteCategory(id);
    }
    if (type === "law") {
      itemTodelete = await Api.deleteLaw(id);
    }
    if (type === "vote") {
      itemTodelete = await Api.deleteVote(id);
    }
    const message = itemTodelete.message;
    console.info(itemTodelete);
    this.setState({
      message
    });
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <div className="py-5 text-center display-4 container">{message}</div>
      </div>
    );
  }
}

export default Delete;
