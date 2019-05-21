import React from "react";

class FlipCard extends React.Component {
  render() {
    const { decision } = this.props;
    return (
      <div>
        <div>FlipCard</div>
        <div>{decision}</div>
      </div>
    );
  }
}

export default FlipCard;
