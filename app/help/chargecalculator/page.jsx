import { Bread } from "../../components";
import styles from "@/app/styles/style";


const chargecalculator = () => {
  return (
    <div  >
      <Bread mainpage="help" link="/help" page="Charges Calculator" />
      <h1 className={`${styles.heading3} my-5`}>Charges Calculator</h1>
    </div>
  );
};

export default chargecalculator;
