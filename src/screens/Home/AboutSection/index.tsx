import React from "react";
import { P } from "../../../components/Typography";
import BlackDiv from "../../../components/BlackDiv";
import styles from "./index.module.scss";

const AboutSection = () => {
  return (
    <BlackDiv>
      <div className={styles.Content}>
        <P>
          Welcome to Northern Alberta’s new, premier art and music festival
          hosted by Dropaganda Productions. Brought together by industry
          professionals from all over Western Canada, Inter.Sect seeks to create
          a canvas for music festival lovers of all demographics to paint an
          experience that represents them. Bringing together local favorites as
          well as internationally- acclaimed Canadian Folk, Bluegrass and a
          broad spectrum of Electronic music, Inter.Sect promises a little
          something for everyone.
        </P>
        <P>
          Our family friendly event will be host to Workshops, an Art Gallery,
          Live Art Installments, Kids Areas, Artisan Vendors, and a locally
          curated Farmers Market where attendees will be able to support local
          Alberta farmers while enjoying fresh products on site!
        </P>
        <P>
          Family camping, full service RV camping, and day passes will be
          available for the event.
        </P>
      </div>
    </BlackDiv>
  );
};

export default AboutSection;
