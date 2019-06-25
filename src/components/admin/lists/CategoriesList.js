import React from "react";
import Api from "../../../utils/Api";

import List from "../../core/admin/List";
class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
    this.deleteEntry = this.deleteEntry.bind(this);
  }
  async componentDidMount() {
    const categories = await Api.getCategories();
    this.setState({
      categories
    });
  }
  // async componentDidUpdate(prevProps, prevState) {
  //   console.log("prevState.categories", prevState.categories);
  //   console.log("this.state.categories", this.state.categories);
  //   if (prevState.categories === this.state.categories) {
  //     console.log("SAME SAME");
  //   }
  //   if (prevState.categories !== this.state.categories) {
  //     console.log("<< prevState and this.state are different");
  //     const categories = await Api.getCategories();
  //     this.setState({
  //       categories
  //     });
  //   } else {
  //     console.log(">> no change in the state");
  //   }
  // }
  async deleteEntry(type, id) {
    console.info("CLICKED ON DELETE");
    let itemTodelete = "";
    if (type === "deputy") {
      itemTodelete = await Api.deleteDeputy(id);
    }
    if (type === "group") {
      itemTodelete = await Api.deleteGroup(id);
    }
    if (type === "party") {
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
    const categories = await Api.getCategories();
    const message = itemTodelete.msg;
    console.info("itemTodelete", itemTodelete);
    this.setState({
      message,
      categories
    });
  }
  handleClick() {}

  render() {
    const { categories } = this.state;
    console.log("this.state.categoriesList");
    return (
      <div>
        <div className="pt-5 container">
          <List
            data={categories}
            type="category"
            deleteEntry={this.deleteEntry}
          />
        </div>
      </div>
    );
  }
}

export default CategoriesList;
