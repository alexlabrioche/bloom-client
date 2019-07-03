import React from "react";
import styled from "styled-components";
import Global from "../../Global";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton
} from "react-share";

import { FacebookShareCount } from "react-share";

import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  EmailIcon
} from "react-share";

const ShareContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  .element {
    margin-right: 1rem;
    outline: 0;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
    }
  }
  .share-text {
    font-family: ${Global.font.title};
    font-weight: ${Global.font.weight.caption};
    color: ${Global.color.primary};
    display: flex;
    align-self: center;
    margin-right: 1.5rem;
    .share-counter {
      font-weight: ${Global.font.weight.header};
    }
  }
`;

class Share extends React.Component {
  state = {
    shareUrl: ""
  };
  componentDidMount() {
    // const shareUrl = window.location.href;
    // console.info("Share shareUrl", shareUrl);
    const shareUrl = "https://www.residentadvisor.net/events/fr/paris";
    this.setState({ shareUrl });
  }
  // componentDidUpdate() {
  //   const { shareUrl } = this.state;
  //   const newUrl = window.location.href;
  //   console.info("Share NEW url", newUrl);
  //   console.info("Share     url", shareUrl);
  //   shareUrl !== newUrl && this.setState({ shareUrl: newUrl });
  // }

  render() {
    const { shareUrl } = this.state;
    const { mobileView } = this.props;
    return (
      <ShareContainer>
        <div className="share-text">
          <div>Déjà&nbsp;</div>

          <FacebookShareCount className="share-counter" url={shareUrl} />
          <div>&nbsp;partages&nbsp;!</div>
        </div>

        <FacebookShareButton
          className="element"
          url={shareUrl}
          quote="Bloom app c'est trop kiffant j'suis choks faut protegezer les océans la mif"
          hashtag="#LesPoissonsCestLaLife"
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>

        <LinkedinShareButton className="element" url={shareUrl}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>

        <TwitterShareButton
          className="element"
          url={shareUrl}
          title="Faut proteger les océans frérot !"
          via="nom du compte Twitter Bloom"
          hashtags={["hashtag", "poissons", "protectTheOceans", "zerzerBANG"]}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>

        <WhatsappShareButton
          className="element"
          url={shareUrl}
          title="Faut proteger les océans frérot !"
        >
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>

        <EmailShareButton
          className="element"
          url={shareUrl}
          subject="Faut proteger les océans frérot !"
          body="Bouges ton ionf et partage spread the love voici le lien de cette super App du turfu BANGS"
          separator=" "
        >
          <EmailIcon size={32} round={true} />
        </EmailShareButton>
      </ShareContainer>
    );
  }
}

export default Share;
