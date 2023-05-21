"use client";
import useCashByCode from "@/app/hooks/useCashByCode";

const CashByCode = () => {
  const { amountValue, setAmount, fee, calculateFee, message } =
    useCashByCode();

  return (
    <div>
      <form onSubmit={calculateFee}>
        <input
          className="shadow appearance-none border-qpaytwo rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          min="5"
          max="20000"
          type="number"
          required
          placeholder="Enter amount"
          value={amountValue}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          type="submit"
          className="bg-qpayone my-3 px-3 text-white rounded "
        >
          Calculate
        </button>
      </form>
     
      {message && (
        <p>
          Charge for {amountValue} BDT Cash By Code is {fee} BDT
        </p>
      )}
    </div>
  );
};

export default CashByCode;
