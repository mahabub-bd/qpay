import { Bread } from "../components";
import styles from "@/app/styles/style";

export const metadata = {
  title: "Contact Us | Qpay",
  description: "App For Qcash Member Banks",
};
const contact = () => {
  return (
    <div>
      <Bread mainpage="Contact Us" />
      <h1 className={`${styles.heading3} my-5`}>Contact Us Page</h1>
    </div>
  );
};

export default contact;
