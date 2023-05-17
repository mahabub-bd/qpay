import { Breadcrumb } from "../components";
import styles from "../styles/style";

const FeaturesLayout = ({ children }) => {
  return (
    <div className={`${styles.boxWidth}`}>
      <Breadcrumb pageName="Features" />
      {children}
    </div>
  );
};

export default FeaturesLayout;
