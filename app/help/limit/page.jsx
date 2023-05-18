import { Bread } from "../../components";

import styles from "@/app/styles/style";

const charge = () => {
  return (
    <div>
      <Bread mainpage="Help" link="/help" page="Charges & Limit" />
      <h1 className={`${styles.heading3} my-5`}>Charges & Limit</h1>
      <table className="table-auto mx-auto border p-3 m-4 text-center">
        <caption class="caption-top text-[16px] font-semibold my-3">
          Fee & Charges
        </caption>
        <thead>
          <tr>
            <th className="border px-3">Transaction Name</th>
            <th className="border px-3">Range</th>
            <th className="border px-3 ">Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-3 row-span-3 "></td>
            <td className="border px-3">500-5000</td>
            <td className="border px-3 ">10</td>
          </tr>

          <tr>
            <td className="border px-3 "></td>
            <td className="border px-3 text-center">5001-10000</td>
            <td className="border px-3">15</td>
          </tr>

          <tr>
            <td className="border px-3 ">Fund Transafer</td>
            <td className="border px-2 text-center">10001-20000</td>
            <td className="border px-2">20</td>
          </tr>

          <tr>
            <td className="border px-3 "></td>
            <td className="border px-2 text-center">20001-50000</td>
            <td className="border px-2">35</td>
          </tr>
          <tr>
            <td className="border px-3 "></td>
            <td className="border px-2 text-center">50001-100000</td>
            <td className="border px-2">45</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default charge;