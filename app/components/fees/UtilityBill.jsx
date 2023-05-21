const UtilityBill = () => {
  return (
    <tbody>
      <tr>
        <th rowSpan="5" className="border ">
          Utility Bill Payment
        </th>
        <td className="border px-3">1-600</td>
        <td className="border px-3">6</td>
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
      <tr>
        <td className="border ">601-1000</td>
        <td className="border ">9</td>
      </tr>
      <tr>
        <td className="border ">1001-3,00,000</td>
        <td className="border ">1% Or Max 30</td>
      </tr>
    </tbody>
  );
};

export default UtilityBill;
