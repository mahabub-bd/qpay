import { Bread, FeeCalculator } from "../../components";
import styles from "@/app/styles/style";

const chargecalculator = () => {
  return (
    <div className={`${styles.boxWidth} ${styles.flexCenter} flex-col`}>
      <Bread mainpage="Help" link="/help" page="Charges Calculator" />
      <h1 className={`${styles.heading3} my-5`}>Calculate Qpay Charges</h1>
      <FeeCalculator/>
    </div>
  );
};

export default chargecalculator;
