import React from "react";

type Props = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange }: Props) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-300"
    />
  );
};

export default Input;
