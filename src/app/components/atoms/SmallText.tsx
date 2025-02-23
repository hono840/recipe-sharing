import React, { PropsWithChildren } from "react";

const SmallText = ({ children }: PropsWithChildren) => {
  return <p className="text-sm text-gray-400">{children}</p>;
};

export default SmallText;
