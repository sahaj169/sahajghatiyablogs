import React, { Fragment } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { GetStaticProps } from "next";
import {
  GetTopWeeklyBlogs,
  GetBlogsByLikes,
  GetRecentBlogs,
  GetPositiveThoughts,
} from "../utils/api";
export default function Home(props: any) {
  return (
    <Fragment>
      <Head>
        <title>Sahaj Ghatiya Blogs</title>
      </Head>

      <div className={styles.container}>
        Top weekly blogs carousel <br />
        Category Section <br />
        Recent / Latest Blogs <br />
        Most Liked Blogs <br />
        Positive Thoughts Image Carousel <br />
      </div>
    </Fragment>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const topWeeklyBlogs = await GetTopWeeklyBlogs();
  const blogsByLikes = await GetBlogsByLikes();
  const recentBlogs = await GetRecentBlogs();
  const positiveThoughts = await GetPositiveThoughts();

  return {
    props: {
      topWeeklyBlogs,
      blogsByLikes,
      recentBlogs,
      positiveThoughts,
    },
    revalidate: 600,
  };
};

