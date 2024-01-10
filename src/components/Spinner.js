import React from "react";
import "./Spinner.css";

export const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <span className="text-bgDark text-lg font-semibold">Loading...</span>
      <div className="dots"></div>
    </div>
  );
};
