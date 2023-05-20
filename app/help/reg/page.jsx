import { Bread, VideoComponent } from "../../components";

import styles from "@/app/styles/style";

const reg = () => {
  return (
    <div className={`${styles.boxWidth} ${styles.paddingX}`}>
      <Bread mainpage="Help" link="/help" page="Charges & Limit" />
      <h1 className={`${styles.heading3} my-5`}>Registration Process</h1>
      <VideoComponent />
    </div>
  );
};

export default reg;
