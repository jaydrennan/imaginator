import React from "react";

export default function ({ prompt, setPrompt }) {
  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="What do you imagine?"
      className="input input-bordered w-full max-w-xs"
      onChange={handleInputChange}
    />
  );
}
