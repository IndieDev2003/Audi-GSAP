import React from "react";

function Summary() {
  return (
    <div className="mt-3 flex flex-row items-center justify-between w-screen px-2 py-5 sm:py-10 sm:px-10 bg-black text-white dark:bg-white dark:text-black">
      <div>
        <h2 className="text-xl sm:text-3xl">RS eTron GT quattro</h2>
        <h4>$144,399.00</h4>
      </div>
      <button className="rounded-xl border text-black dark:text-white bg-white dark:bg-black dark:border-white border-black px-7 py-4">Summary</button>
    </div>
  );
}

export default Summary;
