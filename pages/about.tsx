import React, { Fragment } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import About from "../components/about/about";
export default function AboutPage() {
  return (
    <Fragment>
      <Head>
        <title>Sahaj Blogs | About</title>
      </Head>

      <About />
    </Fragment>
  );
}
