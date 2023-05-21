"use client";
import useCreditcard from "@/app/hooks/useCashByCode";

const CashByCode = () => {
  const { amountValue, setAmount, fee, calculateFee, message } =
    useCashByCode();

  return (
    <div>
      <form onSubmit={calculateFee}>
        <input
          className="shadow appearance-none border-qpaytwo rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          min="0"
          max="200000"
          type="number"
          required
          placeholder="Enter amount"
          value={amountValue}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          type="submit"
          className="bg-qpayone rounded-sm text-white my-4 px-3 py-1"
        >
          Calculate
        </button>
      </form>
      <p>Fee : {fee}</p>
      {message && (
        <p>
          Charge for {amountValue} BDT Credit Card Bill {fee} BDT
        </p>
      )}
    </div>
  );
};

export default CashByCode;
