import { Bread } from "../../components";
import styles from "@/app/styles/style";

const cvv = () => {
  return (
    <div>
      <Bread mainpage="Features" link="/features" page="CVV" />
      <h1 className={`${styles.heading3} my-5`}>CVV Change Page</h1>
    </div>
  );
};

export default cvv;