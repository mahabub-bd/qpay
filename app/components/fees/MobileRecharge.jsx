import React from "react";

const MobileRecharge = () => {
  return (
   <tbody>
       <tr className="odd:bg-white even:bg-slate-50">
         <td rowSpan="5" className="border px-3">
          Mobile Recharge
         </td>
         <td className="border ">Prepaid</td>
         <td className="border ">N/A</td>
         <td  className="border ">
           20-1000
         </td>
	
         <td rowSpan="2" className="border ">
           5/5000
         </td>
         <td rowSpan="2" className="border ">
           100/50000
         </td>
       </tr>
       <tr>
         <td className="border ">Postpaid</td>
         <td className="border ">N/A</td>
		<td  className="border ">
           20-2000
         </td>
       </tr>
       
     </tbody>
  );
};

export default MobileRecharge;
