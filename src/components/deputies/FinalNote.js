import React from "react";
import styled from "styled-components";
import Algo from "./Algo";
import Gauge2 from "./Gauge2";

const Container = styled.div`
  font-weight: 700;
  .note-good {
    color: green;
  }
  .note-bad {
    color: red;
  }
  .note-medium {
    color: orange;
  }
`;

class FinalNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finalNote: 0,
      isGood: false,
      isBad: false,
      isMedium: false
    };
  }

  async componentDidMount() {
    const finalNote = await Algo(this.props._id);
    console.log("final note", finalNote);
    this.setState({
      finalNote
    });
    if (finalNote < 10) {
      this.setState({
        isBad: true
      });
    }
    if (finalNote >= 10 && finalNote <= 14) {
      this.setState({
        isMedium: true
      });
    }
    if (finalNote > 14) {
      this.setState({
        isGood: true
      });
    }
  }

  render() {
    // Condition pour affichage en couleur en fonction de la note
    const { finalNote } = this.state;
    let noteClass = "";
    if (this.state.isGood) noteClass = "note-good";
    if (this.state.isBad) noteClass = "note-bad";
    if (this.state.isMedium) noteClass = "note-medium";
    console.log("<< this state", this.state);
    console.log("<< noteClass", noteClass);

    return (
      <Container>
        <p className={noteClass}>{finalNote}/20</p>
        <Gauge2 value={this.state.finalNote} />
      </Container>
    );
  }
}

export default FinalNote;
