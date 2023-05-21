import React from "react";

const QrLimit = () => {
  return (
    <tbody>
      <tr className="odd:bg-white even:bg-slate-50" >
        <td rowSpan="5" className="border">
        QR Payment
        </td>
        <td className="border ">N/A</td>
        <td className="border ">N/A</td>
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
  );
};

export default QrLimit;
