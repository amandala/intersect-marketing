import React from "react";
import { P, H1 } from "../../../components/Typography";
import Section from "../../../components/Section";
import { ButtonLink } from "../../../components/Button";
import styles from "./index.module.scss";

const AboutSection = ({ data }: { data?: [{ text: string }] }) => {
  return (
    <div>
      <Section>
        <div className={styles.Content}>
          <H1 className={styles.Centered}>Stay up to date</H1>
          {data && data.map((p) => <P className={styles.Centered}>{p.text}</P>)}
          <div className={styles.Cta}>
            <ButtonLink href="/updates">See Updates</ButtonLink>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutSection;
