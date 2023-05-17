import { VideoComponent } from "@/app/components";

import styles from "../../styles/style";

const reg = () => {
  return (
    <div className={`${styles.boxWidth} ${styles.paddingX}`}>
      <h1 className={`${styles.heading3}`}>Registration Process</h1>
      <VideoComponent />
    </div>
  );
};

export default reg;
