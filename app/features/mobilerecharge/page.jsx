import { Bread } from "../../components";
import styles from "@/app/styles/style";

const mobilerecharge = () => {
  return (
    <div>
      <Bread
        mainpage="Features"
        link="/features"
        page="Mobile Recharge"
      />
      <h1 className={`${styles.heading3} my-5`}>Mobile Recharge Page</h1>
    </div>
  );
};

export default mobilerecharge;
