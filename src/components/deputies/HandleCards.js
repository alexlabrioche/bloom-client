import React from "react";
import styled, { css } from "styled-components";
import Global from "../../Global";

const HandleCardsContainer = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  /* justify-content: space-around; */
  .button {
    cursor: pointer;
    padding: 0.6rem 1rem;
    margin: 0.4rem 2rem 0.4rem 0rem;
    background: white;
    font-weight: 700;
    color: ${Global.color.primary};
    border: 1px solid ${Global.color.light};
    border-radius: 4px;
  }
  .surname {
    transition: 0.3s;
    &:hover {
      background: ${Global.color.primary};
      opacity: 0.6;
      color: white;
    }
    ${props =>
      props.isActiveSurname &&
      css`
        background: ${Global.color.primary};
        opacity: 0.4;
        color: white;
      `}
  }
  .best {
    transition: 0.3s;
    &:hover {
      background: ${Global.color.protect};
      opacity: 0.6;
      color: white;
    }
    ${props =>
      props.isActiveBest &&
      css`
        color: ${Global.color.protect};
        opacity: 0.8;
      `}
  }
  .worst {
    transition: 0.3s;
    &:hover {
      background: ${Global.color.destruct};
      opacity: 0.6;
      color: white;
    }
    ${props =>
      props.isActiveWorst &&
      css`
        color: ${Global.color.destruct};
        opacity: 0.8;
      `}
  }
`;

class HandleCards extends React.Component {
  render() {
    const {
      toggleSurname,
      handleWorstNote,
      handleBestNote,
      surnameCaption
    } = this.props;
    return (
      <HandleCardsContainer {...this.props}>
        <div className="button surname" onClick={toggleSurname}>
          {surnameCaption}
        </div>
        <div className="button worst" onClick={handleWorstNote}>
          pires notes
        </div>
        <div className="button best" onClick={handleBestNote}>
          meilleures notes
        </div>
      </HandleCardsContainer>
    );
  }
}

export default HandleCards;
