import React from "react";
import { P, H1, H2 } from "../../components/Typography";
import StarHeaderPage from "../../components/StarHeaderPage";

import styles from "./index.module.scss";

const About = () => {
  return (
    <StarHeaderPage
      black={false}
      header={
        <div className={styles.Header}>
          <H1>2020 Intersect Art and Music Festival Postponement Notice</H1>
        </div>
      }
    >
      <H2>We're pretty bummed :(</H2>
      <P>
        Due to the extraneous and unfortunate events of this year, we must make
        the difficult choice to postpone the adventure until August 20th, 2021.
      </P>
      <P>A few important things:</P>
      <ul className={styles.List}>
        <li className={styles.ListItem}>
          <strong>If you have a hardcopy ticket:</strong> Please email
          info@intersectamf.com to exchange for a new ticket for the 2021 year,
          or to get a refund.
        </li>
        <li className={styles.ListItem}>
          <strong>If you bought a ticket online:</strong> You have been be sent
          an email allowing you to choose from multiple options, including a
          refund. Please email info@intersectamf.com if you have questions or
          issues.
        </li>
        <li className={styles.ListItem}>
          <strong>If you are a vendor:</strong> Please email{" "}
          <a className={styles.Link} href="mailto:liveart@intersectamf.com">
            vendor@intersectamf.com.
          </a>{" "}
          regarding your vendor fees.
        </li>
      </ul>
      <H2>But all is not lost :)</H2>
      <P>
        Keep your eyes peeled for the upcoming “Inter.Sessions”, which will host
        a fresh collection of Livestreams, Podcasts, Interviews new exciting
        collaborations with the wonderful artists and musicians we have booked
        for August 20th, 2021!
      </P>
      <H2>And we want to help!</H2>
      <P>
        <strong>Vendors:</strong> Talk to us about the ways we can help you get
        your amazing products out there, for the world to see!
      </P>
      <P>
        <strong>Artists/Painters:</strong> We want to talk to you about Art
        Streams! Contact us at{" "}
        <a className={styles.Link} href="mailto:liveart@intersectamf.com">
          liveart@intersectamf.com.
        </a>
      </P>
    </StarHeaderPage>
  );
};

export default About;
