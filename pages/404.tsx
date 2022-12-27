import React, { Fragment } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
export default function Category() {
  return (
    <Fragment>
      <Head>
        <title>Sahaj Blogs | Page Not Found</title>
      </Head>

      <div className={styles.container}>Page Not Found</div>
    </Fragment>
  );
}
