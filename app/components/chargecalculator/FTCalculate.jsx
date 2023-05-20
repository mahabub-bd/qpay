"use client";
import { useState } from "react";

const FTCalculate = () => {
  const [amount, setAmount] = useState("");
  const [fee, setFee] = useState(0);

  const calculateFee = (event) => {
    event.preventDefault();

    const parsedAmount = parseFloat(amount);

    if (parsedAmount >= 500 && parsedAmount <= 5000) {
      setFee(10);
    } else if (parsedAmount >= 5001 && parsedAmount <= 10000) {
      setFee(15);
    }
  };
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
    </div>
  );
};

export default FTCalculate;
