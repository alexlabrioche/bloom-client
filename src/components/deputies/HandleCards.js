import React from "react";
import styled, { css } from "styled-components";
import Global from "../../Global";
import SortButton from "./SortButton";

const HandleCardsContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding-top: 4rem;
  padding-bottom: 2rem;
  border-top: 1px solid rgba(230, 230, 230, 1);

  display: flex;
  font-weight: 700;
  color: ${Global.color.dark};
.separator {
  color: ${Global.color.light};
  

}
  /* .button {
    cursor: pointer;
    padding: 0.6rem 1rem;
    margin: 0.4rem 2rem 0.4rem 0rem;
    background: white;
    font-weight: 700;
    color: ${Global.color.dark};
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
        opacity: 0.9;
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
        opacity: 0.9;
      `}
  } */
`;

class HandleCards extends React.Component {
  render() {
    const {
      toggleSurname,
      handleWorstNote,
      handleBestNote,
      surnameCaption,
      isActiveSurname,
      isActiveBest,
      isActiveWorst
    } = this.props;
    return (
      <HandleCardsContainer className="container" {...this.props}>
        Trier les députés :&nbsp;
        <SortButton
          onClick={toggleSurname}
          underline={Global.color.primary}
          color={isActiveSurname ? Global.color.secondary : Global.color.dark}
        >
          {surnameCaption}
        </SortButton>
        <div className="separator">&nbsp;|&nbsp;</div>
        <SortButton
          onClick={handleBestNote}
          underline={Global.color.protect}
          color={isActiveBest ? Global.color.protect : Global.color.dark}
        >
          Meilleures notes
        </SortButton>
        <div className="separator">&nbsp;|&nbsp;</div>
        <SortButton
          onClick={handleWorstNote}
          underline={Global.color.destruct}
          color={isActiveWorst ? Global.color.destruct : Global.color.dark}
        >
          Pires notes
        </SortButton>
        {/* <div className="button surname" onClick={toggleSurname}>
          {surnameCaption}
        </div>
        <div className="button worst" onClick={handleWorstNote}>
          pires notes
        </div>
        <div className="button best" onClick={handleBestNote}>
          meilleures notes
        </div> */}
      </HandleCardsContainer>
    );
  }
}

export default HandleCards;
