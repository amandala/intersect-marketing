import React from "react";
import Prismic from "@prismicio/client";
import Client from "../../prismic-config";

import { P, H1, H2, Tiny } from "../../components/Typography";
import StarHeaderPage from "../../components/StarHeaderPage";

import styles from "./index.module.scss";

const Updates = () => {
  const [doc, setDocData] = React.useState([
    {
      data: {
        release_date: "",
        title: "",
        details: [{ text: "" }],
      },
    },
  ]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "update")
      );
      if (response) {
        setDocData(response.results);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <StarHeaderPage
      black={false}
      header={
        <div className={styles.Header}>
          <H1>Inter.Sect Updates</H1>
        </div>
      }
    >
      {!loading ? (
        doc.map((update) => {
          return (
            <div>
              <Tiny>{update.data.release_date}</Tiny>
              <H2>{update.data.title}</H2>
              {update.data.details.map((detail) => (
                <P>{detail.text}</P>
              ))}
            </div>
          );
        })
      ) : (
        <div className={styles.Loader}>
          <div className={styles.Ripple}>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </StarHeaderPage>
  );
};

export default Updates;
