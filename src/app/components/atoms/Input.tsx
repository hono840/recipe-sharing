import React from "react";

type Props = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = ({ value, onChange, placeholder }: Props) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-300"
      placeholder={placeholder}
    />
  );
};

export default Input;
