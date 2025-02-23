import React, { PropsWithChildren } from "react";

const SectionWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full bg-gray-800 p-6 rounded-lg shadow-lg">
      {children}
    </div>
  );
};

export default SectionWrapper;
