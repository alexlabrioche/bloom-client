import React from "react";

class Deputies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deputies: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/deputies/")
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
    console.info("state", typeof deputies);
    return (
      <div>
        {deputies.map(deputy => {
          return <div>{deputy.name}</div>;
        })}
      </div>
    );
  }
}

export default Deputies;
