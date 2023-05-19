import React from "react";

const QrLimit = () => {
  return (
    <tbody>
      <tr>
        <td rowSpan="5" className="border px-3">
         Bangla QR Payment
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

export default QrLimit;
