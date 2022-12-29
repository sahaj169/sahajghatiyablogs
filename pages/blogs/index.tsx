import React, { Fragment } from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import { GetStaticProps } from "next";
import { GetAllBlogs } from "../../utils/api";
import AllBlogs from "../../components/blogs/allblogs/allblogs";
export default function Blogs(props: any) {
  return (
    <Fragment>
      <Head>
        <title>Sahaj Blogs | Blogs</title>
      </Head>
      <AllBlogs allblogs={props.allBlogs} />
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
