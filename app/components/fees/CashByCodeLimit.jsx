const CashByCodeLimit = () => {
  return (
    <tbody>
      <tr >
        <td rowSpan="5" className="border px-3">
          Cash By Code
        </td>
        <td className="border px-3">500-5000</td>
        <td className="border px-3">10</td>
        <td rowSpan="5" className="border px-3">
          500-100000
        </td>
        <td rowSpan="5" className="border px-3">
          5/100000
        </td>
        <td rowSpan="5" className="border px-3">
          100/1000000
        </td>
      </tr>
      <tr>
        <td className="border px-3">5001-10000</td>
        <td className="border px-3">15</td>
      </tr>
      <tr>
        <td className="border px-3">10001-20000</td>
        <td className="border px-3">20</td>
      </tr>
      <tr>
        <td className="border px-3">20001-50000</td>
        <td className="border px-3">35</td>
      </tr>
      <tr>
        <td className="border px-3">50001-100000</td>
        <td className="border px-3">45</td>
      </tr>
    </tbody>
  );
};

export default CashByCodeLimit;
