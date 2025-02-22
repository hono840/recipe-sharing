import React, { PropsWithChildren } from "react";

const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full flex justify-center pb-20 md:pb-0">{children}</div>
  );
};

export default PageWrapper;
