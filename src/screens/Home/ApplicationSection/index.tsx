import React from "react";
import cx from "classnames";
import Link from "../../../components/Link";
import styles from "./index.module.scss";

const ApplicationSection = () => {
  return (
    <div className={styles.HelpUs}>
      <Link href="https://forms.gle/ix2vbwdyUUAWnsqh6">
        Apply to be a volunteer
      </Link>
      <h3 className={cx(styles.SubheadingCentered, styles.GetInvolved)}>
        Check back for Artist and Vendor applications
      </h3>
    </div>
  );
};

export default ApplicationSection;
