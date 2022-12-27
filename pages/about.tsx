import React, { Fragment } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
export default function Category() {
  return (
    <Fragment>
      <Head>
        <title>Sahaj Blogs | About</title>
      </Head>

      <div className={styles.container}>
        About Section <br /> Contact Form
      </div>
    </Fragment>
  );
}
