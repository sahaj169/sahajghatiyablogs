import React from "react";
import styles from "./heading.module.scss";
const Heading = ({ children }: any) => {
  return <div className={styles.heading}>{children}</div>;
};

export default Heading;
