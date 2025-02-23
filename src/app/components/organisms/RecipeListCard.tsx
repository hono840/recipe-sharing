import React, { PropsWithChildren } from "react";

const RecipeListCard = ({ children }: PropsWithChildren) => {
  return <div className="bg-gray-800 p-4 rounded-lg shadow-lg">{children}</div>;
};

export default RecipeListCard;
