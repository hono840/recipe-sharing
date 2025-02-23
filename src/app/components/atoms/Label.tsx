import React, { PropsWithChildren } from "react";

const Label = ({ children }: PropsWithChildren) => {
  return <label className="block text-lg self-stretch">{children}</label>;
};

export default Label;
