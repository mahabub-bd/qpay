import React from "react";

const Fees = () => {
  return (
    <table className="table-auto border-collapse sm:text-[10px] lg:text-[16px] xl:border-spacing-4 sm:border-spacing-1   mx-auto  mt-5 mb-10 text-center ">
      <thead>
        <tr>
          <th className="border xl:px-9 py-3 sm:py-0 sm:px-0 ">
            Transaction Name
          </th>
          <th className="border xl:px-9 py-3 sm:py-1 sm:px-1">Range</th>
          <th className="border xl:px-9 py-3 sm:py-1 sm:px-1">Fee</th>
        </tr>
      </thead>
      {/* Fund Transfer  */}
      <tbody>
        <tr className="odd:bg-white even:bg-slate-50">
          <th rowSpan="5" className="border ">
            Fund Transafer
          </th>
          <td className="border ">500-5000</td>
          <td className="border ">10</td>
        </tr>
        <tr>
          <td className="border ">5001-10000</td>
          <td className="border ">15</td>
        </tr>
        <tr>
          <td className="border ">10001-20000</td>
          <td className="border ">20</td>
        </tr>
        <tr>
          <td className="border ">20001-50000</td>
          <td className="border ">35</td>
        </tr>
        <tr>
          <td className="border ">50001-100000</td>
          <td className="border ">45</td>
        </tr>
      </tbody>
      {/* Credit Card Limit */}
      <tbody>
        <tr className="odd:bg-white even:bg-slate-50">
          <th rowSpan="5" className="border px-3">
            Credit Card Bill
          </th>
          <td className="border ">0-20000</td>
          <td className="border ">20</td>
        </tr>
        <tr>
          <td className="border ">20001-100000</td>
          <td className="border ">0.1%</td>
        </tr>
      </tbody>
      {/* Bkash Limit */}

      <tbody>
        <tr className="odd:bg-white even:bg-slate-50">
          <th rowSpan="5" className="border">
            bKash Cash In
          </th>
          <td className="border ">N/A</td>
          <td className="border ">N/A</td>
        </tr>
      </tbody>

      {/* Cash By Code  */}
      <tbody>
        <tr>
          <th rowSpan="5" className="border ">
            Cash By Code
          </th>
          <td className="border px-3">500-5000</td>
          <td className="border px-3">20</td>
        </tr>
        <tr>
          <td className="border ">5500-10000</td>
          <td className="border ">30</td>
        </tr>
        <tr>
          <td className="border ">10500-20000</td>
          <td className="border ">40</td>
        </tr>
      </tbody>

      {/* Utility Bill */}
      <tbody>
        <tr>
          <th rowSpan="5" className="border ">
            Utility Bill Payment
          </th>
          <td className="border px-3">1-600</td>
          <td className="border px-3">6</td>
        </tr>
        <tr>
          <td className="border ">601-1000</td>
          <td className="border ">9</td>
        </tr>
        <tr>
          <td className="border ">1001-3,00,000</td>
          <td className="border ">1% Or Max 30</td>
        </tr>
      </tbody>

      {/* QR */}
      <tbody>
        <tr className="odd:bg-white even:bg-slate-50">
          <th rowSpan="5" className="border">
            QR Payment
          </th>
          <td className="border ">N/A</td>
          <td className="border ">N/A</td>
        </tr>
      </tbody>

      {/* DTH Limit */}
      <tbody>
        <tr className="odd:bg-white even:bg-slate-50">
          <th rowSpan="5" className="border ">
            Akash DTH Bill
          </th>
          <td className="border ">N/A</td>
          <td className="border ">N/A</td>
        </tr>
      </tbody>
      {/* Mobile Recharge */}
      <tbody>
        <tr className="odd:bg-white even:bg-slate-50">
          <th rowSpan="5" className="border px-3">
            Mobile Recharge
          </th>
          <td className="border ">Prepaid</td>
          <td className="border ">N/A</td>
        </tr>
        <tr>
          <td className="border ">Postpaid</td>
          <td className="border ">N/A</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Fees;
