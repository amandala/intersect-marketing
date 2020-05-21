import React from "react";
import { P } from "../../components/Typography";
import { ButtonLinkExternal } from "../../components/Button";
import NebulaPage from "../../components/NebulaPage";
import Section from "../../components/Section";
import styles from "./index.module.scss";

const Creatives = () => {
  return (
    <NebulaPage heading="Let's get creative!">
      <Section>
        <div className={styles.Details}>
          <P>
            Be a part of our space-pirate, survival story by contributing your
            themed art, performance, or workshop
          </P>
          <div className={styles.Buttons}>
            <ButtonLinkExternal
              className={styles.ApplicationLink}
              href="https://forms.gle/RtqsuZVJrmjNu6P76"
            >
              Contribute to the Art Gallery
            </ButtonLinkExternal>
            <ButtonLinkExternal
              className={styles.ApplicationLink}
              href="https://forms.gle/T2UWTGusAjrRmSuy7"
            >
              Build an Art Installation
            </ButtonLinkExternal>
            <ButtonLinkExternal
              className={styles.ApplicationLink}
              href="https://forms.gle/JJq38ZJieyJo4tMx8"
            >
              Create Live Art
            </ButtonLinkExternal>
            <ButtonLinkExternal
              className={styles.ApplicationLink}
              href="https://forms.gle/1QS4WMpmFWN3BFyd9"
            >
              Do a Live Performance
            </ButtonLinkExternal>
            <ButtonLinkExternal
              className={styles.ApplicationLink}
              href="https://forms.gle/fmR2xSTdxLEooXFd6"
            >
              Host a Workshop
            </ButtonLinkExternal>
          </div>
        </div>
      </Section>
    </NebulaPage>
  );
};

export default Creatives;
