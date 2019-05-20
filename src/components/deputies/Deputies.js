import React from "react";
import Config from "../../Config";
import DeputyCard from "../deputies/DeputyCard";

class Deputies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deputies: []
    };
  }

  componentDidMount() {
    fetch(`${Config.server}/api/deputies/`)
      .then(res => res.json())
      .then(data => {
        console.info(data.deputies);
        // const deputy = data.name;
        this.setState({
          deputies: data.deputies
        });
      });
  }

  render() {
    const { deputies } = this.state;
    console.info("<< render Deputies deputies", deputies);
    return (
      <div className="container">
        <div className="row">
          {deputies.map((deputy, index) => {
            console.info(deputy.picture);
            return <DeputyCard key={index} {...deputy} />;
          })}
        </div>
      </div>
    );
  }
}

export default Deputies;
