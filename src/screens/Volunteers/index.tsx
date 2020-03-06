import React from "react";
import { H1, H2, P } from "../../components/Typography";
import styles from "./index.module.scss";

import roles from "./roles.js";

type VolunteerRoleType = {
  title: string;
  description: Array<string>;
  requirementsTitle?: string;
  requirements?: Array<string>;
};

const Volunteers = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Layout}>
        <H1 className={styles.Heading}>Help us make Inter.sect awesome!</H1>
      </div>
      <div className={styles.Backbone}>
        <div className={styles.HelpUs}>
          <P>
            As you know, volunteers are the backbone of any festival. They're
            the folks that make the magic happen and a festival simply cannot
            happen without a whole team of helpers.
          </P>
          <P>
            As a volunteer, not only will you have a chance to help launch this
            festival from the ground up, you'll definitely make some wicked new
            friends while you’re at it!
          </P>
          <P>
            Check out our open positions below and{" "}
            <strong>click any role to apply!</strong>
          </P>
        </div>
      </div>

      <div className={styles.Roles}>
        {roles.map(role => (
          <a
            className={styles.RoleLinkWrapper}
            target="_blank"
            rel="noopener noreferrer"
            href="https://forms.gle/ukMyw13KTC355ois7"
          >
            <div className={styles.Role}>
              <H2 className={styles.RoleTitle}>{role.title}</H2>
              {role.description.map(description => (
                <P small className={styles.RoleDescription}>
                  {description}
                </P>
              ))}
              {role.requirements ? (
                <>
                  {role.requirementsTitle ? (
                    <P small className={styles.RoleRequirementsTitle}>
                      {role.requirementsTitle}
                    </P>
                  ) : null}
                  <ul className={styles.Requirements}>
                    {role.requirements.map(requirement => (
                      <li>{requirement}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Volunteers;
