import React, { Fragment } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Error404 from "../components/404/404";
export default function Category() {
  return (
    <Fragment>
      <Head>
        <title>Sahaj Blogs | Page Not Found</title>
      </Head>

      <div style={{ paddingTop: "4.5rem", minHeight: "100vh" }}>
        <Error404 />
      </div>
    </Fragment>
  );
}
