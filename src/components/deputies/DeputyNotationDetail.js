import React from "react";
import styled from "styled-components";

const Container = styled.div`
  .header {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 200;
    transition: 0.2s ease;
    cursor: pointer;
  }
`;

class NotationDetail extends React.Component {
  render() {
    return (
      <Container>
        <div className="header">Détails sur le calcul de la note :</div>
        <div className="detail">blabla</div>
      </Container>
    );
  }
}

export default NotationDetail;
