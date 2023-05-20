import React from 'react'

const CreditCardLimit = () => {
   return (
     <tbody>
       <tr>
         <td rowSpan="5" className="border px-3">
          Credit Card Bill
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
       <tr>
         <td className="border px-3">20001-100000</td>
         <td className="border px-3">0.1%</td>
       </tr>
       
     </tbody>
   );
}

export default CreditCardLimit