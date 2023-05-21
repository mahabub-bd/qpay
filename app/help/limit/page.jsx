import { BkashLimit, Bread, CashByCodeLimit, CreditCardLimit, DthLimit, FundtransferLimit, MobileRecharge, QrLimit } from "../../components";

import styles from "@/app/styles/style";

const charge = () => {
  return (
    <div>
      <Bread mainpage="Help" link="/help" page="Charges & Limit" />
      <h1 className={`${styles.heading3} my-5`}>Qpay Fess & Limit </h1>
      <table className="table-auto mx-auto border mt-5 mb-10 text-center text-[14px]">
        <thead>
          <tr>
            <th className="border px-1 ">Transaction Name</th>
            <th className="border px-1 ">Range</th>
            <th className="border px-1 ">Fee</th>
            <th className="border px-1 ">Per Transaction Limit</th>
            <th className="border px-1 ">Daily Limit</th>
            <th className="border px-1 ">Monthly Limit</th>
          </tr>
        </thead>
        <FundtransferLimit />
        <CreditCardLimit />
        <BkashLimit />
        <CashByCodeLimit />
        <QrLimit />
        <DthLimit />
        <MobileRecharge />
      </table>
    </div>
  );
};

export default charge;