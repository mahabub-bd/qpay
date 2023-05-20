"use client";

import useCarousel from "@/app/hooks/useCarousel";
import useCreditcard from "@/app/hooks/useCreditcard";

const CCCalculate = () => {
  const { amount, setAmount, fee, calculateFee } = useCreditcard();

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
    </div>
  );
};

export default CCCalculate;
