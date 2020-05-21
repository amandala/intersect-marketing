import React from "react";
import { P } from "../../components/Typography";
import { ButtonLinkExternal } from "../../components/Button";
import NebulaPage from "../../components/NebulaPage";
import Section from "../../components/Section";
import styles from "./index.module.scss";

const Media = () => {
  return (
    <NebulaPage heading="We want you, to capture the moment">
      <Section>
        <div className={styles.Details}>
          <P>
            If a picture says a thousand words, a video must say millions! Help
            us tell the story of the first ever Inter.Sect by joining our Media
            Team.
          </P>
          <div className={styles.Buttons}>
            <ButtonLinkExternal
              className={styles.ApplicationLink}
              href="https://forms.gle/jkwzZDQ7eoAxCjUv8"
            >
              Apply for the Media Team
            </ButtonLinkExternal>
          </div>
        </div>
      </Section>
    </NebulaPage>
  );
};

export default Media;
