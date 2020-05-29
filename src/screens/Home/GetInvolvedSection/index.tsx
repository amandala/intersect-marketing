import React from "react";
import { H1, H2, P } from "../../../components/Typography";
import { ButtonLink } from "../../../components/Button";
import Section from "../../../components/Section";
import styles from "./index.module.scss";

const GetInvolved = () => {
  return (
    <Section>
      <div className={styles.Content}>
        <H1>Would YOU like to get involved?</H1>
        <P>
          We are looking for Crew members, Vendors, and Volunteers for both our
          monthly Inter.Sessions and our yearly Inter.Sect Art and Music
          Festival.
        </P>
        <ButtonLink className={styles.Cta} href="/media">
          Apply for the Media Team
        </ButtonLink>
        {/* //TODO: link weekend vendor application */}
        <ButtonLink className={styles.Cta} href="/vendors">
          Apply as a Festival Vendor
        </ButtonLink>
        <ButtonLink className={styles.Cta} href="/volunteer">
          Apply to Volunteer
        </ButtonLink>
        <H1 className={styles.CreativeHeading}>Calling all creatives!</H1>
        <P>
          We want to help you showcase your work. Apply as a live mural or
          canvas painter, artisan maker, or any type of creative. Show us what
          you've got so we can help show the world!
        </P>
        <ButtonLink className={styles.Cta} href="/creatives">
          Apply as a Creative
        </ButtonLink>
      </div>
    </Section>
  );
};

export default GetInvolved;
