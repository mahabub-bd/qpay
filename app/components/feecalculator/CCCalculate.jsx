"use client";
import useCreditcard from "@/app/hooks/useCreditcard";

const CCCalculate = () => {
  const { amountValue, setAmount, fee, vat, calculateFee, message } =
    useCreditcard();

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
          className="bg-qpayone my-4 px-3 py-1 text-white rounded"
        >
          Calculate
        </button>
      </form>

      {message && (
        <p className="text-center font-semibold text-qpayone">
          Fee is BDT {fee} and VAT is BDT {vat} & Total Amount is BDT{" "}
          {fee + vat}
        </p>
      )}
    </div>
  );
};

export default CCCalculate;