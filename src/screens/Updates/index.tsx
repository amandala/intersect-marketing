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
        title: "test",
        details: [{ text: "TEST" }],
      },
    },
  ]);

  console.log(doc);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "update")
      );
      if (response) {
        console.log(response);
        setDocData(response.results);
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
      {doc &&
        doc.map((update) => {
          console.log(update);
          return (
            <div>
              <Tiny>{update.data.release_date}</Tiny>
              <H2>{update.data.title}</H2>
              {update.data.details.map((detail) => (
                <P>{detail.text}</P>
              ))}
            </div>
          );
        })}
    </StarHeaderPage>
  );
};

export default Updates;
