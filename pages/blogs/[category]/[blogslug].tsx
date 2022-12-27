import React, { Fragment } from "react";
import Head from "next/head";
import styles from "../../../styles/Home.module.scss";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { GetBlogData, GetRecentBlogs } from "../../../utils/api";
export default function Blog(props: any) {
  const router = useRouter();
  const category = router.query.category;
  const blogslug = router.query.blogslug;
  return (
    <Fragment>
      <Head>
        <title>
          Sahaj Blogs | {category} | {blogslug}
        </title>
      </Head>

      <div className={styles.container}>
        Data of {blogslug} blog filtered by category ({category}) and blogslug
        <br />
        Recent Blogs Section
      </div>
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const category = context.params?.category as string;
  const blogslug = context.params?.blogslug as string;
  const blogdata = await GetBlogData(category, blogslug);
  const recentBlogs = await GetRecentBlogs();
  return {
    props: {
      blogdata,
      recentBlogs,
    },
  };
};




// export function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// }
