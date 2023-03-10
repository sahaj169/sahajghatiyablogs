import React, { Fragment } from "react";
import styles from "./mostlikedblogs.module.scss";
import Heading from "../../ui/heading/heading";
import Blogcard from "../../ui/blogcard/blogcard";
const MostLikedblogs = ({ mostlikedblogs }: any) => {
  return (
    <Fragment>
      <Heading>Most Liked Blogs</Heading>
      <div className={styles.latestblogs}>
        {mostlikedblogs?.slice(0, 3).map((blog: any) => {
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

export default MostLikedblogs;
