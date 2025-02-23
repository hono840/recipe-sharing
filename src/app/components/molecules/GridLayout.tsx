import React, { PropsWithChildren } from "react";

const GridLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      {children}
    </div>
  );
};

export default GridLayout;
