import { Bread } from "../../components";
import styles from "@/app/styles/style";

const mfs = () => {
  return (
    <div>
      <Bread mainpage="Features" link="/features" page="MFS" />
      <h1 className={`${styles.heading3} my-5`}>MFS Page</h1>
    </div>
  );
};

export default mfs;
