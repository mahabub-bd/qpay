import { Bread, VideoComponent } from "../../components";

import styles from "@/app/styles/style";

const reg = () => {
  return (
    <div className={`${styles.boxWidth} `}>
      <Bread mainpage="Help" link="/help" page="Registration Process" />
      <h1 className={`${styles.heading3} my-5`}>Registration Process</h1>
      <VideoComponent />
      
    </div>
  );
};

export default reg;
