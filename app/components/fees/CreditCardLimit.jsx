import React from 'react'

const CreditCardLimit = () => {
   return (
     <tbody>
       <tr className="odd:bg-white even:bg-slate-50">
         <td rowSpan="5" className="border px-3">
          Credit Card Bill
         </td>
         <td className="border ">0-20000</td>
         <td className="border ">20</td>
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
       <tr>
         <td className="border ">20001-100000</td>
         <td className="border ">0.1%</td>
       </tr>
       
     </tbody>
   );
}

export default CreditCardLimit