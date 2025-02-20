import React, { PropsWithChildren } from "react";

const PageWrapper = ({ children }: PropsWithChildren) => {
  return <div className="w-full flex justify-center">{children}</div>;
};

export default PageWrapper;
