import React, { Fragment } from "react";
import Head from "next/head";
import styles from "../../../styles/Home.module.scss";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { GetBlogData, GetRecentBlogs } from "../../../utils/api";
import SingleBlog from "../../../components/blogs/singleblog/blog/blog";
// import RecentBlog from "../../../components/blogs/singleblog/recentblogs/recentblog";
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
      <SingleBlog blogdata={props.blogdata} />
      {/* <RecentBlog recentblogs={props.recentBlogs} /> */}
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const category = context.params?.category as string;
  const blogslug = context.params?.blogslug as string;
  const blogdata = await GetBlogData(category, blogslug);
  // const recentBlogs = await GetRecentBlogs();
  return {
    props: {
      blogdata: blogdata[0],
      // recentBlogs,
    },
  };
};

// export function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// }
