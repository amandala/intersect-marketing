import React from "react";
import { H1, H2 } from "../../../components/Typography";
import { ButtonLink } from "../../../components/Button";
import BlackDiv from "../../../components/BlackDiv";
import styles from "./index.module.scss";

const GetInvolved = () => {
  return (
    <BlackDiv>
      <div className={styles.Content}>
        <H1>
          Would YOU like to get involved? We are looking for Artists, Crew
          members, Vendors, and Volunteers
        </H1>
        <ButtonLink className={styles.Cta} href="/media">
          Apply for the Media Team
        </ButtonLink>
        <ButtonLink className={styles.Cta} href="/volunteers">
          Apply to Volunteer
        </ButtonLink>
        <ButtonLink className={styles.Cta} href="/vendors">
          Apply as a vendor
        </ButtonLink>
        <H2>
          Live Art, Art Installation, Performance Art, Art Gallery, and Media
          applications open March 22
        </H2>
      </div>
    </BlackDiv>
  );
};

export default GetInvolved;
