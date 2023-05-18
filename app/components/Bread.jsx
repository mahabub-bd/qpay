'use client'
import styles from "../styles/style";
import { Breadcrumb } from "flowbite-react";

const Bread = ({mainpage,link,page}) => {
  return (
    <Breadcrumb aria-label="Default breadcrumb example" className={`${styles.paddingX}`}>
     <Breadcrumb.Item href={link}>{mainpage}</Breadcrumb.Item>
      <Breadcrumb.Item>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Bread;
