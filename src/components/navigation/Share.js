import React from "react";
import styled from "styled-components";

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
  display: flex;
  flex-direction: row;
  align-items: center;
  .share-element {
    margin-right: 1rem;
    outline: 0;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
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
    return (
      <ShareContainer>
        <FacebookShareCount className="share-element" url={shareUrl} />

        <FacebookShareButton
          className="share-element"
          url={shareUrl}
          quote="Bloom app c'est trop kiffant j'suis choks faut protegezer les océans la mif"
          hashtag="#LesPoissonsCestLaLife"
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>

        <LinkedinShareButton className="share-element" url={shareUrl}>
          <LinkedinIcon size={32} />
        </LinkedinShareButton>

        <TwitterShareButton
          className="share-element"
          url={shareUrl}
          title="Faut proteger les océans frérot !"
          via="nom du compte Twitter Bloom"
          hashtags={["hashtag", "poissons", "protectTheOceans", "zerzerBANG"]}
        >
          <TwitterIcon size={32} />
        </TwitterShareButton>

        <WhatsappShareButton
          className="share-element"
          url={shareUrl}
          title="Faut proteger les océans frérot !"
        >
          <WhatsappIcon size={32} />
        </WhatsappShareButton>

        <EmailShareButton
          className="share-element"
          url={shareUrl}
          subject="Faut proteger les océans frérot !"
          body="Bouges ton ionf et partage spread the love voici le lien de cette super App du turfu BANGS"
          separator=" "
        >
          <EmailIcon size={32} />
        </EmailShareButton>
      </ShareContainer>
    );
  }
}

export default Share;
