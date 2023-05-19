import { Bread } from "../../components";
import styles from "@/app/styles/style";


const contact = () => {
  return (
    <div>
      <Bread mainpage="Help" link="/help" page="Contact" />
      <h1 className={`${styles.heading3} my-5`}>Contact</h1>
    </div>
  );
};

export default contact;