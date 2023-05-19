import { Bread } from "../../components";
import styles from "@/app/styles/style";

const qr = () => {
  return (
    <div>
      <Bread mainpage="Features" link="/features" page="Bangla QR" />
      <h1 className={`${styles.heading3} my-5`}>Bangla QR Page</h1>
    </div>
  );
};

export default qr;