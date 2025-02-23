import React, { PropsWithChildren } from "react";

const PageTitle = ({ children }: PropsWithChildren) => {
  return <h1 className="text-3xl font-bold text-yellow-400">{children}</h1>;
};

export default PageTitle;
