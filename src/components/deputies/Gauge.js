import React from "react";
import Gauge from "react-svg-gauge";

class GaugeComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  render() {
    const { value, width, height } = this.props;

    return (
      <Gauge
        label=""
        color={"#149911"}
        value={value}
        width={width}
        height={height}
        // valueLabelStyle={{ color: "red" }}
      />
    );
  }
}

export default GaugeComponent;
