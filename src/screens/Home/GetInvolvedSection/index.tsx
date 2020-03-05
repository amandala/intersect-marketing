import React from "react";
import { H1 } from "../../../components/Typography";
import { ButtonLinkExternal } from "../../../components/Button";
import styles from "./index.module.scss";

const GetInvolved = () => {
  return (
    <div className={styles.GetInvolved}>
      <div className={styles.Content}>
        <H1 className={styles.Heading}>
          Would YOU like to get involved? We are looking for Volunteers/Crew
          members, Artists and Vendors
        </H1>
        <div className={styles.HelpUs}>
          <ButtonLinkExternal href="mailto:info@intersectamf.com">
            Send us an email
            {/* <span className={styles.SmallBreak}>info@intersectamf.com</span> */}
          </ButtonLinkExternal>
        </div>
        {/* <ApplicationSection /> */}
      </div>
    </div>
  );
};

export default GetInvolved;
