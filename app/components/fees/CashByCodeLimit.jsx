const CashByCodeLimit = () => {
  return (
    <tbody>
      <tr >
        <td rowSpan="5" className="border ">
          Cash By Code
        </td>
        <td className="border px-3">500-5000</td>
        <td className="border px-3">20</td>
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
      <tr>
        <td className="border ">5500-10000</td>
        <td className="border ">30</td>
      </tr>
      <tr>
        <td className="border ">10500-20000</td>
        <td className="border ">40</td>
      </tr>
      
     
    </tbody>
  );
};

export default CashByCodeLimit;
