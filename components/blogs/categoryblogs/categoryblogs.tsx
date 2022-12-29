import React, { Fragment } from "react";
import styles from "./categoryblogs.module.scss";
import Heading from "../../ui/heading/heading";
import Blogcard from "../../ui/blogcard/blogcard";
const Latestblogs = ({ categoryBlogs, category }: any) => {
  return (
    <Fragment>
      <Heading>{category} Blogs</Heading>
      <div className={styles.latestblogs}>
        {categoryBlogs?.map((blog: any) => {
          return (
            <Blogcard
              key={blog._id}
              image={blog.image}
              category={blog.category}
              blogslug={blog.blogslug}
              heading={blog.heading}
              views={blog.views}
              likes={blog.likes}
              minread={blog.minread}
              content={blog.content}
              createdAt={blog.createdAt}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default Latestblogs;
