const FundtransferLimit = () => {
  return (
   <tbody>
          <tr className="odd:bg-white even:bg-slate-50">
            <td rowSpan="5" className="border ">
              Fund Transafer
            </td>
            <td className="border ">500-5000</td>
            <td className="border ">10</td>
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
      );
}

export default FundtransferLimit;