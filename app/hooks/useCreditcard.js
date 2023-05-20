import { useState } from "react";

// Custom hook to calculate fee based on amount
function useCreditcard() {
  const [amount, setAmount] = useState(0);
  const [fee, setFee] = useState(0);

  const calculateFee = (event) => {
    event.preventDefault();

    if (amount >= 0 && amount <= 20000) {
      setFee(20);
    } else if (amount >= 20001 && amount <= 200000) {
      setFee((amount * 0.1) / 100);
    } else {
      setFee(0);
    }
  };

  return { amount, setAmount, fee, calculateFee};
}

export default useCreditcard;
