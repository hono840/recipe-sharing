import React from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputFile = ({ onChange }: Props) => {
  return (
    <input
      type="file"
      className="w-full file:bg-yellow-400 file:text-black file:font-semibold file:p-2 file:rounded-lg file:hover:bg-yellow-300"
      onChange={onChange}
    />
  );
};

export default InputFile;
