import { Breadcrumb } from "../components";
import styles from "../styles/style";

const HelpLayout = ({ children }) => {
  return (
    <div className={`${styles.boxWidth}`}>
      <Breadcrumb pageName="Help" />
      {children}
    </div>
  );
};

export default HelpLayout;
