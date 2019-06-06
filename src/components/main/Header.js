import React from "react";
import styled from "styled-components";
import Global from "../../Global";
import ShowMore from "react-show-more";

const Container = styled.div`
  .header-title {
    text-align: center;
    margin-bottom: 40px;
    font-weight: 300;
    color: ${Global.color.accent};
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="col-12">
        <h1 className="header-title">
          Nos eurodéputés et la protection de l'océan
        </h1>
        <div className="header-intro">
          <ShowMore lines={3} more="Lire plus" less="Lire moins" anchorClass="">
            <p>
              Afin d'éclairer les citoyens sur leur choix lors des élections
              européennes, BLOOM a réalisé un classement des eurodéputés
              français, en fonction de leurs votes en matière de protection de
              l'océan.{" "}
            </p>
            <p>
              Cet outil vous permet d'avoir une vision simple et claire des
              choix faits par vos représentants au cours de cette dernière
              mandature lors des votes concernant la pêche. Une sélection de
              textes et d’amendements a été définie par l’équipe de BLOOM, une
              note a ensuite été calculée en fonction des votes des eurodéputés
              sur cette sélection (pour en savoir plus sur la méthode cliquez
              ici).
            </p>
            <p>
              Vous pouvez pour chaque eurodéputé découvrir le détail de ses
              votes . Vous pouvez également choisir de classer les eurodéputés,
              du plus protecteur au plus destructeur et inversement, parmi tous
              les eurodéputés français, ou seulement au sein du parti politique
              national de votre choix, ou encore seulement au sein du groupe
              politique européen de votre choix.
            </p>
          </ShowMore>
        </div>
      </Container>
    );
  }
}

export default Header;
