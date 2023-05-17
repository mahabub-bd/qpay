import { Bread } from "../../components";

import styles from "@/app/styles/style";

const charge = () => {
  return (
    <div>
     <Bread mainpage="help" link="/help" page="Charges & Limit" />
      <h1 className={`${styles.heading3} my-5`}>Charges & Limit</h1>
    </div>
  );
};

export default charge;
