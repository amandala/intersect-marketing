import React from "react";
import { H2, P } from "../../components/Typography";
import { ButtonLinkExternal } from "../../components/Button";
import NebulaPage from "../../components/NebulaPage";
import BlackDiv from "../../components/BlackDiv";
import styles from "./index.module.scss";

const Vendors = () => {
  return (
    <NebulaPage heading="Sell your local produce, prepared food, and artisanal goods in one of our markets">
      <BlackDiv>
        <div className={styles.Markets}>
          <P>
            Inter.Sect Season 1 has two awesome vendor spots. With a diverse
            crowd comes diverse shopping needs and we aim to provide something
            for every taste and style.
          </P>
          <div className={styles.Market}>
            <H2>Farmer's Market</H2>
            <P>
              We have a large enclosed and fully serviced market space perfect
              for selling local fresh produce, meats, and other delicious
              goodies. The Farmer's Market is located just outside the main
              fairground gate providing an on site one-stop-shop location for
              all our attendees.
            </P>
            <P>
              Click the link below to apply to be a vendor at our Farmer's
              Market.
            </P>
            <div className={styles.Buttons}>
              <ButtonLinkExternal
                className={styles.ApplicationLink}
                href="https://forms.gle/vAhEvQyA8TxDkKbT6"
              >
                Farmer's Market Application
              </ButtonLinkExternal>
            </div>
          </div>
          <div className={styles.Market}>
            <H2>Galley Market</H2>
            <P>
              The Galley Market is located within the fairgrounds near the
              Galley Stage. We have tones of space to host food and artisanal
              vendors selling everything including:
            </P>
            <ul>
              <li>Food and drink</li>
              <li>Clothing, Jewellery, and Accessories</li>
              <li>Art and Experiences</li>
              <li>Anything else you think a Space Pirate might need!</li>
            </ul>
            <P>
              Click the appropriate link below to apply for a spot in the Galley
              Market.
            </P>
            <div className={styles.Buttons}>
              <ButtonLinkExternal
                className={styles.ApplicationLink}
                href="https://forms.gle/WwoJ1jP4g5wAxZnWA"
              >
                Galley Market Application
              </ButtonLinkExternal>
              <ButtonLinkExternal
                className={styles.ApplicationLink}
                href="https://forms.gle/af7cNwuYGPNygruQ8"
              >
                Artisan Vendor Application
              </ButtonLinkExternal>
            </div>
          </div>
        </div>
      </BlackDiv>
    </NebulaPage>
  );
};

export default Vendors;
