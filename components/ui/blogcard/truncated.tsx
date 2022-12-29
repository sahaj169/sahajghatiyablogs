import React from "react";
import styles from "./blogcard.module.scss";
import ReactHtmlParser from "react-html-parser";
const Truncated = ({ children, content }: any) => {
  //   return <div  dangerouslySetInnerHTML={content} className={styles.truncated}></div>;
  return <div className={styles.truncated}>{ReactHtmlParser(content)}</div>;
};

export default Truncated;
