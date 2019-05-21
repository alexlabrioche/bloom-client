import React from "react";
import Algo100 from "./Algo100";

import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import LiquidFillGauge from "react-liquid-gauge";

class Gauge extends React.Component {
  state = {
    finalNote: 0
  };
  startColor = "green"; // cornflowerblue
  endColor = "#4381C1"; // crimson

  async componentDidMount() {
    const finalNote = await Algo100(this.props._id);
    console.log("final note", finalNote);
    this.setState({
      finalNote
    });
  }

  render() {
    const radius = 50;
    const interpolate = interpolateRgb(this.startColor, this.endColor);
    const fillColor = interpolate(this.state.value / 100);
    const gradientStops = [
      {
        key: "0%",
        stopColor: color(fillColor)
          .darker(0.5)
          .toString(),
        stopOpacity: 1,
        offset: "0%"
      },
      {
        key: "50%",
        stopColor: fillColor,
        stopOpacity: 0.75,
        offset: "50%"
      },
      {
        key: "100%",
        stopColor: color(fillColor)
          .brighter(0.5)
          .toString(),
        stopOpacity: 0.5,
        offset: "100%"
      }
    ];

    return (
      <div>
        <LiquidFillGauge
          style={{ margin: "0 auto" }}
          width={radius * 2}
          height={radius * 2}
          value={parseInt(this.state.finalNote)}
          percent="%"
          textSize={1}
          textOffsetX={0}
          textOffsetY={0}
          textRenderer={props => {
            const value = Math.round(props.value);
            const radius = Math.min(props.height / 2, props.width / 2);
            const textPixels = (props.textSize * radius) / 2;
            const valueStyle = {
              fontSize: textPixels
            };
            const percentStyle = {
              fontSize: textPixels * 0.6
            };

            return (
              <tspan>
                <tspan className="value" style={valueStyle}>
                  {value}
                </tspan>
                <tspan style={percentStyle}>{props.percent}</tspan>
              </tspan>
            );
          }}
          riseAnimation
          waveAnimation
          waveFrequency={2}
          waveAmplitude={1}
          gradient
          gradientStops={gradientStops}
          circleStyle={{
            fill: fillColor
          }}
          waveStyle={{
            fill: fillColor
          }}
          textStyle={{
            fill: color("#444").toString(),
            fontFamily: "Arial"
          }}
          waveTextStyle={{
            fill: color("#fff").toString(),
            fontFamily: "Arial"
          }}
          // onClick={() => {
          //   this.setState({ value: Math.random() * 100 });
          // }}
        />
        <div
          style={{
            margin: "20px auto",
            width: 120
          }}
        >
          {/* <button
            type="button"
            className="btn btn-default btn-block"
            onClick={() => {
              this.setState({ value: Math.random() * 100 });
            }}
          >
            Refresh
          </button> */}
        </div>
      </div>
    );
  }
}

export default Gauge;
