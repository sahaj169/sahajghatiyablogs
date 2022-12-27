import React, { Fragment } from "react";
import Head from "next/head";
import styles from "../../../styles/Home.module.scss";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { GetBlogsByCategory } from "../../../utils/api";
export default function Category(props:any) {
  const router = useRouter();
  const category = router.query.category;

  return (
    <Fragment>
      <Head>
        <title>Sahaj Blogs | {category}</title>
      </Head>

      <div className={styles.container}>
        List of {category} blogs filtered by category
      </div>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const category = context.params?.category as string;
  const categoryBlogs = await GetBlogsByCategory(category);
  return {
    props: {
      categoryBlogs,
    },
    revalidate: 6000,
  };
};
