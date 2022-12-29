import React, { Fragment } from "react";
import styles from "./latestblogs.module.scss";
import Heading from "../../ui/heading/heading";
import Blogcard from "../../ui/blogcard/blogcard";
import Link from "next/link";
const Latestblogs = ({ latestblogs }: any) => {
  return (
    <Fragment>
      <Heading>Latest Blogs</Heading>
      <div className={styles.latestblogs}>
        {latestblogs?.slice(0, 3).map((blog: any) => {
          return (
            <Link
              href={`/blogs/${blog.category}/${blog.blogslug}`}
              key={blog._id}
            >
              <Blogcard image={blog.image} heading={blog.heading} views={blog.views} likes={blog.likes} timestamp={blog.timestamp} minread={blog.minread} content={blog.content}/>
            </Link>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Latestblogs;
