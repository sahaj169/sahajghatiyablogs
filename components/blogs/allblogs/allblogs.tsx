import React, { Fragment } from "react";
import styles from "./allblogs.module.scss";
import Heading from "../../ui/heading/heading";
import Blogcard from "../../ui/blogcard/blogcard";
const Latestblogs = ({ allblogs }: any) => {
  return (
    <Fragment>
      <Heading>Sahaj Ghatiya Blogs</Heading>
      <div className={styles.latestblogs}>
        {allblogs?.map((blog: any) => {
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
