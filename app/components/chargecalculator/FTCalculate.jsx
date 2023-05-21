"use client";

import useFT from "@/app/hooks/useFT";

const FTCalculate = () => {
  const { amount, setAmount, fee, calculateFee, message } = useFT();

  return (
    <div>
      <form onSubmit={calculateFee}>
        <input
          className="shadow appearance-none border-qpaytwo rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          min="500"
          max="100000"
          type="number"
          required
          placeholder="Enter amount"
          value={amount}
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
          Charge for {amount} BDT Fund Transfer is {fee} BDT
        </p>
      )}
    </div>
  );
};

export default FTCalculate;
