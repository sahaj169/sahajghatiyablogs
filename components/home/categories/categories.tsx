import React, { Fragment } from "react";
import styles from "./categories.module.scss";
import Heading from "../../ui/heading/heading";
import Card from "./card/card";
const Categories = () => {
  return (
    <Fragment>
      <Heading>Categories</Heading>
      <div className={styles.categories}>
        <div className={styles.category}>
          <Card
            image={"/assets/images/categories/lifestyle.png"}
            category={"Lifestyle"}
            cardColor={"#FFE5CE"}
          />
        </div>
        <div className={styles.category}>
          <Card
            image={"/assets/images/categories/family.png"}
            category={"Family"}
            cardColor="#EAF2F5"
          />
        </div>
        <div className={styles.category}>
          <Card
            image={"/assets/images/categories/food.png"}
            category={"Food"}
            cardColor="#E8F3E4"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Categories;
