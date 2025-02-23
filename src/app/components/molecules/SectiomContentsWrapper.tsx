import React, { PropsWithChildren } from "react";

const SectiomContentsWrapper = ({ children }: PropsWithChildren) => {
  return <div className="bg-gray-700 p-4 rounded-lg shadow-lg">{children}</div>;
};

export default SectiomContentsWrapper;
