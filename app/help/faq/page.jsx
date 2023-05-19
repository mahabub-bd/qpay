import { Bread } from "../../components";
import styles from "@/app/styles/style";

const faq = () => {
  return (
    <div>
      <Bread mainpage="Help" link="/help" page="FAQ" />
      <h1 className={`${styles.heading3} my-5`}>FAQ Page</h1>
    </div>
  );
};

export default faq;
