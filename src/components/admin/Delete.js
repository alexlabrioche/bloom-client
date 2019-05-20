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
    if (type === "depute") {
      itemTodelete = await Api.deleteDeputy(id);
    }
    if (type === "groupe") {
      itemTodelete = await Api.deleteGroup(id);
    }
    if (type === "parti") {
      itemTodelete = await Api.deleteParty(id);
    }
    if (type === "categorie") {
      itemTodelete = await Api.deleteCategorie(id);
    }
    if (type === "loi") {
      itemTodelete = await Api.deleteLaw(id);
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
