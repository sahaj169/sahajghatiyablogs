import React from "react";
import styles from "./blogcard.module.scss";
import Truncated from "./truncated";
const Blogcard = ({
  image,
  heading,
  views,
  likes,
  timestamp,
  minread,
  content,
}: {
  image: string;
  heading: string;
  views: number;
  likes: number;
  timestamp: number;
  minread: number;
  content: string;
}) => {
  return (
    <div>
      <div className={styles.blogcard}>
        <div className={styles.blogcard__image}>
          <img src={image} alt="blog image" />
        </div>
        <div className={styles.blogcard__content}>
          <h3>{heading}</h3>
          <Truncated content={content}>{content}</Truncated>
          <div className={styles.blogcard__content__stats}>
            <div className={styles.blogcard__content__stats__views}>
              <i className="fas fa-eye"></i>
              <p>{views}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
