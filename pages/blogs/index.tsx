import React, { Fragment } from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import { GetStaticProps } from "next";
import { GetAllBlogs } from "../../utils/api";
export default function AllBlogs(props:any) {
  return (
    <Fragment>
      <Head>
        <title>Sahaj Blogs | Blogs</title>
      </Head>

      <div className={styles.container}>List of All blogs</div>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allBlogs = await GetAllBlogs();

  return {
    props: {
      allBlogs,
    },
    revalidate: 6000,
  };
};
