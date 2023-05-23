import { BkashLimit, Bread, CashByCodeLimit, CreditCardLimit, DthLimit, FundtransferLimit, MobileRecharge, QrLimit, UtilityBill } from "../../components";

import styles from "@/app/styles/style";

const charge = () => {
  return (
    <div className="mb-10">
      <Bread mainpage="Help" link="/help" page="Charges & Limit" />
      <h1 className={`${styles.heading3} my-5`}>Qpay Fess & Limit </h1>

      <table className="table-auto border-collapse sm:text-[10px] lg:text-[16px] xl:border-spacing-4 sm:border-spacing-1   mx-auto  mt-5 mb-10 text-center ">
        <thead>
          <tr>
            <th className="border xl:px-9 py-3 sm:py-0 sm:px-0 ">
              Transaction Name
            </th>
            <th className="border xl:px-9 py-3 sm:py-0 sm:px-0">Range</th>
            <th className="border xl:px-9 py-3 sm:py-0 sm:px-0">Fee</th>
            <th className="border xl:px-6 py-3 sm:py-0 sm:px-0">
              Amount Per Transaction
            </th>
            <th className="border xl:px-6 py-3 sm:py-0 sm:px-0  ">
              Daily Limit
            </th>
            <th className="border xl:px-6 py-3 sm:py-0 sm:px-1  ">
              Monthly Limit
            </th>
          </tr>
        </thead>
        <FundtransferLimit />
        <CreditCardLimit />
        <BkashLimit />
        <CashByCodeLimit />
        <UtilityBill />
        <QrLimit />
        <DthLimit />
        <MobileRecharge />
      </table>
      <p className={`text-[18px] my-4 font-semibold text-center mx-auto`}>
        Note: Qpay Bangladesh reserves the right to change the fee structure at
        its discretion.
      </p>
    </div>
  );
};

export default charge;