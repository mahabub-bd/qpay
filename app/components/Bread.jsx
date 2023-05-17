'use client'

import { Breadcrumb } from "flowbite-react";

const Bread = ({mainpage,link,page}) => {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
     <Breadcrumb.Item href={link}>{mainpage}</Breadcrumb.Item>
      <Breadcrumb.Item>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Bread;
