import React from "react";
import Api from "../../../utils/Api";

import List from "../../core/admin/List";
class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  async componentDidMount() {
    const categories = await Api.getCategories();
    this.setState({
      categories
    });
  }
  async componentDidUpdate(prevProps, prevState) {
    console.log("prevState.categories", prevState.categories);
    console.log("this.state.categories", this.state.categories);
    if (prevState.categories === this.state.categories) {
      console.log("SAME SAME");
    }
    if (prevState.categories !== this.state.categories) {
      console.log("<< prevState and this.state are different");
      const categories = await Api.getCategories();
      this.setState({
        categories
      });
    } else {
      console.log(">> no change in the state");
    }
  }

  render() {
    const { categories } = this.state;
    console.log("this.state.categoriesList");
    return (
      <div>
        <div className="pt-5 container">
          <List data={categories} type="category" />
        </div>
      </div>
    );
  }
}

export default CategoriesList;
