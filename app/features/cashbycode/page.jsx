import { Bread } from "../../components";
import styles from "@/app/styles/style";

const cashbycode = () => {
  return (
    <div>
      <Bread mainpage="Features" link="/features" page="CashByCode" />
      <h1 className={`${styles.heading3} my-5`}>Cash by Code Page</h1>
    </div>
  );
};

export default cashbycode;