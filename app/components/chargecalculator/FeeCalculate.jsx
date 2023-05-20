"use client";

import React, { useState } from "react";
import  FTCalculate  from "./FTCalculate";

const options = [
  { value: "fundtransfer", label: "Fund Transfer" },
  { value: "creditcardbill", label: "Credit Card Bill Payment" },
  { value: "cashbycode", label: "Cash By Code" },
  { value: "bkashcashin", label: "Bkash Cash In" },
  { value: "mobilerecharge", label: "Mobile Recharge" },
  { value: "qrpayment", label: "Bangla QR Payment" },
  { value: "utility", label: "Utility Bill Payment" },
  { value: "dthbill", label: "Akash DTH Bill" },
];

function FeeCalculator() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="bg-white shadow-lg rounded  px-6 py-6 m-4 sm:min-w-[70vw] lg:min-w-[60vw] ">
      <form>
        <label>
          Choose Qpay Service to Calculate Your Charges:
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="shadow appearance-none border-qpaytwo rounded w-full my-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value=""> Select Service </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </form>

      {selectedOption === "fundtransfer" && <FTCalculate />}
      {selectedOption === "creditcardbill" && <h5>Credit Card Bill Payment</h5>}
      {selectedOption === "cashbycode" && <h5>Cash By Code</h5>}
      {selectedOption === "bkashcashin" && <h5>Bkash Cash In</h5>}
      {selectedOption === "mobilerecharge" && <h5>Mobile Recharge</h5>}
      {selectedOption === "qrpayment" && <h5>Bangla QR Payment</h5>}
      {selectedOption === "utility" && <h5>Utility Bill Payment</h5>}
      {selectedOption === "dthbill" && <h5>Akash DTH Bill</h5>}
    </div>
  );
}

export default FeeCalculator;
