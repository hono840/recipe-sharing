import React, { PropsWithChildren } from "react";

type Props = {
  onClick?: () => void;
};

const PrimaryButton = ({ children, onClick }: PropsWithChildren<Props>) => {
  return (
    <button
      className="p-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
