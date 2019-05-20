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
  render() {
    const { categories } = this.state;
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
