import React from "react";
import Image from "next/image";
import styles from "./card.module.scss";
import Link from "next/link";
const Card = ({
  image,
  category,
  cardColor,
}: {
  image: string;
  category: string;
  cardColor: string;
}) => {
  return (
    <Link href={`/blogs/${category.toLowerCase()}`} passHref>
      <div className={styles.card}>
        <Image src={image} width={300} height={300} alt={category} priority />
        <div
          className={styles.card_details}
          style={{ backgroundColor: cardColor }}
        >
          <h3>{category}</h3>
          <p>
            Click to Read Blogs on <br />
            {category}
          </p>
          <hr />
        </div>
      </div>
    </Link>
  );
};

export default Card;
