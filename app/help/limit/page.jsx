import { BkashLimit, Bread, CashByCodeLimit, CreditCardLimit, DthLimit, FundtransferLimit, MobileRecharge, QrLimit } from "../../components";

import styles from "@/app/styles/style";

const charge = () => {
  return (
    <div>
      <Bread mainpage="Help" link="/help" page="Charges & Limit" />
      <h1 className={`${styles.heading3} my-5`}>Charges & Limit</h1>
      <table className="table-auto mx-auto border m-4 text-center">
        <thead>
          <tr>
            <th className="border px-3">Transaction Name</th>
            <th className="border px-3">Range</th>
            <th className="border px-3 ">Fee</th>
            <th className="border px-3 ">Per Transaction Limit</th>
            <th className="border px-3 ">Daily Limit</th>
            <th className="border px-3 ">Monthly Limit</th>
          </tr>
        </thead>
        <FundtransferLimit />
        <CreditCardLimit/>
        <BkashLimit/>
        <CashByCodeLimit/>
        <QrLimit/>
        <DthLimit/>
        <MobileRecharge/>
      </table>
    </div>
  );
};

export default charge;