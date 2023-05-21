import React from "react";

const DthLimit = () => {
  return (
    <tbody>
      <tr className="odd:bg-white even:bg-slate-50">
        <td rowSpan="5" className="border px-3">
          Akash DTH Bill
        </td>
        <td className="border px-3">0-20000</td>
        <td className="border px-3">20</td>
        <td rowSpan="2" className="border px-3">
          0-200000
        </td>
        <td rowSpan="2" className="border px-3">
          2/400000
        </td>
        <td rowSpan="2" className="border px-3">
          5/1000000
        </td>
      </tr>
    </tbody>
  );
};

export default DthLimit;
