import { useState } from "react";

// Custom hook to calculate fee based on amount
function useFT() {
  const [amount, setAmount] = useState(0);
  const [fee, setFee] = useState(0);

  const calculateFee = (event) => {
    event.preventDefault();

    if (amount >= 500 && amount <= 5000) {
      setFee(10);
    } else if (amount >= 5001 && amount <= 10000) {
      setFee(15);
    } else if (amount >= 10001 && amount <= 20000) {
      setFee(20);
    } else if (amount >= 20001 && amount <= 50000) {
      setFee(35);
    } else if (amount >= 50001 && amount <= 100000) {
      setFee(45);
    } else {
      setFee(0);
    }
  };

  return { amount, setAmount, fee, calculateFee };
}

export default useFT;
