import { Bread } from "../../components";
import styles from "@/app/styles/style";

const utility = () => {
  return (
    <div>
      <Bread mainpage="Features" link="/utility" page="Utility Bill Payment" />
      <h1 className={`${styles.heading3} my-5`}>Utility Bill Payment Page</h1>
    </div>
  );
};

export default utility;