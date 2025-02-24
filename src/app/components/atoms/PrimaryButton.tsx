import React, { PropsWithChildren } from "react";

type Props = {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const PrimaryButton = ({
  children,
  onClick,
  type,
}: PropsWithChildren<Props>) => {
  return (
    <button
      className="p-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
