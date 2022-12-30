import React, { Fragment } from "react";
import styles from "./blog.module.scss";
import Image from "next/image";
import { IoStatsChart } from "react-icons/io5";
import { BsSuitHeart } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import moment from "moment";
import Link from "next/link";
const Blog = ({ blogdata }: any) => {
  console.log(blogdata);
  const getpostedtime = (createdAt: number) => {
    const time = moment(new Date(createdAt * 1000)).from(new Date());
    return time;
  };
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.blogcard}>
          <div className={styles.blogimage}>
            <div className={styles.imgdiv}>
              <Image src={blogdata.image} alt="blog image" fill sizes="100%" />
            </div>
          </div>
          <div className={styles.blogdetails}>
            <div className={styles.blogcontent}>
              <h1>{blogdata.heading}</h1>
              <p>A {blogdata.category} Blog</p>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.icon}>
                  <IoStatsChart />
                  <p>Views</p>
                </div>
                <span>{blogdata.views}</span>
              </div>
              <div className={styles.stat}>
                <div className={styles.icon}>
                  <BsSuitHeart />
                  <p>Likes</p>
                </div>
                <span>{blogdata.likes}</span>
              </div>
            </div>

            <div className={styles.timeandshare}>
              <div className={styles.time}>
                <span>
                  The blog was posted {getpostedtime(blogdata.createdAt)}
                </span>
                <span>&nbsp;|&nbsp;</span>
                <span>This is a {blogdata.minread} min read</span>
              </div>
              <div className={styles.share}>
                <FaShare />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: blogdata.content }}></div>
        <div dangerouslySetInnerHTML={{ __html: blogdata.content }}></div>
        <div dangerouslySetInnerHTML={{ __html: blogdata.content }}></div>
        <div dangerouslySetInnerHTML={{ __html: blogdata.content }}></div>
        <div dangerouslySetInnerHTML={{ __html: blogdata.content }}></div>
      </div>
    </Fragment>
  );
};

export default Blog;
