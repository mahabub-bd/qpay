import {  Bread,  Fees, Limit,  } from "../../components";

import styles from "@/app/styles/style";

const charge = () => {
  return (
    <div className="mb-10 fee-bg">
      <Bread mainpage="Help" link="/help" page="Charges & Limit" />
      <div className={`flex xl:flex-row flex-row  sm:flex-col ${styles.boxWidth} justify-around items-center flex-wrap`} >
        <div>
          <h1 className={`${styles.heading3} my-5`}> Fees & Charges </h1>

          <Fees />
        </div>
        <div>
          <h1 className={`${styles.heading3} my-5`}> Transaction Limits </h1>
          <Limit />
        </div>
      </div>

      <p className={`text-[18px] my-4 font-semibold text-center mx-auto`}>
        Note: Qpay Bangladesh reserves the right to change the fee structure at
        its discretion.
      </p>
    </div>
  );
};

export default charge;