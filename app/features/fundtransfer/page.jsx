import { Bread } from "../../components";
import styles from "@/app/styles/style";

const fundtransfer = () => {
  return (
    <div>
      <Bread mainpage="Features" link="/features" page="Fundtransfer" />
      <h1 className={`${styles.heading3} my-5`}>Fundtransfer Page</h1>
    </div>
  );
};

export default fundtransfer;
