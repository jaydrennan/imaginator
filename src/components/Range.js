import React from "react";

export default function () {
  return (
    <div>
      <input
        type="range"
        min={0}
        max="100"
        value="40"
        className="range range-primary"
      />
    </div>
  );
}
