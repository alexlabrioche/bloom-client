import React from "react";
import { Link } from "react-router-dom";

class DropDownOptions extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(e) {
    e.preventDefault();
    this.props.onSelect(this.props.option);
  }

  render() {
    const { option, uriLink } = this.props;
    return (
      <li>
        <Link to={`${uriLink}/${option._id}`} onClick={this.onSelect}>
          {option.name}
        </Link>
      </li>
    );
  }
}

export default DropDownOptions;
