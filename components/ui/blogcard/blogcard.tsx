import React from "react";
import styles from "./blogcard.module.scss";
import Image from "next/image";
import { IoStatsChart } from "react-icons/io5";
import { BsSuitHeart } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import moment from "moment";
import Link from "next/link";

const Blogcard = ({
  image,
  heading,
  views,
  likes,
  minread,
  content,
  createdAt,
  category,
  blogslug,
}: {
  image: string;
  heading: string;
  views: number;
  likes: number;
  minread: number;
  content: string;
  createdAt: number;
  category: string;
  blogslug: string;
}) => {
  const getpostedtime = (createdAt: number) => {
    const time = moment(new Date(createdAt * 1000)).from(new Date());
    return time;
  };
  return (
    <div className={styles.blogcard}>
      <div className={styles.blogimage}>
        <div className={styles.imgdiv}>
          <Image src={image} alt="blog image" fill sizes="100%" />
        </div>
      </div>
      <div className={styles.blogdetails}>
        <Link href={`/blogs/${category}/${blogslug}`}>
          <div className={styles.blogcontent}>
            <h1>{heading}</h1>
            <p
              dangerouslySetInnerHTML={{ __html: content }}
              className={styles.content}
            ></p>
          </div>
        </Link>

        <div className={styles.blogstats}>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <IoStatsChart />
              <span>{views}</span>
            </div>
            <div className={styles.stat}>
              <BsSuitHeart />
              <span>{likes}</span>
            </div>
          </div>
          <div className={styles.time}>
            <span>posted {getpostedtime(createdAt)}</span>
            <span>&nbsp;|&nbsp;</span>
            <span>{minread} min read</span>
          </div>
          <div className={styles.stat}>
            <FaShare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
