import React, { Fragment } from "react";
import Head from "next/head";
import styles from "../../../styles/Home.module.scss";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { GetBlogsByCategory } from "../../../utils/api";
import CategoryBlogs from "../../../components/blogs/categoryblogs/categoryblogs";
export default function Category(props: any) {
  const router = useRouter();
  const category = router.query.category;
  return (
    <Fragment>
      <Head>
        <title>Sahaj Blogs | {category}</title>
      </Head>
      <CategoryBlogs categoryBlogs={props.categoryBlogs} category={category} />
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

export function getStaticPaths() {
  return {
    paths: ["/blogs/lifestyle", "/blogs/family", "/blogs/food"],
    fallback: "blocking",
  };
}
