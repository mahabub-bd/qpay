import { Bread } from "../../components";
import styles from "@/app/styles/style";

const creditcard = () => {
  return (
    <div>
      <Bread mainpage="Features" link="/features" page="Creditcard" />
      <h1 className={`${styles.heading3} my-5`}>Creditcard Page</h1>
    </div>
  );
};

export default creditcard;