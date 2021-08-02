import React from "react";
import Prismic from "@prismicio/client";
import Client from "../../prismic-config";
import cx from "classnames";
import GetInvolvedSection from "./GetInvolvedSection";
import AboutSection from "./AboutSection";
import AboveTheFold from "./AboveTheFold";
import StagesSection from "./StagesSection";
import { ButtonLinkExternal } from "../../components/Button";

import styles from "./index.module.scss";

const Home = () => {
  const delay = 15;

  const [showLoader, setShowLoader] = React.useState(true);

  let timer1: NodeJS.Timeout;
  React.useEffect(() => {
    // const done = cacheFiles(files);

    timer1 = setTimeout(() => setShowLoader(false), delay * 100);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  React.useEffect(() => {
    if (showLoader) {
      document.body.classList.add("lock-scroll");
    } else {
      document.body.classList.remove("lock-scroll");
    }
  }, [showLoader]);

  const [doc, setDocData] = React.useState<{
    data: {
      feature_image: { url: string };
      announcement: [{ text: string }];
      posters: [{ poster: { url: string } }];
    };
  }>();

  console.log(doc?.data.posters);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "home-page")
      );
      if (response) {
        console.log(response.results[0]);
        setDocData(response.results[0]);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.Wrapper}>
      <div className={cx(styles.Loader, { [styles.ShowLoader]: showLoader })}>
        <div className={styles.Ripple}>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={styles.Layout}>
        <AboveTheFold />
        <ButtonLinkExternal
          className={styles.Tickets}
          href="https://dropaganda.tickit.ca/events/12365"
        >
          Get Tickets
        </ButtonLinkExternal>

        <div className={styles.FeatureImageWrapper}>
          {doc?.data.posters.map((data) => {
            console.log(data);
            return (
              <img
                className={styles.Poster}
                src={data.poster.url}
                alt={"Bridge release poster"}
              />
            );
          })}
        </div>
        <AboutSection data={doc?.data.announcement} />
        <StagesSection />
        <GetInvolvedSection />
      </div>
    </div>
  );
};

export default Home;
