import React, { PropsWithChildren } from "react";

const RecipeTitle = ({ children }: PropsWithChildren) => {
  return <h2 className="text-xl font-semibold mt-3">{children}</h2>;
};

export default RecipeTitle;
