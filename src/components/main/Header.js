import React from "react";
import styled from "styled-components";
import Global from "../../Global";
import ShowMore from "react-show-more";
import Api from "../../utils/Api";

const Container = styled.div`
  .header-title {
    text-align: center;
    margin-bottom: 5rem;
    margin-top: 5rem;
    font-weight: 300;
    color: ${Global.color.accent};
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      paragraph1: "",
      paragraph2: "",
      paragraph3: ""
    };
  }

  async componentDidMount() {
    const intro = await Api.getIntro();
    console.log("intro", intro[0]);
    this.setState({
      title: intro[0].title,
      paragraph1: intro[0].paragraph1,
      paragraph2: intro[0].paragraph2,
      paragraph3: intro[0].paragraph3
    });
  }

  render() {
    const { title, paragraph1, paragraph2, paragraph3 } = this.state;
    console.log("title", title);
    return (
      <Container className="col-12">
        <h1 className="header-title">{title}</h1>
        <div className="header-intro">
          <ShowMore lines={3} more="Lire plus" less="Lire moins" anchorClass="">
            <p>{paragraph1} </p>
            <p>{paragraph2}</p>
            <p>{paragraph3}</p>
            <p>
              Pour en savoir plus sur la méthode <a>cliquez ici</a>
            </p>
          </ShowMore>
        </div>
      </Container>
    );
  }
}

export default Header;
