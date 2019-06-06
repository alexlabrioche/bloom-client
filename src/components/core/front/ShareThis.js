import React from "react";
import { StickyShareButtons } from "sharethis-reactjs";
import { InlineShareButtons } from "sharethis-reactjs";

class ShareThis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <StickyShareButtons
          config={{
            alignment: "left", // alignment of buttons (left, right)
            color: "social", // set the color of buttons (social, white)
            enabled: true, // show/hide buttons (true, false)
            font_size: 16, // font size for the buttons
            hide_desktop: false, // hide buttons on desktop (true, false)
            labels: "counts", // button labels (cta, counts, null)
            language: "fr", // which language to use (see LANGUAGES)
            min_count: 10, // hide react counts less than min_count (INTEGER)
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
            show_mobile: false, // show/hide the buttons on mobile (true, false)
            show_toggle: true, // show/hide the toggle buttons (true, false)
            size: 48, // the size of each button (INTEGER)
            top: 240, // offset in pixels from the top of the page

            // // OPTIONAL PARAMETERS
            url: "http://localhost:3000" // (defaults to current url)
            // image: "https://bit.ly/2CMhCMC", // (defaults to og:image or twitter:image)
            // description: "custom text", // (defaults to og:description or twitter:description)
            // title: "custom title", // (defaults to og:title or twitter:title)
            // message: "custom email text", // (only for email sharing)
            // subject: "custom email subject", // (only for email sharing)
            // username: "custom twitter handle" // (only for twitter sharing)
          }}
        />
        {/* <InlineShareButtons
          config={{
            alignment: "center", // alignment of buttons (left, center, right)
            color: "social", // set the color of buttons (social, white)
            enabled: true, // show/hide buttons (true, false)
            font_size: 16,
            labels: "cta", // button labels (cta, counts, null)
            language: "fr", // which language to use (see LANGUAGES)
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
            show_total: true,
            size: 40, // the size of each button (INTEGER)

            // OPTIONAL PARAMETERS
            url: "http://localhost:3000" // (defaults to current url)
            // image: "https://bit.ly/2CMhCMC", // (defaults to og:image or twitter:image)
            // description: "custom text", // (defaults to og:description or twitter:description)
            // title: "custom title", // (defaults to og:title or twitter:title)
            // message: "custom email text", // (only for email sharing)
            // subject: "custom email subject", // (only for email sharing)
            // username: "custom twitter handle" // (only for twitter sharing)
          }}
        /> */}
      </div>
    );
  }
}

export default ShareThis;
