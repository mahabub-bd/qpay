import React from "react";

const Limit = () => {
  return (
    <table className="table-auto border-collapse sm:text-[10px] lg:text-[16px] xl:border-spacing-4 sm:border-spacing-1   mx-auto  mt-5 mb-10 text-center ">
      <thead>
        <tr>
          <th className="border xl:px-9 py-3 sm:py-0 sm:px-0 ">
            Transaction Name
          </th>

          <th className="border xl:px-6 py-3 sm:py-0 sm:px-0">
            Amount Per Transaction
          </th>
          <th className="border xl:px-6 py-3 sm:py-0 sm:px-0  ">Daily Limit</th>
          <th className="border xl:px-6 py-3 sm:py-0 sm:px-1  ">
            Monthly Limit
          </th>
        </tr>
      </thead>
      {/* Fund Transfer  */}
      <tbody>
        <tr className="odd:bg-white even:bg-slate-50">
          <th rowSpan="5" className="border ">
            Fund Transafer
          </th>

          <td rowSpan="5" className="border ">
            500-100000
          </td>
          <td rowSpan="5" className="border ">
            5/100000
          </td>
          <td rowSpan="5" className="border ">
            100/1000000
          </td>
        </tr>
      </tbody>
      {/* Credit Card Limit */}
      <tbody>
        <tr className="odd:bg-white even:bg-slate-50">
          <th rowSpan="5" className="border px-3">
            Credit Card Bill
          </th>

          <td rowSpan="2" className="border ">
            0-200000
          </td>
          <td rowSpan="2" className="border ">
            2/400000
          </td>
          <td rowSpan="2" className="border ">
            5/1000000
          </td>
        </tr>
      </tbody>
      {/* Bkash Limit */}

      <tbody>
        <tr className="odd:bg-white even:bg-slate-50">
          <th rowSpan="5" className="border">
            bKash Cash In
          </th>

          <td rowSpan="2" className="border">
            50-50000
          </td>
          <td rowSpan="2" className="border">
            5/50000
          </td>
          <td rowSpan="2" className="border ">
            25/300000
          </td>
        </tr>
      </tbody>

      {/* Cash By Code  */}
      <tbody>
        <tr>
          <th rowSpan="5" className="border ">
            Cash By Code
          </th>

          <td rowSpan="3" className="border ">
            500-20000
          </td>
          <td rowSpan="3" className="border">
            5/100000
          </td>
          <td rowSpan="3" className="border ">
            100/1000000
          </td>
        </tr>
      </tbody>

      {/* Utility Bill */}
      <tbody>
        <tr>
          <th rowSpan="5" className="border ">
            Utility Bill Payment
          </th>

          <td rowSpan="3" className="border ">
            1-3,00,000
          </td>
          <td rowSpan="3" className="border">
            10/3,00,000
          </td>
          <td rowSpan="3" className="border ">
            50/5,00,0000
          </td>
        </tr>
      </tbody>

      {/* QR */}
      <tbody>
        <tr className="odd:bg-white even:bg-slate-50">
          <th rowSpan="5" className="border">
            QR Payment
          </th>

          <td rowSpan="2" className="border ">
            1-100000
          </td>
          <td rowSpan="2" className="border ">
            5/100000
          </td>
          <td rowSpan="2" className="border ">
            100/1000000
          </td>
        </tr>
      </tbody>

      {/* DTH Limit */}
      <tbody>
        <tr className="odd:bg-white even:bg-slate-50">
          <th rowSpan="5" className="border ">
            Akash DTH Bill
          </th>

          <td rowSpan="2" className="border ">
            10-10000
          </td>
          <td rowSpan="2" className="border ">
            5/50000
          </td>
          <td rowSpan="2" className="border ">
            10/100000
          </td>
        </tr>
      </tbody>
      {/* Mobile Recharge */}
      <tbody>
        <tr className="odd:bg-white even:bg-slate-50">
          <th rowSpan="5" className="border px-3">
            Mobile Recharge
          </th>

          <td className="border ">20-1000(Prepaid)</td>

          <td rowSpan="2" className="border ">
            5/5000
          </td>
          <td rowSpan="2" className="border ">
            100/50000
          </td>
        </tr>
        <tr>
          <td className="border ">20-2000(Postpaid)</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Limit;
