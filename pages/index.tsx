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

import TopWeeklyBlogs from "../components/home/topweeklyblogs/topweeklyblogs";
import Categories from "../components/home/categories/categories";
import LatestBlogs from "../components/home/latestblogs/latestblogs";
import MostLikedBlogs from "../components/home/mostlikedblogs/mostlikedblogs";
import PositiveThoughts from "../components/home/positivethoughts/positivethoughts";

export default function Home(props: any) {
  console.log(props)
  return (
    <Fragment>
      <Head>
        <title>Sahaj Ghatiya Blogs</title>
      </Head>
      {/* <TopWeeklyBlogs topweeklyblogs={props.topWeeklyBlogs} /> */}
      <Categories />
      <LatestBlogs latestblogs={props.recentBlogs} />
      <MostLikedBlogs />
      <PositiveThoughts />
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
