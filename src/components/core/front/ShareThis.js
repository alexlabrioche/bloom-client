import React from "react";
import { InlineReactionButtons } from "sharethis-reactjs";
import { InlineShareButtons } from "sharethis-reactjs";
import { StickyShareButtons } from "sharethis-reactjs";
import { InlineFollowButtons } from "sharethis-reactjs";

class ShareThis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <StickyShareButtons
        config={{
          alignment: "left", // alignment of buttons (left, right)
          color: "social", // set the color of buttons (social, white)
          enabled: true, // show/hide buttons (true, false)
          font_size: 16, // font size for the buttons
          hide_desktop: false, // hide buttons on desktop (true, false)
          labels: "counts", // button labels (cta, counts, null)
          language: "en", // which language to use (see LANGUAGES)
          min_count: 0, // hide react counts less than min_count (INTEGER)
          networks: [
            // which networks to include (see SHARING NETWORKS)
            "linkedin",
            "facebook",
            "twitter",
            "whatsapp",
            "email"
          ],
          padding: 12, // padding within buttons (INTEGER)
          radius: 4, // the corner radius on each button (INTEGER)
          show_total: true, // show/hide the total share count (true, false)
          show_mobile: true, // show/hide the buttons on mobile (true, false)
          show_toggle: true, // show/hide the toggle buttons (true, false)
          size: 48, // the size of each button (INTEGER)
          top: 240 // offset in pixels from the top of the page

          // // OPTIONAL PARAMETERS
          // url: "https://www.sharethis.com", // (defaults to current url)
          // image: "https://bit.ly/2CMhCMC", // (defaults to og:image or twitter:image)
          // description: "custom text", // (defaults to og:description or twitter:description)
          // title: "custom title", // (defaults to og:title or twitter:title)
          // message: "custom email text", // (only for email sharing)
          // subject: "custom email subject", // (only for email sharing)
          // username: "custom twitter handle" // (only for twitter sharing)
        }}
      />
    );
  }
}

export default ShareThis;
