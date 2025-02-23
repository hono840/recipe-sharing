import React, { PropsWithChildren } from "react";

const SectionTitle = ({ children }: PropsWithChildren) => {
  return <h2 className="text-2xl font-bold text-yellow-400">{children}</h2>;
};

export default SectionTitle;
