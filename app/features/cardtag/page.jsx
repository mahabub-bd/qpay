import { Bread } from "../../components";
import styles from "@/app/styles/style";

const cardtag = () => {
  return (
    <div>
      <Bread mainpage="Features" link="/features" page="Card Tag" />
      <h1 className={`${styles.heading3} my-5`}>Card Tag Page</h1>
    </div>
  );
};

export default cardtag;
