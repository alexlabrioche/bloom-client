import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import Greet from "../core/front/Greet";
import Shout from "../core/front/Shout";
import Gauge from "../core/front/Gauge";

import Config from "../../Config";
import Global from "../../Global";

const Container = styled.div`
  ${props => props.isScrolled && css``}
  .header {
    background: white;
    padding: 1rem;
    border-bottom: 1px solid rgba(230, 230, 230, 1);
    z-index: 10;
    ${props =>
      props.isScrolled &&
      css`
        padding-left: 3rem;
        height: 5rem;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        box-shadow: 0px 3px 5px 0px rgba(230, 227, 230, 1);
      `}
  }
  .header-img-container {
    height: 14rem;
    width: 16rem;
    padding: 1rem;
    overflow: auto;
    ${props =>
      props.isScrolled &&
      css`
        height: 3rem;
        width: 6rem;
        padding: 0;
      `}
  }
  .header-img {
    border-radius: 2px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .header-title {
    font-size: 3rem;
    font-weight: 300;
    text-align: center;
    color: ${Global.color.accent};
    transition: 0.3s ease;
    ${props =>
      props.isScrolled &&
      css`
        font-size: 2rem;
        margin-left: -40rem;
      `}
  }
  .header-gauge-legend {
    font-size: 14px;
    text-align: center;
    margin-top: -20px;
  }
  .scrolled {
    ${props =>
      props.isScrolled &&
      css`
        display: none;
      `}
  }
`;

class DeputyHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    const { isScrolled } = this.state;
    if (window.scrollY > 120) {
      !isScrolled &&
        this.setState({
          isScrolled: true
        });
    }
    if (window.scrollY < 120) {
      isScrolled &&
        this.setState({
          isScrolled: false
        });
    }
  }

  greetOrShoutDeputy(note) {
    if (note >= 50) {
      return <Greet note={note} />;
    } else {
      return <Shout note={note} />;
    }
  }

  render() {
    const { deputy, finalNote } = this.props;
    const { isScrolled } = this.state;
    return (
      <Container isScrolled={isScrolled}>
        <div className="header row">
          <div className="offset-2 col-4 offset-lg-0 col-lg-3">
            <div className="header-img-container ">
              <img
                className="header-img"
                src={`${Config.server}/${deputy.picture}`}
                alt={deputy.slug}
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="header-content">
              <div className="header-title">{deputy.name}</div>
              <p className="scrolled header-description">
                Groupe au Parlement Européen :{" "}
                <Link to={`/groupes/${deputy.group.slug}`}>
                  {deputy.group.name}
                </Link>
              </p>
              <p className="scrolled header-description">
                Parti National :{" "}
                <Link to={`/partis/${deputy.party.slug}`}>
                  {deputy.party.name}
                </Link>
              </p>
              <p className="scrolled header-description">
                {deputy.description}
              </p>
              <div className="scrolled">
                {this.greetOrShoutDeputy(finalNote)}
              </div>
            </div>
          </div>
          <div className="offset-3 offset-lg-0 col-3">
            <div className="scrolled header-gauge">
              <Gauge finalNote={finalNote} />
              <p className="scrolled header-gauge-legend">
                % de votes protecteur de l'océan
              </p>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default DeputyHeader;
