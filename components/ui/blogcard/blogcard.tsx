import React, { useState, useEffect } from "react";
import styles from "./blogcard.module.scss";
import Image from "next/image";
import { IoStatsChart } from "react-icons/io5";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import moment from "moment";
import Link from "next/link";
import { parseCookies, setCookie, destroyCookie } from "nookies";

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

  // const [liked, setLiked] = useState<boolean>(false);
  // const [newlikes, setNewlikes] = useState<number>(likes);

  // const checkliked = (blogslug: string) => {
  //   const cookies = parseCookies();
  //   const likedblogs = cookies.likedblogs;
  //   if (likedblogs) {
  //     const likedblogsarray = likedblogs.split(",");
  //     if (likedblogsarray.includes(blogslug)) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };

  // useEffect(() => {
  //   setLiked(checkliked(blogslug));
  // }, [blogslug]);

  // const addliked = async (blogslug: string) => {
  //   const cookies = parseCookies();
  //   const likedblogs = cookies.likedblogs;
  //   if (likedblogs) {
  //     const likedblogsarray = likedblogs.split(",");
  //     if (likedblogsarray.includes(blogslug)) {
  //       const newlikedblogs = likedblogsarray.filter(
  //         (blog) => blog !== blogslug
  //       );
  //       setCookie(null, "likedblogs", newlikedblogs.join(","), {
  //         maxAge: 30 * 24 * 60 * 60,
  //         path: "/",
  //       });
  //       const updatedb = await fetch(`/api/blogs/${category}/${blogslug}/like`, {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           newlikecount: likes - 1,
  //         }),
  //       });

  //       setNewlikes(likes-1)
  //     } else {
  //       setCookie(null, "likedblogs", likedblogs + "," + blogslug, {
  //         maxAge: 30 * 24 * 60 * 60,
  //         path: "/",
  //       });
  //       const updatedb = await fetch(`/api/blogs/${category}/${blogslug}/like`, {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           newlikecount: likes + 1,
  //         }),
  //       });
  //       setNewlikes(likes+1)

  //     }
  //   } else {
  //     setCookie(null, "likedblogs", blogslug, {
  //       maxAge: 30 * 24 * 60 * 60,
  //       path: "/",
  //     });
  //     const updatedb = await fetch(`/api/blogs/${category}/${blogslug}/like`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         newlikecount: likes + 1,
  //       }),
  //     });
  //     setNewlikes(likes+1)

  //   }
  // };

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
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className={styles.content}
            ></div>
          </div>
        </Link>

        <div className={styles.blogstats}>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <IoStatsChart />
              <span>{views}</span>
            </div>
            <div className={styles.stat + " " + styles.heart}>
              <span
                onClick={() => {
                  // addliked(blogslug);
                  // setLiked(!liked);
                }}
              >
                {/* {liked ? <BsSuitHeartFill /> : <BsSuitHeart />} */}
                <BsSuitHeart />
              </span>
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
