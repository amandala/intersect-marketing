import React from "react";
import { H1, H2, P } from "../../../components/Typography";
import { ButtonLink } from "../../../components/Button";
import BlackDiv from "../../../components/BlackDiv";
import styles from "./index.module.scss";

const GetInvolved = () => {
  return (
    <BlackDiv>
      <div className={styles.Content}>
        <H1>
          Would YOU like to get involved? We are looking for Crew members,
          Vendors, and Volunteers.
        </H1>
        <ButtonLink className={styles.Cta} href="/media">
          Apply for the Media Team
        </ButtonLink>
        <ButtonLink className={styles.Cta} href="/volunteer">
          Apply to Volunteer
        </ButtonLink>
        <ButtonLink className={styles.Cta} href="/vendors">
          Apply as a vendor
        </ButtonLink>
        <H2 className={styles.CreativeHeading}>
          Creative Contribution Applications open March 22
        </H2>
        <P>
          Calling all creatives! We are looking to create the most engaging and
          entertaining space possible.
        </P>
        <P>
          Contribute your Live Art, Art Installation, Performance Art, and
          Workshops to Inter.Sect and help make Season 1 awesome.
        </P>
      </div>
    </BlackDiv>
  );
};

export default GetInvolved;
