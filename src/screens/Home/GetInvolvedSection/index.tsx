import React from "react";
import { H1, P } from "../../../components/Typography";
import { ButtonLink } from "../../../components/Button";
import Section from "../../../components/Section";
import styles from "./index.module.scss";

const GetInvolved = () => {
  return (
    <Section>
      <div className={styles.Content}>
        <H1>
          Would YOU like to get involved? We are looking for Crew members,
          Vendors, and Volunteers.
        </H1>
        <ButtonLink className={styles.Cta} href="/media">
          Apply for the Media Team
        </ButtonLink>
        <ButtonLink className={styles.Cta} href="/vendors">
          Apply as a Vendor
        </ButtonLink>
        <ButtonLink className={styles.Cta} href="/volunteer">
          Apply to Volunteer
        </ButtonLink>
        <H1 className={styles.CreativeHeading}>Calling all creatives!</H1>
        <P>
          We will be featuring live art on our live streams and vendor
          marketplace.
        </P>
        <ButtonLink className={styles.Cta} href="/creatives">
          Apply as a Creative
        </ButtonLink>
      </div>
    </Section>
  );
};

export default GetInvolved;
