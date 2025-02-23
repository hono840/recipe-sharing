import React from "react";

type Props = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({ placeholder, value, onChange }: Props) => {
  return (
    <textarea
      placeholder={placeholder}
      className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-300"
      rows={3}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;
