import React, { PropsWithChildren } from "react";

const PageContentsWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full max-w-[1200px] pt-8 px-4 flex flex-col items-center gap-6">
      {children}
    </div>
  );
};

export default PageContentsWrapper;
