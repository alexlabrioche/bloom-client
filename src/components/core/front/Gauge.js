import React from "react";
import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import LiquidFillGauge from "react-liquid-gauge";

class Gauge extends React.Component {
  state = {
    value: 0
  };
  startColor = "gainsboro"; // cornflowerblue
  endColor = "aliceblue"; // crimson

  componentDidMount() {
    console.log("#cmpDM GAUGE this.props.finalNote", this.props.finalNote);
    console.log("#cmpDM GAUGE this.props.finalNote", this.state.value);
    setTimeout(() => {
      this.setState({
        value: parseInt(this.props.finalNote)
      });
    });
  }

  render() {
    console.log("#render GAUGE this.props.finalNote", this.props.finalNote);
    console.log("#render GAUGE this.props.finalNote", this.state.value);
    const radius = 100;
    const interpolate = interpolateRgb(this.startColor, this.endColor);
    const fillColor = interpolate(this.state.value / 100);
    const gradientStops = [
      {
        key: "0%",
        stopColor: color("darkblue")
          .darker(0.5)
          .toString(),
        stopOpacity: 1,
        offset: "0%"
      },
      {
        key: "50%",
        stopColor: color("dodgerblue"),
        stopOpacity: 0.6,
        offset: "50%"
      },
      {
        key: "100%",
        stopColor: color("deepskyblue")
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
          value={this.state.value}
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
          waveFrequency={1}
          waveAmplitude={3}
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
          onClick={() => {
            this.setState({ value: Math.random() * 100 });
          }}
        />
        <div
          style={{
            margin: "20px auto",
            width: 120
          }}
        />
      </div>
    );
  }
}

export default Gauge;
