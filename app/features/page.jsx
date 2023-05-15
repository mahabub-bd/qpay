"use client";

import { useState } from "react";

const FeaturesPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Features Page</h1>
      <div>
        <h2>Counter </h2>
        <p>Count : {count}</p>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default FeaturesPage;
